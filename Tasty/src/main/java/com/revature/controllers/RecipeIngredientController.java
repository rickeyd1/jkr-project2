package com.revature.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.revature.model.RecipeIngedient;
import com.revature.services.RecipeIngredientService;

@RestController
@RequestMapping("recipe-ingredient")
public class RecipeIngredientController {

	@Autowired
	private RecipeIngredientService riService;
	
	@GetMapping("/all")
	public List<RecipeIngedient> findAll() {
		return riService.findAll();
	}
	
	@GetMapping("recipe/{id}")
	public List<RecipeIngedient> findByRecipeId(@PathVariable int id) {
		return riService.findByRecipeId(id);
	}
	
	@PostMapping()
	public RecipeIngedient save(@RequestBody RecipeIngedient ri) {
		return riService.save(ri);
	}
	
	@PatchMapping("/update")
	public ResponseEntity<RecipeIngedient> patch(@RequestBody RecipeIngedient newRi) {
		
		RecipeIngedient current = riService.findById(newRi.getId());
		
		newRi.setId(current.getId());
		
		if(newRi.getRecipe() == null) {
			newRi.setRecipe(current.getRecipe());
		}
		if(newRi.getIngredient() == null) {
			newRi.setIngredient(current.getIngredient());
		}
		if(newRi.getAmount() == 0) {
			newRi.setAmount(current.getAmount());
		}

		//userService.updateUser(newUser.getUserId(), newUser.getName(), newUser.getEmail(), newUser.getUsername(), newUser.getPassword());
		riService.save(newRi);

		ResponseEntity<RecipeIngedient> resp = new ResponseEntity<RecipeIngedient>(newRi, HttpStatus.ACCEPTED);
		return resp;
	}
}