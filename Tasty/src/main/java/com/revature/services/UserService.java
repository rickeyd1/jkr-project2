package com.revature.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.revature.model.Users;
import com.revature.repository.UserRepo;

@Service
public class UserService {
	
	@Autowired
	private UserRepo userRepo;
	
	public Users save(Users u) {
		return userRepo.save(u);
	}
	
//	public User findByUsernameAndPasword(User u) {
//		return userRepo.findByUsernameAndPassword(u);
//	}
//	
	
	public Users findById(int id) {
		return userRepo.getOne(id);
	}
	
}
