import { Outlet } from "react-router-dom";
import { NavigationBar } from "../pages/Shared/Navbar/Navbar";
import Footer from "../pages/Shared/Footer/Footer";
import FloatingProfile from "../pages/Shared/FloatingProfile/FloatingProfile";

const Root = () => {
    return (
        <div className="md:overflow-hidden">
            <FloatingProfile />
            <NavigationBar />

            <Outlet />
            <Footer />
        </div>
    );
};

export default Root;
