package com.rentkaro.user_service.HomeController;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HomeController {
	@GetMapping("/")
	public ApiResponse welcome() {
	    return new ApiResponse("Welcome to RentKaro User Service API!");
	}

	@GetMapping("/home")
	public ApiResponse homePage() {
	    return new ApiResponse("This is the RentKaro Home API endpoint.");
	}
}
