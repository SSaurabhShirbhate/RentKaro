import React from "react";

const CategoryGrid = () => {
  return (
    <div className="grid gap-4 grid-rows-12 grid-cols-12 lg:h-[600px] px-5 lg:px-20">
      <div className="col-span-3 row-span-12 text-white">
        <img
        className="w-full h-full object-cover object-top rounded-md"
          src="https://images.unsplash.com/photo-1588449668365-d15e397f6787?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTAzfHxndWl0YXJ8ZW58MHx8MHx8fDA%3D"
          alt=""
        />
      </div>
      <div className="col-span-2 row-span-6 text-white">
        <img
        className="w-full h-full object-cover object-top rounded-md"
          src="https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FtZXJhfGVufDB8fDB8fHww"
          alt=""
        />
      </div>
      <div className="col-span-4 row-span-6 text-white">
        <img
        className="w-full h-full object-cover object-top rounded-md"
          src="https://images.unsplash.com/photo-1540574163026-643ea20ade25?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fGZ1cm5pdHVyZXxlbnwwfHwwfHx8MA%3D%3D"
          alt=""
        />
      </div>
      <div className="col-span-3 row-span-12 text-white">
        <img
        className="w-full h-full object-cover object-top rounded-md"
          src="https://images.unsplash.com/photo-1559289431-9f12ee08f8b6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bW90b3JjeWNsZXxlbnwwfHwwfHx8MA%3D%3D"
          alt=""
        />
      </div>
      <div className="col-span-4 row-span-6 text-white">
        <img
        className="w-full h-full object-cover object-top rounded-md"
          src="https://plus.unsplash.com/premium_photo-1676823553207-758c7a66e9bb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cm9vbXxlbnwwfHwwfHx8MA%3D%3D"
          alt=""
        />
      </div>
      <div className="col-span-2 row-span-6 text-white">
        <img
        className="w-full h-full object-cover object-top rounded-md"
          src="https://plus.unsplash.com/premium_photo-1681666713641-8d722b681edc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTMzfHxsYXB0b3B8ZW58MHx8MHx8fDA%3D"
          alt=""
        />
      </div>
    </div>
  );
};

export default CategoryGrid;
