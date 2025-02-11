package com.rentkaro.user_service.User.RequestDto;

import com.rentkaro.user_service.CustomValidation.ValidPassword;
import com.rentkaro.user_service.User.Entity.Role;

import jakarta.persistence.Column;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotEmpty;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class RegistrationRequest {
    
    @NotEmpty(message = "First Name is required")
    private String firstName;

    private String lastName;

    @NotEmpty(message = "Username is required")
    private String username;

    @Email(message = "Email should be valid")
    @NotEmpty(message = "Email is required")
    private String email;

    @ValidPassword
    private String password;
    
    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private Role role;
}