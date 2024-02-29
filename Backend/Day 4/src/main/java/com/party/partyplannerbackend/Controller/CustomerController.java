package com.party.partyplannerbackend.Controller;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.party.partyplannerbackend.Service.CustomerService;
import com.party.partyplannerbackend.entity.Customer;


@RestController
public class CustomerController {
	@Autowired
	private CustomerService cusservice;
	
	
	@GetMapping("/getuser")
	public List<Customer> GetUsers() {
		return cusservice.GetUsers();
	}
	@PostMapping("/adduser")
	public Customer AddUser(@RequestBody Customer customer) {
		return cusservice.AddUser(customer);
	}
	@PutMapping("/edituser/{id}")
	public Customer EditUser(@PathVariable Long id, @RequestBody Customer customer) {
		return cusservice.EditUser(id, customer);
	}
	@DeleteMapping("/deleteuser/{id}")
	public String DeleteUser(@PathVariable Long id) {
		return cusservice.DeleteUser(id);
	}
}