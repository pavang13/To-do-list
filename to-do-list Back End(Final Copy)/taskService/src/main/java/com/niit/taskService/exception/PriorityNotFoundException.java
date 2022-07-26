package com.niit.taskService.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(code= HttpStatus.CONFLICT,reason = "Your Prioritized Task is Not Found")
public class PriorityNotFoundException extends Exception{
}
