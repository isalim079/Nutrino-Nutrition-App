import { useEffect } from "react";
import fatImage from "../../../../assets/images/sixNutritions/fat.png";

import classNames from "classnames";
import Aos from "aos";

const Fats = () => {
    const animation = classNames("animate__animated", "animate__bounce");

    useEffect(() => {
        Aos.init({
            duration: 1000,
        });
    }, []);
    return (
        <div
            className="bg-green-100 md:p-10 p-4 rounded-lg md:px-20 mt-10"
            data-aos="fade-right"
        >
            <div className="flex md:flex-row flex-col-reverse justify-between items-center md:gap-20">
                <div className=" flex-1">
                    <div>
                        <h1
                            className={`font-comicSans text-left font-semibold text-4xl ${animation}`}
                        >
                            Fats
                        </h1>
                        <p className="mt-3 font-comicSans text-justify text-lg">
                            Fats, often misunderstood, are crucial for optimal
                            health, serving as a concentrated source of energy
                            and playing key roles in essential bodily functions.
                            Explore the diverse world of fats, including healthy
                            unsaturated fats found in avocados, nuts, and olive
                            oil, as well as omega-3 fatty acids abundant in
                            fatty fish like salmon. Understand the importance of
                            balancing saturated and trans fats while
                            appreciating their role in hormone production and
                            nutrient absorption. Embrace a well-rounded diet
                            that incorporates a variety of fats to support
                            overall wellness and maintain a harmonious
                            equilibrium within the body.
                        </p>
                    </div>
                </div>
                <div className=" flex-1">
                    <img
                        className="md:w-96 md:ml-28 mb-2 md:mb-0 md:border-l-4 border-green-800 md:pl-10"
                        src={fatImage}
                        alt=""
                    />
                </div>
            </div>
        </div>
    );
};

export default Fats;
