import logo from './logo.svg';
import './App.css';
import { Button, ThemeProvider } from '@mui/material';
import NavBar from './customer/components/NavBar/NavBar';
import customTheme from './Theme/CustomTheme';
import Home from './customer/pages/Home/Home';
import Product from './customer/pages/Product/Product';
import ProductDetails from './customer/pages/ProductDetails/ProductDetails';
import Review from './customer/pages/Review/Review';
import Cart from './customer/pages/Cart/Cart';
import Checkout from './customer/pages/Checkout/Checkout';
import Account from './customer/pages/Account/Account';
import { Route, Routes } from 'react-router-dom';
import BecomeSeller from './customer/pages/BecomeSeller/BecomeSeller';
import SellerDashBoard from './seller/pages/SellerDashBoard/SellerDashBoard';
import AdminDashboard from './admin/pages/dashboard/AdminDashboard';

function App() {
  return (
    
    <ThemeProvider theme={customTheme}>

      <div>
      <NavBar/>
      {/* <Home/> */}
    {/* <Product/> */}
    {/* <ProductDetails/> */}
    {/* <Review /> */}
    {/* <Cart/> */}
    {/* <Checkout/> */}
    {/* <Account/> */}
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/products/:category" element={<Product />} />
      <Route exact path="/product-details/:categoryId/:name/:productId" element={<ProductDetails />} />
      <Route exact path="/reviews/:productId" element= {<Review />} />
      <Route exact path="/cart" element={<Cart />} />
      <Route exact path="/checkout" element={<Checkout />} />
      <Route exact path="/account/*" element={<Account />} />
      <Route exact path="/become-seller" element={<BecomeSeller />} />
      <Route exact path="/seller/*" element={<SellerDashBoard />} />
      <Route exact path="/admin/*" element={<AdminDashboard />} />
    </Routes>
      </div>
    </ThemeProvider>
    
  );
}

export default App;
