package com.aminterprise.amdeliver.services;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.aminterprise.amdeliver.dto.OrderDTO;
import com.aminterprise.amdeliver.entities.Order;
import com.aminterprise.amdeliver.repositories.OrderRepository;



@Service
public class OrderService {
	
	@Autowired
	private OrderRepository repository;
	
	@Transactional(readOnly = true)
	public List<OrderDTO> findAll(){
		List<Order> list = repository.findAll();
		return list.stream().map(x -> new OrderDTO(x)).collect(Collectors.toList());
	}
}
