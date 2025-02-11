package com.rentkaro.rental_service.Renter.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.rentkaro.rental_service.Item.DTO.RentalItemRequestDTO;
import com.rentkaro.rental_service.Item.DTO.RentalItemResponseDTO;
import com.rentkaro.rental_service.Item.service.RentalItemService;

import jakarta.servlet.http.HttpServletRequest;

@RestController
@RequestMapping("/rental-items")
public class RentalItemController {

    @Autowired
    private RentalItemService rentalItemService;

    @PostMapping
    public ResponseEntity<RentalItemResponseDTO> createRentalItem(
            @RequestBody RentalItemRequestDTO rentalItemRequestDTO, HttpServletRequest request) {
        RentalItemResponseDTO responseDTO = rentalItemService.createRentalItem(rentalItemRequestDTO, request);
        return new ResponseEntity<>(responseDTO, HttpStatus.CREATED);
    }


    @GetMapping("/{id}")
    public ResponseEntity<RentalItemResponseDTO> getRentalItemById(@PathVariable Long id) {
        RentalItemResponseDTO responseDTO = rentalItemService.getRentalItemById(id);
        return ResponseEntity.ok(responseDTO);
    }

    @GetMapping
    public ResponseEntity<List<RentalItemResponseDTO>> getAllRentalItems() {
        List<RentalItemResponseDTO> responseDTOs = rentalItemService.getAllRentalItems();
        return ResponseEntity.ok(responseDTOs);
    }

    @PutMapping("/{id}")
    public ResponseEntity<RentalItemResponseDTO> updateRentalItem(
            @PathVariable Long id, @RequestBody RentalItemRequestDTO rentalItemRequestDTO) {
        RentalItemResponseDTO responseDTO = rentalItemService.updateRentalItem(id, rentalItemRequestDTO);
        return ResponseEntity.ok(responseDTO);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteRentalItem(@PathVariable Long id) {
        rentalItemService.deleteRentalItem(id);
        return ResponseEntity.noContent().build();
    }

    @GetMapping("/search")
    public ResponseEntity<List<RentalItemResponseDTO>> searchRentalItemsByTitle(@RequestParam String title) {
        List<RentalItemResponseDTO> responseDTOs = rentalItemService.searchRentalItemsByTitle(title);
        return ResponseEntity.ok(responseDTOs);
    }
}