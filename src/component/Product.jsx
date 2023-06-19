import React from 'react';

const Product = ({product,handleAddToCart}) => {
    const {price,picture,name,category}=product;
    return (
        <div className=" rounded-md shadow-md bg-gray-100 text-gray-900">
            <img src={picture} alt="" className="object-cover object-center w-full rounded-t-md 6  p-6" />
            <div className="flex flex-col justify-between p-6 space-y-8">
                <div className="space-y-2">
                    <h2 className="text-2xl font-semibold tracking-wide">{name}</h2>
                    <p className="">Category: {category}</p>
                    <p className="font-bold">Price: ${price}</p>
                </div>
                <button onClick={()=>handleAddToCart(product)} type="button" className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-full bg-sky-300 text-gray-900">Add to Cart</button>
            </div>
        </div>
    );
};

export default Product;