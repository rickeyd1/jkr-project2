package com.revature.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
@JsonIgnoreProperties({ "hibernateLazyInitializer", "handler" })
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

	@ManyToOne
	private TimeOfTable day;
	
	public Meal() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Meal(int mealId, String mealName, int size, Users user, TimeOfTable day) {
		super();
		this.mealId = mealId;
		this.mealName = mealName;
		this.size = size;
		this.user = user;
		this.day = day;
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

	public TimeOfTable getDay() {
		return day;
	}

	public void setDay(TimeOfTable day) {
		this.day = day;
	}

	@Override
	public String toString() {
		return "Meal [mealId=" + mealId + ", mealName=" + mealName + ", size=" + size + ", user=" + user + ", day="
				+ day + "]";
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((day == null) ? 0 : day.hashCode());
		result = prime * result + mealId;
		result = prime * result + ((mealName == null) ? 0 : mealName.hashCode());
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
		if (day == null) {
			if (other.day != null)
				return false;
		} else if (!day.equals(other.day))
			return false;
		if (mealId != other.mealId)
			return false;
		if (mealName == null) {
			if (other.mealName != null)
				return false;
		} else if (!mealName.equals(other.mealName))
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

}
