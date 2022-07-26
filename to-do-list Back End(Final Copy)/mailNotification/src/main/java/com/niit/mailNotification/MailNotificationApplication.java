package com.niit.mailNotification;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;

@SpringBootApplication
@EnableEurekaClient
public class MailNotificationApplication {

	public static void main(String[] args) {
		SpringApplication.run(MailNotificationApplication.class, args);
	}

}
