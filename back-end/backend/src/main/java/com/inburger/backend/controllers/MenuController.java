package com.inburger.backend.controllers;

import com.inburger.backend.models.Menu;
import com.inburger.backend.repositories.MenuRepository;
import com.inburger.backend.services.MenuService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(path = "/admin")
public class MenuController {

    private MenuService menuService;
    private final MenuRepository menuRepository;

    @Autowired
    public MenuController(MenuService menuService,
                          MenuRepository menuRepository) {
        this.menuRepository = menuRepository;
        this.menuService = menuService;
    }

    @PostMapping(value="/menu")
    public Menu createMenu(@RequestBody Menu menu) {
        return menuRepository.save(menu);
    }

    @GetMapping(value="/menu")
    public List<Menu> getAllMenu() {
        return menuService.getAllMenu();
    }

    @GetMapping(value="/menu/{id}")
    public ResponseEntity<Menu> getMenuDetail(@PathVariable("id") Long id) {
        Menu menu = menuService.getMenuDetail(id);
        return ResponseEntity.ok(menu);
    }

    @PostMapping(value="/menu/{id}")
    public ResponseEntity<Menu> updateMenu(@PathVariable("id") Long id, @RequestBody Menu menuDetail) {
        Menu menu = menuService.getMenuDetail(id);

        menu.setName(menuDetail.getName());
        menu.setCategory(menuDetail.getCategory());
        menu.setPrice(menuDetail.getPrice());

        Menu updatedMenu = menuRepository.save(menu);
        return ResponseEntity.ok(updatedMenu);
    }

    @DeleteMapping(value="/menu/{id}")
    public void deleteMenu(@PathVariable("id") Long id) {
        menuRepository.deleteById(id);
    }


}
