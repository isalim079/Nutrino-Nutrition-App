import { Outlet, useLocation } from "react-router-dom";
import { NavigationBar } from "../pages/Shared/Navbar/Navbar";
import Footer from "../pages/Shared/Footer/Footer";
import FloatingProfile from "../pages/Shared/FloatingProfile/FloatingProfile";

const Root = () => {
    const location = useLocation();

    const noHeaderFooter =
        location?.pathname?.includes("/login") ||
        location?.pathname?.includes("/signUp");

    return (
        <div className="md:overflow-hidden overflow-hidden">
            <FloatingProfile />
            {
                noHeaderFooter || <NavigationBar />
            }

            <Outlet />
            {
                noHeaderFooter || <Footer />
            }
        </div>
    );
};

export default Root;
