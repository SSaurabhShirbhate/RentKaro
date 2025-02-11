package com.rentkaro.user_service.User.RequestDto;

import jakarta.validation.constraints.NotEmpty;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;
import lombok.NoArgsConstructor;
import lombok.AllArgsConstructor;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class LoginRequest {
    
    @NotEmpty(message = "Username or Email is required")
    private String usernameOrEmail;

    @NotEmpty(message = "Password is required")
    private String password;
}
