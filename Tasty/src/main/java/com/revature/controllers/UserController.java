package com.revature.controllers;

import org.apache.catalina.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.revature.model.Login;
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
		System.out.println(u);
		return userService.save(u);
	}
	
	@PostMapping("login")
	public Users login(@RequestBody Login login) {
		String username = login.getUsername();
		String password = login.getPassword();
		Users user = userService.findByUsernameAndPasword(username, password);
		if(user == null) {
			System.out.println("Invalid credentials");
			return user;
		} else {
			return user;
		}
		
	}
}
