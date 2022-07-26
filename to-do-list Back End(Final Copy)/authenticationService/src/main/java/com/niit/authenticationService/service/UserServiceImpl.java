package com.niit.authenticationService.service;

import com.netflix.discovery.converters.Auto;
import com.niit.authenticationService.exception.UserAlreadyExistsException;
import com.niit.authenticationService.exception.UserNotFoundException;
import com.niit.authenticationService.model.User;
import com.niit.authenticationService.proxy.UserProxy;
import com.niit.authenticationService.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserServiceImpl implements UserService{

    private UserRepository ur;

    @Autowired
    public UserServiceImpl(UserRepository ur) {
        this.ur = ur;
    }

    @Autowired
    private UserProxy userProxy;

    @Override
    public User authenticateUser(String emailId, String password) throws UserNotFoundException {
        User result=null;
        if(ur.findById(emailId).isPresent()){
            User temp=ur.findById(emailId).get();
            if(temp!=null && temp.getPassword().equals(password)){
                result=temp;
            }
            return result;
        }
        else{
            throw new UserNotFoundException();
        }
    }

    @Override
    public User saveUser(User user) throws UserAlreadyExistsException {
       if(ur.findById(user.getEmailId()).isEmpty()){
            User result= ur.save(user);
            ResponseEntity<?> response=userProxy.addUser(user);
            System.out.println("\nResponse : " + response);
            return result;
        }
        else{
            throw new UserAlreadyExistsException();
        }
    }


}
