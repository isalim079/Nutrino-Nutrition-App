import Lottie from "lottie-react";
import errorPage from "../assets/errorPage/errorPage.json";
import "animate.css";
import classNames from "classnames";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import ReactiveButton from "reactive-button";

const ErrorPage = () => {
    const rubberAnimation = classNames(
        "animate__animated",
        "animate__rubberBand"
    );

    const [state, setState] = useState("idle");
    const navigate = useNavigate();

    const onClickHandler = () => {
        setState("loading");

        // send an HTTP request
        setTimeout(() => {
            setState("success");
        }, 2000);
    };
    useEffect(() => {
        if (state === "success") {
            setTimeout(() => {
                navigate("/");
            }, 2000);
        }
    }, [state, navigate]);

    return (
        <div>
            <div className="border border-black h-screen flex justify-center items-center">
                <div className="w-80 flex flex-col justify-center items-center">
                    <Lottie animationData={errorPage} loop={true} />
                    <div
                        className={`text-center text-green-900 -mt-5 ${rubberAnimation} `}
                    >
                        <h1 className="text-8xl font-bold leading-[70px]">
                            404
                        </h1>
                        <p className="text-lg ">page not found</p>
                    </div>
                    <div className="mt-2">
                        <ReactiveButton
                            buttonState={state}
                            idleText="Home"
                            loadingText="Going"
                            successText="Done"
                            color="green"
                            size="large"
                            onClick={onClickHandler}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ErrorPage;
