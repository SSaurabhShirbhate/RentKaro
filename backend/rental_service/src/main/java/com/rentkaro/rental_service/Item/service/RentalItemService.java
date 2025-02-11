package com.rentkaro.rental_service.Item.service;

import java.util.List;

import com.rentkaro.rental_service.Item.DTO.RentalItemRequestDTO;
import com.rentkaro.rental_service.Item.DTO.RentalItemResponseDTO;

import jakarta.servlet.http.HttpServletRequest;


public interface RentalItemService {
    //RentalItemResponseDTO createRentalItem(RentalItemRequestDTO rentalItemRequestDTO);
    RentalItemResponseDTO getRentalItemById(Long id);
    List<RentalItemResponseDTO> getAllRentalItems();
    RentalItemResponseDTO updateRentalItem(Long id, RentalItemRequestDTO rentalItemRequestDTO);
    void deleteRentalItem(Long id);
    List<RentalItemResponseDTO> searchRentalItemsByTitle(String title);
    RentalItemResponseDTO createRentalItem(RentalItemRequestDTO rentalItemRequestDTO, HttpServletRequest request);
    
}