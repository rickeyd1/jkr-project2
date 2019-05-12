package com.revature.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.revature.model.Users;
import com.revature.services.UserService;

@RestController
@RequestMapping("user")
public class UserController {

	//NOT A DAO
	@Autowired
	private UserService userService;
	
	@GetMapping("{id}")
	public Users findById(@PathVariable int id) {
		return userService.findById(id);
	}
	
	@PostMapping()
	public Users save(@RequestBody Users u) { 
		return userService.save(u);
	}
	
//	@PostMapping("login")
//	public User login(@RequestBody User u) {
//		return userService.findByUsernameAndPasword(u);
//	}
}
