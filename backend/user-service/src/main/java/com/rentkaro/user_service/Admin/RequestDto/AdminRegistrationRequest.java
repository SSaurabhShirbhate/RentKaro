package com.rentkaro.user_service.Admin.RequestDto;

import com.rentkaro.user_service.CustomValidation.ValidPassword;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@Builder
@ToString
public class AdminRegistrationRequest {
   @NotBlank(message = "Username is required.")
   private String username;

   @Email(message = "Email should be valid.")
   @NotBlank(message = "Email is required.")
   private String email;

   @NotBlank(message = "First name is required.")
   private String firstName;

   private String lastName;

   @ValidPassword
   private String password;
}
