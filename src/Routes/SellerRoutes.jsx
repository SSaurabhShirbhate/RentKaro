import React from "react";
import { Route, Routes } from "react-router-dom";
import DashBoard from "../seller/pages/SellerDashBoard/DashBoard";
import Profile from "../seller/pages/Account/Profile";
import Orders from "../seller/pages/Orders/Orders";
import Payment from "../seller/pages/Payment/Payment";
import Transaction from "../seller/pages/Payment/Transaction";
import AddProduct from "../seller/pages/Products/AddProduct";
import Products from "../seller/pages/Products/Products";

const SellerRoutes = () => {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<DashBoard />} />
        <Route exact path="/products" element={<Products />} />
        <Route exact path="/add-products" element={<AddProduct />} />
        <Route exact path="/orders" element={<Orders />} />
        <Route exact path="/account" element={<Profile />} />
        <Route exact path="/payments" element={<Payment />} />
        <Route exact path="/transactions" element={<Transaction />} />
      </Routes>
    </div>
  );
};

export default SellerRoutes;
