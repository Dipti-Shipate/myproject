package com.project.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.project.entity.Agent;
import com.project.entity.Request;
import com.project.repository.AgentDao;
import com.project.repository.RequestDao;

@Transactional
@Service
public class RequestServiceImple implements RequestService {
	
	@Autowired
	private RequestDao requestDao;
	@Autowired
	private AgentDao agentDao;

	
	@Override
	public Request insertRequests(Request request) {	
		return requestDao.save(request);
	}


	@Override
	public List<Request> getAllRequests() {
		return requestDao.findAll();
	}
	
	@Override
	public List<Request> getRequestsByEmail(String email) {
		return requestDao.findByEmail(email);
	}


	@Override
	public Request updateRequests(int id,Request request) {
		System.out.print(request);
		request.setAgentid(agentDao.findById(id));
		agentDao.findById(id).set_free(true);
		request.setStatus(true);
		return requestDao.save(request);
	}
	
	@Override
	public Request updatePayment(Request request, int reqid) {
		Request u = requestDao.getById(request.getReqid());
		u.setPayment(request.getPayment());
		System.out.println(u.getPayment());
		return requestDao.save(u);
	}

	
	
		@Override
	public void deleteRequest(int id) {
		Request req = requestDao.getById(id);
		requestDao.delete(req);
	}


	@Override
	public List<Request> pendingRequests(String email,boolean status) {
		return requestDao.pendingRequests(email, false);
	}


	@Override
	public List<Request> viewDonations(String email, boolean status ) {
		return requestDao.viewDonations(email, true);
	}


	@Override
	public List<Request> viewAllPendingRequests(boolean status) {
		return requestDao.viewAllPendingRequest(false);
	}


	@Override
	public List<Request> viewAllDonations(boolean status) {
		return requestDao.viewAllDonations(true);
	}


	@Override
	public List<Request> getRequestById(int reqid) {
		return requestDao.findByReqid(reqid);
	}

	
@Override
public String assignAgentIdToRequest(int agentid,int requestid) {
		Request donor_request=requestDao.getById(requestid);
		donor_request.getReqid();
		Agent agent=agentDao.getById(agentid);
		agent.is_free();
		agent.set_free(!(agent.is_free()));
		donor_request.setAgentid(agent);
	
		return "request got a Agent";
}


@Override
public List<Request> findAgentRequests(Agent agent) {
	return requestDao.findByAgentid(agent);
}


@Override
public Request updatePendingRequestByUser(Request request) {
	// TODO Auto-generated method stub
	return requestDao.save(request);

}

@Override
public boolean checkImageUploadStatus(int imgreqid) {
	// TODO Auto-generated method stub
	
	//imgreqid=true;
	return requestDao.findByImageuploadstatus(imgreqid);
}








	
	
	
	
}
