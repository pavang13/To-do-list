package com.niit.mailNotification.controller;

import com.niit.mailNotification.model.Email;
import com.niit.mailNotification.service.EmailService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@Slf4j
public class EmailController {

    @Autowired
    private EmailService emailService;

    public String sendEmail(@RequestBody Email email){
        try{
            //log.info("Sending Email......");
            emailService.sendEmail(email);
            return "Email sent";
        }
        catch(Exception e){
            return "Error in sending email: "+e;
        }
    }

//    public String sendEmail1(@RequestBody Email email){
//        try{
//            emailService.sendEmail1(email);
//            return "email sent";
//        }
//        catch(Exception e){
//            return "Error in sending email: "+e;
//        }
//    }
}
