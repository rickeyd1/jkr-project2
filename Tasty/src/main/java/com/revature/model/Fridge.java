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
	private User userId;

	public Fridge() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Fridge(int fridgeId, User userId) {
		super();
		this.fridgeId = fridgeId;
		this.userId = userId;
	}

	/**
	 * @return the fridgeId
	 */
	public int getFridgeId() {
		return fridgeId;
	}

	/**
	 * @param fridgeId the fridgeId to set
	 */
	public void setFridgeId(int fridgeId) {
		this.fridgeId = fridgeId;
	}

	/**
	 * @return the userId
	 */
	public User getUserId() {
		return userId;
	}

	/**
	 * @param userId the userId to set
	 */
	public void setUserId(User userId) {
		this.userId = userId;
	}

	@Override
	public String toString() {
		return "Fridge [fridgeId=" + fridgeId + ", userId=" + userId + "]";
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + fridgeId;
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
		if (userId == null) {
			if (other.userId != null)
				return false;
		} else if (!userId.equals(other.userId))
			return false;
		return true;
	}
}
