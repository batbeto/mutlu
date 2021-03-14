package com.aminterprise.amdeliver.services;

import java.time.Instant;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.aminterprise.amdeliver.dto.OrderDTO;
import com.aminterprise.amdeliver.dto.ProductDTO;
import com.aminterprise.amdeliver.entities.Order;
import com.aminterprise.amdeliver.entities.OrderStatus;
import com.aminterprise.amdeliver.entities.Product;
import com.aminterprise.amdeliver.repositories.OrderRepository;
import com.aminterprise.amdeliver.repositories.ProductRepository;



@Service
public class OrderService {
	
	@Autowired
	private OrderRepository repository;
	
	@Autowired
	private ProductRepository productRepository;
	
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
		for (ProductDTO p : dto.getProducts()) {
			Product product = productRepository.getOne(p.getId());
			order.getProducts().add(product);
		}
		order = repository.save(order);
		return new OrderDTO(order);
	}
}
