package com.aminterprise.mutlu.controllers;

import java.net.URI;
import java.util.List;
import java.util.NoSuchElementException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import com.aminterprise.mutlu.dto.UserDTO;
import com.aminterprise.mutlu.entities.User;
import com.aminterprise.mutlu.repositories.UserRepository;
import com.aminterprise.mutlu.services.UserService;

@RestController
@RequestMapping(value = "/users")
public class UserController {
	
	@Autowired
	private UserRepository repository;
	
	@Autowired
	private UserService service;
	
	@GetMapping
	public ResponseEntity<List<UserDTO>> findUsers(){
		List<UserDTO> list = service.findUsers();
		return ResponseEntity.ok().body(list);
	}
	
	@PostMapping("/login")
	public ResponseEntity<User> loginUser(String email){
		User user = service.loginUser(email);
		return ResponseEntity.ok().body(user);
	}
	
	@GetMapping("/all")
	public ResponseEntity<List<UserDTO>> findAll(){
		List<UserDTO> list = service.findAll();
		return ResponseEntity.ok().body(list);
	}
	
	@GetMapping("/{id}")
	public ResponseEntity<User> findById(@PathVariable long id){
	   return repository.findById(id)
	           .map(record -> ResponseEntity.ok().body(record))
	           .orElse(ResponseEntity.notFound().build());
	}
	
	@PostMapping
	public ResponseEntity<UserDTO> insert(@RequestBody UserDTO dto){
		dto = service.insert(dto);
		URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").
				buildAndExpand(dto.getId()).toUri();
		return ResponseEntity.created(uri).body(dto);
	}
	
	@PutMapping("/update/{id}")
	public ResponseEntity<UserDTO> updateUser(@PathVariable Long id, @RequestBody UserDTO newUser){
		newUser = service.updateUser(id, newUser);
		return ResponseEntity.ok().body(newUser);
	}
	
	@DeleteMapping("/remove/{id}")
	public ResponseEntity<UserDTO> deleteById(@PathVariable Long id){
		try {
			repository.deleteById(id);
			return new ResponseEntity<UserDTO>(HttpStatus.OK);
		}catch(NoSuchElementException nsee){
			return new ResponseEntity<UserDTO>(HttpStatus.NOT_FOUND);
		}
	}
}
