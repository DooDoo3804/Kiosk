package com.inburger.backend.repositories;

import com.inburger.backend.models.OrderDetail;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Collection;

public interface OrderDetailRepository extends JpaRepository<OrderDetail, Long> {

    Collection<OrderDetail> findByOrderId(Long orderId);
}
