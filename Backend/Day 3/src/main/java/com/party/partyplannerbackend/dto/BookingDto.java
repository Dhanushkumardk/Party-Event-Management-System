package com.party.partyplannerbackend.dto;

import java.time.LocalDate;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class BookingDto {
    
     private Long Id;
    private String Name;
    private LocalDate date;
    private String category;
    private String headCount;
    private String description;

}
