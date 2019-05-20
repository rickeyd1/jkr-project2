package com.revature.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name = "grocery_ingredients")
public class GroceryIngredients {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	
	private int amount;
	
	@ManyToOne
	private Groceries groceryList;
	
	@ManyToOne
	private Ingredients ingredient;

	public GroceryIngredients() {
		super();
		// TODO Auto-generated constructor stub
	}

	public GroceryIngredients(int id, int amount, Groceries groceryList, Ingredients ingredient) {
		super();
		this.id = id;
		this.amount = amount;
		this.groceryList = groceryList;
		this.ingredient = ingredient;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public int getAmount() {
		return amount;
	}

	public void setAmount(int amount) {
		this.amount = amount;
	}

	public Groceries getGroceryList() {
		return groceryList;
	}

	public void setGroceryList(Groceries groceryList) {
		this.groceryList = groceryList;
	}

	public Ingredients getIngredient() {
		return ingredient;
	}

	public void setIngredient(Ingredients ingredient) {
		this.ingredient = ingredient;
	}

	@Override
	public String toString() {
		return "GroceryIngredients [id=" + id + ", amount=" + amount + ", groceryList=" + groceryList + ", ingredient="
				+ ingredient + "]";
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + amount;
		result = prime * result + ((groceryList == null) ? 0 : groceryList.hashCode());
		result = prime * result + id;
		result = prime * result + ((ingredient == null) ? 0 : ingredient.hashCode());
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
		GroceryIngredients other = (GroceryIngredients) obj;
		if (amount != other.amount)
			return false;
		if (groceryList == null) {
			if (other.groceryList != null)
				return false;
		} else if (!groceryList.equals(other.groceryList))
			return false;
		if (id != other.id)
			return false;
		if (ingredient == null) {
			if (other.ingredient != null)
				return false;
		} else if (!ingredient.equals(other.ingredient))
			return false;
		return true;
	}
	
	
	
}
