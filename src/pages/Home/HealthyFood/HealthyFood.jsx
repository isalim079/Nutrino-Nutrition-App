import saladImage from "../../../assets/images/bannerImage/saladBanner.png";
import wellnessImage from "../../../assets/images/mealOfTheDay/lunch.png";

const HealthyFood = () => {
    return (
        <div className="bg-blue-gray-50 p-3">
            <div className="bg-blue-gray-50 pb-10 max-w-screen-2xl mx-auto relative">
                {/* section title */}
                <h1 className="text-center pt-8 md:pt-20 mb-5 md:mb-14 md:text-5xl text-2xl font-semibold">
                    <span className="text-green-700">Healthy</span> Food
                </h1>
                {/* card container */}
                <div className="flex flex-col md:flex-row justify-between gap-8 md:gap-24">
                    {/* 1st card */}
                    <div className="drop-shadow-lg">
                        <div className="bg-green-100 p-10 rounded-lg">
                            <h3 className="md:text-3xl text-xl font-bold md:ml-20">
                                Vibrant and Nutrient-packed{" "}
                                <span className="text-green-900 md:-ml-4">
                                    Salad Delights
                                </span>
                            </h3>
                            <div className="border border-green-700 my-2 md:ml-8"></div>
                            <p className=" text-justify font-normal">
                                <span className="">Indulge</span> in a medley of
                                fresh greens, vibrant vegetables, and wholesome{" "}
                                <span className="">grains</span> harmoniously
                                blended with flavorful dressings. These
                                nutritious salad bowls offer a burst of flavors,
                                enriching your palate while nourishing your body
                                with essential vitamins and antioxidants.
                                Elevate your dining experience with these
                                colorful and revitalizing salad creations.
                            </p>
                        </div>
                        <div className="absolute bottom-[190px] -left-8 hidden md:flex">
                            <img className="w-32" src={saladImage} alt="" />
                        </div>
                    </div>

                    {/* second card */}
                    <div className="bg-green-100 p-10 drop-shadow-lg rounded-lg">
                        <div>
                            <h3 className="md:text-3xl text-xl mb-2 font-semibold md:ml-20">
                                The Pathway to{" "}
                                <span className="text-green-900 ">
                                    Wellness
                                </span>
                            </h3>
                            <div className="border border-green-700 my-2 md:ml-16"></div>
                            <p className="text-justify">
                                <span className="md:ml-10">Unlock</span> the
                                power of optimal nutrition and embrace a
                                transformative journey towards holistic
                                well-being. Explore the science-backed secrets
                                to fueling your body, empowering your mind, and
                                fostering a vibrant lifestyle. Dive into a realm
                                where food becomes the ultimate catalyst for
                                vitality, empowering you to thrive at your best.
                            </p>
                        </div>
                        <div className="absolute bottom-[190px] -left-8 hidden md:flex">
                            <img className="w-32" src={wellnessImage} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HealthyFood;
