package com.niit.authenticationService.controller;

import com.niit.authenticationService.exception.UserAlreadyExistsException;
import com.niit.authenticationService.exception.UserNotFoundException;
import com.niit.authenticationService.model.User;
import com.niit.authenticationService.repository.UserRepository;
import com.niit.authenticationService.service.SecurityTokenGenerator;
import com.niit.authenticationService.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/authentication")
public class UserController {

    private UserService us;

    private SecurityTokenGenerator stg;

    @Autowired
    public UserController(UserService us, SecurityTokenGenerator stg) {
        this.us = us;
        this.stg = stg;
    }

    @PostMapping("/login")
    public ResponseEntity<?> loginCheck(@RequestBody User user ) throws UserNotFoundException {
        Map<String, String> map=null;
        try{
            User result = us.authenticateUser(user.getEmailId(),user.getPassword());

            map= stg.generateToken(result);
            return new ResponseEntity<>(map, HttpStatus.OK);
        }
        catch(UserNotFoundException ex){
            throw new UserNotFoundException();
        }
        catch(Exception ex){
            return new ResponseEntity<>("Other exception",HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PostMapping("/register")
    public ResponseEntity<?> saveUser(@RequestBody User user) throws UserAlreadyExistsException {
        try {
            return new ResponseEntity<>(us.saveUser(user), HttpStatus.CREATED);
        } catch (Exception ex) {
            throw new UserAlreadyExistsException();
        }
    }



}
