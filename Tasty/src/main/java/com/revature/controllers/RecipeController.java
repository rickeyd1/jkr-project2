package com.revature.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.revature.model.Recipe;
import com.revature.model.Users;
import com.revature.services.RecipeService;

@RestController
@RequestMapping("recipe")
public class RecipeController {

	@Autowired
	private RecipeService recipeService;

	@GetMapping()
	public List<Recipe> findAll() {
		return recipeService.findAll();
	}
	
	@GetMapping("{recipeName}")
	public List<Recipe> findByRecipeName(@PathVariable String recipeName){
		return recipeService.findByRecipeName(recipeName);
	}
	
	@PostMapping()
	public Recipe save(@RequestBody Recipe r) {
		return recipeService.save(r);
	}
	
	@PatchMapping()
	public ResponseEntity<Recipe> patch(@RequestBody Recipe newRecipe) {
		Recipe current = recipeService.findById(newRecipe.getRecipeId());
		if(newRecipe.getRecipeName() == null) {
			newRecipe.setRecipeName(current.getRecipeName());
		}
		if(newRecipe.getCalories() == 0) {
			newRecipe.setCalories(current.getCalories());
		}
		if(newRecipe.getCategory() == null) {
			newRecipe.setCategory(current.getCategory());
		}
		if(newRecipe.getUser() == null) {
			newRecipe.setUser(current.getUser());
		}
		
		//userService.updateUser(newUser.getUserId(), newUser.getName(), newUser.getEmail(), newUser.getUsername(), newUser.getPassword());
		recipeService.save(newRecipe);
		
		ResponseEntity<Recipe> resp = new ResponseEntity<Recipe>(newRecipe, HttpStatus.ACCEPTED);
		return resp;
	}
	
	@DeleteMapping("{recipeId}")
    public void deleteById(@PathVariable int recipeId) {
        recipeService.deleteById(recipeId);
    }
}
