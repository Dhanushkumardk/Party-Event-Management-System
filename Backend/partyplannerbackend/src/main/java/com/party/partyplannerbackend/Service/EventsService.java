package com.party.partyplannerbackend.Service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.party.partyplannerbackend.entity.Events;
import com.party.partyplannerbackend.repository.EventsRepo;

@Service
public class EventsService {
	@Autowired
	private EventsRepo prepo;
	
	public List<Events> getEvents() {
		return prepo.findAll();
	}
	public Optional<Events> findEvents(Long id) {
		return prepo.findById(id);
	}
	public Events addEvents(Events events) {
		return prepo.save(events);
	}
	
	public Events editEvents(Long id, Events events) {
		Events xevents = prepo.findById(id).orElse(null);
		if(xevents !=null) {
			xevents.setEventType(events.getEventType());
			xevents.setDescription(events.getDescription());
			xevents.setHeadCount(events.getHeadCount());
			xevents.setCharges(events.getCharges());
			return prepo.saveAndFlush(xevents);
		}
		else {
			return null;
		}
	}
	
	public String deleteEvents(Long id) {
		Events xuser = prepo.findById(id).orElse(null);
		
		if(xuser !=null) {
			prepo.deleteById(id);
			return "Event deleted"+ id;
		}
		else {
			return "invalid eventIEventsD";
		}
		
	}
}
