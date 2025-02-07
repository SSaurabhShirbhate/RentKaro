package com.rentkaro.rental_service.controller;




import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.rentkaro.rental_service.model.RentalItem;
import com.rentkaro.rental_service.service.RentalItemService;

import java.util.List;

@RestController
@RequestMapping("/api/rental-items")
public class RentalItemController {

    private final RentalItemService rentalItemService;

    public RentalItemController(RentalItemService rentalItemService) {
        this.rentalItemService = rentalItemService;
    }

    @PostMapping
    public ResponseEntity<RentalItem> createRentalItem(@RequestBody RentalItem item) {
        return ResponseEntity.ok(rentalItemService.createRentalItem(item));
    }

    @GetMapping
    public ResponseEntity<List<RentalItem>> getAllRentalItems() {
        return ResponseEntity.ok(rentalItemService.getAllRentalItems());
    }

    @GetMapping("/{id}")
    public ResponseEntity<RentalItem> getRentalItemById(@PathVariable Long id) {
        return ResponseEntity.ok(rentalItemService.getRentalItemById(id));
    }

    @PutMapping("/{id}")
    public ResponseEntity<RentalItem> updateRentalItem(@PathVariable Long id, @RequestBody RentalItem item) {
        return ResponseEntity.ok(rentalItemService.updateRentalItem(id, item));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteRentalItem(@PathVariable Long id) {
        rentalItemService.deleteRentalItem(id);
        return ResponseEntity.noContent().build();
    }
}

