package com.inburger.backend.controllers;

import com.inburger.backend.models.Menu;
import com.inburger.backend.repositories.MenuRepository;
import com.inburger.backend.services.MenuService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(path = "test/")
public class MenuController {

    private MenuService menuService;
    private final MenuRepository menuRepository;

    @Autowired
    public MenuController(MenuService menuService,
                          MenuRepository menuRepository) {
        this.menuRepository = menuRepository;
        this.menuService = menuService;
    }

    @PostMapping(value = "menu/")
    public Menu createMenu(@RequestBody Menu menu) {
        return menuRepository.save(menu);
    }

    @GetMapping(value = "menu/")
    public List<Menu> getAllMenu() {
        return menuService.getAllMenu();
    }
}
