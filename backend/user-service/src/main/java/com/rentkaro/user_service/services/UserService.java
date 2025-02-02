package com.rentkaro.user_service.services;

import java.util.List;

import com.rentkaro.user_service.entities.User;

public interface UserService {

	User saveUser(User user);
	
	List<User> getAllUsers();
	
	User getUser(String userId);
	
	User deleteUser(String userId);
	
	User updateUser(String userId, User updatedUserDetails);
	
}
