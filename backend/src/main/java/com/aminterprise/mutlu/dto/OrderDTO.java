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
	private Double price;
	private Integer qtd;
	private Double total;
	private OrderStatus status;
	
	private List<EventDTO> events = new ArrayList<>();
	
	public OrderDTO() {
	}
	
	public OrderDTO(Long id, Instant moment, Double price, Integer qtd, Double total, OrderStatus status,
			List<EventDTO> events) {
		super();
		this.id = id;
		this.moment = moment;
		this.price = price;
		this.qtd = qtd;
		this.total = total;
		this.status = status;
		this.events = events;
	}


	public OrderDTO(Order entity) {
		id = entity.getId();
		price = entity.getPrice();
		qtd = entity.getQtd();
		total = entity.getTotal();
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

	public Double getPrice() {
		return price;
	}

	public void setPrice(Double price) {
		this.price = price;
	}

	public Integer getQtd() {
		return qtd;
	}

	public void setQtd(Integer qtd) {
		this.qtd = qtd;
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
