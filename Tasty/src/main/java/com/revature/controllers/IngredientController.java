package com.revature.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.revature.model.Ingredients;
import com.revature.services.IngredientService;

@RestController
@RequestMapping("ingredient")
public class IngredientController {
	
	@Autowired
	private IngredientService ingredientService;
	
	@GetMapping("{foodType}")
	public List<Ingredients> findByFoodTypeTypeId(@PathVariable int foodType) {
		return ingredientService.findByFoodTypeTypeId(foodType);
	}
}
