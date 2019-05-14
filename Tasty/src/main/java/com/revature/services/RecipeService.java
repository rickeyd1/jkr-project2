package com.revature.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.revature.model.Recipe;
import com.revature.model.Users;
import com.revature.repository.RecipeRepo;

@Service
public class RecipeService {

	@Autowired
	private RecipeRepo recipeRepo;
	
	public List<Recipe> findAll() {
		// TODO Auto-generated method stub
		return recipeRepo.findAll();
	}

	public Recipe save(Recipe r) {
		// TODO Auto-generated method stub
		return recipeRepo.save(r);
	}

	public List<Recipe> findByRecipeName(String recipeName) {
		// TODO Auto-generated method stub
		return recipeRepo.findByRecipeName(recipeName);
	}

	public void deleteById(int recipeId) {
		// TODO Auto-generated method stub
		recipeRepo.deleteById(recipeId);
	}

	public Recipe findById(Recipe r) {
		// TODO Auto-generated method stub
		return recipeRepo.save(r);
	}
	
	public Recipe findById(int id) {
		return recipeRepo.getOne(id);
	}
	
}
