package com.inburger.backend.controllers;

import com.inburger.backend.models.Order;
import com.inburger.backend.models.OrderDetail;
import com.inburger.backend.repositories.OrderDetailRepository;
import com.inburger.backend.services.OrderDetailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Collection;

@RestController
@RequestMapping(path = "test/order-detail")
public class OrderDetailController {

    private OrderDetailService orderDetailService;
    private final OrderDetailRepository orderDetailRepository;

    @Autowired
    public OrderDetailController(OrderDetailService orderDetailService,
                                 OrderDetailRepository orderDetailRepository) {
        this.orderDetailRepository = orderDetailRepository;
        this.orderDetailService = orderDetailService;
    }


    public Collection<OrderDetail> getAllOrderDetailByOrderId(@RequestBody Order order) {
        return orderDetailRepository.findByOrderId(order.getId());
    }
}
