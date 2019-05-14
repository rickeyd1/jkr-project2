package com.revature.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.revature.dto.LoginDto;
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
	public Users login(@RequestBody LoginDto login) {
		Users user = userService.findByUsernameAndPasword(login.getUsername(), login.getPassword());
		return user;
	}
	
	@PatchMapping()
	public ResponseEntity<Users> patch(@RequestBody Users newUser) {
		Users current = userService.findById(newUser.getUserId());
		if(newUser.getName() == null) {
			newUser.setName(current.getName());
		}
		if(newUser.getUsername() == null) {
			newUser.setUsername(current.getUsername());
		}
		if(newUser.getPassword() == null) {
			newUser.setPassword(current.getPassword());
		}
		if(newUser.getEmail() == null) {
			newUser.setEmail(current.getEmail());
		}
		
		//userService.updateUser(newUser.getUserId(), newUser.getName(), newUser.getEmail(), newUser.getUsername(), newUser.getPassword());
		userService.save(newUser);
		ResponseEntity<Users> resp = new ResponseEntity<Users>(newUser, HttpStatus.I_AM_A_TEAPOT);
		return resp;
	}
}