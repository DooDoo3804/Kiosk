package com.inburger.backend.controllers;

import com.inburger.backend.models.Menu;
import com.inburger.backend.repositories.MenuRepository;
import com.inburger.backend.repositories.UserRepository;
import com.inburger.backend.services.MenuService;
import com.inburger.backend.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping(path = "/admin")
public class MenuController {

    private UserService userService;
    private final UserRepository userRepository;

    private MenuService menuService;
    private final MenuRepository menuRepository;

    @Autowired
    public MenuController(MenuService menuService,
                          MenuRepository menuRepository,
                          UserRepository userRepository,
                          UserService userService) {
        this.menuRepository = menuRepository;
        this.menuService = menuService;
        this.userRepository = userRepository;
        this.userService = userService;
    }

    @PostMapping(value="/menu")
    public Menu createMenu(@RequestBody Menu menu) {
        return menuRepository.save(menu);
    }

    @GetMapping(value="/menu")
    public ArrayList<List> getAllMenu() {
        ArrayList<List> returnMenu = new ArrayList<>();
        returnMenu.add(userService.getAllUser());
        returnMenu.add(menuService.getAllMenu());
        return returnMenu;
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
