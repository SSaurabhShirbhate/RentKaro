package com.rentkaro.rental_service.Category.CategoryService;

import java.util.List;
import java.util.UUID;

import com.rentkaro.rental_service.Category.DTO.CategoryRequestDTO;
import com.rentkaro.rental_service.Category.DTO.CategoryResponseDTO;

public interface CategoryService {
    CategoryResponseDTO createCategory(CategoryRequestDTO requestDTO);
    List<CategoryResponseDTO> getAllCategories();
    CategoryResponseDTO getCategoryById(UUID id);
    //CategoryResponseDTO updateCategory(UUID id, CategoryRequestDTO requestDTO);
    void deleteCategory(UUID id);
    
    CategoryResponseDTO findByCategoyName(String categoryName);
    
}
