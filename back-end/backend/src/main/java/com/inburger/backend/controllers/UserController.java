package com.inburger.backend.controllers;

import com.inburger.backend.exceptions.ResourceNotFoundException;
import com.inburger.backend.models.User;
import com.inburger.backend.repositories.UserRepository;
import com.inburger.backend.services.UserService;
import nonapi.io.github.classgraph.json.JSONUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(path = "admin/")
@CrossOrigin("http://70.12.246.87:3000/")
public class UserController {

    private UserService userService;
    private final UserRepository userRepository;

    @Autowired
    public UserController(UserRepository userRepository,
                          UserService userService){
        this.userRepository = userRepository;
        this.userService = userService;
    }

    @GetMapping(value = "users/")
    public List<User> getAllUser(){
        return userService.getAllUser();
    }

    @PostMapping(value = "users/")
    public ResponseEntity<User> saveUser(@RequestBody User user) {
        return new ResponseEntity<User>(userService.saveUser(user), HttpStatus.CREATED);
    }

    @DeleteMapping(value = "users/")
    public void deleteUser(@RequestBody long id){
        userService.deleteUserById(id);
    }

    @PostMapping(value = "user/age/")
    public void getUserAge(@RequestBody int age) {
        System.out.println(age);
    }
}
