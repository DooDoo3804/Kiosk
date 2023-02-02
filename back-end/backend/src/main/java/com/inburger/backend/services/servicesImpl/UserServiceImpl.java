package com.inburger.backend.services.servicesImpl;

import com.inburger.backend.exceptions.ResourceNotFoundException;
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
    public List<User> getAllUser() {
        return userRepository.findAll();
    }

    @Override
    public User saveUser(User user) {
        return userRepository.save(user);
    }

    @Override
    public void deleteUserById(long id) {
        userRepository.findById(id).orElseThrow(() ->
        new ResourceNotFoundException("User", "id", id));
        userRepository.deleteById(id);
    }
}
