package com.party.partyplannerbackend.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.party.partyplannerbackend.entity.Booking;

public interface BookingRepo extends JpaRepository<Booking,Long> {
    
}
