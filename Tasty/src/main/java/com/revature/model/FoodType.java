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
public class FoodType {

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name = "type_id")
	private int typeId;
	
	@Column(name = "type_name", nullable = false, unique = true)
	private String typeName;
	
	@OneToOne
	private Unit units;

	public FoodType() {
		super();
		// TODO Auto-generated constructor stub
	}

	public FoodType(int typeId, String typeName, Unit units) {
		super();
		this.typeId = typeId;
		this.typeName = typeName;
		this.units = units;
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + typeId;
		result = prime * result + ((typeName == null) ? 0 : typeName.hashCode());
		result = prime * result + ((units == null) ? 0 : units.hashCode());
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
		FoodType other = (FoodType) obj;
		if (typeId != other.typeId)
			return false;
		if (typeName == null) {
			if (other.typeName != null)
				return false;
		} else if (!typeName.equals(other.typeName))
			return false;
		if (units == null) {
			if (other.units != null)
				return false;
		} else if (!units.equals(other.units))
			return false;
		return true;
	}

	/**
	 * @return the typeId
	 */
	public int getTypeId() {
		return typeId;
	}

	/**
	 * @param typeId the typeId to set
	 */
	public void setTypeId(int typeId) {
		this.typeId = typeId;
	}

	/**
	 * @return the typeName
	 */
	public String getTypeName() {
		return typeName;
	}

	/**
	 * @param typeName the typeName to set
	 */
	public void setTypeName(String typeName) {
		this.typeName = typeName;
	}

	/**
	 * @return the units
	 */
	public Unit getUnits() {
		return units;
	}

	/**
	 * @param units the units to set
	 */
	public void setUnits(Unit units) {
		this.units = units;
	}

	@Override
	public String toString() {
		return "FoodType [typeId=" + typeId + ", typeName=" + typeName + ", units=" + units + "]";
	}
	
	
	
}
