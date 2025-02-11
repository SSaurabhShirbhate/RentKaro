package com.rentkaro.rental_service.Category.DTO;

import java.util.UUID;

import jakarta.persistence.Column;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

/**
 * Represents a response DTO for category-related data.
 */
@Getter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class CategoryResponseDTO {
  
    @NotNull
    private UUID categoryId;

    @NotEmpty
    private String categoryName;

    @Column(name = "img_url", length = 500)
    private String imgUrl;

    
    @NotNull
    private Boolean isActive;
}