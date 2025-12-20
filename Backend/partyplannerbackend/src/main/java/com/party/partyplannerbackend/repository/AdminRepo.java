package com.party.partyplannerbackend.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.party.partyplannerbackend.entity.Admin;

public interface AdminRepo extends JpaRepository<Admin,Long> {
    
}
