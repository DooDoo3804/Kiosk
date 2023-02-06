package com.inburger.backend.services.servicesImpl;

import com.inburger.backend.models.Order;
import com.inburger.backend.repositories.OrderRepository;
import com.inburger.backend.services.OrderService;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class OrderServiceImpl implements OrderService {

    private OrderRepository orderRepository;

    public OrderServiceImpl(OrderRepository orderRepository) {
        super();
        this.orderRepository = orderRepository;
    }

    @Override
    public List<Order> getAllOrder() {
        return orderRepository.findAll();
    }
}
