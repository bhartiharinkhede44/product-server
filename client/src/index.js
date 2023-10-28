import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './views/Home/Home';
import ProductDetail from './views/ProductDetail/ProductDetail';
import ProductPage from './views/ProductPage/ProductPage'
import UpadateProduct from './views/UpadateProduct/UpadateProduct'


const root = ReactDOM.createRoot(document.getElementById('root'));

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />
    },
    {
        path: "/Product",
        element: <ProductPage />
    },
    {
        path: "/detail/:_id",
        element: <ProductDetail />
    },
    {
        path: '/updateproduct/:id',
        element: <UpadateProduct />
    }
])




root.render(

    <RouterProvider router={router} />);



