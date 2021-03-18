package com.aminterprise.mutlu.services;

import java.time.Instant;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.aminterprise.mutlu.dto.OrderDTO;
import com.aminterprise.mutlu.dto.EventDTO;
import com.aminterprise.mutlu.entities.Order;
import com.aminterprise.mutlu.entities.OrderStatus;
import com.aminterprise.mutlu.entities.Event;
import com.aminterprise.mutlu.repositories.OrderRepository;
import com.aminterprise.mutlu.repositories.EventRepository;



@Service
public class OrderService {
	
	@Autowired
	private OrderRepository repository;
	
	@Autowired
	private EventRepository eventRepository;
	
	@Transactional(readOnly = true)
	public List<OrderDTO> findAll(){
		List<Order> list = repository.findOrdersPending();
		return list.stream().map(x -> new OrderDTO(x)).collect(Collectors.toList());
	}
	
	@Transactional
	public OrderDTO insert(OrderDTO dto) {
		Order order = new Order(
				null, 
				dto.getAddress(), 
				dto.getLatitude(),
				dto.getLongitude(),
				Instant.now(),
				OrderStatus.PENDING);
		for (EventDTO p : dto.getEvents()) {
			Event event = eventRepository.getOne(p.getId());
			order.getEvents().add(event);
		}
		order = repository.save(order);
		return new OrderDTO(order);
	}
	
	@Transactional
	public OrderDTO setDelivered(Long id) {
		Order order = repository.getOne(id);
		order.setStatus(OrderStatus.DELIVERED);
		order = repository.save(order);
		return new OrderDTO(order);
	}
}
