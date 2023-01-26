package com.inburger.backend.models;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "menu")
public class Menu {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(name = "menu_name")
    private String name;
    @Column(name = "menu_price")
    private int price;
    private int count;

    @ManyToOne
    @JoinColumn(name = "category_id")
    private Category category;

}
