/* eslint-disable react/no-unescaped-entities */
import classNames from "classnames";
import proteinImage from "../../../../assets/images/sixNutritions/protein.png";

const Protein = () => {

    const proteinAnimation = classNames("animate__animated", "animate__bounce");

    return (
        <div className="bg-green-100 p-10 rounded-lg px-28">
            <div className="flex justify-between items-center">
                <div className="flex-1 ">
                    <img className="w-80" src={proteinImage} alt="" />
                </div>

                <div className="border-l-4 pl-10 border-green-800 flex-1">
                    <div>
                        <h1 className={`font-comicSans text-left font-semibold text-4xl ${proteinAnimation}`}>
                            Protein
                        </h1>
                        <p className="mt-3 font-comicSans text-justify text-lg">
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
