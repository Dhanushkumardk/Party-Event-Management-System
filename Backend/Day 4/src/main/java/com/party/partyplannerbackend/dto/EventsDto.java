package com.party.partyplannerbackend.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class EventsDto {
    
    private Long Id;
    private String eventType;
    private String description;
    private int headCount;
    private int charges;
}
