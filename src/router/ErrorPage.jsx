import Lottie from "lottie-react";
import errorPage from "../assets/errorPage/errorPage.json";

const ErrorPage = () => {

    

    return (
        <div>
            <div className="border border-black h-screen flex justify-center items-center">
                <div className="w-80">
                    <Lottie animationData={errorPage} loop={true} />
                    <div className="text-center text-green-900 ">
                        <h1 className="text-8xl font-bold leading-[70px]">404</h1>
                        <p className="text-lg">page not found</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ErrorPage;
