package com.rentkaro.user_service.UserRepository;

import com.rentkaro.user_service.User.Entity.User;
import java.util.Optional;
import java.util.UUID;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface UserRepository extends JpaRepository<User, UUID> {
   Optional<User> findByUsername(String username);
   Optional<User> findByEmail(String email);

   @Query("SELECT u FROM User u WHERE u.username = :username OR u.email = :email")
   Optional<User> findByUsernameOrEmail(@Param("username") String username, @Param("email") String email);
}
