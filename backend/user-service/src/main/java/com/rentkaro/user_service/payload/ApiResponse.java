package com.rentkaro.user_service.payload;

import org.springframework.http.HttpStatus;

import lombok.Builder;


@Builder
public class ApiResponse {
	
	private String message;
	private boolean success;
	private HttpStatus status;
	
	
	public ApiResponse() {
		super();
		// TODO Auto-generated constructor stub
	}


	public String getMessage() {
		return message;
	}


	public void setMessage(String message) {
		this.message = message;
	}


	public boolean isSuccess() {
		return success;
	}


	public void setSuccess(boolean success) {
		this.success = success;
	}


	public HttpStatus getStatus() {
		return status;
	}


	public void setStatus(HttpStatus status) {
		this.status = status;
	}
	
	
	public ApiResponse(String message, boolean success, HttpStatus status) {
		super();
		this.message = message;
		this.success = success;
		this.status = status;
	}
	

}
