package com.aminterprise.amdeliver.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.aminterprise.amdeliver.entities.Order;

public interface OrderRepository extends JpaRepository<Order, Long> {
	
}


