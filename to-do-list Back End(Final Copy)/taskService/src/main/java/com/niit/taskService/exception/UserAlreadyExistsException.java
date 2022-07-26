package com.niit.taskService.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(code= HttpStatus.CONFLICT,reason = "User Already Existing")
public class UserAlreadyExistsException extends Exception{
}
