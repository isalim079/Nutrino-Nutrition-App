/* eslint-disable react/no-unescaped-entities */
import { useEffect } from "react";
import waterImage from "../../../../assets/images/sixNutritions/water.png";
import classNames from "classnames";
import Aos from "aos";

const Water = () => {

    useEffect(() => {
        Aos.init({
            duration: 1000,
        });
    }, []);

    const animation = classNames("animate__animated", "animate__bounce");

    return (
        <div className="bg-green-100 p-4 md:p-10 rounded-lg md:px-28 mt-10" data-aos="fade-left">
            <div className="flex flex-col md:flex-row justify-between items-center">
                <div className="flex-1">
                    <img className="w-80" src={waterImage} alt="" />
                </div>

                <div className="md:border-l-4 md:pl-10 border-green-800 flex-1">
                    <div>
                        <h1 className={`font-comicSans text-left font-semibold text-4xl ${animation}`}>
                            Waters
                        </h1>
                        <p className="mt-3 font-comicSans text-justify text-lg">
                            Water, the elixir of life, is the cornerstone of
                            well-being, vital for every aspect of human
                            function. Dive into the essence of hydration,
                            understanding the fundamental role water plays in
                            digestion, nutrient absorption, and temperature
                            regulation. Embark on a journey through clear
                            springs and crisp taps, recognizing that adequate
                            water intake is not just a necessity but a pathway
                            to optimal health. As the body's most essential
                            nutrient, water fuels every cell, supports
                            metabolism, and fosters a resilient immune system.
                            Sip, savor, and celebrate the life-giving properties
                            of water, embracing its irreplaceable role in the
                            pursuit of holistic wellness.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Water;
