package com.revature.model;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
@JsonIgnoreProperties({ "hibernateLazyInitializer", "handler" })
public class DateMeal {
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private int dateId;
	
	@Column(nullable=false)
	private String date;
	
	@ManyToOne(cascade = CascadeType.ALL, fetch = FetchType.LAZY)
	@JoinColumn(name="meal_FK")
	private Meal mealId;
	
	@ManyToOne(cascade = CascadeType.ALL, fetch = FetchType.LAZY)
	@JoinColumn(name="time_FK")
	private TimeOfTable timeId;

	public DateMeal() {
		super();
		// TODO Auto-generated constructor stub
	}

	public DateMeal(int dateId, String date, Meal mealId, TimeOfTable timeId) {
		super();
		this.dateId = dateId;
		this.date = date;
		this.mealId = mealId;
		this.timeId = timeId;
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((date == null) ? 0 : date.hashCode());
		result = prime * result + dateId;
		result = prime * result + ((mealId == null) ? 0 : mealId.hashCode());
		result = prime * result + ((timeId == null) ? 0 : timeId.hashCode());
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
		DateMeal other = (DateMeal) obj;
		if (date == null) {
			if (other.date != null)
				return false;
		} else if (!date.equals(other.date))
			return false;
		if (dateId != other.dateId)
			return false;
		if (mealId == null) {
			if (other.mealId != null)
				return false;
		} else if (!mealId.equals(other.mealId))
			return false;
		if (timeId == null) {
			if (other.timeId != null)
				return false;
		} else if (!timeId.equals(other.timeId))
			return false;
		return true;
	}

	public int getDateId() {
		return dateId;
	}

	public void setDateId(int dateId) {
		this.dateId = dateId;
	}

	public String getDate() {
		return date;
	}

	public void setDate(String date) {
		this.date = date;
	}

	public Meal getMealId() {
		return mealId;
	}

	public void setMealId(Meal mealId) {
		this.mealId = mealId;
	}

	public TimeOfTable getTimeId() {
		return timeId;
	}

	public void setTimeId(TimeOfTable timeId) {
		this.timeId = timeId;
	}

	@Override
	public String toString() {
		return "DateMeal [dateId=" + dateId + ", date=" + date + ", mealId=" + mealId + ", timeId=" + timeId + "]";
	}
	
	
}
