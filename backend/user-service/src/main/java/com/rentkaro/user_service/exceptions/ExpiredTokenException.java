package com.rentkaro.user_service.exceptions;

public class ExpiredTokenException extends RuntimeException {
    /**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	public ExpiredTokenException(String message) {
        super(message);
    }
}
