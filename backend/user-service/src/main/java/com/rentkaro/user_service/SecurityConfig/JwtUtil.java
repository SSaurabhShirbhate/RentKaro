package com.rentkaro.user_service.SecurityConfig;

import java.security.Key;
import java.util.Date;
import java.util.List;
import java.util.function.Function;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

import com.rentkaro.user_service.exceptions.ExpiredTokenException;
import com.rentkaro.user_service.exceptions.InvalidTokenException;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.JwtException;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.security.Keys;
import lombok.Generated;

@Component
public class JwtUtil {
   @Generated
   private static final Logger log = LoggerFactory.getLogger(JwtUtil.class);
   @Value("${jwt.secret}")
   private String secretKey;
   private long expirationTime = 86400000L;
   private long refreshExpirationTime = 2592000L;

   private Key getSigningKey() {
      return Keys.hmacShaKeyFor(this.secretKey.getBytes());
   }

   public String generateToken(String username, List<String> roles) {
      log.info("Generating token for user: {}", username);
      return Jwts.builder()
    		  	 .setSubject(username)
    		  	 .claim("roles", roles)
    		  	 .setIssuedAt(new Date())
    		  	 .setExpiration(new Date(System.currentTimeMillis() + this.expirationTime))
    		  	 .signWith(this.getSigningKey(), SignatureAlgorithm.HS512)
    		  	 .compact();
   }

   public String generateRefreshToken(String username) {
      log.info("Generating refresh token for user: {}", username);
      return Jwts.builder()
    		  	 .setSubject(username)
    		  	 .setIssuedAt(new Date())
    		  	 .setExpiration(new Date(System.currentTimeMillis() + this.refreshExpirationTime))
    		  	 .signWith(this.getSigningKey(), SignatureAlgorithm.HS256)
    		  	 .compact();
   }

   public boolean validateToken(String token) {
      try {
         Jwts.parserBuilder().setSigningKey(this.getSigningKey()).build().parseClaimsJws(token);
         return true;
      } catch (JwtException var3) {
         log.error("Invalid token: {}", var3.getMessage());
         throw new InvalidTokenException("Invalid token");
      }
   }

   public String extractUsername(String token) {
      return (String)this.extractClaim(token, Claims::getSubject);
   }

   public List<String> extractRoles(String token) {
      Claims claims = this.extractAllClaims(token);
      Object rolesObject = claims.get("roles");
      if (rolesObject instanceof List<?>) {
          return ((List<?>) rolesObject).stream()
                                        .filter(String.class::isInstance)
                                        .map(String.class::cast)
                                        .toList();
      }
      return List.of(); 
   }

   private Claims extractAllClaims(String token) {
      try {
         return (Claims)Jwts.parserBuilder()
        		 			.setSigningKey(this.getSigningKey())
        		 			.build()
        		 			.parseClaimsJws(token)
        		 			.getBody();
         
      } catch (JwtException var3) {
         log.error("Error extracting claims: {}", var3.getMessage());
         throw new InvalidTokenException("Error extracting claims");
      }
   }

   
   public <T> T extractClaim(String token, Function<Claims, T> claimsResolver) {
      Claims claims = this.extractAllClaims(token);
      return claimsResolver.apply(claims);
   }

   
   public boolean isTokenExpired(String token) {
      try {
         return ((Date)this.extractClaim(token, Claims::getExpiration)).before(new Date());
      } catch (JwtException var3) {
         log.error("Token expired: {}", var3.getMessage());
         throw new ExpiredTokenException("Token expired");
      }
   }

   public long getExpirationTime() {
      return this.expirationTime;
   }

   public long getRefreshExpirationTime() {
      return this.refreshExpirationTime;
   }
}