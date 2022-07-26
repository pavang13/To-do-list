package com.niit.taskService.service;

import com.niit.taskService.exception.UserAlreadyExistsException;
import com.niit.taskService.exception.UserNotFoundException;
import com.niit.taskService.model.User;
import com.niit.taskService.rabbitmq.DTO;
import com.niit.taskService.rabbitmq.Producer;
import com.niit.taskService.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private Producer producer;


    @Override
    public User addUser(User user) throws UserAlreadyExistsException {

        if(userRepository.findById(user.getEmailId()).isEmpty()){
            return userRepository.insert(user);
        }
        else{
            throw new UserAlreadyExistsException();
        }
    }

    @Override
    public User addUser1(User user) throws UserAlreadyExistsException {
        DTO dto=new DTO();
        dto.setEmailId(user.getEmailId());
        producer.sendMessageToMq(dto);
        return userRepository.save(user);

    }

    @Override
    public User updateUser(User user) throws UserNotFoundException {
        if(userRepository.findById(user.getEmailId()).isPresent()){
            return userRepository.save(user);
        }
        else{
            throw new UserNotFoundException();

        }
    }

    @Override
    public List<User> getUserByEmailId(String emailId) throws UserNotFoundException {
        return userRepository.findByEmailId(emailId);
    }

    @Override
    public String getPasswordByEmailId(String emailId) throws UserNotFoundException {
        if(userRepository.findById(emailId).isPresent()){
            User u=userRepository.findById(emailId).get();
            String p=u.getPassword();
            DTO dto=new DTO();
            dto.setEmailId(emailId);
            dto.setPassword(p);
            producer.sendMessageToMq(dto);
            return p;
        }
        else{
            throw new UserNotFoundException();
        }
    }
}
