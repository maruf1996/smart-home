import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <section>
        <div className="bg-violet-50">
            <div className="container flex flex-col items-center px-4 py-16 pb-24 mx-auto text-center lg:pb-56 md:py-32 md:px-10 lg:px-32 text-gray-900">
                <h1 className="text-5xl font-bold leading-none sm:text-6xl xl:max-w-3xl text-gray-900">Welcome To Smart Home</h1>
                <p className="mt-6 mb-8 text-lg sm:mb-12 xl:max-w-3xl text-gray-900">Best E-commerce platform for buying high quality Smart Home Appliances at extremely affordable Price.</p>
                <div className="flex flex-wrap justify-center">
                    <Link to='/shop' type="button" className="px-8 py-3 m-2 text-lg font-semibold rounded bg-sky-300 text-gray-800">Shop</Link>
                    <Link to='/about' type="button" className="px-8 py-3 m-2 text-lg border rounded border-gray-700 text-gray-900">Learn more</Link>
                </div>
            </div>
        </div>
        <img src="https://shome-shop.netlify.app/static/media/hero.6865951df6ceab277647.jpg" alt="" className="w-5/6 mx-auto mb-12 -mt-20 rounded-lg shadow-md lg:-mt-40 bg-gray-500" />
    </section>
    );
};

export default Home;