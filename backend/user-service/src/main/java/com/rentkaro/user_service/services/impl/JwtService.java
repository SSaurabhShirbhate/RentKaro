package com.rentkaro.user_service.services.impl;

import java.util.Date;

import org.springframework.stereotype.Service;

import io.jsonwebtoken.JwtException;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.security.Keys;

@Service
public class JwtService {
	
	private static final String SECRET_KEY = "dfbvhlsibvjbvbviubff";
	private static final long ACCESS_TOKEN_EXPIRATION = 15 * 60 * 1000;
	private static final long REFRESH_TOKEN_EXPIRATION = 48 * 60 * 60 * 1000;
	
	//generate token
	public String generateToken(String username, boolean isAccessToken) {
		
		long expiration = isAccessToken ? ACCESS_TOKEN_EXPIRATION : REFRESH_TOKEN_EXPIRATION;
		
		return Jwts.builder()
				.setSubject(username)
				.setIssuedAt(new Date())
				.setExpiration(new Date(System.currentTimeMillis() + expiration))
				.signWith(Keys.hmacShaKeyFor(SECRET_KEY.getBytes()), SignatureAlgorithm.HS256)
				.compact();
	}
	
	public String getUsernameFromToken(String token) {
		return 
				Jwts.parserBuilder().setSigningKey(SECRET_KEY.getBytes())
				.build()
				.parseClaimsJws(token)
				.getBody().getSubject();
	}
	
	public boolean validateToken(String token) {
		try {
			Jwts.parserBuilder().setSigningKey(SECRET_KEY.getBytes()).build().parseClaimsJws(token);
			return true;
		} catch (JwtException ex) {
			return false;
		}
	}
	
}
