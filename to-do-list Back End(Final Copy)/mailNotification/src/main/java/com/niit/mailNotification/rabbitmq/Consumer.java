package com.niit.mailNotification.rabbitmq;

import com.mysql.cj.xdevapi.JsonParser;
import com.niit.mailNotification.model.Email;
import com.niit.mailNotification.service.EmailService;
import org.springframework.amqp.rabbit.annotation.RabbitListener;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class Consumer {

    @Autowired
    private EmailService emailService;

    @RabbitListener(queues="user_queue")
    public void getEmailIdFromRabbitmq(DTO dto){
        Email email=new Email();
        email.setEmailId(dto.getEmailId());
        email.setPassword(dto.getPassword());

        emailService.sendEmail(email);
    }

//    @RabbitListener(queues="user_queue")
//    public void getEmailIdFromRabbitmq1(DTO dto){
//        Email email=new Email();
//        email.setEmailId(dto.getEmailId());
//        emailService.sendEmail(email);
//    }
}
