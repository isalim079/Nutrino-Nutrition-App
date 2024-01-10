import { useEffect, useState } from "react";
import useAxiosPublic from "../../../components/Hooks/axiosPublic";
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
} from "@material-tailwind/react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { Autoplay, Pagination, Navigation } from "swiper/modules";

const Recipes = () => {
    const axiosPublic = useAxiosPublic();

    // getting data from database
    const [recipes, setRecipes] = useState([]);
    useEffect(() => {
        axiosPublic
            .get("/recipe")
            .then((res) => setRecipes(res.data))
            .catch((error) => console.log(error.message));
    }, [axiosPublic]);

    return (
        <div className="">
            <h3 className="text-2xl mb-2 font-semibold text-green-600">
                Recipe
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
                className="mySwiper "
            >
                {recipes.map((recipe) => (
                    <SwiperSlide key={recipe?._id} className=" p-2 border">
                        <Card className="mt-6  h-[390px] rounded-b-lg bg-green-100 drop-shadow-lg">
                            <CardHeader color="blue-gray" className="relative">
                                <img
                                    className=""
                                    src={recipe?.image}
                                    alt="card-image"
                                />
                            </CardHeader>
                            <CardBody>
                                <Typography
                                    variant="h5"
                                    color="blue-gray"
                                    className="mb-2"
                                >
                                    {recipe?.recipeName}
                                </Typography>
                                <Typography className="text-lg font-light">
                                    {recipe?.subtitle}
                                </Typography>
                            </CardBody>
                            <CardFooter className="pt-0">
                                <Button className="bg-green-900">
                                    Read More
                                </Button>
                            </CardFooter>
                        </Card>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default Recipes;
