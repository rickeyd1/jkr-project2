package com.revature.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.revature.model.Groceries;

@Repository
public interface GroceryRepo extends JpaRepository<Groceries, Integer>{

	List<Groceries> findByGroceryUserUserId(int uId);
	
}
