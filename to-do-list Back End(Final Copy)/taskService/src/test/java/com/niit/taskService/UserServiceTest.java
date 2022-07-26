package com.niit.taskService;


import com.niit.taskService.exception.UserAlreadyExistsException;
import com.niit.taskService.model.User;
import com.niit.taskService.repository.UserRepository;
import com.niit.taskService.service.UserServiceImpl;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import java.util.Optional;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.*;

@ExtendWith({MockitoExtension.class})
public class UserServiceTest {
    @Mock
    private UserRepository userRepository;

    @InjectMocks
    private UserServiceImpl userService;

    private User user;

    @BeforeEach
    public void setup(){

        user=new User("a@a.com","Arunima","1234","karama","5622345","");
    }

    @AfterEach
    public void destroy(){
        user=null;
    }

    @Test
    public void givenUserToSaveReturnUser() throws UserAlreadyExistsException {
//        when(userRepository.save(user)).thenReturn(user);
//        Assertions.assertEquals(user,userService.addUser(user));
//        verify(userRepository,times(1)).save(user);
        when(userRepository.findById(user.getEmailId())).thenReturn(Optional.ofNullable(null));
        when(userRepository.insert(user)).thenReturn(user);
        assertEquals(user,userService.addUser(user));
//        verify(pr,times(1)).findById(product.getPdtcode());
//        verify(pr,times(1)).insert(product);
    }
}
