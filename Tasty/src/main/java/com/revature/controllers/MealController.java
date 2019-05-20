package com.revature.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.revature.aop.Secured;
import com.revature.model.Meal;
import com.revature.services.MealService;

@RestController
@RequestMapping("meal")
public class MealController {

	@Autowired
	private MealService mealService;
	
	@Secured
	@GetMapping("{id}")
	public Meal findById(@PathVariable int id) {
		return mealService.findById(id);
	}
//	@Secured
//	@GetMapping("meal")
//	public Meal FindByMealName(Meal name) {
//		return mealService.findbyMealName(name);
//	}
<<<<<<< HEAD
//	@Secured
=======
	@Secured
>>>>>>> recipes
	@GetMapping("mealall")
	public List<Meal> findAllList() {
		return mealService.findAll();
	}
	
	@PostMapping("")
	public Meal save(@RequestBody Meal m) {
		return mealService.save(m);
	}
}
