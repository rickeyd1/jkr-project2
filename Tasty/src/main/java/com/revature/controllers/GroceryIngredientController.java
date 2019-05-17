package com.revature.controllers;

import java.util.List;

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
	
	@GetMapping("key/{id}")
	public GroceryIngredients findById(@PathVariable int id) {
		GroceryIngredients gIngredients = groceryIngredientService.findById(id);
		return groceryIngredientService.findById(id);
	}
	
	@GetMapping("lists/{gId}")
	public List<GroceryIngredients> findByGroceryList(@PathVariable int gId) {
		return groceryIngredientService.findByGroceryList(gId);
	}
	
	@PostMapping()
	public GroceryIngredients save(@RequestBody GroceryIngredients gIngredients) {
		
		return groceryIngredientService.save(gIngredients);
	}
}
