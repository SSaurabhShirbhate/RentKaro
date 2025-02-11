package com.rentkaro.bookings_service.services;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.rentkaro.bookings_service.dto.BookingRequest;
import com.rentkaro.bookings_service.dto.BookingResponse;
import com.rentkaro.bookings_service.entities.Booking;
import com.rentkaro.bookings_service.entities.Booking.BookingStatus;
import com.rentkaro.bookings_service.exceptions.ResourceNotFoundException;
import com.rentkaro.bookings_service.repositories.BookingRepository;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class BookingService {

    private final BookingRepository bookingRepository;

    @Transactional
    public BookingResponse createBooking(BookingRequest request) {
        validateBookingDates(request);
        
        Booking booking = mapToEntity(request);
        booking.setStatus(parseBookingStatus(request.getStatus()));
        Booking savedBooking = bookingRepository.save(booking);
        return mapToResponse(savedBooking);
    }

    public List<BookingResponse> getAllBookings() {
        return bookingRepository.findAll().stream()
                .map(this::mapToResponse)
                .collect(Collectors.toList());
    }

    public BookingResponse getBookingById(Long id) {
        return bookingRepository.findById(id)
                .map(this::mapToResponse)
                .orElseThrow(() -> new ResourceNotFoundException("Booking not found with id: " + id));
    }

    @Transactional
    public BookingResponse updateBooking(Long id, BookingRequest request) {
        Booking booking = bookingRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Booking not found with id: " + id));
        
        validateBookingDates(request);
        
        booking.setRentalItemId(request.getRentalItemId());
        booking.setBuyerId(request.getBuyerId());
        booking.setSellerId(request.getSellerId());
        booking.setStartDate(request.getStartDate());
        booking.setEndDate(request.getEndDate());
        booking.setTotalAmount(request.getTotalAmount());
        booking.setStatus(parseBookingStatus(request.getStatus()));
        
        return mapToResponse(bookingRepository.save(booking));
    }

    @Transactional
    public void deleteBooking(Long id) {
        if (!bookingRepository.existsById(id)) {
            throw new ResourceNotFoundException("Booking not found with id: " + id);
        }
        bookingRepository.deleteById(id);
    }

    private void validateBookingDates(BookingRequest request) {
        if (request.getStartDate().isAfter(request.getEndDate())) {
            throw new IllegalArgumentException("Start date must be before end date");
        }
    }

    private BookingStatus parseBookingStatus(String status) {
        try {
            return BookingStatus.valueOf(status.toUpperCase());
        } catch (IllegalArgumentException e) {
            throw new IllegalArgumentException("Invalid booking status: " + status);
        }
    }

    private Booking mapToEntity(BookingRequest request) {
        return Booking.builder()
                .rentalItemId(request.getRentalItemId())
                .buyerId(request.getBuyerId())
                .sellerId(request.getSellerId())
                .startDate(request.getStartDate())
                .endDate(request.getEndDate())
                .totalAmount(request.getTotalAmount())
                .build();
    }

    private BookingResponse mapToResponse(Booking booking) {
        return BookingResponse.builder()
                .id(booking.getId())
                .rentalItemId(booking.getRentalItemId())
                .buyerId(booking.getBuyerId())
                .sellerId(booking.getSellerId())
                .startDate(booking.getStartDate())
                .endDate(booking.getEndDate())
                .totalAmount(booking.getTotalAmount())
                .status(booking.getStatus().name())
                .createdAt(booking.getCreatedAt())
                .build();
    }
}
