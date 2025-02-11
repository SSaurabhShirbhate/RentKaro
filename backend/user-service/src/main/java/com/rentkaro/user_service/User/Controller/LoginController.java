package com.rentkaro.user_service.User.Controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.rentkaro.user_service.Services.AuthenticationService;
import com.rentkaro.user_service.Services.UserDtoService;
import com.rentkaro.user_service.User.ResponseDto.LoginResponse;
import com.rentkaro.user_service.User.ResponseDto.UserDto;
import com.rentkaro.user_service.User.RequestDto.LoginRequest;

import jakarta.validation.Valid;
import lombok.Generated;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/auth")
public class LoginController {
    
    @Generated
    private static final Logger log = LoggerFactory.getLogger(LoginController.class);
    
    private final AuthenticationService authenticationService;
    
    @Autowired
    private UserDtoService userDtoService;

    public LoginController(AuthenticationService authenticationService) {
        this.authenticationService = authenticationService;
    }

    @PostMapping("/login")
    public ResponseEntity<LoginResponse> login(@Valid @RequestBody LoginRequest loginRequest) {
    	System.out.println(loginRequest.toString());
        log.info("Login attempt for user: {}", loginRequest.getUsernameOrEmail());
        
        try {
            String token = authenticationService.authenticateUser(loginRequest.getUsernameOrEmail(), loginRequest.getPassword());
            String role = authenticationService.getUserRole(loginRequest.getUsernameOrEmail()).orElse("UNKNOWN");
            long expiresIn = authenticationService.getTokenExpiryTime();
            log.info("Login successful for user: {}", loginRequest.getUsernameOrEmail());
            
            return ResponseEntity.ok(new LoginResponse(token, role, expiresIn, "Login successful"));

        } catch (BadCredentialsException e) {
            log.warn("Login failed for user: {}", loginRequest.getUsernameOrEmail());
            return ResponseEntity.status(401).body(new LoginResponse(null, null, 0L, "Invalid credentials"));
        }
    }
    
    
    @GetMapping("/user")
    public ResponseEntity<UserDto> getUserDetails(@RequestHeader("Authorization") String authHeader) {
        log.info("Fetching user details using JWT token");

        try {
            // Extract token from Authorization header
            if (authHeader == null || !authHeader.startsWith("Bearer ")) {
                throw new BadCredentialsException("No JWT token found in request headers");
            }
            String token = authHeader.substring(7);

            // Validate the JWT token
            if (!authenticationService.validateToken(token)) {
                throw new BadCredentialsException("Invalid JWT token");
            }

            // Extract username or email from the token
            String usernameOrEmail = authenticationService.getUsernameFromToken(token);

            // Fetch user details based on the token's payload
            UserDto userDto = userDtoService.getUserByUsernameOrEmail(usernameOrEmail);
            log.info("User details fetched successfully for user: {}", usernameOrEmail);

            return ResponseEntity.ok(userDto);

        } catch (BadCredentialsException e) {
            log.warn("Failed to fetch user details due to invalid token");
            return ResponseEntity.status(401).body(null);
        }
    }
}
