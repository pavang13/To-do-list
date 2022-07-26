package com.niit.taskService.repository;

import com.niit.taskService.model.User;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface UserRepository extends MongoRepository<User,String> {
    List<User> findByEmailId(String emailId);
}
