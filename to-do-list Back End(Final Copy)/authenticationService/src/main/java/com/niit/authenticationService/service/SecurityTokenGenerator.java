package com.niit.authenticationService.service;

import com.niit.authenticationService.model.User;

import java.util.Map;

public interface SecurityTokenGenerator {
    public abstract Map<String, String> generateToken(User user);

}
