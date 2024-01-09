import { Carousel } from "@material-tailwind/react";
import breakFast from "../../../assets/images/mealOfTheDay/Breakfast"
import lunch from "../../../assets/images/mealOfTheDay/lunch"
import dinner from "../../../assets/images/mealOfTheDay/Dinner"

const MealOfTheDay = () => {
    return (
        <div>
            <Carousel className="rounded-xl">
                <img
                    src={breakFast}
                    alt="image 1"
                    className="h-full w-full object-cover"
                />
                <img
                    src={lunch}
                    alt="image 2"
                    className="h-full w-full object-cover"
                />
                <img
                    src={dinner}
                    alt="image 3"
                    className="h-full w-full object-cover"
                />
            </Carousel>
        </div>
    );
};

export default MealOfTheDay;
