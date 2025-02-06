export const mainCategory = [
    {
      name: "Men",
      categoryId: "men",
      level: 1,
      subCategories: [
        {
          name: "Topwear",
          categoryId: "men_topwear",
          parentCategoryId: "men",
          level: 2,
          subCategories: [
            {
              name: "T-Shirts",
              categoryId: "men_t_shirts",
              parentCategoryId: "men_topwear",
              level: 3
            },
            {
              name: "Shirts",
              categoryId: "men_shirts",
              parentCategoryId: "men_topwear",
              level: 3
            }
          ]
        },
        {
          name: "Bottomwear",
          categoryId: "men_bottomwear",
          parentCategoryId: "men",
          level: 2,
          subCategories: [
            {
              name: "Jeans",
              categoryId: "men_jeans",
              parentCategoryId: "men_bottomwear",
              level: 3
            },
            {
              name: "Trousers",
              categoryId: "men_trousers",
              parentCategoryId: "men_bottomwear",
              level: 3
            }
          ]
        },
        {
          name: "Footwear",
          categoryId: "men_footwear",
          parentCategoryId: "men",
          level: 2,
          subCategories: [
            {
              name: "Sneakers",
              categoryId: "men_sneakers",
              parentCategoryId: "men_footwear",
              level: 3
            },
            {
              name: "Formal Shoes",
              categoryId: "men_formal_shoes",
              parentCategoryId: "men_footwear",
              level: 3
            }
          ]
        }
      ]
    },
    {
      name: "Women",
      categoryId: "women",
      level: 1,
      subCategories: [
        {
          name: "Topwear",
          categoryId: "women_topwear",
          parentCategoryId: "women",
          level: 2,
          subCategories: [
            {
              name: "Tops",
              categoryId: "women_tops",
              parentCategoryId: "women_topwear",
              level: 3
            },
            {
              name: "Blouses",
              categoryId: "women_blouses",
              parentCategoryId: "women_topwear",
              level: 3
            }
          ]
        },
        {
          name: "Bottomwear",
          categoryId: "women_bottomwear",
          parentCategoryId: "women",
          level: 2,
          subCategories: [
            {
              name: "Jeans",
              categoryId: "women_jeans",
              parentCategoryId: "women_bottomwear",
              level: 3
            },
            {
              name: "Skirts",
              categoryId: "women_skirts",
              parentCategoryId: "women_bottomwear",
              level: 3
            }
          ]
        }
      ]
    },
    {
      name: "Home & Furniture",
      categoryId: "home_furniture",
      level: 1,
      subCategories: [
        {
          name: "Living Room",
          categoryId: "living_room",
          parentCategoryId: "home_furniture",
          level: 2,
          subCategories: [
            {
              name: "Sofas",
              categoryId: "sofas",
              parentCategoryId: "living_room",
              level: 3
            },
            {
              name: "Coffee Tables",
              categoryId: "coffee_tables",
              parentCategoryId: "living_room",
              level: 3
            }
          ]
        },
        {
          name: "Bedroom",
          categoryId: "bedroom",
          parentCategoryId: "home_furniture",
          level: 2,
          subCategories: [
            {
              name: "Beds",
              categoryId: "beds",
              parentCategoryId: "bedroom",
              level: 3
            },
            {
              name: "Wardrobes",
              categoryId: "wardrobes",
              parentCategoryId: "bedroom",
              level: 3
            }
          ]
        }
      ]
    },
    {
      name: "Electronics",
      categoryId: "electronics",
      level: 1,
      subCategories: [
        {
          name: "Mobile Phones",
          categoryId: "mobile_phones",
          parentCategoryId: "electronics",
          level: 2,
          subCategories: [
            {
              name: "Smartphones",
              categoryId: "smartphones",
              parentCategoryId: "mobile_phones",
              level: 3
            },
            {
              name: "Feature Phones",
              categoryId: "feature_phones",
              parentCategoryId: "mobile_phones",
              level: 3
            }
          ]
        },
        {
          name: "Laptops",
          categoryId: "laptops",
          parentCategoryId: "electronics",
          level: 2,
          subCategories: [
            {
              name: "Gaming Laptops",
              categoryId: "gaming_laptops",
              parentCategoryId: "laptops",
              level: 3
            },
            {
              name: "Business Laptops",
              categoryId: "business_laptops",
              parentCategoryId: "laptops",
              level: 3
            }
          ]
        },
        {
          name: "Headphones",
          categoryId: "headphones",
          parentCategoryId: "electronics",
          level: 2,
          subCategories: [
            {
              name: "Wireless Headphones",
              categoryId: "wireless_headphones",
              parentCategoryId: "headphones",
              level: 3
            },
            {
              name: "Wired Headphones",
              categoryId: "wired_headphones",
              parentCategoryId: "headphones",
              level: 3
            }
          ]
        }
      ]
    }
  ];
  