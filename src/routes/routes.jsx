import { createBrowserRouter } from "react-router-dom";
import About from "../component/About";
import Cart from "../component/Cart";
import Error from "../component/Error";
import Home from "../component/Home";
import Root from "../component/Root";
import Shop from "../component/Shop";
import { ProductAndsCartData } from "../loaders/getCart&Products";

const routes=createBrowserRouter([
    {
        path:'/',
        element:<Root></Root>,
        errorElement:<Error></Error>,
        loader:ProductAndsCartData,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/about',
                element:<About></About>
            },
            {
                path:'/shop',
                element:<Shop></Shop>
            },
            {
                path:'/cart',
                element:<Cart></Cart>
            }
        ]
    }
])

export default routes;