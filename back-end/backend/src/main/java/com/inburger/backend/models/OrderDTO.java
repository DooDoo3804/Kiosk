package com.inburger.backend.models;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.Entity;

@Getter
@Setter
public class OrderDTO {

    private Order order;
    private Long user_id;

    public OrderDTO(Order order, Long user_id) {
        this.order = order;
        this.user_id = user_id;
    }
}
