package com.aminterprise.mutlu.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.aminterprise.mutlu.entities.User;

public interface UserRepository extends JpaRepository<User, Long>{
	
	@Query("SELECT DISTINCT obj FROM Order obj JOIN FETCH obj.events "
			+ " WHERE obj.status = 0")
	List<User> findUsersPending();

}
