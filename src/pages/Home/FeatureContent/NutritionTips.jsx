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
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper bg-green-100"
            >
                {nutrinoTips.map((tips) => (
                    <SwiperSlide key={tips?._id} className="p-5">
                        <h3 className="text-center text-xl font-bold pb-3">
                            {tips?.title}
                        </h3>
                        <p className="text-justify">{tips?.description}</p>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default NutritionTips;
