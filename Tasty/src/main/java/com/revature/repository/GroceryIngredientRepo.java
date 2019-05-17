package com.revature.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.revature.model.GroceryIngredients;

@Repository
public interface GroceryIngredientRepo extends JpaRepository<GroceryIngredients, Integer> {
	
	GroceryIngredients findById (int id);
}
