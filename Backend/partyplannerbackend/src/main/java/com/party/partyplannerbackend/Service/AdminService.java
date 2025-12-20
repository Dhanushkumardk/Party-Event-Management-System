package com.party.partyplannerbackend.Service;


import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.party.partyplannerbackend.entity.Admin;
import com.party.partyplannerbackend.repository.AdminRepo;



@Service
public class AdminService {

	@Autowired
	private AdminRepo adrepo;
	
	public Optional<Admin> getDetails(String email)
	{
		return adrepo.findById(id);
	}
	public String updateDetails(Admin user)
	{
		adrepo.save(user);
		return "Updated";
	}

}