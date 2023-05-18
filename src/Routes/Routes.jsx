import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home/Home";
import Blog from "../Pages/Blog/Blog";
import Register from "../Pages/Register/Register";


const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,

        children: [
            {
                path: '/',
                element: <Home></Home>
            }, 
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: 'register',
                element: <Register></Register>
            }
        ]
    }
])

export default router;