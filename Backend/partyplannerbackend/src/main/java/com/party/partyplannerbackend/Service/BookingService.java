package com.party.partyplannerbackend.Service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.party.partyplannerbackend.entity.Booking;
import com.party.partyplannerbackend.repository.BookingRepo;

@Service
public class BookingService {
	@Autowired
	private BookingRepo prepo;
	
	public List<Booking> getBooking() {
		return prepo.findAll();
	}
	public Optional<Booking> findBooking(Long id) {
		return prepo.findById(id);
	}
	public Booking addBooking(Booking booking) {
		return prepo.save(booking);
	}
	
	public Booking editBooking(Long id, Booking booking) {
		Booking xbooking = prepo.findById(id).orElse(null);
		if(xbooking !=null) {
			xbooking.setEventsName(booking.getEventsName());
			xbooking.setDate(booking.getDate());
			xbooking.setCategory(booking.getCategory());
			xbooking.setHeadCount(booking.getHeadCount());
			xbooking.setDescription(booking.getDescription());
			return prepo.saveAndFlush(xbooking);
		}
		else {
			return null;
		}
	}
	
	public String deleteBooking(Long id) {
		Booking xuser = prepo.findById(id).orElse(null);
		
		if(xuser !=null) {
			prepo.deleteById(id);
			return "Event deleted"+ id;
		}
		else {
			return "invalid eventIBookingD";
		}
		
	}
}
