package com.aminterprise.mutlu.services;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;


import com.aminterprise.mutlu.dto.UserDTO;
import com.aminterprise.mutlu.entities.Order;
import com.aminterprise.mutlu.entities.User;
import com.aminterprise.mutlu.repositories.UserRepository;

@Service
public class UserService {
	
	@Autowired
	private UserRepository repository;
	
	@Transactional(readOnly = true)
	public List<UserDTO> findAll(){
		List<User> list = repository.findAll();
		return list.stream().map(x -> new UserDTO(x)).collect(Collectors.toList());
	}
	
	@Transactional
	public UserDTO insert(UserDTO dto) {
		User user = new User(
				null,
				dto.getNome(),
				dto.getEmail(),
				dto.getCpf(),
				dto.getPass(),
				dto.getStatus());
		user = repository.save(user);
		return new UserDTO(user);
	}
	
	@Transactional
	public UserDTO updateUser(Long id, UserDTO newUser) {
		User user = repository.getOne(id);
		user.setCpf(newUser.getCpf());
		user.setEmail(newUser.getEmail());
		user.setNome(newUser.getNome());
		user.setPass(newUser.getPass());
		user.setStatus(newUser.getStatus());
		user = repository.save(user);
		return new UserDTO(user);
	}
}
