/* eslint-disable react/no-unescaped-entities */
import classNames from "classnames";
import proteinImage from "../../../../assets/images/sixNutritions/protein.png";
import { useEffect } from "react";
import Aos from "aos";

const Protein = () => {
    useEffect(() => {
        Aos.init({
            duration: 1000,
        });
    }, []);

    const proteinAnimation = classNames("animate__animated", "animate__bounce");

    return (
        <div
            className="bg-green-100 md:p-10 rounded-lg md:px-28 p-4 py-10 md:py-0 "
            data-aos="fade-left"
        >
            <div className="md:flex justify-between items-center">
                <div className="md:flex-1 flex justify-center items-center  ">
                    <img className="md:w-80 w-44" src={proteinImage} alt="" />
                </div>

                <div className="md:border-l-4 md:pl-10 border-green-800 md:flex-1">
                    <div>
                        <h1
                            className={`font-comicSans md:text-left font-semibold text-2xl mt-4 md:mt-0 md:text-4xl ${proteinAnimation}`}
                        >
                            Protein
                        </h1>
                        <p className="md:mt-3 mt-2 font-comicSans text-justify md:text-lg">
                            Protein, the building block of life, plays a pivotal
                            role in sustaining and repairing the body's tissues.
                            From muscle development to immune function, this
                            vital nutrient is a cornerstone of overall health.
                            Dive into a world where protein-rich foods become
                            the foundation for strength, resilience, and optimal
                            well-being. Nourish your body with sources like lean
                            meats, poultry, fish, eggs, dairy, legumes, nuts,
                            and seeds. Embark on a journey of vitality and
                            endurance by incorporating these diverse and
                            nutrient-packed foods into your daily diet
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Protein;
