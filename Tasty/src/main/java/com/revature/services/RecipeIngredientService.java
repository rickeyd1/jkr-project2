package com.revature.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.revature.model.RecipeIngedient;
import com.revature.repository.RecipeIngredientRepo;

@Service
public class RecipeIngredientService {

	@Autowired
	private RecipeIngredientRepo riRepo;

	public List<RecipeIngedient> findAll() {
		// TODO Auto-generated method stub
		return riRepo.findAll();
	}

	public RecipeIngedient save(RecipeIngedient ri) {
		// TODO Auto-generated method stub
		return riRepo.save(ri);
	}

	public RecipeIngedient findById(int id) {
		// TODO Auto-generated method stub
		return riRepo.getOne(id);
	}
	
	
}
