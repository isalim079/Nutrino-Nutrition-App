/* eslint-disable react/no-unescaped-entities */
import Aos from "aos";
import classNames from "classnames";
import { useEffect } from "react";
const Carbohydrates = () => {
    useEffect(() => {
        Aos.init({
            duration: 1000,
        });
    }, []);
    const animation = classNames("animate__animated", "animate__bounce");
    return (
        <div
            className="bg-carbohydratesBackground bg-cover p-10 rounded-lg md:px-28 md:py-16 mt-10"
            data-aos="zoom-in"
        >
            <div className="flex justify-between items-center">
                <div className="md:border-l-4 md:pl-10 border-green-500 bg-black/70 text-gray-300 p-5 md:p-10">
                    <div>
                        <h1
                            className={`font-comicSans text-left font-semibold text-2xl md:text-4xl ${animation}`}
                        >
                            Carbohydrates
                        </h1>
                        <p className="mt-3 font-comicSans text-justify text-lg">
                            Carbohydrates, the body's primary energy source, are
                            the fuel that propels us through each day. Found in
                            a variety of foods, including whole grains like
                            brown rice and quinoa, fruits such as apples and
                            bananas, vegetables like sweet potatoes and spinach,
                            and legumes like beans and lentils, carbohydrates
                            provide the energy needed for essential bodily
                            functions and daily activities. Explore the world of
                            complex and simple carbohydrates, understanding how
                            they contribute to sustained energy, brain function,
                            and overall well-being. Embrace a balanced diet that
                            includes wholesome sources of carbohydrates to power
                            your journey towards vitality and long-lasting
                            endurance.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Carbohydrates;
