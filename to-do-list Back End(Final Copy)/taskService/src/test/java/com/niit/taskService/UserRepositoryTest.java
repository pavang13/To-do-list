package com.niit.taskService;

import com.niit.taskService.model.Task;
import com.niit.taskService.model.User;
import com.niit.taskService.repository.UserRepository;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.data.mongo.DataMongoTest;
import org.springframework.test.context.junit.jupiter.SpringExtension;

import static org.junit.jupiter.api.Assertions.assertEquals;

@ExtendWith(SpringExtension.class)
@DataMongoTest
public class UserRepositoryTest {
    @Autowired
    private UserRepository userRepository;

    private User user;

    @BeforeEach
    public void setup(){
        user=new User("a@a.com","Arunima","1234","karama","5622345","");
    }

    @AfterEach
    public void destroy(){
        user=null;
        userRepository.deleteAll();
    }
    @Test
    public void givenUserToSaveReturnUser(){
        userRepository.insert(user);
        User result=userRepository.findById(user.getEmailId()).get();
        assertEquals(result.getUsername(),user.getUsername());
    }


}
