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
import java.util.HashMap;
import java.util.List;

@RestController
@RequestMapping(path = "/inburger")
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

    // 메뉴 저장
    @PostMapping(value="/menu")
    public Menu createMenu(@RequestBody Menu menu) {
        return menuRepository.save(menu);
    }

    // 메뉴 + 유저 정보 전달
    @GetMapping(value="/menu")
    public HashMap<String, List> getAllMenu() {
        HashMap<String, List> returnMenu= new HashMap<>();
        returnMenu.put("User", userService.getAllUser());
        returnMenu.put("Menu", menuService.getAllMenu());
        return returnMenu;
    }

    // 메뉴 하나 반환
    @GetMapping(value="/menu/{id}")
    public ResponseEntity<Menu> getMenuDetail(@PathVariable("id") Long id) {
        Menu menu = menuService.getMenuDetail(id);
        return ResponseEntity.ok(menu);
    }

    // 메뉴 수정
    @PostMapping(value="/menu/{id}")
    public ResponseEntity<Menu> updateMenu(@PathVariable("id") Long id, @RequestBody Menu menuDetail) {
        Menu menu = menuService.getMenuDetail(id);

        menu.setName(menuDetail.getName());
        menu.setCategory(menuDetail.getCategory());
        menu.setPrice(menuDetail.getPrice());

        Menu updatedMenu = menuRepository.save(menu);
        return ResponseEntity.ok(updatedMenu);
    }

    //메뉴 삭제
    @DeleteMapping(value="/menu/{id}")
    public void deleteMenu(@PathVariable("id") Long id) {
        menuRepository.deleteById(id);
    }
}
