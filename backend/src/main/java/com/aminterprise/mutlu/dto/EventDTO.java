package com.aminterprise.mutlu.dto;

import java.io.Serializable;
import java.util.Date;

import com.aminterprise.mutlu.entities.Event;
import com.aminterprise.mutlu.entities.OrderStatus;

public class EventDTO implements Serializable {
	
	private static final long serialVersionUID = 1L;
	
	private Long id;
	private String name;
	private Double price;
	private Long tickets;
	private String address;
	private Double latitude;
	private Double longitude;
	private Date date; 
	private String description;
	private String imageUri;
	private OrderStatus status;
	
	public EventDTO() {
	}

	
	public EventDTO(Long id, String name, Double price, Long tickets, String address, Double latitude, Double longitude,
			Date date, String description, String imageUri, OrderStatus status) {
		super();
		this.id = id;
		this.name = name;
		this.price = price;
		this.tickets = tickets;
		this.address = address;
		this.latitude = latitude;
		this.longitude = longitude;
		this.date = date;
		this.description = description;
		this.imageUri = imageUri;
		this.setStatus(status);
	}



	public EventDTO(Event entity) {
		super();
		id = entity.getId();
		name = entity.getName();
		price = entity.getPrice();
		tickets = entity.getTickets();
		address = entity.getAddress();
		latitude = entity.getLatitude();
		longitude = entity.getLongitude();
		date = entity.getDate();
		description = entity.getDescription();
		imageUri = entity.getImageUri();
		setStatus(entity.getStatus());
	}


	public Long getId() {
		return id;
	}


	public void setId(Long id) {
		this.id = id;
	}


	public String getName() {
		return name;
	}


	public void setName(String name) {
		this.name = name;
	}


	public Double getPrice() {
		return price;
	}


	public void setPrice(Double price) {
		this.price = price;
	}


	public Long getTickets() {
		return tickets;
	}


	public void setTickets(Long tickets) {
		this.tickets = tickets;
	}


	public String getAddress() {
		return address;
	}


	public void setAddress(String address) {
		this.address = address;
	}


	public Double getLatitude() {
		return latitude;
	}


	public void setLatitude(Double latitude) {
		this.latitude = latitude;
	}


	public Double getLongitude() {
		return longitude;
	}


	public void setLongitude(Double longitude) {
		this.longitude = longitude;
	}


	public Date getDate() {
		return date;
	}


	public void setDate(Date date) {
		this.date = date;
	}


	public String getDescription() {
		return description;
	}


	public void setDescription(String description) {
		this.description = description;
	}


	public String getImageUri() {
		return imageUri;
	}


	public void setImageUri(String imageUri) {
		this.imageUri = imageUri;
	}


	public OrderStatus getStatus() {
		return status;
	}


	public void setStatus(OrderStatus status) {
		this.status = status;
	}

	
}
