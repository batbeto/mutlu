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

import com.aminterprise.mutlu.dto.EventDTO;
import com.aminterprise.mutlu.repositories.EventRepository;
import com.aminterprise.mutlu.services.EventService;

@RestController
@RequestMapping(value = "/events")
public class EventController {
	
	@Autowired
	private EventRepository repository;
	
	@Autowired
	private EventService service;
	
	@PostMapping
	public ResponseEntity<EventDTO> insert(@RequestBody EventDTO dto){
		dto = service.insert(dto);
		URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").
				buildAndExpand(dto.getId()).toUri();
		return ResponseEntity.created(uri).body(dto);
	}
	
	
	@GetMapping
	public ResponseEntity<List<EventDTO>> findAll(){
		List<EventDTO> list = service.findAll();
		return ResponseEntity.ok().body(list);
	}
	
	@PutMapping("/{id}")
	public ResponseEntity<EventDTO> updateEvent(@PathVariable Long id, @RequestBody EventDTO newEvent){
		newEvent = service.updateEvent(id, newEvent);
		return ResponseEntity.ok().body(newEvent);
	}
	
	@PutMapping("/{id}/conclused")
	public ResponseEntity<EventDTO> setConclused(@PathVariable Long id){
		EventDTO dto = service.setConclused(id);
		return ResponseEntity.ok().body(dto);
	}
	
	@PutMapping("/{id}/pending")
	public ResponseEntity<EventDTO> setPending(@PathVariable Long id){
		EventDTO dto = service.setPending(id);
		return ResponseEntity.ok().body(dto);
	}
}
