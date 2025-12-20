package com.party.partyplannerbackend.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.party.partyplannerbackend.entity.Customer;
import com.party.partyplannerbackend.repository.CustomerRepo;



@Service
public class CustomerService {

	@Autowired
	private CustomerRepo cusrepo;
	
	
	
	public List<Customer> GetUsers() {
		return cusrepo.findAll();
	}
	public Customer AddUser(Customer customer) {
		return cusrepo.save(customer);
	}
	public Customer EditUser(Long id, Customer customer) {
		Customer userx = cusrepo.findById(id).orElse(null);
		if(userx != null) {
			userx.setName(customer.getName());
			userx.setPassword(customer.getPassword());
			return cusrepo.saveAndFlush(customer);
		}
		else {
			return null;
		}
	}
	public String DeleteUser(Long id) {
		if((cusrepo.findById(id).orElse(null))!=null) {
		cusrepo.deleteById(id);
		return "user deleted "+id;
	}
		else {
			return "can't find user";
		}
	}
	}