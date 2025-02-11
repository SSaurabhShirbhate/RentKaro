import React, { useEffect, useState } from "react";
import "./ProductCard.css";
import { Button } from "@mui/material";
import { Favorite, ModeComment } from "@mui/icons-material";
import { pink, teal } from "@mui/material/colors";

const images = [
  "https://images.unsplash.com/photo-1577660002965-04865592fc60?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8amFja2V0c3xlbnwwfHwwfHx8MA%3D%3D",
  "https://images.unsplash.com/flagged/photo-1578507054195-f96dec3a8b14?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGphY2tldHN8ZW58MHx8MHx8fDA%3D",
  "https://images.unsplash.com/photo-1580742471944-c1c187a943e2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGphY2tldHN8ZW58MHx8MHx8fDA%3D",
];

const ProductCard = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  // Handle the image change interval when hovering
  useEffect(() => {
    let interval;

    // Start changing images when hovered
    if (isHovered) {
      interval = setInterval(() => {
        setCurrentImage((prevIndex) => (prevIndex + 1) % images.length);
      }, 1000); // Change image every second
    } else if (!isHovered && interval) {
      clearInterval(interval); // Clear the interval when hover ends
    }

    return () => clearInterval(interval); // Cleanup interval on component unmount or state change
  }, [isHovered]);

  return (
    <div className="group px-4 relative">
      <div
        className="card"
        onMouseEnter={() => setIsHovered(true)} // Start changing images on hover
        onMouseLeave={() => setIsHovered(false)} // Stop changing images when hover ends
      >
        {images.map((item, index) => (
          <img
            key={index} // Ensure a unique key for each element
            className="card-media object-top"
            src={item}
            alt=""
            style={{
              transform: `translateX(${(index - currentImage) * 100}%)`, // Slide images horizontally
              transition: "transform 0.3s ease-in-out", // Smooth transition for image change
            }}
          />
        ))}

        {isHovered &&
          <div className="indicator flex flex-col space-y-2 items-center">
            <div className="flex gap-3">
              <Button variant="contained" color="secondary">
                <Favorite sx={{ color: pink[500] }} />
              </Button>
              <Button variant="contained" color="secondary">
                <ModeComment sx={{ color: pink[500] }} />
              </Button>
            </div>
          </div>
        }
      </div>

      <div className="details pt-3 space-y-1 group-hover-effect rounded-md">
        <div className="name">
          <h1>Samsung</h1>
          <p>Electric Fridge</p>
        </div>
        <div className="flex items-center gap-3">
            <span className="font-sans text-gray-800">rs 400</span>
            <span className="thin-line-through text-gray-400">rs 999</span>
            <span className=" text-primary-color font-semibold">60%</span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
