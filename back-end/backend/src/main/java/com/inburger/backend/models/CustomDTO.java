package com.inburger.backend.models;

import lombok.Data;
import lombok.Getter;
import lombok.Setter;


@Getter
@Setter
@Data
public class CustomDTO {

    Long ingredient_id;
    int count;

    public CustomDTO(Long ingredient_id, int count) {
        this.ingredient_id = ingredient_id;
        this.count = count;
    }
}
