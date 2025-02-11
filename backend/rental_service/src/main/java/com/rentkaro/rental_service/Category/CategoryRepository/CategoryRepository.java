package com.rentkaro.rental_service.Category.CategoryRepository;

import java.util.List;
import java.util.Optional;
import java.util.UUID;
import java.util.stream.Stream;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.rentkaro.rental_service.Category.Model.ItemCategory;

@Repository
public interface CategoryRepository extends JpaRepository<ItemCategory, UUID> {
    List<ItemCategory> findByCategoryNameContaining(String categoryName);
    Optional<ItemCategory> findByCategoryName(String categoryName);
	Stream<ItemCategory> findByCategoryNameIgnoreCase(String categoryName);
}
