/* eslint-disable react/no-unescaped-entities */
import { useEffect } from "react";
import vitaminsImage from "../../../../assets/images/sixNutritions/vitamin.png";
import classNames from "classnames";
import Aos from "aos";

const Vitamins = () => {
    useEffect(() => {
        Aos.init({
            duration: 1000,
        });
    }, []);

    const animation = classNames("animate__animated", "animate__bounce");

    return (
        <div
            className="bg-green-100 p-10 rounded-lg px-28 mt-10"
            data-aos="fade-left"
        >
            <div className="flex justify-between items-center">
                <div className="flex-1">
                    <img className="w-80" src={vitaminsImage} alt="" />
                </div>

                <div className="border-l-4 pl-10 border-green-800 flex-1">
                    <div>
                        <h1
                            className={`font-comicSans text-left font-semibold text-4xl ${animation}`}
                        >
                            Vitamins
                        </h1>
                        <p className="mt-3 font-comicSans text-justify text-lg">
                            Vitamins, the micronutrient powerhouses, are
                            essential for a myriad of physiological processes
                            that contribute to overall health and well-being.
                            Explore the colorful world of fruits and vegetables,
                            rich in vitamins like A, C, and K, supporting immune
                            function and promoting skin health. Dive into dairy
                            products for vitamin D, crucial for bone strength,
                            and embrace the benefits of vitamin E found in nuts
                            and seeds, acting as a potent antioxidant. Uncover
                            the intricate roles of each vitamin, understanding
                            how they synergistically contribute to the body's
                            vitality and resilience. A diverse, nutrient-rich
                            diet ensures a harmonious supply of these essential
                            vitamins, promoting a life of wellness and vibrancy.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Vitamins;
