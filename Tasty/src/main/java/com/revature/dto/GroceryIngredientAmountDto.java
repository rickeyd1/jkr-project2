package com.revature.dto;

public class GroceryIngredientAmountDto {
	private int id;
	private int amount;

	public GroceryIngredientAmountDto() {
		super();
		// TODO Auto-generated constructor stub
	}

	public GroceryIngredientAmountDto(int id, int amount) {
		super();
		this.id = id;
		this.amount = amount;
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

	@Override
	public String toString() {
		return "GroceryIngredientAmountDto [id=" + id + ", amount=" + amount + "]";
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + amount;
		result = prime * result + id;
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
		GroceryIngredientAmountDto other = (GroceryIngredientAmountDto) obj;
		if (amount != other.amount)
			return false;
		if (id != other.id)
			return false;
		return true;
	}
	
	
}
