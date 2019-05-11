package com.revature.model;

import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToMany;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
@JsonIgnoreProperties({ "hibernateLazyInitializer", "handler" })
// Technically it represents a day in the week
public class Week {
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name = "week_id")
	private int weekId;
	
	private String day;
	
	@Column(name = "time_of_day")
	private String timeOfDay;
	
	@ManyToMany
	private List<Meal> meal;

	public Week() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Week(int weekId, String day, String timeOfDay, List<Meal> meal) {
		super();
		this.weekId = weekId;
		this.day = day;
		this.timeOfDay = timeOfDay;
		this.meal = meal;
	}

	/**
	 * @return the weekId
	 */
	public int getWeekId() {
		return weekId;
	}

	/**
	 * @param weekId the weekId to set
	 */
	public void setWeekId(int weekId) {
		this.weekId = weekId;
	}

	/**
	 * @return the day
	 */
	public String getDay() {
		return day;
	}

	/**
	 * @param day the day to set
	 */
	public void setDay(String day) {
		this.day = day;
	}

	/**
	 * @return the timeOfDay
	 */
	public String getTimeOfDay() {
		return timeOfDay;
	}

	/**
	 * @param timeOfDay the timeOfDay to set
	 */
	public void setTimeOfDay(String timeOfDay) {
		this.timeOfDay = timeOfDay;
	}

	/**
	 * @return the meal
	 */
	public List<Meal> getMeal() {
		return meal;
	}

	/**
	 * @param meal the meal to set
	 */
	public void setMeal(List<Meal> meal) {
		this.meal = meal;
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((day == null) ? 0 : day.hashCode());
		result = prime * result + ((meal == null) ? 0 : meal.hashCode());
		result = prime * result + ((timeOfDay == null) ? 0 : timeOfDay.hashCode());
		result = prime * result + weekId;
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
		Week other = (Week) obj;
		if (day == null) {
			if (other.day != null)
				return false;
		} else if (!day.equals(other.day))
			return false;
		if (meal == null) {
			if (other.meal != null)
				return false;
		} else if (!meal.equals(other.meal))
			return false;
		if (timeOfDay == null) {
			if (other.timeOfDay != null)
				return false;
		} else if (!timeOfDay.equals(other.timeOfDay))
			return false;
		if (weekId != other.weekId)
			return false;
		return true;
	}

	@Override
	public String toString() {
		return "Week [weekId=" + weekId + ", day=" + day + ", timeOfDay=" + timeOfDay + ", meal=" + meal + "]";
	}
	
	
	
}
