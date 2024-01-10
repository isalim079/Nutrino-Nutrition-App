import { useEffect, useState } from "react";
import useAxiosPublic from "../../../components/Hooks/axiosPublic";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { Autoplay, Pagination, Navigation } from "swiper/modules";

const NutritionTips = () => {
    const axiosPublic = useAxiosPublic();

    // getting data from database
    const [nutrinoTips, setNutrinoTips] = useState([]);

    useEffect(() => {
        axiosPublic
            .get("/nutritionTips")
            .then((res) => setNutrinoTips(res.data))
            .catch((error) => console.log(error));
    }, [axiosPublic]);

    // console.log(nutrinoTips);

    return (
        <div>
            <h3 className="text-2xl mb-2 font-semibold text-green-600">
                Nutrition Tips
            </h3>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper bg-green-100 h-[420px] rounded-lg drop-shadow-lg"
            >
                {nutrinoTips.map((tips) => (
                    <SwiperSlide key={tips?._id} className="p-5">
                        <div className="flex justify-center">
                            <img
                                className="w-32 p-3"
                                src={tips?.image}
                                alt=""
                            />
                        </div>
                        <div>
                            <h3 className="text-center text-xl font-bold pb-3">
                                {tips?.title}
                            </h3>
                            <p className="text-justify font-light text-lg">{tips?.description}</p>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default NutritionTips;
