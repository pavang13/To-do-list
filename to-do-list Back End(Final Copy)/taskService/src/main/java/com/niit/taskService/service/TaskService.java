package com.niit.taskService.service;

import com.niit.taskService.exception.PriorityNotFoundException;
import com.niit.taskService.exception.TaskAlreadyExistingException;
import com.niit.taskService.exception.TaskNotFoundException;
import com.niit.taskService.exception.UserNotFoundException;
import com.niit.taskService.model.Task;

import java.util.List;

public interface TaskService {

    public List<Task> getAllaTasks();
    public Task addTask(Task task) throws TaskAlreadyExistingException;
    public List<Task> getTaskByEmailId(String emailId);
    public Task updateTask(Task task)throws TaskNotFoundException;
    public boolean deleteTask(String taskId)throws TaskNotFoundException;

    public List<Task> getTaskByPriority(String emailId,String priority)throws UserNotFoundException, PriorityNotFoundException;

}
