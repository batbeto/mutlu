package com.aminterprise.mutlu.services;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.aminterprise.mutlu.dto.EventDTO;
import com.aminterprise.mutlu.entities.Event;
import com.aminterprise.mutlu.entities.OrderStatus;
import com.aminterprise.mutlu.repositories.EventRepository;



@Service
public class EventService {
	
	@Autowired
	private EventRepository repository;
	
	@Transactional(readOnly = true)
	public List<EventDTO> findAll(){
		List<Event> list = repository.findEventsPending();
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
				dto.getImageUri(),
				OrderStatus.PENDING
				);
		event = repository.save(event);
		return new EventDTO(event);
	}
	@Transactional
	public EventDTO updateEvent(Long id, EventDTO newEvent) {
		Event event = repository.getOne(id);
		event.setAddress(newEvent.getAddress());
		event.setDate(newEvent.getDate());
		event.setDescription(newEvent.getDescription());
		event.setImageUri(newEvent.getImageUri());
		event.setLatitude(newEvent.getLatitude());
		event.setLongitude(newEvent.getLongitude());
		event.setName(newEvent.getName());
		event.setPrice(newEvent.getPrice());
		event.setTickets(newEvent.getTickets());
		event.setStatus(newEvent.getStatus());
		event = repository.save(event);
		return new EventDTO(event);
	}
	
	@Transactional
	public EventDTO setConclused(Long id) {
		Event event = repository.getOne(id);
		event.setStatus(OrderStatus.CONCLUSED);
		event = repository.save(event);
		return new EventDTO(event);
	}
	
	@Transactional
	public EventDTO setPending(Long id) {
		Event event = repository.getOne(id);
		event.setStatus(OrderStatus.PENDING);
		event = repository.save(event);
		return new EventDTO(event);
	}
	
}
