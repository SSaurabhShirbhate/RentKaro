package com.rentkaro.user_service.Services;

import com.rentkaro.user_service.SecurityConfig.JwtUtil;
import com.rentkaro.user_service.User.Entity.User;
import com.rentkaro.user_service.UserRepository.UserRepository;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.security.Keys;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.nio.charset.StandardCharsets;
import java.security.Key;
import java.util.Collections;
import java.util.Optional;

@Service
public class AuthenticationService {
    private final UserRepository userRepository;
    private final JwtUtil jwtUtil;
    private final PasswordEncoder passwordEncoder;
    @Value("${jwt.secret}")
    private String secretKey;

    public AuthenticationService(UserRepository userRepository, JwtUtil jwtUtil, PasswordEncoder passwordEncoder) {
        this.userRepository = userRepository;
        this.jwtUtil = jwtUtil;
        this.passwordEncoder = passwordEncoder;
    }

    public String authenticateUser(String usernameOrEmail, String password) {
        User user = userRepository.findByUsernameOrEmail(usernameOrEmail, usernameOrEmail)
                .orElseThrow(() -> new BadCredentialsException("Invalid username/email or password"));

        if (!passwordEncoder.matches(password, user.getPassword())) {
            throw new BadCredentialsException("Invalid username/email or password");
        }

        return jwtUtil.generateToken(user.getUsername(), Collections.singletonList(user.getRole().name()));
    }

    public Optional<String> getUserRole(String usernameOrEmail) {
        return userRepository.findByUsernameOrEmail(usernameOrEmail,usernameOrEmail)
                .map(user -> user.getRole().name());
    }

    public long getTokenExpiryTime() {
        return jwtUtil.getExpirationTime();
    }
    
    private Key getSigningKey() {
        return Keys.hmacShaKeyFor(secretKey.getBytes(StandardCharsets.UTF_8));
    }
    
    public boolean validateToken(String token) {
        try {
            Jwts.parserBuilder().setSigningKey(getSigningKey()).build().parseClaimsJws(token);
            return true;
        } catch (Exception e) {
            return false;
        }
    }

    public String getUsernameFromToken(String token) {
        Claims claims = Jwts.parserBuilder().setSigningKey(getSigningKey()).build().parseClaimsJws(token).getBody();
        return claims.getSubject();
    }
    
}
