package com.rentkaro.bookings_service.dto;

import java.math.BigDecimal;
import java.time.LocalDate;

import jakarta.validation.constraints.Future;
import jakarta.validation.constraints.FutureOrPresent;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Positive;
import lombok.Data;

@Data
public class BookingRequest {
	@NotNull(message = "Rental item ID is required")
	private Long rentalItemId;

	@NotNull(message = "Buyer ID is required")
	private Long buyerId;

	@NotNull(message = "Seller ID is required")
	private Long sellerId;

	@FutureOrPresent(message = "Start date must be in the present or future")
	private LocalDate startDate;

	@Future(message = "End date must be in the future")
	private LocalDate endDate;

	@Positive(message = "Total amount must be positive")
	private BigDecimal totalAmount;

	private String status;
}
