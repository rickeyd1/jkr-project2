package com.revature.model;

import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
@JsonIgnoreProperties({ "hibernateLazyInitializer", "handler" })
public class Recipe {

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name="recipe_id")
	private int recipeId;
	
	@Column(name="recipe_name", nullable=false)
	private String recipeName;
	
	@Column(name="recipe_calories")
	private int calories;
	
	@ManyToOne
	private Category category;

	@ManyToOne
	private Users user;
	
<<<<<<< HEAD
	@ManyToMany
	private List<Meal> meal;
	
=======
>>>>>>> recipes
	public Recipe() {
		super();
		// TODO Auto-generated constructor stub
	}

<<<<<<< HEAD
	public Recipe(int recipeId, String recipeName, int calories, Category category, Users user, List<Meal> meal) {
=======
	public Recipe(int recipeId, String recipeName, int calories, Category category, Users user) {
>>>>>>> recipes
		super();
		this.recipeId = recipeId;
		this.recipeName = recipeName;
		this.calories = calories;
		this.category = category;
		this.user = user;
<<<<<<< HEAD
		this.meal = meal;
=======
>>>>>>> recipes
	}

	public int getRecipeId() {
		return recipeId;
	}

	public void setRecipeId(int recipeId) {
		this.recipeId = recipeId;
	}

	public String getRecipeName() {
		return recipeName;
	}

	public void setRecipeName(String recipeName) {
		this.recipeName = recipeName;
	}

	public int getCalories() {
		return calories;
	}

	public void setCalories(int calories) {
		this.calories = calories;
	}

	public Category getCategory() {
		return category;
	}

	public void setCategory(Category category) {
		this.category = category;
	}

	public Users getUser() {
		return user;
	}

	public void setUser(Users user) {
		this.user = user;
	}

<<<<<<< HEAD
	public List<Meal> getMeal() {
		return meal;
	}

	public void setMeal(List<Meal> meal) {
		this.meal = meal;
=======
	@Override
	public String toString() {
		return "Recipe [recipeId=" + recipeId + ", recipeName=" + recipeName + ", calories=" + calories + ", category="
				+ category + ", user=" + user + "]";
>>>>>>> recipes
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + calories;
		result = prime * result + ((category == null) ? 0 : category.hashCode());
<<<<<<< HEAD
		result = prime * result + ((meal == null) ? 0 : meal.hashCode());
=======
>>>>>>> recipes
		result = prime * result + recipeId;
		result = prime * result + ((recipeName == null) ? 0 : recipeName.hashCode());
		result = prime * result + ((user == null) ? 0 : user.hashCode());
		return result;
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Recipe other = (Recipe) obj;
		if (calories != other.calories)
			return false;
		if (category == null) {
			if (other.category != null)
				return false;
		} else if (!category.equals(other.category))
			return false;
<<<<<<< HEAD
		if (meal == null) {
			if (other.meal != null)
				return false;
		} else if (!meal.equals(other.meal))
			return false;
=======
>>>>>>> recipes
		if (recipeId != other.recipeId)
			return false;
		if (recipeName == null) {
			if (other.recipeName != null)
				return false;
		} else if (!recipeName.equals(other.recipeName))
			return false;
		if (user == null) {
			if (other.user != null)
				return false;
		} else if (!user.equals(other.user))
			return false;
		return true;
	}
<<<<<<< HEAD

	@Override
	public String toString() {
		return "Recipe [recipeId=" + recipeId + ", recipeName=" + recipeName + ", calories=" + calories + ", category="
				+ category + ", user=" + user + ", meal=" + meal + "]";
	}

	
	
=======
>>>>>>> recipes
}
