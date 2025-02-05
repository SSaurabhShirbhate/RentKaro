package com.rentkaro.user_service.dto;

import com.rentkaro.user_service.entities.User;

public record JwtResponse(
	String accessToken,
	String refreshToken,
	User user
) {
}
