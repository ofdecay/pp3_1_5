package ru.kata.spring.boot_security.demo.controllers;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import ru.kata.spring.boot_security.demo.entities.User;

@RestController
@RequestMapping("/user")
public class UserRestController {

    @GetMapping("/authUser")
    public ResponseEntity<User> getAuthUser(@AuthenticationPrincipal User user) {
        return ResponseEntity.ok(user);
    }
}
