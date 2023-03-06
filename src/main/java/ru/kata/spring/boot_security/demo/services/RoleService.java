package ru.kata.spring.boot_security.demo.services;

import ru.kata.spring.boot_security.demo.entities.Role;

import java.util.List;

public interface RoleService {
    List<Role> findAll();
    void save(Role role);
    void deleteById(Long id);
    Role findById(Long id);
}
