package com.niit.taskService.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Generated;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.time.LocalDate;
import java.util.Date;
import java.util.Objects;

//@Data
//@AllArgsConstructor
//@NoArgsConstructor
@Document
public class Task {

    @Id
    private String taskId;
    private String emailId;
    private String taskTitle;
    private String description;
    private LocalDate date;
    private String image;
    private String priority;

    public Task() {
    }

    public Task(String taskId, String emailId, String taskTitle, String description, LocalDate date, String image, String priority) {
        this.taskId = taskId;
        this.emailId = emailId;
        this.taskTitle = taskTitle;
        this.description = description;
        this.date = date;
        this.image = image;
        this.priority = priority;
    }

    public String getTaskId() {
        return taskId;
    }

    public void setTaskId(String taskId) {
        this.taskId = taskId;
    }

    public String getEmailId() {
        return emailId;
    }

    public void setEmailId(String emailId) {
        this.emailId = emailId;
    }

    public String getTaskTitle() {
        return taskTitle;
    }

    public void setTaskTitle(String taskTitle) {
        this.taskTitle = taskTitle;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public LocalDate getDate() {
        return date;
    }

    public void setDate(LocalDate date) {
        this.date = date;
    }

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }

    public String getPriority() {
        return priority;
    }

    public void setPriority(String priority) {
        this.priority = priority;
    }

    @Override
    public String toString() {
        return "Task{" +
                "taskId='" + taskId + '\'' +
                ", emailId='" + emailId + '\'' +
                ", taskTitle='" + taskTitle + '\'' +
                ", description='" + description + '\'' +
                ", date=" + date +
                ", image='" + image + '\'' +
                ", priority='" + priority + '\'' +
                '}';
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof Task)) return false;
        Task task = (Task) o;
        return Objects.equals(getTaskId(), task.getTaskId()) && Objects.equals(getEmailId(), task.getEmailId()) && Objects.equals(getTaskTitle(), task.getTaskTitle()) && Objects.equals(getDescription(), task.getDescription()) && Objects.equals(getDate(), task.getDate()) && Objects.equals(getImage(), task.getImage()) && Objects.equals(getPriority(), task.getPriority());
    }

    @Override
    public int hashCode() {
        return Objects.hash(getTaskId(), getEmailId(), getTaskTitle(), getDescription(), getDate(), getImage(), getPriority());
    }
}
