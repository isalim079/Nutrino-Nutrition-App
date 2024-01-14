import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import Home from "../pages/Home/Home/Home";
import ErrorPage from "./ErrorPage";
import Login from "../pages/Login/Login";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/login',
                element: <Login />
            },
        ]
    },
    
])