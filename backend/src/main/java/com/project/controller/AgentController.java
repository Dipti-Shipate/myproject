package com.project.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.project.entity.Agent;
import com.project.entity.Request;
import com.project.entity.User;
import com.project.service.AgentService;
import com.project.service.RequestService;

@CrossOrigin
@RestController
public class AgentController {
	@Autowired
	private AgentService agentService;
	@Autowired
	private RequestService reqService;

	@PostMapping("/Hireagent")
	public Agent hireAgent(@RequestBody Agent agent) {
		System.out.println(agent);
		return agentService.hireAgent(agent);
	}

	@GetMapping("/getallagents")
	public List<Agent> getAllAgents(Agent agent) {
		return agentService.getAllAgents();
	}

	@PostMapping("/Agentlogin")
	public Agent loginAgent(@RequestBody Agent agent) {
		return agentService.loginAgent(agent.getEmail(), agent.getPassword());
	}

	@DeleteMapping("deleteagent/{id}")
	public String deleteUser(@PathVariable int id) {
		agentService.deleteAgent(id);
		return "Deleted";
	}

	@PostMapping("/findagentbyemail")
	public List<Agent> findByEmail(@RequestBody Agent agent) {
		return agentService.findByEmail(agent.getEmail());
	}

	// update agent rest api
	@PutMapping("/agent/{id}")
	public ResponseEntity<Agent> updateEmployee(@PathVariable int id, @RequestBody Agent agentDetails) {
		System.out.println("In update agent rest api");
		Agent updatedAgent = agentService.updateAgent(id, agentDetails);
		return ResponseEntity.ok(updatedAgent);
	}

	@GetMapping("/city_wise_agents/{city}")
	public List<Agent> getAgentsCityWise(@PathVariable String city) {
		System.out.println("In City Wise Agents Apis");

		return agentService.findByCity(city);

	}

	@GetMapping("/setStatus/{id}")
	public String setStatusOfAgent(@PathVariable int id) {
		System.out.println(" in set Status Method" + "request_id");
		System.out.println("AGENT ID" + id);
		return agentService.changeStatus(id);
	}

	@GetMapping("/setStatus/{id}/{request_id}")
	public String setStatusofAgentandSetRequest(@PathVariable int id, @PathVariable int request_id) {
		System.out.println("AGENT ID" + id + "REQUEST ID" + request_id);
		return reqService.assignAgentIdToRequest(id, request_id);
	}

	@GetMapping("/viewrequestbyagent/{id}")
	public List<Request> agentRequests(@PathVariable Agent id) {
		System.out.println("AGENT ID" + id );
		return reqService.findAgentRequests(id);
	}

}
