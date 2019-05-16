package com.revature.controllers;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.revature.aop.Secured;
import com.revature.dto.CredentialDto;
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
	
	@PostMapping("/login")
	public ResponseEntity<Users> login(@RequestBody CredentialDto credentials, HttpServletRequest req) {
		Users user = userService.login(credentials);
		if (user != null) {
			req.getSession().setAttribute("user", user);
			return new ResponseEntity<Users>(user, HttpStatus.CREATED);
		} else {
			return new ResponseEntity<Users>(HttpStatus.BAD_REQUEST);
		}
	}
}
