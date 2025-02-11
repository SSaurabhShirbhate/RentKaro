package com.rentkaro.rental_service.Item.DTO;

import java.math.BigDecimal;
import java.util.UUID;

import jakarta.persistence.Column;
import jakarta.validation.constraints.DecimalMin;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class RentalItemRequestDTO {

    @NotBlank(message = "Title is mandatory")
    @Size(max = 255, message = "Title cannot be longer than 255 characters")
    private String title;

    @Size(max = 500, message = "Description cannot be longer than 500 characters")
    private String description;

    @NotNull(message = "Price per hour is mandatory")
    @DecimalMin(value = "0.01", message = "Price per hour must be greater than 0")
    private BigDecimal pricePerHour;

    @NotNull(message = "Price per day is mandatory")
    @DecimalMin(value = "0.01", message = "Price per day must be greater than 0")
    private BigDecimal pricePerDay;

    @NotNull(message = "Availability status is mandatory")
    private Boolean available;

    @NotNull(message = "Category ID is mandatory")
    private UUID categoryId;
    
    @Column(name = "img_url", length = 500)
    private String imgUrl;

}
