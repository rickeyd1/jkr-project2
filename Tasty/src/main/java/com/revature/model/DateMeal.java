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
public class DateMeal {

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private int dateMealId;
	
	@Column(name="day", nullable=false)
	private String date;
	
	@OneToOne
	private Meal meal;
	
	@OneToOne
	private TimeOfTable time;

	public DateMeal() {
		super();
		// TODO Auto-generated constructor stub
	}

	public DateMeal(int dateMealId, String date, Meal meal, TimeOfTable time) {
		super();
		this.dateMealId = dateMealId;
		this.date = date;
		this.meal = meal;
		this.time = time;
	}

	public int getDateMealId() {
		return dateMealId;
	}

	public void setDateMealId(int dateMealId) {
		this.dateMealId = dateMealId;
	}

	public String getDate() {
		return date;
	}

	public void setDate(String date) {
		this.date = date;
	}

	public Meal getMeal() {
		return meal;
	}

	public void setMeal(Meal meal) {
		this.meal = meal;
	}

	public TimeOfTable getTime() {
		return time;
	}

	public void setTime(TimeOfTable time) {
		this.time = time;
	}

	@Override
	public String toString() {
		return "DateMeal [dateMealId=" + dateMealId + ", date=" + date + ", meal=" + meal + ", time=" + time + "]";
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((date == null) ? 0 : date.hashCode());
		result = prime * result + dateMealId;
		result = prime * result + ((meal == null) ? 0 : meal.hashCode());
		result = prime * result + ((time == null) ? 0 : time.hashCode());
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
		if (dateMealId != other.dateMealId)
			return false;
		if (meal == null) {
			if (other.meal != null)
				return false;
		} else if (!meal.equals(other.meal))
			return false;
		if (time == null) {
			if (other.time != null)
				return false;
		} else if (!time.equals(other.time))
			return false;
		return true;
	}
	
}