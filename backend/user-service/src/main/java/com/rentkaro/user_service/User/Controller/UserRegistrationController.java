package com.rentkaro.user_service.User.Controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import com.rentkaro.user_service.User.RequestDto.RegistrationRequest;
import com.rentkaro.user_service.User.RequestResponseServices.RegistrationService;

import jakarta.validation.Valid;
import lombok.extern.slf4j.Slf4j;

@CrossOrigin(origins = "http://localhost:3000")
@Slf4j
@RestController
@RequestMapping("/auth")
public class UserRegistrationController {

    private final RegistrationService registrationService;

    public UserRegistrationController(RegistrationService registrationService) {
        this.registrationService = registrationService;
    }

    @PostMapping("/user-register")
    public ResponseEntity<String> registerUser(@Valid
            @RequestBody RegistrationRequest registrationRequest,
            BindingResult bindingResult) {
        try {
            log.info("Received user registration request for email: {}", registrationRequest.getEmail());

            if (bindingResult.hasErrors()) {
                return ResponseEntity.badRequest().body("Validation failed: " + bindingResult.getAllErrors());
            }

            // Call the service to register the user
            String result = registrationService.registerUser(registrationRequest, bindingResult);

            log.info("User registration successful for email: {}", registrationRequest.getEmail());
            return ResponseEntity.status(HttpStatus.CREATED).body(result);
        } catch (Exception e) {
            log.error("User registration failed for email: {} - Error: {}", 
                      registrationRequest.getEmail(), e.getMessage(), e);
            return ResponseEntity.status(HttpStatus.BAD_REQUEST)
                    .body("Error during user registration: " + e.getMessage());
        }
    }
}
