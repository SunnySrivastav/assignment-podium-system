package com.podium.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.podium.model.MovieInfo;

@Repository
public interface TicketRepository extends JpaRepository<MovieInfo, Long>{

}
