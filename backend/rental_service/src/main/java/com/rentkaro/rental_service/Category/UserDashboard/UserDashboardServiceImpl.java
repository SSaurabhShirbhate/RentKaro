package com.rentkaro.rental_service.Category.UserDashboard;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.rentkaro.rental_service.Category.CategoryRepository.CategoryRepository;
import com.rentkaro.rental_service.Category.DTO.CategoryResponseDTO;
import com.rentkaro.rental_service.CategoryExceptions.CategoryNotFoundException;
import com.rentkaro.rental_service.Item.DTO.RentalItemResponseDTO;
import com.rentkaro.rental_service.Item.Model.RentalItem;
import com.rentkaro.rental_service.Item.repository.RentalItemRepository;

@Service
public class UserDashboardServiceImpl implements UserDashboardService {

    @Autowired
    private CategoryRepository categoryRepository;

    @Autowired
    private RentalItemRepository itemRepository;

    @Override
    public List<CategoryResponseDTO> getAllCategories() {
        return categoryRepository.findAll()
                .stream()
                .map(category -> new CategoryResponseDTO(category.getCategoryId(),category.getCategoryName(),category.getImgUrl(),category.getIsActive()))
                .collect(Collectors.toList());
    }

    @Override
    public CategoryResponseDTO search(String categoryName) {
        return categoryRepository.findByCategoryNameContaining(categoryName)
                .stream()
                .findFirst()
                .map(category -> new CategoryResponseDTO(category.getCategoryId(), category.getCategoryName(),category.getImgUrl(),category.getIsActive()))
                .orElseThrow(() -> new CategoryNotFoundException("Category not found"));
    }

    @Override
    public List<RentalItemResponseDTO> searchItem(String itemName) {
        return itemRepository.findByTitleContaining(itemName)
                .stream()
                .map(this::mapToRentalItemResponseDTO)
                .collect(Collectors.toList());
    }

    private RentalItemResponseDTO mapToRentalItemResponseDTO(RentalItem item) {
        return RentalItemResponseDTO.builder()
                .id(item.getId())
                .userId(item.getUserId())
                .title(item.getTitle())
                .description(item.getDescription())
                .pricePerHour(item.getPricePerHour())
                .pricePerDay(item.getPricePerDay())
                .available(item.getAvailable())
                .createdAt(item.getCreatedAt())
                .build();
    }
}