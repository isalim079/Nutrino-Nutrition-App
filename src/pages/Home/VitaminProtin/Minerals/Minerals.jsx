/* eslint-disable react/no-unescaped-entities */
import { useEffect } from "react";
import mineralseImage from "../../../../assets/images/sixNutritions/Minerals.png";
import classNames from "classnames";
import Aos from "aos";

const Minerals = () => {

    useEffect(() => {
        Aos.init({
            duration: 1000,
        });
    }, []);

    const animation = classNames("animate__animated", "animate__bounce");

    return (
        <div className="bg-green-100 p-4 md:p-10 rounded-lg md:px-20 mt-10" data-aos="fade-right">
            <div className="flex flex-col-reverse md:flex-row justify-between items-center md:gap-20">
                <div className=" flex-1">
                    <div>
                        <h1 className={`font-comicSans text-left font-semibold text-4xl ${animation}`}>
                            Minerals
                        </h1>
                        <p className="mt-3 font-comicSans text-justify text-lg">
                            Minerals, the silent champions of nutrition, are
                            indispensable for the body's structural integrity
                            and optimal functioning. Dive into the mineral-rich
                            bounty of foods such as leafy greens, nuts, and
                            seeds, offering essential nutrients like calcium for
                            bone health and iron for oxygen transport. Explore
                            the vital roles of minerals like potassium in
                            maintaining fluid balance and zinc in supporting
                            immune function. Uncover the hidden treasures in
                            whole grains, legumes, and seafood, ensuring a
                            diverse array of minerals to fortify the body.
                            Embrace the harmonious dance of these microscopic
                            heroes, contributing to the foundation of health and
                            vitality.
                        </p>
                    </div>
                </div>
                <div className=" flex-1">
                    <img
                        className="w-96 md:ml-28 md:border-l-4  border-green-800 md:pl-10"
                        src={mineralseImage}
                        alt=""
                    />
                </div>
            </div>
        </div>
    );
};

export default Minerals;
