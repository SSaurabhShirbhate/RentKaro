import React, { useState } from "react";
import { Button, Divider, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from "@mui/material";
import { purple } from "@mui/material/colors";
import { useSearchParams } from "react-router-dom";
import { colors } from "../../../data/Filter/color";
import { price } from "../../../data/Filter/price";
import { discount } from "../../../data/Filter/discount";

const FilterSection = () => {
  // State to track which filters are expanded
  const [expandedFilters, setExpandedFilters] = useState({
    color: false,
    price: false,
    discount: false,
  });

  const [searchParams, setSearchParams] = useSearchParams();

  // Toggle the visibility of the filters (Color, Price, Discount)
  const handleToggleFilter = (filter) => {
    setExpandedFilters((prevState) => ({
      ...prevState,
      [filter]: !prevState[filter],
    }));
  };

  // Update the searchParams when a filter is changed
  const updateFilterParams = (e) => {
    const { value, name } = e.target;
    const updatedSearchParams = new URLSearchParams(searchParams); // Create a new instance of searchParams
    if (value) {
      updatedSearchParams.set(name, value); // Set or update the filter value
    } else {
      updatedSearchParams.delete(name); // Remove the filter if no value
    }
    setSearchParams(updatedSearchParams); // Update the searchParams in the URL
  };

  // Clear all filters
  const clearAllFilters = () => {
    const updatedSearchParams = new URLSearchParams();
    setSearchParams(updatedSearchParams); // Reset searchParams to empty
  };

  return (
    <div className="-z-50 space-y-5 bg-white">
      <div className="flex items-center justify-between h-[40px] px-9 lg:border-r">
        <p className="text-lg font-semibold">Filters</p>
        <Button onClick={clearAllFilters} size="small" className="text-violet-700 cursor-pointer font-semibold">
          Clear all
        </Button>
      </div>
      <Divider />
      <div className="px-9 space-y-6">
        {/* Color Filter */}
        <section>
          <FormControl>
            <FormLabel sx={{ fontSize: "16px", fontWeight: "bold", color: purple[600], pb: "14px" }} id="color">
              Color
            </FormLabel>
            <RadioGroup aria-labelledby="color" defaultValue="" name="color">
              {colors.slice(0, expandedFilters.color ? colors.length : 5).map((item) => (
                <FormControlLabel
                  key={item.name}
                  value={item.name} // Set dynamic value
                  control={<Radio />}
                  label={
                    <div className="flex items-center gap-3">
                      <p>{item.name}</p>
                      <p
                        style={{ backgroundColor: item.hex }}
                        className={`h-5 w-5 rounded-full ${item.name === "White" ? "border" : ""}`}
                      ></p>
                    </div>
                  }
                  onChange={updateFilterParams} // Update URL when a filter is selected
                />
              ))}
            </RadioGroup>
          </FormControl>
          <button
            onClick={() => handleToggleFilter('color')}
            className="text-primary-color cursor-pointer hover:text-purple-950 flex items-center"
          >
            {expandedFilters.color ? "hide" : `+${colors.length - 5} more`}
          </button>
        </section>

        {/* Price Filter */}
        <section>
          <FormControl>
            <FormLabel sx={{ fontSize: "16px", fontWeight: "bold", color: purple[600], pb: "14px" }} id="price">
              Price
            </FormLabel>
            <RadioGroup aria-labelledby="price" defaultValue="" name="price">
              {price.slice(0, expandedFilters.price ? price.length : 5).map((item) => (
                <FormControlLabel
                  key={item.name}
                  value={item.name} // Set dynamic value
                  control={<Radio size="small" />}
                  label={item.name}
                  onChange={updateFilterParams} // Update URL when a filter is selected
                />
              ))}
            </RadioGroup>
          </FormControl>
          <button
            onClick={() => handleToggleFilter('price')}
            className="text-primary-color cursor-pointer hover:text-purple-950 flex items-center"
          >
            {expandedFilters.price ? "hide" : `+${price.length - 5} more`}
          </button>
        </section>

        {/* Discount Filter */}
        <section>
          <FormControl>
            <FormLabel sx={{ fontSize: "16px", fontWeight: "bold", color: purple[600], pb: "14px" }} id="discount">
              Discount
            </FormLabel>
            <RadioGroup aria-labelledby="discount" defaultValue="" name="discount">
              {discount.slice(0, expandedFilters.discount ? discount.length : 5).map((item) => (
                <FormControlLabel
                  key={item.name}
                  value={item.name} // Set dynamic value
                  control={<Radio size="small" />}
                  label={item.name}
                  onChange={updateFilterParams} // Update URL when a filter is selected
                />
              ))}
            </RadioGroup>
          </FormControl>
          <button
            onClick={() => handleToggleFilter('discount')}
            className="text-primary-color cursor-pointer hover:text-purple-950 flex items-center"
          >
            {expandedFilters.discount ? "hide" : `+${discount.length - 5} more`}
          </button>
        </section>
      </div>
    </div>
  );
};

export default FilterSection;
