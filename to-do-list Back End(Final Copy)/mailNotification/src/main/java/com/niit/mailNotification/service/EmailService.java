package com.niit.mailNotification.service;

import com.niit.mailNotification.model.Email;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

@Service
public class EmailService {

    @Autowired
    private JavaMailSender javaMailSender;

//    public void sendEmail1(Email email){
//        SimpleMailMessage msg=new SimpleMailMessage();
//        try{
//            msg.setTo(email.getEmailId());
//            msg.setSubject("Registration");
//            msg.setText("You have successfully registered.Please continue with login.");
//            javaMailSender.send(msg);
//        }
//        catch(Exception e){
//            e.printStackTrace();
//        }
//    }

    public void sendEmail(Email email){
        SimpleMailMessage msg=new SimpleMailMessage();
        try{
            if(email.getPassword()==null){
                msg.setTo(email.getEmailId());
                msg.setSubject("Registration");
                msg.setText("You have successfully registered.Please continue with login.");
                javaMailSender.send(msg);

            }
             else {
                msg.setTo(email.getEmailId());
                msg.setSubject("Password");
                msg.setText(" Your Password is " + email.getPassword());
                javaMailSender.send(msg);
            }
        }
        catch(Exception e){
            e.printStackTrace();

        }
    }
}
