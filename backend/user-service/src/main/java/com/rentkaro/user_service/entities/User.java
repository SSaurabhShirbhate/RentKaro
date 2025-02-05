package com.rentkaro.user_service.entities;

import java.util.Date;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "Users")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class User {
	
	@Id
	private String id;
	private String name;
	@Column(unique = true)
	private String email;
	private String password;
	@Enumerated(EnumType.STRING)
	private Role role;
	private Date createdAt;
	
	public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }
	
}
