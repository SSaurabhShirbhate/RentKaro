package com.rentkaro.bookings_service.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.rentkaro.bookings_service.entities.Booking;

public interface BookingRepository extends JpaRepository<Booking, Long> {
}
