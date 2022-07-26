package com.niit.taskService.service;

import com.niit.taskService.exception.PriorityNotFoundException;
import com.niit.taskService.exception.TaskAlreadyExistingException;
import com.niit.taskService.exception.TaskNotFoundException;
import com.niit.taskService.exception.UserNotFoundException;
import com.niit.taskService.model.Task;
import com.niit.taskService.model.User;
import com.niit.taskService.repository.TaskRepository;
import com.niit.taskService.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;


@Service
public class TaskServiceImpl implements TaskService{

    @Autowired
    TaskRepository tr;

    @Autowired
    UserRepository ur;

    @Override
    public List<Task> getAllaTasks() {
        return tr.findAll();
    }

    @Override
    public Task addTask(Task task) throws TaskAlreadyExistingException {
        if(tr.findById(task.getTaskId()).isPresent()){
            throw new TaskAlreadyExistingException();
        }
        else{
            return tr.save(task);
        }
    }

    @Override
    public List<Task> getTaskByEmailId(String emailId) {
        return tr.findByEmailId(emailId);
    }

    @Override
    public Task updateTask(Task task) throws TaskNotFoundException {
        if(tr.findById(task.getTaskId()).isPresent()){
            return tr.save(task);
        }
        else{
            throw new TaskNotFoundException();

        }

    }

    @Override
    public boolean deleteTask(String taskId) throws TaskNotFoundException {
        if(tr.findById(taskId).isPresent()){
            tr.deleteById(taskId);
            return true;
        }
        else{
            throw new TaskNotFoundException();
        }
    }

    @Override
    public List<Task> getTaskByPriority(String emailId, String priority) throws UserNotFoundException, PriorityNotFoundException  {
//        return tr.findAll().stream().filter(c->c.getPriority().equalsIgnoreCase(priority)).collect(Collectors.toList());
        List<Task> result=tr.findAll().stream().filter(c->c.getEmailId().equalsIgnoreCase(emailId)).collect(Collectors.toList());
        if(result.isEmpty()){
            throw new UserNotFoundException();
        }
        else{
            return result.stream().filter(p->p.getPriority().equalsIgnoreCase(priority)).collect(Collectors.toList());
        }
    }


}
