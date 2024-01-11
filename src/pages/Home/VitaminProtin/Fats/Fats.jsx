import fatImage from "../../../../assets/images/sixNutritions/fat.png";

const Fats = () => {
    return (
        <div className="bg-green-100 p-10 rounded-lg px-20 mt-10">
            <div className="flex justify-between items-center gap-20">
                <div className=" flex-1">
                    <div>
                        <h1 className="font-comicSans text-left font-semibold text-4xl">
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
                    <img className="w-96 ml-28 border-l-4  border-green-800 pl-10" src={fatImage} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Fats;
