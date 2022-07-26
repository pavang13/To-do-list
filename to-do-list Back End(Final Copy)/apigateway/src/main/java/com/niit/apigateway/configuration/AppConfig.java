package com.niit.apigateway.configuration;

import org.springframework.cloud.gateway.route.RouteLocator;
import org.springframework.cloud.gateway.route.builder.RouteLocatorBuilder;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class AppConfig {

    @Bean
    public RouteLocator getRoutes(RouteLocatorBuilder builder){
        return builder.routes()
                .route(p->p
                        .path("/taskservice/**","/user/**")
                        .uri("http://localhost:8061"))

                .route(p->p
                        .path("/authentication/**")
                        .uri("http://localhost:8090"))
                .build();

    }
}
