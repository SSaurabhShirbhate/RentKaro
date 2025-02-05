package com.rentkaro.user_service.events;

import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.rest.core.annotation.HandleBeforeCreate;
import org.springframework.data.rest.core.annotation.RepositoryEventHandler;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

import com.rentkaro.user_service.entities.Role;
import com.rentkaro.user_service.entities.User;


@Component
@RepositoryEventHandler(User.class)
public class UserEventHandler {
	
	@Autowired
	private PasswordEncoder passwordEncoder;
	
	@HandleBeforeCreate
	public void handleCreateEvent(User user) {
		user.setId(UUID.randomUUID().toString());
	}

}
