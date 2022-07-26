package com.niit.taskService;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.niit.taskService.controller.UserController;
import com.niit.taskService.model.User;
import com.niit.taskService.service.UserService;
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

import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@ExtendWith({MockitoExtension.class})
public class UserControllerTest {
    @Mock
    private UserService userService;

    @InjectMocks
    private UserController userController;

    @Autowired
    private MockMvc mockMvc;

    private User user;
    @BeforeEach
    public void setup(){
        user=new User("a@a.com","Arunima","1234","karama","5622345","");
        mockMvc= MockMvcBuilders.standaloneSetup(userController).build();
    }

    @AfterEach
    public void destroy(){
        user=null;
    }
    @Test
    public void userDataToSaveSuccess() throws Exception {
        when(userService.addUser(any())).thenReturn(any());
        mockMvc.perform(
                        post("/user/register")
                                .contentType(MediaType.APPLICATION_JSON)
                                .content(convertToJson(user)))
                .andExpect(status().isCreated()).andDo(MockMvcResultHandlers.print());


    }
    private static String convertToJson(final Object obj){
        String result="";
        try{
            ObjectMapper mapper = new ObjectMapper();
            result=mapper.writeValueAsString(obj);
        }catch(Exception ex){
            ex.printStackTrace();
        }
        return result;
    }


}
