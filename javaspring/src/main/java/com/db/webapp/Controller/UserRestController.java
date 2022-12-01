package com.db.webapp.Controller;
import java.util.Base64;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import com.db.webapp.Repository.*;
import com.db.webapp.Service.SecurityService;
import com.db.webapp.model.*;

import org.springframework.web.bind.annotation.CrossOrigin;

@CrossOrigin
@RestController
public class UserRestController {
    @Autowired
    SecurityService uRepo;
    @Autowired
    private V1gmrepo v1gmrepo;
    @Autowired
    private V1nmrepo v1nmrepo;
    @Autowired
    private V1smrepo v1smrepo;
    @Autowired
    private V1garepo v1garepo;
    @Autowired
    private V1narepo v1narepo;
    @Autowired
    private V1sarepo v1sarepo;
    @Autowired
    private V2repo v2repo;
    @Autowired
    private V5repo v5repo;
    @Autowired
    private V6repo v6repo;

    @PostMapping("register")
    public ResponseEntity<String> register(
            @RequestParam String username,
            @RequestParam String password,
            @RequestParam String email) {
        User u = uRepo.register(username, email, password);
        return new ResponseEntity<>(u.getUsername(), HttpStatus.OK);
    }

    @PostMapping("login")
    public ResponseEntity<String> login(
            @RequestParam String username,
            @RequestParam String password) {
        String token = uRepo.login(username, password);

        if (token == null) {
            return new ResponseEntity<>(HttpStatus.UNAUTHORIZED);
        }

        return new ResponseEntity<>(token, HttpStatus.OK);
    }

    @PostMapping("delete")
    public String delete(
            @RequestParam String username,
            @RequestParam String password) {
        uRepo.delete(username, password);
        return null;
    }

    @GetMapping("private")
    public ResponseEntity<String> getPrivateData(@RequestHeader("Authorization") String bearer) {

        if (bearer.startsWith("Bearer")) {
            String token = bearer.split(" ")[1];
            String username = uRepo.validateJwt(token);
            if (username != null) {
                return new ResponseEntity<>("Private data for " + username, HttpStatus.OK);
            }
        }

        return new ResponseEntity<>(HttpStatus.FORBIDDEN);
    }

    @PostMapping("loginbasic")
    public ResponseEntity<String> loginBasic(@RequestHeader("Authorization") String basicAuth) {

        String token = null;
        // "Basic uname:pw"
        if (basicAuth.startsWith("Basic")) {
            String credentials = basicAuth.split(" ")[1];
            String[] user = new String(Base64.getDecoder().decode(credentials)).split(":");
            token = uRepo.login(user[0], user[1]);
        }

        if (token == null) {
            return new ResponseEntity<>(HttpStatus.UNAUTHORIZED);
        }

        return new ResponseEntity<>(token, HttpStatus.OK);
    }

    @GetMapping("v1gm")
    List<V1gm> datav1gm() {
        return v1gmrepo.findAll();
    }
    @GetMapping("v1nm")
    List<V1nm> datav1nm() {
        return v1nmrepo.findAll();
    }
    @GetMapping("v1sm")
    List<V1sm> datav1sm() {
        return v1smrepo.findAll();
    }
    @GetMapping("v1ga")
    List<V1ga> datav1ga() {
        return v1garepo.findAll();
    }
    @GetMapping("v1na")
    List<V1na> datav1na() {
        return v1narepo.findAll();
    }
    @GetMapping("v1sa")
    List<V1sa> datav1sa() {
        return v1sarepo.findAll();
    }
    @GetMapping("v2")
    List<V2> datav2() {
        return v2repo.findAll();
    }
    @GetMapping("v5")
    List<V5> datav5() {
        return v5repo.findAll();
    }
    @GetMapping("v6")
    List<V6> datav6() {
        return v6repo.findAll();
    }






}


