package com.niit.taskService.repository;

import com.niit.taskService.model.Task;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface TaskRepository extends MongoRepository<Task,String> {

     public List<Task> findByEmailId(String emailId);

    List<Task> findByPriority(String emailId, String priority);
}
