package com.aminterprise.mutlu.entities;

import java.io.Serializable;
import java.time.Instant;
import java.util.HashSet;
import java.util.Set;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.Table;

@Entity
@Table(name = "tb_order")
public class Order implements Serializable {
	
	private static final long serialVersionUID = 1L;
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	private Instant moment;
	private Double price;
	private Integer qtd;
	private Double total;
	private OrderStatus status ;

	@ManyToMany
	@JoinTable(name = "tb_order_event", 
	joinColumns = @JoinColumn(name = "order_id"), 
	inverseJoinColumns = @JoinColumn(name = "event_id"))
	private Set<Event> events = new HashSet<>();
	
	public Order() {
	}

	

	
	
	

}
