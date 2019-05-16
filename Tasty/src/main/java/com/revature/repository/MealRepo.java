package com.revature.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.revature.model.Meal;

@Repository
public interface MealRepo extends JpaRepository<Meal, Integer>{

//	Meal FindByMealName(Meal name);

}
