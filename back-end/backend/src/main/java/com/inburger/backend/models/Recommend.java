package com.inburger.backend.models;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Table(name = "recommend")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class Recommend {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

}
