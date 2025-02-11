package com.rentkaro.user_service;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication(scanBasePackages = {"com.rentkaro.user_service"})
public class UserServiceApplication {
   public static void main(String[] args) {
      SpringApplication.run(UserServiceApplication.class, args);
   }
}