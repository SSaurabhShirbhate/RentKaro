package com.rentkaro.rental_service.Category.UserDashboard;
import java.util.List;

import com.rentkaro.rental_service.Category.DTO.CategoryResponseDTO;
import com.rentkaro.rental_service.Item.DTO.RentalItemResponseDTO;

public interface UserDashboardService {
    List<CategoryResponseDTO> getAllCategories();
    CategoryResponseDTO search(String query);
    List<RentalItemResponseDTO> searchItem(String itemName); // Updated to return a list
}