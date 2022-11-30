package com.db.webapp;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.security.servlet.SecurityAutoConfiguration;
import com.db.webapp.Repository.V1gmrepo;
import com.db.webapp.Repository.V1nmrepo;

@SpringBootApplication(exclude = {SecurityAutoConfiguration.class})
public class WebappApplication {

 	@Autowired
	V1nmrepo v1nmrepo; 
	V1gmrepo v1gmrepo;
	
	public static void main(String[] args) {
		SpringApplication.run(WebappApplication.class, args);
	}

} 