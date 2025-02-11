package com.rentkaro.user_service.User.ResponseDto;

import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class LoginResponse {
    private String token;
    private String role;
    private long expiresIn;
    private String message;
}
