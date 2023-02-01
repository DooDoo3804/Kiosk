package com.inburger.backend.models;

import javax.persistence.*;

import lombok.*;

import java.util.List;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "TABLE_USER")

@Builder
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(name = "user_name")
    private String name;
    @Column(name = "user_age")
    private int age;
    @Column(name = "kiosk_height")
    private int height;

    @OneToMany(mappedBy = "user", cascade = CascadeType.ALL)
    private List<Order> history;

}
