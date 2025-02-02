package com.rentkaro.user_service.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.rentkaro.user_service.entities.User;

public interface UserRepository extends JpaRepository<User,String>{

}
