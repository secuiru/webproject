package com.db.webapp;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.security.servlet.SecurityAutoConfiguration;
import com.db.webapp.Repository.*;

@SpringBootApplication(exclude = {SecurityAutoConfiguration.class})
public class WebappApplication {

 	@Autowired
	V1nmrepo v1nmrepo; 
	V1gmrepo v1gmrepo;
	V1smrepo v1smrepo;
	V1nmrepo v1narepo; 
	V1gmrepo v1garepo;
	V1smrepo v1sarepo;
	V2repo v2repo;
	V5repo v5repo;
	
	public static void main(String[] args) {
		SpringApplication.run(WebappApplication.class, args);
	}

} 