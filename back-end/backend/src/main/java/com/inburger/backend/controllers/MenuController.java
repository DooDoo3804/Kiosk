package com.inburger.backend.controllers;

import com.inburger.backend.exceptions.ResourceNotFoundException;
import com.inburger.backend.models.*;
import com.inburger.backend.repositories.MenuRepository;
import com.inburger.backend.repositories.OrderDetailRepository;
import com.inburger.backend.repositories.OrderRepository;
import com.inburger.backend.repositories.UserRepository;
import com.inburger.backend.services.MenuService;
import com.inburger.backend.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.*;
import java.util.stream.Collectors;
import java.util.stream.Stream;

@RestController
@RequestMapping(path = "/inburger")
@CrossOrigin("http://3.36.49.220:3000/")
public class MenuController {

    private UserService userService;
    private final UserRepository userRepository;

    private MenuService menuService;
    private final MenuRepository menuRepository;

    private OrderRepository orderRepository;
    private OrderDetailRepository orderDetailRepository;

    @Autowired
    public MenuController(MenuService menuService,
                          MenuRepository menuRepository,
                          UserRepository userRepository,
                          UserService userService,
                          OrderRepository orderRepository,
                          OrderDetailRepository orderDetailRepository) {
        this.menuRepository = menuRepository;
        this.menuService = menuService;
        this.userRepository = userRepository;
        this.userService = userService;
        this.orderRepository = orderRepository;
        this.orderDetailRepository = orderDetailRepository;
    }

    // 메뉴 저장
    @PostMapping(value="/menu")
    public Menu createMenu(@RequestBody Menu menu) {
        return menuRepository.save(menu);
    }

    // 유저 정보를 받고 메뉴 + 유저 정보 전달
    @GetMapping(value="/menu/user/{id}")
    public Map<MenuDTO, Integer> getAllMenu(@PathVariable("id") Long id) {
//        HashMap<String, List> returnMenu= new HashMap<>();
//        returnMenu.put("User", userService.getAllUser());
//        returnMenu.put("Menu", menuService.getAllMenu());
        // 추천 메뉴 검색
        // 해당 유저 검색
        User order_user = userRepository.findById(id).orElseThrow(()->
                new ResourceNotFoundException("user", "id", id));

        // 해당 유저의 history 조회
        System.out.println(order_user);
        List<Order> historyList = order_user.getHistory();
        System.out.println(historyList);

        List<MenuDTO> oddList = new ArrayList<>();

        // order-detail_menuDTO list
        for (Order o : historyList) {
            for (OrderDetail od : o.getOrderDetails()){
                List<CustomDTO> customDTOList = od.getCustoms().stream().map(custom ->
                        (CustomDTO.builder()
                                    .ingredientCount(custom.getCount())
                                    .ingredientName(custom.getIngredient().getName())
                                    .build())).collect(Collectors.toList());
            MenuDTO menuDTO = MenuDTO.builder()
                            .menuCustomDTO(customDTOList)
                            .menuName(od.getMenu().getName())
                            .build();
            oddList.add(menuDTO);
            }
        }

//          각 oddList 에서 중복 제거 개수 세서 저장
        Map<MenuDTO, Integer> result = new HashMap<>();
        for(MenuDTO od : new HashSet<>(oddList)) {
            result.put(od, Collections.frequency(oddList, od));
        }
        return result;
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
