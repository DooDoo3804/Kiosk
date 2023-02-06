package com.inburger.backend.controllers;

import com.inburger.backend.models.User;
import com.inburger.backend.repositories.UserRepository;
import com.inburger.backend.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.*;
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

    // 모든 유저 정보 조회
    @GetMapping(value = "users/")
    public List<User> getAllUser(){
        return userService.getAllUser();
    }

    // 나이 보내기기
//   @GetMapping(value = "users/{id}")
//    public int getUserById(@PathVariable("id") int id){
//        // FE 에서 나이 UI 바꾸고, 높이 kiosk 높이 바꾸고
//        return userService.getUserById(id).getAge();
//    }

    // 유저 정보 저장
    @PostMapping(value = "users/")
    public ResponseEntity<User> saveUser(@RequestBody User user) {
        return new ResponseEntity<User>(userService.saveUser(user), HttpStatus.CREATED);
    }

    // 유저 정보 삭제
    @DeleteMapping(value = "users/")
    public void deleteUser(@RequestBody long id){
        userService.deleteUserById(id);
    }

}
