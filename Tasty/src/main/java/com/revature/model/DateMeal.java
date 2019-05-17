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
	private int mealId;
	
	@OneToOne
	private int timeId;
}
