package com.rentkaro.rental_service.Category.UserDashboard;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.rentkaro.rental_service.Category.DTO.CategoryResponseDTO;
import com.rentkaro.rental_service.Item.DTO.RentalItemResponseDTO;

@RestController
public class UserDashboardDAO {

    @Autowired
    private UserDashboardService userDashboardService;

    @GetMapping("/sendCategories")
    public ResponseEntity<List<CategoryResponseDTO>> getAllCategories() {
        return ResponseEntity.ok(userDashboardService.getAllCategories());
    }

    @GetMapping("/search")
    public ResponseEntity<CategoryResponseDTO> searchCategory(@RequestParam String categoryName) {
        return ResponseEntity.ok(userDashboardService.search(categoryName));
    }

    @GetMapping("/searchItem")
    public ResponseEntity<List<RentalItemResponseDTO>> searchItem(@RequestParam String itemName) {
        return ResponseEntity.ok(userDashboardService.searchItem(itemName));
    }
}