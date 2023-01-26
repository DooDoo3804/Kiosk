package com.inburger.backend.models;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "ingrediendt")
public class Ingredient {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)

    private long id;
    @Column(name = "ingredient_price")
    private int price;
    @Column(name = "ingredient_name")
    private String name;
    @Column(name = "ingredient_count")
    private int count ;
}
