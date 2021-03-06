package com.revature.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.revature.model.Ingredients;

@Repository
public interface IngredientRepo extends JpaRepository<Ingredients, Integer> {

	List<Ingredients> findByFoodTypeTypeId(int foodType);
	
	
}
