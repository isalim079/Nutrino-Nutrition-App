import breakFast from "../../../assets/images/mealOfTheDay/Breakfast.png";
import lunch from "../../../assets/images/mealOfTheDay/lunch.png";
import dinner from "../../../assets/images/mealOfTheDay/Dinner.png";
import { FaCaretLeft, FaCaretRight } from "react-icons/fa";
import { useState } from "react";

const images = [breakFast, lunch, dinner]

const MealOfTheDay = () => {

    const [currentSlide, setCurrentSlide] = useState(0)

    const goNextSlide = () => {
        setCurrentSlide(prevSlide => (prevSlide === images.length - 1 ? 0 : prevSlide + 1))
    }

    const goPrevSlide = () => {
        setCurrentSlide(prevSlide => (prevSlide === 0 ? images.length - 1 : prevSlide - 1))
    }

    return (
        <div>
           <div className="w-96 relative">
                {/* 1st card */}
                {/* <div id="slide1" className="relative border border-black">
                    <img className="w-60" src={breakFast} alt="" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3"><button className="border"><FaCaretLeft className="text-2xl"/></button></a>
                        <a href="#slide2"><button><FaCaretRight className="text-2xl"/></button></a>
                    </div>
                </div> */}
                {/* 2nd card */}
                {/* <div id="slide2" className="relative border border-black">
                    <img className="w-60" src={lunch} alt="" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1"><button><FaCaretLeft className="text-2xl"/></button></a>
                        <a href="#slide3"><button><FaCaretRight className="text-2xl"/></button></a>
                    </div>
                </div> */}
                {/* 3rd card */}
                {/* <div id="slide3" className="relative border border-black">
                    <img className="w-60" src={dinner} alt="" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2"><button><FaCaretLeft className="text-2xl"/></button></a>
                        <a href="#slide1"><button><FaCaretRight className="text-2xl"/></button></a>
                    </div>
                </div> */}

<div className="border border-black relative">
        <img className="w-60" src={images[currentSlide]} alt="" />
        <div className="absolute flex justify-between items-center transform -translate-y-1/2 left-5 right-5 top-1/2">
          <button onClick={goPrevSlide}><FaCaretLeft className="text-2xl" /></button>
          <button onClick={goNextSlide}><FaCaretRight className="text-2xl" /></button>
        </div>
      </div>
            </div>
        </div>
    );
};

export default MealOfTheDay;
