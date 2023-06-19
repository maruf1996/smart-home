import React, { useContext } from 'react';
import { toast } from 'react-hot-toast';
import { addToDb } from '../utilits/FakeDb';
import Product from './Product';
import { CartContext, ProductContext } from './Root';

const Shop = () => {
    const products=useContext(ProductContext);
    const [cart,setCart]=useContext(CartContext)
    // console.log(cart)

    const handleAddToCart=product=>{
        // setCart(previus=>[...previus,product])
        // setCart([...cart,product])
        let newCart=[];

        const exists=cart.find(extProduct=>extProduct.id===product.id);

        if(!exists){
            product.quantity=1;
            newCart=[...cart,product]
        }
        else{
            const rest=cart.filter(extProduct=>extProduct.id!==product.id)
            exists.quantity=exists.quantity+1;
            newCart=[...rest,exists]  
        }
        setCart(newCart)
        addToDb(product.id);
        toast.success('Product addeded',{autoClose:500})
    }
    
    return (
        <div className='px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20'>
            <div className="grid gap-8 row-gap-5 mb-8 lg:grid-cols-3 lg:row-gap-8">
            {
                products.map(product=><Product
                key={product.id}
                product={product}
                handleAddToCart={handleAddToCart}
                ></Product>)
            } 
            </div>
        </div>
    );
};

export default Shop;