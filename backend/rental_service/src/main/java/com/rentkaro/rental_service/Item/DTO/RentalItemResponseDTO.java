package com.rentkaro.rental_service.Item.DTO;

import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.util.UUID;
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
public class RentalItemResponseDTO {

    private Long id;
    private UUID userId;
    private String title;
    private String description;
    private BigDecimal pricePerHour;
    private BigDecimal pricePerDay;
    private Boolean available;
    private LocalDateTime createdAt;
    private String imgUrl;

}