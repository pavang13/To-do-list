package com.niit.mailNotification.rabbitmq;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;


public class DTO {

    private String emailId;
    private String password;

    public DTO() {
    }

    public DTO(String emailId, String password) {
        this.emailId = emailId;
        this.password = password;
    }

    public String getEmailId() {
        return emailId;
    }

    public void setEmailId(String emailId) {
        this.emailId = emailId;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    @Override
    public String toString() {
        return "DTO{" +
                "emailId='" + emailId + '\'' +
                ", password='" + password + '\'' +
                '}';
    }
}
