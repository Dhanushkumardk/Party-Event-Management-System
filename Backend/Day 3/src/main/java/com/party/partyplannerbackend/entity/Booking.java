package com.party.partyplannerbackend.entity;

import java.time.LocalDate;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
public class Booking {
    @Id
     @GeneratedValue(strategy = GenerationType.IDENTITY)
    
    private Long Id;
    private String Name;
    private LocalDate date;
    private String category;
    private int headCount;
    private String description;



}
