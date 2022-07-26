package com.niit.taskService.controller;

import com.niit.taskService.exception.UserAlreadyExistsException;
import com.niit.taskService.exception.UserNotFoundException;
import com.niit.taskService.model.User;
import com.niit.taskService.service.UserService;
import org.springframework.http.HttpStatus;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/user")
public class UserController {

    @Autowired
    private UserService us;

    @PostMapping("/register")
    public ResponseEntity<?> addUser(@RequestBody User user)throws UserAlreadyExistsException{
        return new ResponseEntity<>(us.addUser(user),HttpStatus.CREATED);
    }

    @PostMapping("/dto")
    public ResponseEntity<?> addUser1(@RequestBody User user) throws UserAlreadyExistsException {
        return new ResponseEntity<>(us.addUser1(user),HttpStatus.OK);
    }

    @PutMapping("/updateuser")
    public ResponseEntity<?> updateUser(@RequestBody User user)throws UserNotFoundException {
        try{
            return new ResponseEntity<>(us.updateUser(user),HttpStatus.OK);
        }
        catch(Exception e){
            throw new UserNotFoundException();
        }
    }

    @GetMapping("/getuser/{emailId}")
    public ResponseEntity<?> getUser(@PathVariable String emailId)throws UserNotFoundException{
        try{
            return new ResponseEntity<>(us.getUserByEmailId(emailId),HttpStatus.OK);
        }
        catch(Exception ex){
            throw new UserNotFoundException();
        }
    }

    @GetMapping("/getPassword/{emailId}")
    public ResponseEntity<?> getPassword(@PathVariable String emailId)throws UserNotFoundException{
        try{
            return new ResponseEntity<>(us.getPasswordByEmailId(emailId),HttpStatus.OK);
        }
        catch(Exception ex){
            throw new UserNotFoundException();
        }
    }
}
