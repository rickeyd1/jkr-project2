package com.revature.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.revature.model.Meal;
import com.revature.repository.MealRepo;

@Service
public class MealService {

	@Autowired
	private MealRepo mealRepo;

	public Meal findById(int id) {
		return mealRepo.getOne(id);
	}

//	public Meal findbyMealName(Meal name) {
//		return mealRepo.FindByMealName(name);
//	}

	public Meal save(Meal m) {
		return mealRepo.save(m);
	}


	public List<Meal> findAll() {

		return mealRepo.findAll();
	}

	
}
