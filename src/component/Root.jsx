import React, { createContext, useState } from 'react';
import { Outlet, useLoaderData } from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';

export const ProductContext=createContext([]);
export const CartContext=createContext([]);

const Root = () => {
    const {products,initialCart}=useLoaderData();
    // console.log(products)
    const [cart,setCart]=useState(initialCart);

    return (
        <ProductContext.Provider value={products}>
        <CartContext.Provider value={[cart,setCart]}>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </CartContext.Provider>
        </ProductContext.Provider>
    );
};

export default Root;