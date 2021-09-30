package com.project.entity;


import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;

import com.fasterxml.jackson.annotation.JsonIgnore;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@ToString
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Entity
public class Request {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int reqid;
	private String name;
	private String email;
	private String address;
	private String city;
	private int payment; 
	private String ewasteQty;
	private int quantity;

	private boolean status =false;
	private boolean imageuploadstatus=false;
	@ManyToOne
	@JoinColumn(name = "agent_id")
	private Agent agentid;
	@JsonIgnore //need to ignore during marshalling
       /*
        @OneToMany(mappedBy = "request_id", cascade = CascadeType.ALL)
     private List<FileDB> images;
        */
	@OneToMany(mappedBy = "request_id", cascade = CascadeType.ALL)
     private List<FileDB> images;
	
}
