package com.rentkaro.rental_service.Item.service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.UUID;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.stereotype.Service;

import com.rentkaro.rental_service.Category.CategoryRepository.CategoryRepository;
import com.rentkaro.rental_service.Category.Model.ItemCategory;
import com.rentkaro.rental_service.Item.DTO.RentalItemRequestDTO;
import com.rentkaro.rental_service.Item.DTO.RentalItemResponseDTO;
import com.rentkaro.rental_service.Item.Model.RentalItem;
import com.rentkaro.rental_service.Item.repository.RentalItemRepository;
import com.rentkaro.rental_service.exception.ResourceNotFoundException;
import com.rentkaro.rental_service.security.JwtUtil;

import jakarta.servlet.http.HttpServletRequest;

@Service
public class RentalItemServiceImpl implements RentalItemService {

    @Autowired
    private RentalItemRepository rentalItemRepository;
    
    @Autowired
    private CategoryRepository categoryRepository;

    @Autowired
    private JwtUtil jwtUtil;

    // ✅ Helper method to extract user ID from JWT token
    private String getCurrentUserId(HttpServletRequest request) {
        String authHeader = request.getHeader(HttpHeaders.AUTHORIZATION);
        if (authHeader == null || !authHeader.startsWith("Bearer ")) {
            throw new RuntimeException("JWT Token is missing or invalid");
        }
        String token = authHeader.substring(7); // Remove "Bearer " prefix
        return jwtUtil.extractUserId(token);
    }

    @Override
    public RentalItemResponseDTO createRentalItem(RentalItemRequestDTO rentalItemRequestDTO, HttpServletRequest request) {
        String userId = getCurrentUserId(request);

        ItemCategory category = categoryRepository.findById(rentalItemRequestDTO.getCategoryId())
                .orElseThrow(() -> new ResourceNotFoundException("Category not found"));

        RentalItem rentalItem = RentalItem.builder()
                .userId(UUID.fromString(userId))
                .imgUrl(rentalItemRequestDTO.getImgUrl())
                .title(rentalItemRequestDTO.getTitle())
                .description(rentalItemRequestDTO.getDescription())
                .pricePerHour(rentalItemRequestDTO.getPricePerHour())
                .pricePerDay(rentalItemRequestDTO.getPricePerDay())
                .available(rentalItemRequestDTO.getAvailable())
                .createdAt(LocalDateTime.now())
                .category(category)
                .build();

        RentalItem savedItem = rentalItemRepository.save(rentalItem);
        return mapToRentalItemResponseDTO(savedItem);
    }


    @Override
    public RentalItemResponseDTO getRentalItemById(Long id) {
        RentalItem rentalItem = rentalItemRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("RentalItem not found with id: " + id));
        return mapToRentalItemResponseDTO(rentalItem);
    }

    @Override
    public List<RentalItemResponseDTO> getAllRentalItems() {
        return rentalItemRepository.findAll()
                .stream()
                .map(this::mapToRentalItemResponseDTO)
                .collect(Collectors.toList());
    }

    @Override
    public RentalItemResponseDTO updateRentalItem(Long id, RentalItemRequestDTO rentalItemRequestDTO) {
        RentalItem rentalItem = rentalItemRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("RentalItem not found with id: " + id));
        
        rentalItem.setTitle(rentalItemRequestDTO.getTitle());
        rentalItem.setImgUrl(rentalItemRequestDTO.getImgUrl());
        rentalItem.setDescription(rentalItemRequestDTO.getDescription());
        rentalItem.setPricePerHour(rentalItemRequestDTO.getPricePerHour());
        rentalItem.setPricePerDay(rentalItemRequestDTO.getPricePerDay());
        rentalItem.setAvailable(rentalItemRequestDTO.getAvailable());

        RentalItem updatedItem = rentalItemRepository.save(rentalItem);
        return mapToRentalItemResponseDTO(updatedItem);
    }

    @Override
    public void deleteRentalItem(Long id) {
        RentalItem rentalItem = rentalItemRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("RentalItem not found with id: " + id));
        rentalItemRepository.delete(rentalItem);
    }

    @Override
    public List<RentalItemResponseDTO> searchRentalItemsByTitle(String title) {
        return rentalItemRepository.findByTitleContaining(title)
                .stream()
                .map(this::mapToRentalItemResponseDTO)
                .collect(Collectors.toList());
    }

   
    private RentalItemResponseDTO mapToRentalItemResponseDTO(RentalItem rentalItem) {
        return RentalItemResponseDTO.builder()
                .id(rentalItem.getId())
                .userId(rentalItem.getUserId())
                .title(rentalItem.getTitle())
                .imgUrl(rentalItem.getImgUrl())
                .description(rentalItem.getDescription())
                .pricePerHour(rentalItem.getPricePerHour())
                .pricePerDay(rentalItem.getPricePerDay())
                .available(rentalItem.getAvailable())
                .createdAt(rentalItem.getCreatedAt())
                .build();
    }
}
