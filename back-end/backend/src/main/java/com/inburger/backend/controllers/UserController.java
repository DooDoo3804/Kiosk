package com.inburger.backend.controllers;

import com.inburger.backend.models.User;
import com.inburger.backend.repositories.UserRepository;
import com.inburger.backend.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(path = "admin/")
public class UserController {

    private UserService userService;
    private final UserRepository userRepository;

    @Autowired
    public UserController(UserRepository userRepository,
                          UserService userService){
        this.userRepository = userRepository;
        this.userService = userService;
    }

    @GetMapping(value = "user/")
    public List<User> getAllUsers() {
        return userService.getAllUsers();
    }

    @PostMapping(value = "user/")
    public User createUser(@RequestBody User user) {
        return userRepository.save(user);
    }
}
