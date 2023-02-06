package com.inburger.backend.services.servicesImpl;

import com.inburger.backend.models.Custom;
import com.inburger.backend.repositories.CustomRepository;
import com.inburger.backend.services.CustomService;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CustomServiceImpl implements CustomService {

    private CustomRepository customRepository;

    private CustomServiceImpl(CustomRepository customRepository) {
        super();
        this.customRepository = customRepository;
    }
    @Override
    public List<Custom> getAllCustom() {
        return customRepository.findAll();
    }
}
