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
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.revature.dto.GroceryIngredientAmountDto;
import com.revature.model.GroceryIngredients;
import com.revature.services.GroceryIngredientService;

@RestController
@RequestMapping("grocery/ingredients")
public class GroceryIngredientController {
	
	@Autowired
	private GroceryIngredientService groceryIngredientService;
	
	@GetMapping("key/{id}")
	public GroceryIngredients findById(@PathVariable int id) {
		return groceryIngredientService.findById(id);
	}
	
	@GetMapping("lists/{gId}")
	public List<GroceryIngredients> findByGroceryList(@PathVariable int gId) {
		return groceryIngredientService.findByGroceryList(gId);
	}
	
	// Used to update the amount for the grocery list
	@PatchMapping()
	public GroceryIngredients updateGroceryIngredients(@RequestBody GroceryIngredientAmountDto amount) {
		GroceryIngredients curEntry = groceryIngredientService.findById(amount.getId());
		curEntry.setAmount(amount.getAmount());
		
		groceryIngredientService.save(curEntry);
		return curEntry;
	}
	
	@PostMapping()
	public GroceryIngredients save(@RequestBody GroceryIngredients gIngredients) {
		
		return groceryIngredientService.save(gIngredients);
	}
	
	@DeleteMapping("{id}")
	public ResponseEntity<String> delete(@PathVariable int id) {
		GroceryIngredients dEntry = groceryIngredientService.findById(id);
		groceryIngredientService.deleteEntry(dEntry);
		
		return new ResponseEntity<String>("Entry has been deleted", HttpStatus.GONE);
		
	}
}
