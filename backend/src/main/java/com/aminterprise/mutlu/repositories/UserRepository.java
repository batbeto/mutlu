package com.aminterprise.mutlu.repositories;

import java.util.List;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.aminterprise.mutlu.entities.User;

public interface UserRepository extends JpaRepository<User, Long>{
		
	@Query("SELECT obj FROM User obj " + " WHERE obj.status = 0 OR obj.status = 2")
	List<User> findUsersActiveOrAdm();
	
	User findByEmail(String email);
}
