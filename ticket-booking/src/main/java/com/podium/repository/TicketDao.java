package com.podium.repository;

import org.springframework.data.repository.CrudRepository;

import com.podium.model.Ticket;


public interface TicketDao extends CrudRepository<Ticket, Integer>{

}
