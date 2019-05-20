package com.revature.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.revature.model.Ingredients;
import com.revature.repository.IngredientRepo;

@Service
public class IngredientService {

	@Autowired
	private IngredientRepo ingredientRepo;
	
	public List<Ingredients> findByFoodTypeTypeId(int foodType) {
		// TODO Auto-generated method stub
		return ingredientRepo.findByFoodTypeTypeId(foodType);
	}

}
