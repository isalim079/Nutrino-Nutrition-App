import breakFast from "../../../assets/images/mealOfTheDay/Breakfast.png";
import lunch from "../../../assets/images/mealOfTheDay/lunch.png";
import dinner from "../../../assets/images/mealOfTheDay/Dinner.png";
import { FaCaretLeft, FaCaretRight } from "react-icons/fa";
import { useState } from "react";

const images = [breakFast, lunch, dinner];

const MealOfTheDay = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const goNextSlide = () => {
        setCurrentSlide((prevSlide) =>
            prevSlide === images.length - 1 ? 0 : prevSlide + 1
        );
    };

    const goPrevSlide = () => {
        setCurrentSlide((prevSlide) =>
            prevSlide === 0 ? images.length - 1 : prevSlide - 1
        );
    };

    return (
        <div>
            <div className="w-96 relative">
                <div className="border border-black relative bg-green-100">
                    <div className="flex justify-center p-5 drop-shadow-md">
                        <img
                            className="w-60"
                            src={images[currentSlide]}
                            alt=""
                        />
                    </div>
                    <div className="absolute flex justify-between items-center transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <button className="" onClick={goPrevSlide}>
                            <FaCaretLeft className="text-3xl text-green-200 bg-green-900 rounded-md pr-1" />
                        </button>
                        <button className="" onClick={goNextSlide}>
                            <FaCaretRight className="text-3xl text-green-200 bg-green-900 rounded-md pl-1" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MealOfTheDay;
