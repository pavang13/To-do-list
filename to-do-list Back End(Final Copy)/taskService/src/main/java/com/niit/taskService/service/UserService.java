package com.niit.taskService.service;

import com.niit.taskService.exception.UserAlreadyExistsException;
import com.niit.taskService.exception.UserNotFoundException;
import com.niit.taskService.model.User;

import java.util.List;

public interface UserService {
    public abstract User addUser(User user) throws UserAlreadyExistsException;
    public abstract User addUser1(User user) throws UserAlreadyExistsException;
    public abstract User updateUser(User user)throws UserNotFoundException;
    public List<User> getUserByEmailId(String emailId)throws UserNotFoundException;
    public String getPasswordByEmailId(String emailId)throws UserNotFoundException;

}
