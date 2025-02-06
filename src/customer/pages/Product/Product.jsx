import React, { useState } from "react";
import FilterSection from "./FilterSection";
import ProductCard from "./ProductCard";
import {
  Box,
  Divider,
  FormControl,
  IconButton,
  InputLabel,
  MenuItem,
  Pagination,
  Select,
  useMediaQuery,
  useTheme,
} from "@mui/material";

const Product = () => {
  const theme = useTheme();
  const isLarge = useMediaQuery(theme.breakpoints.up("lg"));
  const [sort, setsort] = useState();
  const [page, setpage] = useState(1);

  const handleSortChange = (events) => {
    setsort(events.target.value);
  };
  const handlePageChange = (value) => {
    setpage(value);
  };

  return (
    <div className="-z-10 mt-10">
      <div>
        <h1 className="text-3xl text-center font-bold text-gray-700 pb-5 px-9">
          Clothing
        </h1>
      </div>
      <div className="lg:flex">
        <section className="filter_section hidden lg:block w-[20%]">
          <FilterSection />
        </section>
        <div className="w-full space-y-5 lg:w-[80%]">
          <div className="flex justify-between items-center px-9 h-[40px]">
            <div className="relative w-1/2">
              {!isLarge && (
                <IconButton>
                  <FilterSection />
                </IconButton>
              )}

              {!isLarge && (
                <Box>
                  <FilterSection />
                </Box>
              )}
            </div>

            <FormControl size="small" sx={{ width: "200px" }}>
              <InputLabel id="demo-simple-select-label">Sort</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={sort}
                label="sort"
                onChange={handleSortChange}
              >
                <MenuItem value={"Price_Low"}>Price : Low - High</MenuItem>
                <MenuItem value={"Price_high"}>Price : High - Low</MenuItem>
              </Select>
            </FormControl>
          </div>
          <Divider />
          <section className="products_section grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-5 px-5 justify-center">
            {[1, 1, 1, 1, 1, 1, 1, 1].map((item) => (
              <ProductCard key={item} />
            ))}
          </section>

          {/* Centered Pagination */}
          <div className="flex justify-center py-10 w-full">
            <Pagination
              onChange={(e, value) => handlePageChange(value)}
              count={10}
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
