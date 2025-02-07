package com.rentkaro.rental_service.service;



import java.util.List;

import com.rentkaro.rental_service.model.RentalItem;

public interface RentalItemService {
    RentalItem createRentalItem(RentalItem item);
    List<RentalItem> getAllRentalItems();
    RentalItem getRentalItemById(Long id);
    RentalItem updateRentalItem(Long id, RentalItem item);
    void deleteRentalItem(Long id);
}
