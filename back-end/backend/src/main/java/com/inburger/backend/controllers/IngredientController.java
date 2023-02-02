package com.inburger.backend.controllers;

import com.inburger.backend.models.Ingredient;
import com.inburger.backend.repositories.IngredientRepository;
import com.inburger.backend.services.IngredientService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping(path = "test/")
public class IngredientController {

    private IngredientService ingredientService;
    private final IngredientRepository ingredientRepository;

    @Autowired
    private IngredientController(IngredientRepository ingredientRepository,
                                 IngredientService ingredientService){
        this.ingredientRepository = ingredientRepository;
        this.ingredientService = ingredientService;
    }

    @GetMapping(value = "ingredients/")
    public List<Ingredient> getAllIngredient(){
        return ingredientService.getAllIngredient();
    }

}
