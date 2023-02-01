package com.inburger.backend.repository;

import com.inburger.backend.BackendApplicationTests;
import com.inburger.backend.models.Category;
import com.inburger.backend.repositories.CategoryRepository;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;

import static org.junit.jupiter.api.Assertions.*;
public class CategoryRepositoryTest extends BackendApplicationTests {

    @Autowired
    private CategoryRepository categoryRepository;

    @AfterEach
    public void cleanup() {
        categoryRepository.deleteAll();
    }

    @Test
    void insert(){
        String name = "hamburger";
        Category category = new Category();
        category.setName(name);


        //when
        categoryRepository.save(category);

        //then
        assertEquals(name, category.getName());
    }
}
