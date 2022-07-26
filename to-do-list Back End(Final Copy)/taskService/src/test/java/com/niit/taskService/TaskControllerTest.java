package com.niit.taskService;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.SerializationFeature;
import com.fasterxml.jackson.datatype.jsr310.JavaTimeModule;
import com.niit.taskService.controller.TaskController;
import com.niit.taskService.model.Task;
import com.niit.taskService.service.TaskService;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.result.MockMvcResultHandlers;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;

import java.time.LocalDate;

import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.*;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@ExtendWith(MockitoExtension.class)
public class TaskControllerTest {
    @Mock
    private TaskService taskService;

    @InjectMocks
    private TaskController taskController;

    @Autowired
    private MockMvc mockMvc;

    private Task task;
    @BeforeEach
    public void setup(){
        LocalDate date=LocalDate.parse("2022-08-20");
        task=new Task("10","a@a.com","Project","meeting",date,"ser","high");
        mockMvc= MockMvcBuilders.standaloneSetup(taskController).build();
    }
    @AfterEach
    public void clean() {

        task= null;
    }
    @Test
    public void tasktDataToSaveSuccess() throws Exception {
        when(taskService.addTask(any())).thenReturn(task);

        mockMvc.perform(
                        post("/taskservice/addtask")
                                .contentType(MediaType.APPLICATION_JSON)
                                .content(convertToJson(task)))
                .andExpect(status().isOk()).andDo(MockMvcResultHandlers.print());
        verify(taskService,times(1)).addTask(any());


    }
    private static String convertToJson(final Object obj){
        String result="";
        try{
            ObjectMapper mapper=new ObjectMapper();
            mapper.registerModule(new JavaTimeModule());
            mapper.configure(SerializationFeature.WRITE_DATES_AS_TIMESTAMPS,false);
            result=mapper.writeValueAsString(obj);
        }
        catch (JsonProcessingException e)
        {
            e.printStackTrace();
            result="JsonProcessingException";
        }
        return result;
    }
}
