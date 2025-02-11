package com.rentkaro.user_service.Services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.rentkaro.user_service.User.Entity.User;
import com.rentkaro.user_service.User.ResponseDto.UserDto;
import com.rentkaro.user_service.UserRepository.UserRepository;

@Service
public class UserDtoService {

    @Autowired
    private UserRepository userRepository;

    public UserDto getUserByUsernameOrEmail(String usernameOrEmail) {
        User user = userRepository.findByUsernameOrEmail(usernameOrEmail, usernameOrEmail).orElseThrow(() -> new RuntimeException("User not found"));
        return convertToDto(user);
    }

    private UserDto convertToDto(User user) {
        UserDto userDto = new UserDto();
        userDto.setUsername(user.getUsername());
        userDto.setEmail(user.getEmail());
        return userDto;
    }
}

