package com.project.entity;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;

import com.fasterxml.jackson.annotation.JsonIgnore;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
/* @ToString */
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class Agent {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	private String name;
	private String email;
	private String password;
	private String city;
	private long phone;
	private boolean is_free=true;
	@JsonIgnore
	@OneToMany(mappedBy = "agentid", cascade = CascadeType.ALL, orphanRemoval = true)
	private List<Request> request;
}
