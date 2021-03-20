package com.aminterprise.mutlu.services;

import java.time.Instant;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.aminterprise.mutlu.dto.EventDTO;
import com.aminterprise.mutlu.dto.OrderDTO;
import com.aminterprise.mutlu.entities.Event;
import com.aminterprise.mutlu.entities.Order;
import com.aminterprise.mutlu.entities.OrderStatus;
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
	
	
	@Transactional
	public EventDTO insert(EventDTO dto) {
		Event event = new Event(
				null,
				dto.getName(),
				dto.getPrice(),
				dto.getTickets(),
				dto.getAddress(),
				dto.getLatitude(),
				dto.getLongitude(),
				dto.getDate(),
				dto.getDescription(),
				dto.getImageUri()
				);
		event = repository.save(event);
		return new EventDTO(event);
	}
}
