package com.rentkaro.user_service.User.Entity;

import java.time.LocalDateTime;
import java.util.UUID;

import com.rentkaro.user_service.CustomValidation.ValidPassword;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.persistence.UniqueConstraint;
import jakarta.persistence.Version;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(
   name = "users",
   uniqueConstraints = {@UniqueConstraint(columnNames = {"username"}), @UniqueConstraint(columnNames = {"email"})}
)
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class User {
   @Id
//   @UuidGenerator(style = Style.TIME)
   @Column(columnDefinition = "BINARY(16)", updatable = false, nullable = false)
   private UUID id;

   @NotBlank(message = "Username is required.")
   private String username;

   @Email(message = "Email should be valid.")
   @NotBlank(message = "Email is required.")
   private String email;

   @NotBlank(message = "First name is required.")
   private String firstName;

   private String lastName;

   @ValidPassword
   private String password;

   @Column(name = "created_at", nullable = false, updatable = false)
   private LocalDateTime createdAt = LocalDateTime.now();

   @Enumerated(EnumType.STRING)
   @Column(nullable = false)
   private Role role;

   @Version
   private Integer version;
//
//public UUID getId() {
//	return id;
//}
//
//public void setId(UUID id) {
//	this.id = id;
//}
//
//public String getUsername() {
//	return username;
//}
//
//public void setUsername(String username) {
//	this.username = username;
//}
//
//public String getEmail() {
//	return email;
//}
//
//public void setEmail(String email) {
//	this.email = email;
//}
//
//public String getFirstName() {
//	return firstName;
//}
//
//public void setFirstName(String firstName) {
//	this.firstName = firstName;
//}
//
//public String getLastName() {
//	return lastName;
//}
//
//public void setLastName(String lastName) {
//	this.lastName = lastName;
//}
//
//public String getPassword() {
//	return password;
//}
//
//public void setPassword(String password) {
//	this.password = password;
//}
//
//public LocalDateTime getCreatedAt() {
//	return createdAt;
//}
//
//public void setCreatedAt(LocalDateTime createdAt) {
//	this.createdAt = createdAt;
//}
//
//public Role getRole() {
//	return role;
//}
//
//public void setRole(Role role) {
//	this.role = role;
//}
//
//public Integer getVersion() {
//	return version;
//}
//
//public void setVersion(Integer version) {
//	this.version = version;
//}

   
}
