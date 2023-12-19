import { Outlet } from "react-router-dom";
import { NavigationBar } from "../pages/Shared/Navbar/Navbar";

const Root = () => {
    return (
        <div>
            <NavigationBar />

            <Outlet></Outlet>
        </div>
    );
};

export default Root;
