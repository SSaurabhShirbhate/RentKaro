package com.rentkaro.rental_service.repository;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.rentkaro.rental_service.model.RentalItem;

import java.util.List;

@Repository
public interface RentalItemRepository extends JpaRepository<RentalItem, Long> {
    List<RentalItem> findByIsAvailable(Boolean isAvailable);
}
