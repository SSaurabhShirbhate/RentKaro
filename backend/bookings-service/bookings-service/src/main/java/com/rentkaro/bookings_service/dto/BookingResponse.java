package com.rentkaro.bookings_service.dto;

import lombok.Builder;
import lombok.Data;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.time.LocalDateTime;

@Data
@Builder
public class BookingResponse {
    private Long id;
    private Long rentalItemId;
    private Long buyerId;
    private Long sellerId;
    private LocalDate startDate;
    private LocalDate endDate;
    private BigDecimal totalAmount;
    private String status;
    private LocalDateTime createdAt;
}
