package com.aminterprise.mutlu.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.aminterprise.mutlu.entities.Event;

public interface EventRepository extends JpaRepository<Event, Long> {
	
	List<Event> findAllByOrderByNameAsc();
	
	@Query("SELECT DISTINCT obj FROM Event obj "
			+ " WHERE obj.status = 0 ORDER BY obj.moment ASC")
	List<Event> findEventsPending();
	
	@Query("SELECT DISTINCT obj FROM Event obj "
			+ " WHERE obj.status = 1 ORDER BY obj.moment ASC")
	List<Event> findEventsConclused();
}


