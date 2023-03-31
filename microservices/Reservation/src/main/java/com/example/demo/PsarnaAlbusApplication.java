package com.example.demo;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

//Swagger - http://localhost:8080/swagger-ui/index.html
@SpringBootApplication(scanBasePackages={
		"com.example.demo.pes", "com.example.demo"})
public class PsarnaAlbusApplication {

	private static final Logger LOGGER = LogManager.getLogger(PsarnaAlbusApplication.class);

	public static void main(String[] args) {
		SpringApplication.run(PsarnaAlbusApplication.class, args);
	}

}
