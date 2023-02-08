package com.inburger.backend.models;

import lombok.Data;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Data
public class OrderDetailDTO {

    int count;
    boolean isSet;
    int price;
    long menu_id;

    public OrderDetailDTO(int count,
            boolean isSet,
            int price,
            long menu_id) {
        this.count = count;
        this.isSet = isSet;
        this.menu_id= menu_id;
        this.price = price;
    }
}
