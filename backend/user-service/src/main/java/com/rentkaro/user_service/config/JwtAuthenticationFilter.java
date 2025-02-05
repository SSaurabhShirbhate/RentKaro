package com.rentkaro.user_service.config;

import java.io.IOException;

import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import com.rentkaro.user_service.services.UserService;
import com.rentkaro.user_service.services.impl.JwtService;

import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

@Component
public class JwtAuthenticationFilter extends OncePerRequestFilter {

	private JwtService jwtService;

	private UserService userService;

	public JwtAuthenticationFilter(JwtService jwtService, UserService userService) {
		this.jwtService = jwtService;
		this.userService = userService;
	}

	@Override
	protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain)
			throws ServletException, IOException {

		String authHeader = request.getHeader("Authorization");
		if (authHeader != null && authHeader.startsWith("Bearer")) {

			String token = authHeader.substring(7);

			if (jwtService.validateToken(token)) {

				String usernameFromToken = jwtService.getUsernameFromToken(token);
				UserDetails userDetails = userService.loadUserByUsername(usernameFromToken);

				if (SecurityContextHolder.getContext().getAuthentication() == null) {

					UsernamePasswordAuthenticationToken authenticationToken = new UsernamePasswordAuthenticationToken(
							userDetails, null, userDetails.getAuthorities());
					SecurityContextHolder.getContext().setAuthentication(authenticationToken);
				}

			}
		}
		
		filterChain.doFilter(request, response);
		
	}

}
