package ru.kata.spring.boot_security.demo.services;

import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import ru.kata.spring.boot_security.demo.entities.User;

import java.util.List;

public interface UserService extends UserDetailsService {
    List<User> findAll();
    void save(User user);
    void deleteById(Long id);
    User findById(Long id);
    User findByUsername(String username);
    UserDetails loadUserByUsername(String username);

}
