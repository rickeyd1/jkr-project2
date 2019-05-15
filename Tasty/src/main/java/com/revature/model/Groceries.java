package com.revature.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToOne;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
@JsonIgnoreProperties({ "hibernateLazyInitializer", "handler" })
public class Groceries {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int groceryInt;
	
	@OneToOne
	private Users userId;

	public Groceries() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Groceries(int groceryInt, Users userId) {
		super();
		this.groceryInt = groceryInt;
		this.userId = userId;
	}

	/**
	 * @return the groceryInt
	 */
	public int getGroceryInt() {
		return groceryInt;
	}

	/**
	 * @param groceryInt the groceryInt to set
	 */
	public void setGroceryInt(int groceryInt) {
		this.groceryInt = groceryInt;
	}

	/**
	 * @return the userId
	 */
	public Users getUserId() {
		return userId;
	}

	/**
	 * @param userId the userId to set
	 */
	public void setUserId(Users userId) {
		this.userId = userId;
	}

	@Override
	public String toString() {
		return "Groceries [groceryInt=" + groceryInt + ", userId=" + userId + "]";
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + groceryInt;
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
		Groceries other = (Groceries) obj;
		if (groceryInt != other.groceryInt)
			return false;
		if (userId == null) {
			if (other.userId != null)
				return false;
		} else if (!userId.equals(other.userId))
			return false;
		return true;
	}
	
}