package com.party.partyplannerbackend.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.party.partyplannerbackend.entity.Customer;

public interface CustomerRepo extends JpaRepository<Customer,Long>{
    
}
