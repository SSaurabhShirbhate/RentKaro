package com.rentkaro.user_service.SecurityConfig;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.web.bind.annotation.CrossOrigin;

@CrossOrigin(origins = "http://localhost:3000")
@Configuration
@EnableWebSecurity
public class SecurityConfig {
   @Bean
   public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
      http.csrf(csrf -> csrf.disable())
//          .cors(cors -> cors.disable())  // Enable if needed
          .authorizeHttpRequests(auth -> auth
               .requestMatchers("/","/home","/auth/admin-register", "/auth/user-register","/auth/login").permitAll()
               .requestMatchers("/auth/admin-register", "/auth/user-register").permitAll()
               .requestMatchers("/auth/login","/auth/user").permitAll()
               .requestMatchers("/admin/**").hasRole("ADMIN") // Corrected role prefix
               .anyRequest().authenticated()
          )
          .sessionManagement(session -> session
               .sessionFixation().migrateSession()
          )
          .httpBasic(httpbasic -> {}); // Consider replacing with JWT

      return http.build();
   }

   @Bean
   public PasswordEncoder passwordEncoder() {
      return new BCryptPasswordEncoder();
   }
}
