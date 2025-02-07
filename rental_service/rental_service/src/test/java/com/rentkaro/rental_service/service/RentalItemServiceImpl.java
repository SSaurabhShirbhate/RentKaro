package com.rentkaro.rental_service.service;

import org.springframework.stereotype.Service;

import com.rentkaro.rental_service.exception.ResourceNotFoundException;
import com.rentkaro.rental_service.model.RentalItem;
import com.rentkaro.rental_service.repository.RentalItemRepository;

import java.util.List;

@Service
public class RentalItemServiceImpl implements RentalItemService {

    private final RentalItemRepository repository;

    public RentalItemServiceImpl(RentalItemRepository repository) {
        this.repository = repository;
    }

    @Override
    public RentalItem createRentalItem(RentalItem item) {
        return repository.save(item);
    }

    @Override
    public List<RentalItem> getAllRentalItems() {
        return repository.findAll();
    }

    @Override
    public RentalItem getRentalItemById(Long id) {
        return repository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Rental item not found with id: " + id));
    }

    @Override
    public RentalItem updateRentalItem(Long id, RentalItem item) {
        RentalItem existingItem = getRentalItemById(id);
        existingItem.setTitle(item.getTitle());
        existingItem.setDescription(item.getDescription());
        existingItem.setPricePerHour(item.getPricePerHour());
        existingItem.setPricePerDay(item.getPricePerDay());
        existingItem.setAvailable(item.getAvailable());
        return repository.save(existingItem);
    }

    @Override
    public void deleteRentalItem(Long id) {
        RentalItem item = getRentalItemById(id);
        repository.delete(item);
    }
}
