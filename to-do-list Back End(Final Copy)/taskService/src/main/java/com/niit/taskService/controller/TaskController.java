package com.niit.taskService.controller;


import com.niit.taskService.exception.PriorityNotFoundException;
import com.niit.taskService.exception.TaskAlreadyExistingException;
import com.niit.taskService.exception.TaskNotFoundException;
import com.niit.taskService.exception.UserNotFoundException;
import com.niit.taskService.model.Task;
import com.niit.taskService.service.TaskService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/taskservice")
public class TaskController {

    @Autowired
    private TaskService ts;

    @GetMapping("/getalltasks")
    public ResponseEntity<?> getAllTasks(){
        return new ResponseEntity<>(ts.getAllaTasks(), HttpStatus.OK);
    }

    @PostMapping("/addtask")
    public ResponseEntity<?> addTask(@RequestBody Task task) throws TaskAlreadyExistingException {
        return new ResponseEntity<>(ts.addTask(task),HttpStatus.OK);
    }

    @GetMapping("/gettaskbyemailid/{emailId}")
    public ResponseEntity<?> getTaskByEmailId(@PathVariable String emailId){
        return new ResponseEntity<>(ts.getTaskByEmailId(emailId),HttpStatus.OK);
    }

    @PutMapping("/update")
    public ResponseEntity<?> updateTask(@RequestBody Task task) throws TaskNotFoundException {
        return new ResponseEntity<>(ts.updateTask(task),HttpStatus.OK);
    }

    @DeleteMapping("/delete/{taskId}")
    public ResponseEntity<?> deleteTask(@PathVariable String taskId) throws TaskNotFoundException {
        return new ResponseEntity<>(ts.deleteTask(taskId),HttpStatus.OK);
    }

    @GetMapping("/gettask/{emailId}/{priority}")
    public ResponseEntity<?> getTaskByPriority(@PathVariable  String emailId,@PathVariable  String priority) throws UserNotFoundException, PriorityNotFoundException {
        return new ResponseEntity<>(ts.getTaskByPriority(emailId,priority),HttpStatus.OK);
    }
}
