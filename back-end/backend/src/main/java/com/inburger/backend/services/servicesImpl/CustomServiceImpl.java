package com.inburger.backend.services.servicesImpl;

import com.inburger.backend.exceptions.ResourceNotFoundException;
import com.inburger.backend.models.Category;
import com.inburger.backend.models.Custom;
import com.inburger.backend.models.Ingredient;
import com.inburger.backend.models.OrderDetail;
import com.inburger.backend.repositories.CategoryRepository;
import com.inburger.backend.repositories.CustomRepository;
import com.inburger.backend.repositories.IngredientRepository;
import com.inburger.backend.services.CustomService;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CustomServiceImpl implements CustomService {

    private CustomRepository customRepository;
    private CategoryRepository categoryRepository;
    private IngredientRepository ingredientRepository;
    private CustomServiceImpl(CustomRepository customRepository,
                              CategoryRepository categoryRepository,
                              IngredientRepository ingredientRepository) {
        super();
        this.customRepository = customRepository;
        this.categoryRepository = categoryRepository;
        this.ingredientRepository = ingredientRepository;
    }
    @Override
    public List<Custom> getAllCustom() {
        return customRepository.findAll();
    }

    @Override
    public Custom saveCustom(long ingredient_id, int category_count, OrderDetail orderDetailId) {
        Ingredient ingredient = ingredientRepository.findById(ingredient_id).orElseThrow(() ->
                new ResourceNotFoundException("category", "category_id", ingredient_id));
        Custom newCustom = Custom.builder()
                .ingredient(ingredient)
                .orderDetail(orderDetailId)
                .count(category_count)
                .build();
        return newCustom;
    }

}
