package com.inburger.backend.repositories;

import com.inburger.backend.models.Custom;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CustomRepository extends JpaRepository<Custom, Long> {
}
