package com.niit.authenticationService.proxy;

import com.niit.authenticationService.model.User;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

@FeignClient(name="todolist-service",url="localhost:8061")
public interface UserProxy {

    @PostMapping("/user/dto")
    public ResponseEntity<?> addUser(@RequestBody User user);

}
