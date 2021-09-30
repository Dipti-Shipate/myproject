package com.project.entity;

import javax.persistence.Entity;
import javax.persistence.Id;

import lombok.*;

@ToString
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Entity
public class User {
	
	@Id
	private String email;
	private String password;
	private String name;
	private String city;
	private String phone;
	private String securityQues;
	private String securityAns;
	private boolean isAdmin=false;
	
}
