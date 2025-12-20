package com.party.partyplannerbackend.Controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.party.partyplannerbackend.Service.EventsService;
import com.party.partyplannerbackend.entity.Events;

@CrossOrigin("*")
@RestController
@RequestMapping("/product")
public class EventsController {
	@Autowired
	private EventsService service;
	
	
	@GetMapping("/get")
	public List<Events> GetEvents(){
		return service.getEvents();
	}
	
	@GetMapping("/find/{id}")
	public Optional<Events> FindEvents(@PathVariable Long id){
		return service.findEvents(id);
	}
	
	@PostMapping("/add")
	public Events AddEvents(@RequestBody Events events) {
		return service.addEvents(events);
	}
	@PutMapping("/edit/{id}")
	public Events EditEvents(@RequestBody Events events,@PathVariable Long id) {
		return service.editEvents(id, events);
	}
	@DeleteMapping("/delete/{id}")
	public String DeleteEvents(@PathVariable Long id) {
		return service.deleteEvents(id);
	}
	@GetMapping("/getcount")
	public int EventsCount() {
		return service.eventsCount();
	}
	
}
