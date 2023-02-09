package com.inburger.backend.models;

import lombok.Data;
import lombok.Getter;
import lombok.Setter;


@Getter
@Setter
@Data
public class CustomDTO {

    long ingredientId;
    int ingredientCount;

    public CustomDTO(long ingredientId, int ingredientCount) {
        this.ingredientId = ingredientId;
        this.ingredientCount = ingredientCount;
    }
}
