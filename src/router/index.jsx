import { createHashRouter, Navigate } from "react-router-dom";
import Home from "../pages/home";
import List from "../pages/list";
import Login from "../pages/login";

export const globalRouters = createHashRouter([
    {
        path: '/Home',
        element: <Home />,  
        //错误写法，element需要为React元素,而非组件引用
        // element: Home,  
    },
    {
        path: '/login',
        element: <Login />,
    },
    {
        path: '*',
        element: <Navigate to="/Home" />,
    },
    {
        path: '/List',
        element: <List />,
    },
])