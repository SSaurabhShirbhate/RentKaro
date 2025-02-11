package com.rentkaro.user_service.UserController;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.rentkaro.user_service.Admin.AdminRegistrationService.AdminRegistrationService;
import com.rentkaro.user_service.Admin.RequestDto.AdminRegistrationRequest;

import jakarta.validation.Valid;

@RestController
@RequestMapping("/auth/admin")
public class AdminController {
   @Autowired
   private AdminRegistrationService adminRegistrationService;

   @PostMapping("/register")
   public String registerAdmin(@Valid @RequestBody AdminRegistrationRequest request, BindingResult result) {
      return adminRegistrationService.registerAdmin(request, result);
   }
}
