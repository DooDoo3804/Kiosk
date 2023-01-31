package com.inburger.backend.services.servicesImpl;

import com.inburger.backend.models.User;
import com.inburger.backend.repositories.UserRepository;
import com.inburger.backend.services.UserService;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserServiceImpl implements UserService {

    private UserRepository userRepository;

    public UserServiceImpl(UserRepository userRepository){
        super();
        this.userRepository = userRepository;
    }

    @Override
    public List<User> getAllUsers() {
        return userRepository.findAll();
    }
}
