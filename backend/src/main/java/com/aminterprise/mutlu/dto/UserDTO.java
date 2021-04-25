package com.aminterprise.mutlu.dto;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

import com.aminterprise.mutlu.entities.User;
import com.aminterprise.mutlu.entities.UserStatus;

public class UserDTO implements Serializable{
	
	private static final long serialVersionUID = 1L;
	
	private Long id;
	private String name;
	private String email;
	private String cpf;
	private String pass;
	private UserStatus status;
	
	private List<EventDTO> events = new ArrayList<>();
	
	public UserDTO() {
	}

	public UserDTO(Long id, String name, String email, String cpf, String pass, UserStatus status,
			List<EventDTO> events) {
		super();
		this.id = id;
		this.name = name;
		this.email = email;
		this.cpf = cpf;
		this.pass = pass;
		this.status = status;
		this.events = events;
	}
	
	public UserDTO(User entity) {
		super();
		id = entity.getId();
		name = entity.getName();
		email = entity.getEmail();
		cpf = entity.getCpf();
		pass = entity.getPass();
		status = entity.getStatus();
		events = entity.getEvents().stream().map(x -> new EventDTO(x)).collect(Collectors.toList());
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getCpf() {
		return cpf;
	}

	public void setCpf(String cpf) {
		this.cpf = cpf;
	}

	public String getPass() {
		return pass;
	}

	public void setPass(String pass) {
		this.pass = pass;
	}

	public UserStatus getStatus() {
		return status;
	}

	public void setStatus(UserStatus status) {
		this.status = status;
	}

	public List<EventDTO> getEvents() {
		return events;
	}
}
