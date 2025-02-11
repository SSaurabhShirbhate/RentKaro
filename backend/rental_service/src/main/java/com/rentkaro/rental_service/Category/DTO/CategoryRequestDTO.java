package com.rentkaro.rental_service.Category.DTO;

import jakarta.persistence.Column;
import jakarta.validation.constraints.NotBlank;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class CategoryRequestDTO {
    
    // Uncomment and use if you need the category ID
    // @NotBlank(message = "Category ID cannot be null")
    // private UUID categoryId;

    @NotBlank(message = "Category name cannot be empty")
    private String categoryName;
    
    @Column(name = "img_url", length = 500)
    private String imgUrl;

    
    // Uncomment and use if needed
    // private String description;
    // private Boolean isActive;
}
