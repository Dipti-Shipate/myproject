package com.project.service;

import java.util.List;
import java.util.Optional;

import org.hibernate.Hibernate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.project.entity.Agent;
import com.project.entity.Request;
import com.project.entity.User;
import com.project.repository.AgentDao;

@Service
public class AgentServiceImpl implements AgentService {

	@Autowired
	private AgentDao agentDao;

	public Agent hireAgent(Agent a) {
		return agentDao.save(a);
	}

	@Override
	public Agent loginAgent(String email, String password) {

		return agentDao.findByEmailAndPassword(email, password);
	}

	@Override
	public List<Agent> getAllAgents() {
		return this.agentDao.findAll();
	}

	@Override
	public void deleteAgent(int id) {
		Agent agent = agentDao.getById(id);
		agentDao.delete(agent);

	}

	@Override
	public Agent updateAgent(int id, Agent agentDetails) {
		Agent agent = agentDao.getById(id);
		agent.setName(agentDetails.getName());
		agent.setEmail(agentDetails.getEmail());
		agent.setPassword(agentDetails.getPassword());
		agent.setPhone(agentDetails.getPhone());
		System.out.println(agent);
		Agent updatedAgent = agentDao.save(agent);
		return updatedAgent;

	}

	@Override
	public List<Agent> findByEmail(String email) {
		return agentDao.findByEmail(email);
	}

	@Override
	public List<Agent> findByCity(String city) {
		// TODO Auto-generated method stub
		
		return agentDao.findByCity(city);
	}
	
	
	

	@Override
	public String changeStatus(int id) {
		// TODO Auto-generated method stub
	
		Agent agent = agentDao.findById(id);
		//agent.set_free(!(agent.is_free()));
		
		if (agent.is_free() == true) {
			agent.set_free(false);
			System.out.println(agent.toString());
			agentDao.save(agent);
		}
//		else {
//			agent.set_free(false);
//			System.out.println(agent.toString());
//			agentDao.save(agent);
//		}

		return "Changed work Status";
	}

	
	
}
