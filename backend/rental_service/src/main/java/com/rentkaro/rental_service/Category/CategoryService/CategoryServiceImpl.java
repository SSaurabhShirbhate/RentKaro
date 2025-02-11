package com.rentkaro.rental_service.Category.CategoryService;

import java.time.LocalDateTime;
import java.util.List;
import java.util.UUID;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.rentkaro.rental_service.Category.CategoryRepository.CategoryRepository;
import com.rentkaro.rental_service.Category.DTO.CategoryRequestDTO;
import com.rentkaro.rental_service.Category.DTO.CategoryResponseDTO;
import com.rentkaro.rental_service.Category.Model.ItemCategory;
import com.rentkaro.rental_service.CategoryExceptions.CategoryNotFoundException;

import jakarta.transaction.Transactional;

@Service
public class CategoryServiceImpl implements CategoryService {

    @Autowired
    private CategoryRepository categoryRepository;

    @Transactional
    @Override
    public CategoryResponseDTO createCategory(CategoryRequestDTO requestDTO) {
        ItemCategory newCategory = new ItemCategory();
        newCategory.setCategoryId(UUID.randomUUID());
        newCategory.setImgUrl(requestDTO.getImgUrl());
        newCategory.setCategoryName(requestDTO.getCategoryName());
        newCategory.setIsActive(true);
        //newCategory.setCreatedAt(LocalDateTime.now());

        categoryRepository.saveAndFlush(newCategory);

        return new CategoryResponseDTO(
                newCategory.getCategoryId(),
                newCategory.getCategoryName(),
                newCategory.getImgUrl(),
                newCategory.getIsActive()
        );
    }

    @Override
    public List<CategoryResponseDTO> getAllCategories() {
        return categoryRepository.findAll().stream()
                .map(category -> new CategoryResponseDTO(
                        category.getCategoryId(),
                        category.getCategoryName(),
                        category.getImgUrl(),
                        category.getIsActive()
                ))
                .collect(Collectors.toList());
    }

    @Override
    public CategoryResponseDTO getCategoryById(UUID id) {
        ItemCategory category = categoryRepository.findById(id)
                .orElseThrow(() -> new CategoryNotFoundException("Category with ID " + id + " not found."));
        return new CategoryResponseDTO(
                category.getCategoryId(),
                category.getCategoryName(),
                category.getImgUrl(),
                category.getIsActive()
        );
    }

    @Transactional
    @Override
    public void deleteCategory(UUID id) {
        ItemCategory category = categoryRepository.findById(id)
                .orElseThrow(() -> new CategoryNotFoundException("Category with ID " + id + " not found."));
        categoryRepository.delete(category);
    }

    @Override
    public CategoryResponseDTO findByCategoyName(String categoryName) {
        return categoryRepository.findByCategoryName(categoryName)
                .map(category -> new CategoryResponseDTO(
                        category.getCategoryId(),
                        category.getCategoryName(),
                        category.getImgUrl(),
                        category.getIsActive()
                ))
                .orElseThrow(() -> new CategoryNotFoundException("Category with name '" + categoryName + "' not found."));
    }
}
