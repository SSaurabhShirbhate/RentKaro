import Dashboard from '@mui/icons-material/Dashboard';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import InventoryIcon from '@mui/icons-material/Inventory';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import PaymentIcon from '@mui/icons-material/Payment';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import AccountBox from '@mui/icons-material/AccountBox';
import LogoutIcon from '@mui/icons-material/Logout';
import DrawerList from '../../../component/DrawerList'; // Make sure this path is correct

const menu = [
  {
    name: "Dashboard",
    path: "/seller",
    icon: <Dashboard className="text-primary-color" />,
    activeIcon: <Dashboard className="text-white" />,
  },
  {
    name: "Orders",
    path: "/seller/orders",
    icon: <ShoppingBagIcon className="text-primary-color" />,
    activeIcon: <ShoppingBagIcon className="text-white" />,
  },
  {
    name: "Products",
    path: "/seller/products",
    icon: <InventoryIcon className="text-primary-color" />,
    activeIcon: <InventoryIcon className="text-white" />,
  },
  {
    name: "Add Products",
    path: "/seller/add-products",
    icon: <AddShoppingCartIcon className="text-primary-color" />,
    activeIcon: <AddShoppingCartIcon className="text-white" />,
  },
  {
    name: "Payments",
    path: "/seller/payments",
    icon: <PaymentIcon className="text-primary-color" />,
    activeIcon: <PaymentIcon className="text-white" />,
  },
  {
    name: "Transactions",
    path: "/seller/transactions",
    icon: <AccountBalanceWalletIcon className="text-primary-color" />,
    activeIcon: <AccountBalanceWalletIcon className="text-white" />,
  },
];

const menu2 = [
  {
    name: "Account",
    path: "/seller/account",
    icon: <AccountBox className="text-primary-color" />,
    activeIcon: <AccountBox className="text-white" />,
  },
  {
    name: "Logout",
    path: "/",
    icon: <LogoutIcon className="text-primary-color" />,
    activeIcon: <LogoutIcon className="text-white" />,
  },
];

const SellerDrawerList = ({ toggleDrawer }) => {
  return (
    <div>
      {/* Pass the menus and toggleDrawer function to the DrawerList */}
      <DrawerList menu={menu} menu2={menu2} toggleDrawer={toggleDrawer} />
    </div>
  );
};

export default SellerDrawerList;
