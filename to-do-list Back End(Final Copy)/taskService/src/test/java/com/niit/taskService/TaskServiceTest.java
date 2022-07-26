package com.niit.taskService;

import com.niit.taskService.exception.TaskAlreadyExistingException;
import com.niit.taskService.model.Task;
import com.niit.taskService.repository.TaskRepository;
import com.niit.taskService.service.TaskServiceImpl;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import java.time.LocalDate;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.*;

@ExtendWith(MockitoExtension.class)
public class TaskServiceTest {
    @Mock
    private TaskRepository tr;
    @InjectMocks
    private TaskServiceImpl tl;
    private Task task;

    @BeforeEach
    public void setup() {
        LocalDate date = LocalDate.parse("2022-05-18");
        task = new Task("10", "a@a.com", "Project", "meeting", date, "", "high");
    }

    @AfterEach
    public void clean() {
        task = null;

    }

    @Test
    public void saveTaskDetailsReturnTask() throws TaskAlreadyExistingException {
//        when(tr.findById(task.getTaskId())).thenReturn(Optional.ofNullable(null));
//        when(tr.insert(task)).thenReturn(task);
//        assertEquals(task,tl.addTask(task));
        when(tr.save(task)).thenReturn(task);
        assertEquals(task, tl.addTask(task));
        verify(tr, times(1)).save(task);
    }
}

