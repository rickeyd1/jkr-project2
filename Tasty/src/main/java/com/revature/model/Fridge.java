package com.revature.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToOne;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
@JsonIgnoreProperties({ "hibernateLazyInitializer", "handler" })
public class Fridge {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "fridge_id")
	private int fridgeId;
	
	@OneToOne
	private Users userId;

	@OneToOne
	private Groceries groceryList;
	
	public Fridge() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Fridge(int fridgeId, Users userId, Groceries groceryList) {
		super();
		this.fridgeId = fridgeId;
		this.userId = userId;
		this.groceryList = groceryList;
	}

	public int getFridgeId() {
		return fridgeId;
	}

	public void setFridgeId(int fridgeId) {
		this.fridgeId = fridgeId;
	}

	public Users getUserId() {
		return userId;
	}

	public void setUserId(Users userId) {
		this.userId = userId;
	}

	public Groceries getGroceryList() {
		return groceryList;
	}

	public void setGroceryList(Groceries groceryList) {
		this.groceryList = groceryList;
	}

	@Override
	public String toString() {
		return "Fridge [fridgeId=" + fridgeId + ", userId=" + userId + ", groceryList=" + groceryList + "]";
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + fridgeId;
		result = prime * result + ((groceryList == null) ? 0 : groceryList.hashCode());
		result = prime * result + ((userId == null) ? 0 : userId.hashCode());
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
		Fridge other = (Fridge) obj;
		if (fridgeId != other.fridgeId)
			return false;
		if (groceryList == null) {
			if (other.groceryList != null)
				return false;
		} else if (!groceryList.equals(other.groceryList))
			return false;
		if (userId == null) {
			if (other.userId != null)
				return false;
		} else if (!userId.equals(other.userId))
			return false;
		return true;
	}

}
