package com.inburger.backend.services;

import com.inburger.backend.models.OrderDetail;

import java.util.Collection;

public interface OrderDetailService {

    Collection<OrderDetail> getAllOrderDetail(Long orderId);

    OrderDetail getOrderDetailById(Long id);
}
