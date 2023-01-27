package com.inburger.backend.controllers;

import com.inburger.backend.repositories.CategoryRepository;
import com.inburger.backend.services.CategoryService;
import org.springframework.stereotype.Controller;

@Controller
public class CategoryController {
    private CategoryService categoryService;
    private CategoryRepository categoryRepository;

    public CategoryController(CategoryService categoryService,
                              CategoryRepository categoryRepository) {

    }
}
