package com.revature.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.revature.model.Recipe;
import com.revature.model.RecipeIngedient;

@Repository
public interface RecipeIngredientRepo extends JpaRepository<RecipeIngedient, Integer>{

}
