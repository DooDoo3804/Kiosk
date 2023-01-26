package com.inburger.backend.models;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "custom")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Custom {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;


}
