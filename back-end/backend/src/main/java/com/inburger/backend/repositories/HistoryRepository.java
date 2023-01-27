package com.inburger.backend.repositories;

import com.inburger.backend.models.History;
import org.springframework.data.jpa.repository.JpaRepository;

public interface HistoryRepository extends JpaRepository<History, Long> {
}
