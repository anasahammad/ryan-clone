import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Dashboard from "../Layout/Dashboard/Dashboard";
import Orders from "../Layout/Dashboard/pages/orders/Orders";
import Products from "../Layout/Dashboard/pages/products/Products";
import Draft from "../Layout/Dashboard/pages/orders/Draft";
import Home from "../Layout/Dashboard/pages/home/Home";


export const router = createBrowserRouter([ 
    { 
    path: "/", 
    element: <App/>,
    children: [
        {
            path: "/dashboard",
            element: <Dashboard/>,
            children: [
                {
                    path: "/dashboard",
                    element: <Home/>
                },
                {
                    path: "/dashboard/orders",
                    element: <Orders/>
                },
                {
                    path: "/dashboard/products",
                    element: <Products/>
                },
                {
                    path: "/dashboard/draft_orders",
                    element: <Draft/>
                }

            ]
        }
    ]
    }, 
   ]); 