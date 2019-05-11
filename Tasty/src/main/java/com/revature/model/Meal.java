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
	private User user; 

	public Meal() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Meal(int mealId, String mealName, int size, User user) {
		super();
		this.mealId = mealId;
		this.mealName = mealName;
		this.size = size;
		this.user = user;
	}

	/**
	 * @return the mealId
	 */
	public int getMealId() {
		return mealId;
	}

	/**
	 * @param mealId the mealId to set
	 */
	public void setMealId(int mealId) {
		this.mealId = mealId;
	}

	/**
	 * @return the mealName
	 */
	public String getMealName() {
		return mealName;
	}

	/**
	 * @param mealName the mealName to set
	 */
	public void setMealName(String mealName) {
		this.mealName = mealName;
	}

	/**
	 * @return the size
	 */
	public int getSize() {
		return size;
	}

	/**
	 * @param size the size to set
	 */
	public void setSize(int size) {
		this.size = size;
	}

	/**
	 * @return the user
	 */
	public User getUser() {
		return user;
	}

	/**
	 * @param user the user to set
	 */
	public void setUser(User user) {
		this.user = user;
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
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

	@Override
	public String toString() {
		return "Meal [mealId=" + mealId + ", mealName=" + mealName + ", size=" + size + ", user=" + user + "]";
	}

	
}
