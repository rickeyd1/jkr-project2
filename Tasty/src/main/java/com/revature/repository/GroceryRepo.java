package com.revature.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.revature.model.Groceries;

@Repository
public interface GroceryRepo extends JpaRepository<Groceries, Integer>{
	
}
