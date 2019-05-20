package com.revature.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.revature.model.Recipe;

public interface RecipeRepo extends JpaRepository<Recipe, Integer> {

	List<Recipe> findByRecipeName(String recipeName);
 
	List<Recipe> findByUserUserIdOrderByRecipeIdAsc(int id);
}