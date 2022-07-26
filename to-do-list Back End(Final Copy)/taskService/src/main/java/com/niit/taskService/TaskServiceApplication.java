package com.niit.taskService;

import com.niit.taskService.filter.JwtFilter;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.web.servlet.FilterRegistrationBean;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;
import org.springframework.cloud.openfeign.EnableFeignClients;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
@EnableEurekaClient
public class TaskServiceApplication {

	public static void main(String[] args) {
		SpringApplication.run(TaskServiceApplication.class, args);
	}

	@Bean
	FilterRegistrationBean jwtFilter(){
		FilterRegistrationBean frb = new FilterRegistrationBean();
		frb.setFilter(new JwtFilter());
		frb.addUrlPatterns("/taskservice/*","/user/updateuser","/user/getuser/*");
		return frb;
	}

}
