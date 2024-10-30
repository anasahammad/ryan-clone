import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Dashboard from "../Layout/Dashboard/Dashboard";
import Orders from "../Layout/Dashboard/pages/orders/Orders";
import Products from "../Layout/Dashboard/pages/products/Products";
import Draft from "../Layout/Dashboard/pages/orders/Draft";
import Home from "../Layout/Dashboard/pages/home/Home";
import PurchaseOrders from "../Layout/Dashboard/pages/products/PurchaseOrders";
import Transfers from "../Layout/Dashboard/pages/products/Transfers";
import Catalogs from "../Layout/Dashboard/pages/products/Catalogs";
import Customers from "../Layout/Dashboard/pages/customers/Customers";
import Companies from "../Layout/Dashboard/pages/customers/Companies";
import Content from "../Layout/Dashboard/pages/content/Content";
import MetaObjects from "../Layout/Dashboard/pages/content/MetaObjects";
import Discounts from "../Layout/Dashboard/pages/discounts/Discounts";
import Settings from "../Layout/Dashboard/pages/settings/Settings";


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
                },
                
                {
                    path: "/dashboard/purchase_orders",
                    element: <PurchaseOrders/>
                },
                {
                    path: "/dashboard/transfers",
                    element: <Transfers/>
                },
                {
                    path: "/dashboard/catalogs",
                    element: <Catalogs/>
                },
                {
                    path: "/dashboard/customers",
                    element: <Customers/>
                },
                {
                    path: "/dashboard/companies",
                    element: <Companies/>
                },
                {
                    path: "/dashboard/content",
                    element: <Content/>
                },
                {
                    path: "/dashboard/metaobjects",
                    element: <MetaObjects/>
                },
                {
                    path: "/dashboard/discounts",
                    element: <Discounts/>
                },
                

            ],
           
        }
    ],
    
    }, 
     {
                path: "/dashboard/settings/general",
                element: <Settings/>
            },
   ]); 