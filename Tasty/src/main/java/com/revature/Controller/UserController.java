package com.revature.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.revature.model.User;

@RestController
@RequestMapping("users")
public class UserController {

	//NOT A DAO
	@Autowired
	private UserService userService;
	
  
	  @GetMapping()
	  public User FindbyGroceyList() {
		  return (code) 
	  }
	  
	  @PostMapping()
	  public User saveUser(@RequestBody User u) { 
		  return (code) 
	  }
	  
	  @PostMapping()
	   public User Login(@RequestBody User u) {
		  return (code)
	  }
	 
	
}
