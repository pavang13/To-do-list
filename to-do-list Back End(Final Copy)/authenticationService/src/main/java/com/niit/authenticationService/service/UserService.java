package com.niit.authenticationService.service;

import com.niit.authenticationService.exception.UserAlreadyExistsException;
import com.niit.authenticationService.exception.UserNotFoundException;
import com.niit.authenticationService.model.User;

import java.util.List;

public interface UserService {
    public abstract User authenticateUser(String emailId, String password)throws UserNotFoundException;
    public abstract User saveUser(User user)throws UserAlreadyExistsException;


}
