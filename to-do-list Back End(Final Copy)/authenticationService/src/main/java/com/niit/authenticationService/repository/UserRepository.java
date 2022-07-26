package com.niit.authenticationService.repository;

import com.niit.authenticationService.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface UserRepository extends JpaRepository<User,String> {

    List<User> findByEmailId(String emailId);
}
