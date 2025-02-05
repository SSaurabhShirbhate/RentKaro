package com.rentkaro.user_service.services.impl;

import java.util.Collection;
import java.util.List;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import com.rentkaro.user_service.entities.User;

public class CustomUserDetails implements UserDetails{

	private User user;
	
	public CustomUserDetails(User user) {
		this.user = user;
	}
	
	@Override
	public Collection<? extends GrantedAuthority> getAuthorities() {

//		List<SimpleGrantedAuthority> list = user.getRoles().stream().map(role -> new SimpleGrantedAuthority(role.getName())).toList();
//		return list;
		return null;
		
	}

	@Override
	public String getPassword() {
		// TODO Auto-generated method stub
		return user.getPassword();
	}

	@Override
	public String getUsername() {
		// TODO Auto-generated method stub
		return user.getEmail();
	}

}
