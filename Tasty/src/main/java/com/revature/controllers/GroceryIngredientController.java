package com.revature.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.revature.model.GroceryIngredients;
import com.revature.services.GroceryIngredientService;

@RestController
@RequestMapping("grocery/ingredients")
public class GroceryIngredientController {
	
	@Autowired
	private GroceryIngredientService groceryIngredientService;
	
	@GetMapping("{id}")
	public GroceryIngredients findById(@PathVariable int id) {
		return groceryIngredientService.findById(id);
	}
	
	@PostMapping()
	public GroceryIngredients save(@RequestBody GroceryIngredients gIngredients) {
		return groceryIngredientService.save(gIngredients);
	}
}
