package com.niit.taskService;

import com.niit.taskService.model.Task;
import com.niit.taskService.repository.TaskRepository;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.data.mongo.DataMongoTest;
import org.springframework.test.context.junit.jupiter.SpringExtension;

import java.time.LocalDate;

import static org.junit.jupiter.api.Assertions.assertEquals;

@ExtendWith(SpringExtension.class)
@DataMongoTest
public class TaskRepositoryTest {
    @Autowired
    private TaskRepository tr;
    private Task task;

    @BeforeEach
    public void setup(){
        LocalDate date=LocalDate.parse("2022-05-18");
        task=new Task("10","a@a.com","project","meeting",date,"","high");

    }
    @AfterEach
    public  void clean(){
        task=null;
        tr.deleteAll();
    }
    @Test
    public void givenTaskToSaveReturnTask(){
        tr.insert(task);
        Task result=tr.findById(task.getTaskId()).get();
        assertEquals(result.getTaskTitle(),task.getTaskTitle());
    }
}
