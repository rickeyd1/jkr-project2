package com.revature.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.revature.dto.CredentialDto;
import com.revature.model.Users;

@Repository
public interface UserRepo extends JpaRepository<Users, Integer> {
	
Users findByUsernameAndPassword(String username, String password);

}
