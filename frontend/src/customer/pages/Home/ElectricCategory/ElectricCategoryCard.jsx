import React from 'react';

const ElectricCategoryCard = ({ item }) => {
  return (
    <div>
      <img className="object-contain h-10" src={item.image} alt={item.name} />
      <h2 className="font-semibold text-sm">{item.name}</h2>
    </div>
  );
};

export default ElectricCategoryCard;
