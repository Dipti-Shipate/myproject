package com.project;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.when;

import java.util.stream.Collectors;
import java.util.stream.Stream;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;

import com.project.entity.Agent;
import com.project.entity.User;
import com.project.repository.RequestDao;
import com.project.repository.UserDao;
import com.project.service.AgentService;
import com.project.service.RequestService;
import com.project.service.UserService;

@SpringBootTest
class FinalProjectApplicationTests {

	@Test
	void contextLoads() {
	}

	@Autowired
	UserService userService;
	AgentService agentService;
	RequestService reqService;
	@MockBean
	private UserDao userDao;
	

	@MockBean
	RequestDao reqdao;
	@Test
	public void getUsersTest() {
		when(userDao.findAll()).thenReturn(Stream
				.of(new User("admin@gmail.com", " Abcd@1234", "admin", "Pune", "8723434343", "Which is your favourite color?", "Black", true))
				.collect(Collectors.toList()));
		assertEquals(1,userService.getAllUsers().size());
	}
		
}