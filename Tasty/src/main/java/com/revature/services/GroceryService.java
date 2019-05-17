package com.revature.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.revature.model.Groceries;
import com.revature.repository.GroceryRepo;

@Service
public class GroceryService {
	
	@Autowired
	private GroceryRepo groceryRepo;
	
	public Groceries save(Groceries gList) {
		return groceryRepo.save(gList);
	}

	public Groceries findById(int id) {
		// TODO Auto-generated method stub
		return groceryRepo.getOne(id);
	}
}
