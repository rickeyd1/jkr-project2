package com.revature.model;

import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
@JsonIgnoreProperties({ "hibernateLazyInitializer", "handler" })
@Table(name = "time_of_day")
public class TimeOfTable {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "time_id")
	private int timeId;
	
	@Column(name = "time_name", nullable = false, unique = true)
	private String timeName;

	@OneToMany
	private List<DateMeal> daydate;
	public TimeOfTable() {
		super();
		// TODO Auto-generated constructor stub
	}

	public TimeOfTable(int timeId, String day, String timeName) {
		super();
		this.timeId = timeId;
		this.day = day;
		this.timeName = timeName;
	}

	public int getTimeId() {
		return timeId;
	}

	public void setTimeId(int timeId) {
		this.timeId = timeId;
	}

	public String getDay() {
		return day;
	}

	public void setDay(String day) {
		this.day = day;
	}

	public String getTimeName() {
		return timeName;
	}

	public void setTimeName(String timeName) {
		this.timeName = timeName;
	}

	@Override
	public String toString() {
		return "TimeOfTable [timeId=" + timeId + ", day=" + day + ", timeName=" + timeName + "]";
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((day == null) ? 0 : day.hashCode());
		result = prime * result + timeId;
		result = prime * result + ((timeName == null) ? 0 : timeName.hashCode());
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
		TimeOfTable other = (TimeOfTable) obj;
		if (day == null) {
			if (other.day != null)
				return false;
		} else if (!day.equals(other.day))
			return false;
		if (timeId != other.timeId)
			return false;
		if (timeName == null) {
			if (other.timeName != null)
				return false;
		} else if (!timeName.equals(other.timeName))
			return false;
		return true;
	}
	
	
}
