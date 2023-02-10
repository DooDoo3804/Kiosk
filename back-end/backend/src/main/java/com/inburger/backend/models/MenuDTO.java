package com.inburger.backend.models;

import lombok.Builder;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;

import java.util.List;


@Getter
@Setter
@Data
@Builder
public class MenuDTO {

    String menuName;
    List<CustomDTO> menuCustomDTO;


    public MenuDTO(String menuName, List<CustomDTO> menuCustomDTO) {
        this.menuName = menuName;
        this.menuCustomDTO = menuCustomDTO;
    }
}
