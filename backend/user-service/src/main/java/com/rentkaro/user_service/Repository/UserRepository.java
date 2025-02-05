package com.rentkaro.user_service.Repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.rentkaro.user_service.entities.User;

@Repository
public interface UserRepository extends JpaRepository<User,String>{
	
	Optional<User> findByEmail(String Email);
}
