package com.aminterprise.mutlu.services;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.aminterprise.mutlu.dto.EventDTO;
import com.aminterprise.mutlu.entities.Event;
import com.aminterprise.mutlu.repositories.EventRepository;



@Service
public class EventService {
	
	@Autowired
	private EventRepository repository;
	
	@Transactional(readOnly = true)
	public List<EventDTO> findAll(){
		List<Event> list = repository.findAllByOrderByNameAsc();
		return list.stream().map(x -> new EventDTO(x)).collect(Collectors.toList());
	}
}
