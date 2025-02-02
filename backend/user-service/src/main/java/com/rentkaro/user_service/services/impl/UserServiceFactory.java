package com.rentkaro.user_service.services.impl;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.rentkaro.user_service.Repository.UserRepository;
import com.rentkaro.user_service.entities.User;
import com.rentkaro.user_service.exceptions.ResourceNotFoundException;
import com.rentkaro.user_service.services.UserService;

@Service
public class UserServiceFactory implements UserService{
	
	@Autowired
	private UserRepository userRepository;

	@Override
	public User saveUser(User user) {
		String randomUserId = UUID.randomUUID().toString();
		user.setId(randomUserId);
		return userRepository.save(user);
	}

	@Override
	public List<User> getAllUsers() {
		return userRepository.findAll();
	}

	@Override
	public User getUser(String userId) {
		return userRepository.findById(userId).orElseThrow(() -> new ResourceNotFoundException("User with this ID is not found on the server !!"));
	}

	@Override
	public User deleteUser(String userId) {
		
		Optional<User> userOptional = userRepository.findById(userId);
		
		if(userOptional.isPresent()) {
			User user = userOptional.get();
			
			userRepository.deleteById(userId);
			
			return user;
		} else {
			return null;
		}
	}

	@Override
	public User updateUser(String userId, User updatedUserDetails) {
		
		Optional<User> userOptional = userRepository.findById(userId);
		
		if(userOptional.isPresent()) {
			User user = userOptional.get();
			
			if(updatedUserDetails.getName() !=  null) {
				user.setName(updatedUserDetails.getName());
			}
			
			if(updatedUserDetails.getEmail() != null) {
				user.setEmail(updatedUserDetails.getEmail());
			}
			
			if (updatedUserDetails.getPassword() != null) {
	            user.setPassword(updatedUserDetails.getPassword());
	        }
			
	        if (updatedUserDetails.getRole() != null) {
	            user.setRole(updatedUserDetails.getRole());
	        }
	        
	        if (updatedUserDetails.getCreatedAt() != null) {
	            user.setCreatedAt(updatedUserDetails.getCreatedAt());
	        }
	        
	        userRepository.save(user);
			
			return user;
		} else {
			return null;
		}
	}

}
