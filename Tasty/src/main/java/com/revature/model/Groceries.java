package com.revature.model;

import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToMany;
import javax.persistence.MapsId;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
@JsonIgnoreProperties({ "hibernateLazyInitializer", "handler" })
public class Groceries {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "grocery_int")
	private int groceryInt;
	
	@OneToOne
	private Users groceryUser;
	
	public Groceries() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Groceries(int groceryInt, Users groceryUser) {
		super();
		this.groceryInt = groceryInt;
		this.groceryUser = groceryUser;
	}

	public int getGroceryInt() {
		return groceryInt;
	}

	public void setGroceryInt(int groceryInt) {
		this.groceryInt = groceryInt;
	}

	public Users getGroceryUser() {
		return groceryUser;
	}

	public void setGroceryUser(Users groceryUser) {
		this.groceryUser = groceryUser;
	}

	@Override
	public String toString() {
		return "Groceries [groceryInt=" + groceryInt + ", groceryUser=" + groceryUser + "]";
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + groceryInt;
		result = prime * result + ((groceryUser == null) ? 0 : groceryUser.hashCode());
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
		if (groceryUser == null) {
			if (other.groceryUser != null)
				return false;
		} else if (!groceryUser.equals(other.groceryUser))
			return false;
		return true;
	}

	
	
}
