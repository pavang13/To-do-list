package com.niit.taskService.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Generated;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.List;
import java.util.Objects;

//@Data
//@AllArgsConstructor
//@NoArgsConstructor
@Document
public class User {

    @Id

    private String emailId;
    private String username;
    private String password;
    private String address;
    private String mobileNo;
    private String image;

    public User() {
    }

    public User(String emailId, String username, String password, String address, String mobileNo, String image) {
        this.emailId = emailId;
        this.username = username;
        this.password = password;
        this.address = address;
        this.mobileNo = mobileNo;
        this.image = image;
    }

    public String getEmailId() {
        return emailId;
    }

    public void setEmailId(String emailId) {
        this.emailId = emailId;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getMobileNo() {
        return mobileNo;
    }

    public void setMobileNo(String mobileNo) {
        this.mobileNo = mobileNo;
    }

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }

    @Override
    public String toString() {
        return "User{" +
                "emailId='" + emailId + '\'' +
                ", username='" + username + '\'' +
                ", password='" + password + '\'' +
                ", address='" + address + '\'' +
                ", mobileNo='" + mobileNo + '\'' +
                ", image='" + image + '\'' +
                '}';
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof User)) return false;
        User user = (User) o;
        return Objects.equals(getEmailId(), user.getEmailId()) && Objects.equals(getUsername(), user.getUsername()) && Objects.equals(getPassword(), user.getPassword()) && Objects.equals(getAddress(), user.getAddress()) && Objects.equals(getMobileNo(), user.getMobileNo()) && Objects.equals(getImage(), user.getImage());
    }

    @Override
    public int hashCode() {
        return Objects.hash(getEmailId(), getUsername(), getPassword(), getAddress(), getMobileNo(), getImage());
    }
}
