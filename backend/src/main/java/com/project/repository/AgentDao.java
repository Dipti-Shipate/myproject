package com.project.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.project.entity.Agent;
import com.project.entity.Request;

public interface AgentDao extends JpaRepository<Agent, Integer> {
	public Agent findByEmailAndPassword(String email, String password);
	public List<Agent> findByEmail(String email);
	public List<Agent> findByCity(String city);
	public Agent findById(int id);
}
