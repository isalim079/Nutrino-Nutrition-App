import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import Home from "../pages/Home/Home/Home";
import ErrorPage from "./ErrorPage";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import Nutrition from "../pages/Nutrition/Nutrition";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/login",
                element: <Login />,
            },
            {
                path: "/signUp",
                element: <SignUp />,
            },
            {
                path: "/nutrition",
                element: <Nutrition />,
            },
        ],
    },
]);
