import React, { useState } from "react"; 
import { useNavigate } from "react-router-dom"; // <-- Import useNavigate
import FilterSection from "./FilterSection";
import ProductCard from "./ProductCard";
import {
  Box,
  Divider,
  FormControl,
  InputLabel,
  MenuItem,
  Pagination,
  Select,
  useMediaQuery,
  useTheme,
} from "@mui/material";

const Product = () => {
  const navigate = useNavigate(); // <-- Initialize navigate
  const theme = useTheme();
  const isLarge = useMediaQuery(theme.breakpoints.up("lg"));
  const [sort, setsort] = useState("");
  const [page, setpage] = useState(1);

  // Sample product data to pass to ProductCard
  const products = [
    { id: 1, brand: "Samsung", title: "Electric Fridge", price: 400, originalPrice: 999, discount: 60, image: "https://via.placeholder.com/150" },
    { id: 2, brand: "Apple", title: "Smartphone", price: 600, originalPrice: 1200, discount: 50, image: "https://via.placeholder.com/150" },
    { id: 3, brand: "Sony", title: "Headphones", price: 100, originalPrice: 150, discount: 33, image: "https://via.placeholder.com/150" },
    { id: 4, brand: "LG", title: "Washing Machine", price: 500, originalPrice: 800, discount: 37, image: "https://via.placeholder.com/150" },
    { id: 5, brand: "Dell", title: "Laptop", price: 800, originalPrice: 1000, discount: 20, image: "https://via.placeholder.com/150" },
    { id: 6, brand: "Samsung", title: "Microwave Oven", price: 200, originalPrice: 400, discount: 50, image: "https://via.placeholder.com/150" },
    { id: 7, brand: "Sony", title: "Smart TV", price: 1000, originalPrice: 1500, discount: 33, image: "https://via.placeholder.com/150" },
    { id: 8, brand: "Bose", title: "Bluetooth Speaker", price: 150, originalPrice: 200, discount: 25, image: "https://via.placeholder.com/150" },
    { id: 9, brand: "Microsoft", title: "Surface Pro", price: 900, originalPrice: 1300, discount: 30, image: "https://via.placeholder.com/150" },
    { id: 10, brand: "Canon", title: "Camera", price: 500, originalPrice: 800, discount: 37, image: "https://via.placeholder.com/150" },
  ];

  // Sort the products based on the selected sorting option
  const sortedProducts = products.sort((a, b) => {
    if (sort === "Price_Low") {
      return a.price - b.price;
    }
    if (sort === "Price_High") {
      return b.price - a.price;
    }
    return 0;
  });

  // Handle pagination logic
  const productsPerPage = 4; // Number of products per page
  const totalPages = Math.ceil(sortedProducts.length / productsPerPage);
  const currentProducts = sortedProducts.slice(
    (page - 1) * productsPerPage,
    page * productsPerPage
  );

  const handleSortChange = (event) => {
    setsort(event.target.value);
  };

  const handlePageChange = (event, value) => {
    setpage(value);
  };

  // Function to handle navigation when a product card is clicked
  const handleProductClick = (categoryId) => {
    navigate(`/product-details/${categoryId}`); // Navigate to the product details page with the product id
  };

  return (
    <div className="-z-10 mt-10">
      <div>
        <h1 className="text-3xl text-center font-bold text-gray-700 pb-5 px-9">Clothing</h1>
      </div>
      <div className="lg:flex">
        {/* Filter Section on Large Screen */}
        <section className="filter_section hidden lg:block w-[20%]">
          <FilterSection />
        </section>

        {/* Product Display Section */}
        <div className="w-full space-y-5 lg:w-[80%]">
          <div className="flex justify-between items-center px-9 h-[40px]">
            <FormControl size="small" sx={{ width: "200px" }}>
              <InputLabel id="demo-simple-select-label">Sort</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={sort}
                label="Sort"
                onChange={handleSortChange}
              >
                <MenuItem value={"Price_Low"}>Price: Low - High</MenuItem>
                <MenuItem value={"Price_High"}>Price: High - Low</MenuItem>
              </Select>
            </FormControl>
          </div>
          <Divider />
          <section className="products_section grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-5 px-5 justify-center">
            {currentProducts.map((product) => (
              <div key={product.id} onClick={() => handleProductClick(product.id)}>
                <ProductCard product={product} />
              </div>
            ))}
          </section>

          {/* Centered Pagination */}
          <div className="flex justify-center py-10 w-full">
            <Pagination
              onChange={handlePageChange}
              count={totalPages}
              page={page}
              variant="outlined"
              color="primary"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
