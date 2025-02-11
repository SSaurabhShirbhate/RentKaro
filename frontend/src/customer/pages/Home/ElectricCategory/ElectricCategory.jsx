import React from "react";
import { useNavigate } from "react-router-dom";  // Import useNavigate from react-router-dom
import ElectricCategoryCard from "./ElectricCategoryCard";
import { useMediaQuery } from "@mui/material";

const electronics = [
  {
    section: "ELECTRIC_CATEGORIES",
    name: "Laptop",
    image: "https://rukminim2.flixcart.com/image/312/312/xif0q/computer/x/9/j/-original-imahyjzh7m2zsqdg.jpeg?q=70",
    categoryId: "laptops",
  },
  {
    section: "ELECTRIC_CATEGORIES",
    name: "Mobile",
    image: "https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/5/t/j/edge-50-fusion-pb300002in-motorola-original-imahywzrfagkuyxx.jpeg?q=70&crop=false",
    categoryId: "mobiles",
  },
  {
    section: "ELECTRIC_CATEGORIES",
    name: "Smartwatch",
    image: "https://rukminim2.flixcart.com/image/612/612/xif0q/smartwatch/f/g/g/-original-imagywnz46fngcks.jpeg?q=70",
    categoryId: "smart_watches",
  },
  {
    section: "ELECTRIC_CATEGORIES",
    name: "Headphones",
    image: "https://rukminim2.flixcart.com/image/612/612/kz4gh3k0/headphone/c/v/r/-original-imagb7bmhdgghzxq.jpeg?q=70",
    categoryId: "headphones_headsets",
  },
  {
    section: "ELECTRIC_CATEGORIES",
    name: "Speaker",
    image: "https://rukminim2.flixcart.com/image/612/612/xif0q/speaker/6/z/2/-original-imahfgfkr5gkk9aq.jpeg?q=70",
    categoryId: "speakers",
  },
  {
    section: "ELECTRIC_CATEGORIES",
    name: "Tv",
    image: "https://rukminim2.flixcart.com/image/312/312/xif0q/television/9/p/9/-original-imah2v29z86u7b79.jpeg?q=70",
    categoryId: "television",
  },
  {
    section: "ELECTRIC_CATEGORIES",
    name: "Camera",
    image: "https://rukminim2.flixcart.com/image/312/312/jfbfde80/camera/n/r/n/canon-eos-eos-3000d-dslr-original-imaf3t5h9yuyc5zu.jpeg?q=70",
    categoryId: "cameras",
  },
];

const ElectricCategory = () => {
  const navigate = useNavigate();  // Use useNavigate hook for navigation
  const isSmallScreen = useMediaQuery("(max-width:600px)");

  const handleCardClick = (categoryId) => {
    // Navigate to /products with the categoryId
    navigate(`/products/${categoryId}`);
  };

  return (
    <div className="flex flex-wrap justify-between py-5 lg:px-20 border-b">
      {electronics
        .slice(0, isSmallScreen ? 5 : electronics.length)
        .map((item, index) => (
          <div key={index} onClick={() => handleCardClick(item.categoryId)}>
            <ElectricCategoryCard item={item} />
          </div>
        ))}
    </div>
  );
};

export default ElectricCategory;
