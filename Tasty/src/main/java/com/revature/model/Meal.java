package com.revature.model;


import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToMany;
import javax.persistence.OneToOne;
import javax.persistence.CascadeType;

import org.springframework.transaction.annotation.Transactional;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
@JsonIgnoreProperties({ "hibernateLazyInitializer", "handler" })
@Transactional
public class Meal {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "meal_id")
	private int mealId;
	
	@Column(name = "meal_name", unique = false, nullable = false)
	private String mealName;
	
	@Column(name = "size", nullable = false)
	private int size;
	
	@OneToOne
	private Users user;
	
	@ManyToMany
	private List<Recipe> recipe;

	@ManyToMany(cascade = CascadeType.ALL, fetch = FetchType.LAZY)
	private List<DateMeal> datemeal;

	public Meal() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Meal(int mealId, String mealName, int size, Users user, List<Recipe> recipe, List<DateMeal> datemeal) {
		super();
		this.mealId = mealId;
		this.mealName = mealName;
		this.size = size;
		this.user = user;
		this.recipe = recipe;
		this.datemeal = datemeal;
	}

	public int getMealId() {
		return mealId;
	}

	public void setMealId(int mealId) {
		this.mealId = mealId;
	}

	public String getMealName() {
		return mealName;
	}

	public void setMealName(String mealName) {
		this.mealName = mealName;
	}

	public int getSize() {
		return size;
	}

	public void setSize(int size) {
		this.size = size;
	}

	public Users getUser() {
		return user;
	}

	public void setUser(Users user) {
		this.user = user;
	}

	public List<Recipe> getRecipe() {
		return recipe;
	}

	public void setRecipe(List<Recipe> recipe) {
		this.recipe = recipe;
	}

	public List<DateMeal> getDatemeal() {
		return datemeal;
	}

	public void setDatemeal(List<DateMeal> datemeal) {
		this.datemeal = datemeal;
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((datemeal == null) ? 0 : datemeal.hashCode());
		result = prime * result + mealId;
		result = prime * result + ((mealName == null) ? 0 : mealName.hashCode());
		result = prime * result + ((recipe == null) ? 0 : recipe.hashCode());
		result = prime * result + size;
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
		Meal other = (Meal) obj;
		if (datemeal == null) {
			if (other.datemeal != null)
				return false;
		} else if (!datemeal.equals(other.datemeal))
			return false;
		if (mealId != other.mealId)
			return false;
		if (mealName == null) {
			if (other.mealName != null)
				return false;
		} else if (!mealName.equals(other.mealName))
			return false;
		if (recipe == null) {
			if (other.recipe != null)
				return false;
		} else if (!recipe.equals(other.recipe))
			return false;
		if (size != other.size)
			return false;
		if (user == null) {
			if (other.user != null)
				return false;
		} else if (!user.equals(other.user))
			return false;
		return true;
	}

	@Override
	public String toString() {
		return "Meal [mealId=" + mealId + ", mealName=" + mealName + ", size=" + size + ", user=" + user + ", recipe="
				+ recipe + ", datemeal=" + datemeal + "]";
	}
	
	
}
