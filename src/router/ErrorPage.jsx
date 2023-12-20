import Lottie from "lottie-react";
import errorPage from "../assets/errorPage/errorPage.json"

const ErrorPage = () => {
    return (
        <div>
            <Lottie animationData={errorPage} loop={true} />
        </div>
    );
};

export default ErrorPage;