package com.rentkaro.user_service.User.RequestResponseServices;

import java.time.LocalDateTime;
import java.util.Optional;
import java.util.UUID;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.validation.BindingResult;

import com.rentkaro.user_service.User.Entity.Role;
import com.rentkaro.user_service.User.Entity.User;
import com.rentkaro.user_service.User.RequestDto.RegistrationRequest;
import com.rentkaro.user_service.UserRepository.UserRepository;
import com.rentkaro.user_service.exceptions.DuplicateUserException;
import com.rentkaro.user_service.exceptions.RegistrationFailedException;

import jakarta.transaction.Transactional;
import jakarta.validation.Valid;
import jakarta.validation.ValidationException;

@Service
public class RegistrationService {
    private static final Logger log = LoggerFactory.getLogger(RegistrationService.class);
   
    @Autowired
    private UserRepository userRepository;
   
    @Autowired
    private BCryptPasswordEncoder passwordEncoder;

    @Transactional
    public String registerUser(@Valid RegistrationRequest registrationRequest, BindingResult bindingResult) {
        if (bindingResult.hasErrors()) {
            bindingResult.getAllErrors().forEach(error -> log.error("Validation error: {}", error));
            throw new ValidationException("Invalid registration request");
        }
      
        log.info("Attempting to register user: {}", registrationRequest.getUsername());
        Optional<User> existingUser = userRepository.findByUsernameOrEmail(registrationRequest.getUsername(), registrationRequest.getEmail());
        if (existingUser.isPresent()) {
            log.warn("User with the same username or email already exists: {}", registrationRequest.getUsername());
            throw new DuplicateUserException("User with the same username or email already exists.");
        }
      
        //String encodedPassword = passwordEncoder.encode(registrationRequest.getPassword());

        // Using Builder pattern to create User object
        User newUser = new User();
        
        newUser.setId(UUID.randomUUID());
        newUser.setUsername(registrationRequest.getUsername());
        newUser.setEmail(registrationRequest.getEmail());
        newUser.setFirstName(registrationRequest.getFirstName());
        newUser.setLastName(registrationRequest.getLastName());
        newUser.setPassword(passwordEncoder.encode(registrationRequest.getPassword()));
        newUser.setRole(registrationRequest.getRole());
        newUser.setCreatedAt(LocalDateTime.now());
		

        try {
            log.info("Saving new user: {}", newUser.getUsername());
            userRepository.save(newUser);
            return "User registered successfully!";
        } catch (DataIntegrityViolationException e) {
            log.error("Database constraint violation: {}", e.getMessage());
            throw new DuplicateUserException("User with the same username or email already exists.");
        } catch (Exception e) {
            log.error("Error during registration: {}", e.getMessage());
            throw new RegistrationFailedException("Error during registration: Could not commit JPA transaction.");
        }
    }
}
