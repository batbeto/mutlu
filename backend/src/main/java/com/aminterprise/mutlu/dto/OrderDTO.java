package com.aminterprise.mutlu.dto;

import java.io.Serializable;
import java.time.Instant;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

import com.aminterprise.mutlu.entities.Order;
import com.aminterprise.mutlu.entities.OrderStatus;

public class OrderDTO implements Serializable {
	
	
	private static final long serialVersionUID = 1L;
	
	private Long id;
	private Instant moment;
	private Integer qtd;
	private Long user_id;
	private Double total;
	private OrderStatus status;
	
	private List<EventDTO> events = new ArrayList<>();
	
	public OrderDTO() {
	}

	public OrderDTO(Long id, Instant moment, Integer qtd, Long user_id,Double total , OrderStatus status,
			List<EventDTO> events) {
		super();
		this.id = id;
		this.moment = moment;
		this.user_id = user_id;
		this.qtd = qtd;
		this.total = total;
		this.status = status;
		this.events = events;
	}


	public OrderDTO(Order entity) {
		id = entity.getId();
		qtd = entity.getQtd();
		total = entity.getTotal();
		user_id = entity.getUser_id();
		moment = entity.getMoment();
		status = entity.getStatus();
		events = entity.getEvents().stream().map(x -> new EventDTO(x)).collect(Collectors.toList());
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public Instant getMoment() {
		return moment;
	}

	public void setMoment(Instant moment) {
		this.moment = moment;
	}

	public Integer getQtd() {
		return qtd;
	}

	public void setQtd(Integer qtd) {
		this.qtd = qtd;
	}

	public Long getUser_id() {
		return user_id;
	}

	public void setUser_id(Long user_id) {
		this.user_id = user_id;
	}

	public Double getTotal() {
		return total;
	}

	public void setTotal(Double total) {
		this.total = total;
	}

	public OrderStatus getStatus() {
		return status;
	}

	public void setStatus(OrderStatus status) {
		this.status = status;
	}

	public List<EventDTO> getEvents() {
		return events;
	}
	
}
