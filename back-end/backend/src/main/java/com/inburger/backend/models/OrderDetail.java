package com.inburger.backend.models;

import javax.persistence.*;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.ArrayList;
import java.util.List;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "TABLE_ORDER_DETAIL")
public class OrderDetail {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "menu_count", nullable = false)
    private Integer count;

    @Column(name = "each_menu_price", nullable = false)
    private Integer price;

    @Column(name = "is_set", nullable = true)
    private Boolean is_set;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "order_id")
    @JsonBackReference //추가
    private Order order;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "menu_id")
    @JsonBackReference //추가
    private Menu menu;

    @JsonManagedReference  // 추가
    @OneToMany(mappedBy = "orderDetail", cascade = CascadeType.ALL)
    private List<Custom> customs = new ArrayList<>();

}


