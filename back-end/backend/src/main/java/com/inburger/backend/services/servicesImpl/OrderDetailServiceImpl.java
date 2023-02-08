package com.inburger.backend.services.servicesImpl;

import com.inburger.backend.exceptions.ResourceNotFoundException;
import com.inburger.backend.models.*;
import com.inburger.backend.repositories.MenuRepository;
import com.inburger.backend.repositories.OrderDetailRepository;
import com.inburger.backend.repositories.OrderRepository;
import com.inburger.backend.services.OrderDetailService;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.Collection;
import java.util.List;

@Service
public class OrderDetailServiceImpl implements OrderDetailService {

    private OrderDetailRepository orderDetailRepository;
    private OrderRepository orderRepository;
    private MenuRepository menuRepository;

    public OrderDetailServiceImpl(OrderDetailRepository orderDetailRepository,
                                  MenuRepository menuRepository,
                                  OrderRepository orderRepository) {
        super();
        this.orderDetailRepository = orderDetailRepository;
        this.menuRepository = menuRepository;
        this.orderRepository = orderRepository;
    }

    @Override
    public List<OrderDetail> getAllOrderDetail() {
        return orderDetailRepository.findAll();
    }

    @Override
    public Collection<OrderDetail> getAllOrderDetailBiId(Long orderId) {
        return orderDetailRepository.findByOrderId(orderId);
    }

    @Override
    public OrderDetail saveOrderDetail(OrderDetailDTO orderDetailDTO, Long orderId) {
        Order order = orderRepository.findById(orderId).orElseThrow(() ->
                new ResourceNotFoundException("order", "orderId", orderId));
        long menuId = orderDetailDTO.getMenu_id();
        Menu menu = menuRepository.findById(menuId).orElseThrow(() ->
                new ResourceNotFoundException("menu", "menuId", menuId));
        OrderDetail newOrderDetail = OrderDetail.builder()
                .count(orderDetailDTO.getCount())
                .is_set(orderDetailDTO.isSet())
                .price(orderDetailDTO.getPrice())
                .order(order)
                .menu(menu)
                .build();
        return newOrderDetail;
    }

    @Override
    public OrderDetail getOrderDetailById(long id) {
        return orderDetailRepository.findById(id).orElseThrow(() ->
                new ResourceNotFoundException("OrderDetail", "id", id));
    }
}
