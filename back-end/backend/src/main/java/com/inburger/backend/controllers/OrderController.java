package com.inburger.backend.controllers;

import com.inburger.backend.models.Order;
import com.inburger.backend.models.OrderDTO;
import com.inburger.backend.repositories.OrderRepository;
import com.inburger.backend.services.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(path="/inburger")
public class OrderController {

    private final OrderRepository orderRepository;
    private OrderService orderService;

    @Autowired
    public OrderController(OrderRepository orderRepository,
                           OrderService orderService) {
        this.orderRepository = orderRepository;
        this.orderService = orderService;
    }

    @GetMapping(value="/order")
    public List<Order> getAllOrder() {
        return orderService.getAllOrder();
    }

    // 주문과 유저 정보를 받아서 저장
    @PostMapping(value = "/order")
    public Order createOrder(@RequestBody OrderDTO orderDTO) {
        return orderService.saveOrder(orderDTO.getOrder(), orderDTO.getUser_id());
    }
}
