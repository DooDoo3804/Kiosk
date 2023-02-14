package com.inburger.backend.models;

import lombok.Builder;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Data
@Getter
@Setter
@Builder
public class Recommend {

    private String menuName;
    private List<CustomDTO> ingredientList;

    public Recommend(String menuName,
                     List<CustomDTO> ingredientList) {
        this.menuName = menuName;
        this.ingredientList = ingredientList;
    }

}
