import { Box } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const CategorySheet = ({ selectedCategory }) => {
  // const [selectedCategory, setSelectedCategory] = React.useState(null);
  // const handleCategorySelect = (category) => {
  //   setSelectedCategory(category);
  // };
  // const handleClose = () => {
  //   setSelectedCategory(null);
  // };
  // const handleToggle = () => {
  //   setSelectedCategory(selectedCategory? null : 'Clothes');
  // };
  // const handleCategoryDeselect = () => {
  //   setSelectedCategory(null);
  // };
  // const handleCategoryToggle = () => {
  //   setSelectedCategory(selectedCategory? null : 'Clothes');
  // };
  const navigate = useNavigate();
  const categories = {
    Clothes: ['Tops', 'Bottoms', 'Shoes', 'Accessories'],
    'Home & Furniture': ['Sofas', 'Beds', 'Chairs', 'Tables'],
    Electronics: ['Phones', 'Laptops', 'Speakers', 'Headphones'],
    Vehicles: ['Cars', 'Bikes', 'Scooters', 'RVs'],
  };

  return (
    <Box sx={{ zIndex: 1 }} className="bg-white shadow-lg lg:h-[500px] overflow-y-auto">
      <div className="flex text-sm flex-wrap">
        <div className="p-8 lg:w-[80%]">
          {selectedCategory && (
            <>
              <p className="text-primary-color mb-5 font-semibold">{selectedCategory}</p>
              <ul className="space-y-3">
                {categories[selectedCategory]?.map((item, index) => (
                  <li
                  onClick={()=>navigate("/products/"+item.categoryId)}
                    key={index}
                    className="hover:text-primary-color cursor-pointer transition duration-200"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </>
          )}
        </div>
      </div>
    </Box>
  );
};

export default CategorySheet;
