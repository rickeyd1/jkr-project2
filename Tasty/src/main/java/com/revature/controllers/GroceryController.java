package com.revature.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.revature.model.Groceries;
import com.revature.services.GroceryService;

@RestController
@RequestMapping("groceries")
public class GroceryController {
	
	@Autowired
	private GroceryService groceryService;
	
	@GetMapping("{id}")
	public Groceries findById(@PathVariable int id) {
		return groceryService.findById(id);
	}
	
	@PostMapping()
	public Groceries save(@RequestBody Groceries gList) {
		return groceryService.save(gList);
	}
	
	
	
}