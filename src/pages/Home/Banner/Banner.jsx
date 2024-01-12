/* eslint-disable react/no-unescaped-entities */
import classNames from "classnames";
import image1 from "../../../assets/images/bannerImage/top banner.png";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export function Banner() {
    useEffect(() => {
        Aos.init({
            duration: 1000,
        });
    }, []);

    const backInDown = classNames("animate__animated", "animate__backInDown");
    const backInUp = classNames("animate__animated", "animate__backInUp");

    return (
        <div className="bg-light-green-300 md:p-0 p-3">
            <div className="max-w-screen-2xl mx-auto ">
                <div className="flex md:justify-between md:items-center md:h-[calc(100vh-72px)] flex-col-reverse md:flex-row">
                    <div className="flex-1">
                        <div>
                            <h1
                                className={`md:text-5xl text-xl font-bold text-light-green-900 ${backInDown}`}
                            >
                                Fueling Your Body for Optimal Health
                            </h1>
                            <div
                                className="border border-light-green-900 my-3"
                                data-aos="fade-right"
                            ></div>
                            <p
                                className={`text-light-green-900  text-justify ${backInUp}`}
                            >
                                Nutrition plays a pivotal role in our daily
                                lives, acting as the cornerstone for our overall
                                health and vitality. It's more than just
                                consuming food; it's about nourishing our bodies
                                with the essential nutrients it needs to
                                function optimally. A balanced diet comprising a
                                diverse range of fruits, vegetables, lean
                                proteins, and whole grains is fundamental.{" "}
                            </p>
                        </div>
                    </div>
                    <div className="flex-1">
                        <div className="mb-4 md:mb-0">
                            <img className="" src={image1} alt="" />
                            <div className="border-4 border-light-green-700"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
