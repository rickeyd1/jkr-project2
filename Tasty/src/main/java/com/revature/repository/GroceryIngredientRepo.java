package com.revature.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.revature.model.GroceryIngredients;

@Repository
public interface GroceryIngredientRepo extends JpaRepository<GroceryIngredients, Integer> {
	
	GroceryIngredients findById (int id);

	List<GroceryIngredients> findByGroceryListGroceryIntOrderByIdAsc(int gId);
	
}
