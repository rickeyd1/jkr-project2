package com.revature.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
@JsonIgnoreProperties({ "hibernateLazyInitializer", "handler" })
public class Ingredients {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int ingredientsId;
	
	@Column(name = "name", nullable = false, unique = true)
	private String name;
	
	@Column(name = "calories", nullable = false)
	private int calories;
	
	@ManyToOne
	private FoodType foodType;

	public Ingredients() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Ingredients(int ingredientsId, String name, int calories, FoodType foodType) {
		super();
		this.ingredientsId = ingredientsId;
		this.name = name;
		this.calories = calories;
		this.foodType = foodType;
	}

	/**
	 * @return the ingredientsId
	 */
	public int getIngredientsId() {
		return ingredientsId;
	}

	/**
	 * @param ingredientsId the ingredientsId to set
	 */
	public void setIngredientsId(int ingredientsId) {
		this.ingredientsId = ingredientsId;
	}

	/**
	 * @return the name
	 */
	public String getName() {
		return name;
	}

	/**
	 * @param name the name to set
	 */
	public void setName(String name) {
		this.name = name;
	}

	/**
	 * @return the calories
	 */
	public int getCalories() {
		return calories;
	}

	/**
	 * @param calories the calories to set
	 */
	public void setCalories(int calories) {
		this.calories = calories;
	}

	/**
	 * @return the foodType
	 */
	public FoodType getFoodType() {
		return foodType;
	}

	/**
	 * @param foodType the foodType to set
	 */
	public void setFoodType(FoodType foodType) {
		this.foodType = foodType;
	}

	@Override
	public String toString() {
		return "Ingredients [ingredientsId=" + ingredientsId + ", name=" + name + ", calories=" + calories
				+ ", foodType=" + foodType + "]";
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + calories;
		result = prime * result + ((foodType == null) ? 0 : foodType.hashCode());
		result = prime * result + ingredientsId;
		result = prime * result + ((name == null) ? 0 : name.hashCode());
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
		Ingredients other = (Ingredients) obj;
		if (calories != other.calories)
			return false;
		if (foodType == null) {
			if (other.foodType != null)
				return false;
		} else if (!foodType.equals(other.foodType))
			return false;
		if (ingredientsId != other.ingredientsId)
			return false;
		if (name == null) {
			if (other.name != null)
				return false;
		} else if (!name.equals(other.name))
			return false;
		return true;
	}

}
