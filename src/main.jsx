import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Shop from './compinents/shop/Shop';
import Order from './compinents/order/Order';
import Inventory from './compinents/inventory/Inventory';
import Login from './compinents/login/Login';
import cartProductsLoader from './loaders/cartProductsLoader';
import CheckOut from './compinents/checkout/CheckOut';
const router = createBrowserRouter([
  {
    path: "/",
    element:<App /> ,
    children:[{
      path:"/",
      element:<Shop></Shop>
    },
    {
      path:'orders',
      element:<Order></Order>,
      loader:cartProductsLoader
    },
    {
      path:'inventory',
      element:<Inventory></Inventory>
    },
    {
      path:'login',
      element:<Login></Login>
    },
    {
      path:"checkout",
      element:<CheckOut></CheckOut>
    }
  ]
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
       <RouterProvider router={router} />
  </React.StrictMode>,
)
