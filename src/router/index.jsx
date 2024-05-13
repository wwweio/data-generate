import { createHashRouter, Navigate } from "react-router-dom";
import Home from "../pages/home";
import Gradient from "../pages/gradient";
import Login from "../pages/login";
import Account from "../pages/account";
// 引入Entry框架页面
import Entry from '@/pages/entry';

export const globalRouters = createHashRouter([
    {
        path: '/login',
        element: <Login />,
    },
    
    {
        path: '/',
        element: <Entry />,
        // 定义二级路由
        children : [
            // 精确匹配
            {
                path: '/home',
                element: <Home />,  
                //错误写法，element需要为React元素,而非组件引用
                // element: Home,  
            },
            {
                path:'/account',
                element:<Account />,
            },
            {
                path: '/gradient',
                element: <Gradient />,
            },

            {
                // 如果URL没有"#路由"，跳转Home页面
                path: '/',
                element: <Navigate to="/home" />,
            },

            {
                // 未匹配，跳转Login页面
                path: '*',
                element: <Navigate to="/login" />,
            },
        ],
    },
])