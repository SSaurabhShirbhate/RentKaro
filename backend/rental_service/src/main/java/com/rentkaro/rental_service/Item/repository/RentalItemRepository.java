package com.rentkaro.rental_service.Item.repository;

import java.util.List;
import java.util.UUID;

import org.springframework.data.jpa.repository.JpaRepository;

import com.rentkaro.rental_service.Item.Model.RentalItem;

public interface RentalItemRepository extends JpaRepository<RentalItem, Long> {
    List<RentalItem> findByTitleContaining(String title); // Search by title
    List<RentalItem> findByCategory_CategoryId(UUID categoryId);
}