package com.rentkaro.user_service.exceptions;

import java.util.HashMap;
import java.util.Map;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import com.rentkaro.user_service.payload.ApiResponse;

import io.jsonwebtoken.JwtException;

@RestControllerAdvice
public class GlobalExceptionHandler {

	@ExceptionHandler(ResourceNotFoundException.class)
	public ResponseEntity<ApiResponse> handlerResourceNotfoundEception(ResourceNotFoundException ex){
		String message = ex.getMessage();
		ApiResponse response = ApiResponse.builder().message(message).success(true).status(HttpStatus.NOT_FOUND).build();
		return new ResponseEntity<ApiResponse>( response, HttpStatus.NOT_FOUND);
	}
	
	@ExceptionHandler(JwtException.class)
	public ResponseEntity<Map<String, String>> handleJwtException(JwtException ex){
		Map<String, String> response = new HashMap<>();
		response.put("error", "Invalid JWT Token");
		response.put("message", ex.getMessage());
		return new ResponseEntity<>(response, HttpStatus.UNAUTHORIZED);
	}
	
	@ExceptionHandler(Exception.class)
	public ResponseEntity<Map<String, String>> handleJwtException(Exception ex){
		Map<String, String> response = new HashMap<>();
		response.put("error", "Internal server error");
		response.put("message", ex.getMessage());
		return new ResponseEntity<>(response, HttpStatus.INTERNAL_SERVER_ERROR);
	}
	
}