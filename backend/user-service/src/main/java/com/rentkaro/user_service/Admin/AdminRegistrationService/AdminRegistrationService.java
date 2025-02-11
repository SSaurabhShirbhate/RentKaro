package com.rentkaro.user_service.Admin.AdminRegistrationService;

import java.time.LocalDateTime;
import java.util.Optional;
import java.util.UUID;

import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.validation.BindingResult;
import org.springframework.validation.FieldError;

import com.rentkaro.user_service.Admin.RequestDto.AdminRegistrationRequest;
import com.rentkaro.user_service.User.Entity.Role;
import com.rentkaro.user_service.User.Entity.User;
import com.rentkaro.user_service.UserRepository.UserRepository;
import com.rentkaro.user_service.exceptions.DuplicateUserException;
import com.rentkaro.user_service.exceptions.RegistrationFailedException;

import jakarta.transaction.Transactional;
import jakarta.validation.Valid;
import jakarta.validation.ValidationException;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Service
@Slf4j
@RequiredArgsConstructor
public class AdminRegistrationService {

    private static final String DUPLICATE_USER_MESSAGE = "Admin with the same username or email already exists.";
    private static final String REGISTRATION_FAILED_MESSAGE = "Error during admin registration: Could not commit JPA transaction.";

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;

    @Transactional
    public String registerAdmin(@Valid AdminRegistrationRequest adminRegistrationRequest, BindingResult bindingResult) {
    	//System.out.println(adminRegistrationRequest.toString());
        if (bindingResult.hasErrors()) {
            bindingResult.getAllErrors().forEach(error -> {
                if (error instanceof FieldError fieldError) {
                    log.error("Validation error: Field '{}' - {}", fieldError.getField(), fieldError.getDefaultMessage());
                } else {
                    log.error("Validation error: {}", error);
                }
            });
            throw new ValidationException("Invalid registration request");
        }

        log.info("Attempting to register admin: {}", adminRegistrationRequest.getUsername());

        Optional<User> existingAdmin = userRepository.findByUsernameOrEmail(
                adminRegistrationRequest.getUsername(), adminRegistrationRequest.getEmail());

        if (existingAdmin.isPresent()) {
            log.warn("Admin with username or email already exists: {}", adminRegistrationRequest.getUsername());
            throw new DuplicateUserException(DUPLICATE_USER_MESSAGE);
        }

        try {
            User newAdmin = new User();
            
            		newAdmin.setId(UUID.randomUUID());
            		newAdmin.setUsername(adminRegistrationRequest.getUsername());
            		newAdmin.setEmail(adminRegistrationRequest.getEmail());
            		newAdmin.setFirstName(adminRegistrationRequest.getFirstName());
            		newAdmin.setLastName(adminRegistrationRequest.getLastName());
            		newAdmin.setPassword(passwordEncoder.encode(adminRegistrationRequest.getPassword()));
            		newAdmin.setRole(Role.ADMIN);
            		newAdmin.setCreatedAt(LocalDateTime.now());
            		
            		System.out.println(newAdmin);
            		
//                    .firstName(adminRegistrationRequest.getFirstName())
//                    .lastName(adminRegistrationRequest.getLastName())
//                    .username(adminRegistrationRequest.getUsername())
//                    .email(adminRegistrationRequest.getEmail())
//                    .role(Role.ADMIN)
//                    .password(passwordEncoder.encode(adminRegistrationRequest.getPassword()))
//                    .build();

            userRepository.save(newAdmin);
            log.info("Admin registered successfully: {}", newAdmin.getUsername());
            return "Admin registered successfully!";

        } catch (DataIntegrityViolationException ex) {
            log.error("Database constraint violation while registering admin: {}", adminRegistrationRequest.getUsername(), ex);
            throw new DuplicateUserException(DUPLICATE_USER_MESSAGE);
        } catch (Exception ex) {
            log.error("Unexpected error while registering admin: {}", adminRegistrationRequest.getUsername(), ex);
            throw new RegistrationFailedException(REGISTRATION_FAILED_MESSAGE);
        }
    }
}
