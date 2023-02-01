package com.inburger.backend.services.servicesImpl;

import com.inburger.backend.exceptions.ResourceNotFoundException;
import com.inburger.backend.models.OrderDetail;
import com.inburger.backend.repositories.OrderDetailRepository;
import com.inburger.backend.services.OrderDetailService;
import org.springframework.stereotype.Service;

import java.util.Collection;

@Service
public class OrderDetailServiceImpl implements OrderDetailService {

    private OrderDetailRepository orderDetailRepository;

    public OrderDetailServiceImpl(OrderDetailRepository orderDetailRepository) {
        super();
        this.orderDetailRepository = orderDetailRepository;
    }

    @Override
    public Collection<OrderDetail> getAllOrderDetail(Long orderId) {
        return orderDetailRepository.findByOrderId(orderId);
    }

    @Override
    public OrderDetail getOrderDetailById(Long id) {
        return orderDetailRepository.findById(id).orElseThrow(() ->
                new ResourceNotFoundException("OrderDetail", "id", id));
    }
}
