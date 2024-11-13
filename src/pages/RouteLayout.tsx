import { createBrowserRouter, RouteObject } from 'react-router-dom';
import AppLayout from './AppLayout';
import Home from './Home';
import Products from './Products';
import ProductsDetails from './ProductsDetails';
import { getAllProducts, getSingleProduct } from '../data/apiProducts';

const  router = createBrowserRouter([
    {
        element: <AppLayout />,
        children:[
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/products',
                element: <Products />,
                loader: getAllProducts
            },
            {
                path: '/products/:id',
                element: <ProductsDetails />,
                // loader: getSingleProduct
            }
        ]
    }
])

export default router