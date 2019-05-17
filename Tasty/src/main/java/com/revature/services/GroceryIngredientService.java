package com.revature.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.revature.model.GroceryIngredients;
import com.revature.repository.GroceryIngredientRepo;

@Service
public class GroceryIngredientService {

	@Autowired
	private GroceryIngredientRepo groceryIngredientRepo;
	
	public GroceryIngredients save(GroceryIngredients gI) {
		return groceryIngredientRepo.save(gI);
	}

	public GroceryIngredients findById(int id) {
		return groceryIngredientRepo.getOne(id);
	}
}
