package com.inburger.backend.controllers;

import com.inburger.backend.models.Order;
import com.inburger.backend.repositories.OrderRepository;
import com.inburger.backend.services.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping(path="/test")
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

}
