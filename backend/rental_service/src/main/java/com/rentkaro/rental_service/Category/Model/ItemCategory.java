package com.rentkaro.rental_service.Category.Model;

import java.time.LocalDateTime;
import java.util.UUID;

import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.persistence.UniqueConstraint;
import jakarta.persistence.Version;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "categories", uniqueConstraints = {
        @UniqueConstraint(columnNames = "category_name")
})
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class ItemCategory {

    @Id
    //@GeneratedValue(strategy = GenerationType.UUID)  // Native UUID Generation in Spring Boot 3+
    @Column(name = "category_id", updatable = false, nullable = false)
    private UUID categoryId;

    @Column(name = "category_name", nullable = false, unique = true, length = 100)
    private String categoryName;

    @Column(nullable = false)
    private Boolean isActive = true; // Default to active

    @Column(name = "img_url")
    private String imgUrl; // Added imgUrl field

    @CreationTimestamp
    @Column(updatable = false)
    private LocalDateTime createdAt;

    @UpdateTimestamp
    private LocalDateTime updatedAt;

    @Version
    @Column(name = "version")
    private Integer version = 0;
}
