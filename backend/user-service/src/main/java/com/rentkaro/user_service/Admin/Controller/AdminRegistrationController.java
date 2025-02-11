package com.rentkaro.user_service.Admin.Controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.rentkaro.user_service.Admin.AdminRegistrationService.AdminRegistrationService;
import com.rentkaro.user_service.Admin.RequestDto.AdminRegistrationRequest;

import jakarta.validation.Valid;
import lombok.extern.slf4j.Slf4j;

@Slf4j
@RestController
@RequestMapping("/auth")
public class AdminRegistrationController {

    private final AdminRegistrationService adminRegistrationService;

    public AdminRegistrationController(AdminRegistrationService adminRegistrationService) {
        this.adminRegistrationService = adminRegistrationService;
    }

    @PostMapping("/admin-register")
    public ResponseEntity<String> registerAdmin(@Valid
            @RequestBody AdminRegistrationRequest adminRegistrationRequest, 
            BindingResult bindingResult) {
        try {
            log.info("Received admin registration request for username: {}", adminRegistrationRequest.getUsername());

            // Call the service to register the admin
            String result = adminRegistrationService.registerAdmin(adminRegistrationRequest, bindingResult);
            
            log.info("Admin registration successful for username: {}", adminRegistrationRequest.getUsername());
            return ResponseEntity.status(HttpStatus.CREATED).body(result);
        } catch (Exception e) {
            log.error("Admin registration failed for username: {} - Error: {}", 
                      adminRegistrationRequest.getUsername(), e.getMessage(), e);
            return ResponseEntity.status(HttpStatus.BAD_REQUEST)
                    .body("Error during admin registration: " + e.getMessage());
        }
    }
}
