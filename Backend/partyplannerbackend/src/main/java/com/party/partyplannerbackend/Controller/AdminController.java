package com.party.partyplannerbackend.Controller;


import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.party.partyplannerbackend.Service.AdminService;
import com.party.partyplannerbackend.entity.Admin;
import com.party.partyplannerbackend.repository.AdminRepo;



@RestController

public class AdminController {
	@Autowired  
	AdminRepo Repository; 
	@Autowired
	AdminService service;

	@GetMapping("/getad")
	 List<Admin> getList(){
		return Repository.findAll();
	}
	@GetMapping("/getad/{id}")
	Admin getUser(@PathVariable String id) {
		return Repository.getById(id);
		}
	@PostMapping("/postad")
	public Admin create(@RequestBody Admin stu) {
		  return Repository.save(stu);
	}
	@GetMapping("/getad/{email}")
	public Optional<Admin> getbyid(@PathVariable String email){
		return service.getDetails(email);
	}
}
