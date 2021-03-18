package com.aminterprise.mutlu.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.aminterprise.mutlu.entities.Event;

public interface EventRepository extends JpaRepository<Event, Long> {
	
	List<Event> findAllByOrderByNameAsc();
}


