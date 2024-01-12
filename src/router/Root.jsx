import { Outlet } from "react-router-dom";
import { NavigationBar } from "../pages/Shared/Navbar/Navbar";
import Footer from "../pages/Shared/Footer/Footer";

const Root = () => {
    return (
        <div>
            <NavigationBar />

            <Outlet />
            <Footer />
        </div>
    );
};

export default Root;
