package com.project.service;

import java.util.List;

import com.project.entity.Agent;
import com.project.entity.Request;
import com.project.entity.User;

public interface AgentService {
	public Agent hireAgent(Agent a);
	public Agent loginAgent(String email,String password);
	public List<Agent> getAllAgents();
	public void deleteAgent(int id);
	public Agent updateAgent(int id,Agent agent);
	public List<Agent> findByEmail(String email);
	public List<Agent> findByCity(String city);
    public String changeStatus(int id);
}
