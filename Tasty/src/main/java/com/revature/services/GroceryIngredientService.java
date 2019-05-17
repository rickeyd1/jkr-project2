package com.revature.services;

import java.util.List;

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
		return groceryIngredientRepo.findById(id);
	}

	public List<GroceryIngredients> findByGroceryList(int gId) {
		return groceryIngredientRepo.findByGroceryListGroceryInt(gId);
	}
}
