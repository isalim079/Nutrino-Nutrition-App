import MealOfTheDay from "./MealOfTheDay";
import NutritionTips from "./NutritionTips";
import Recipes from "./Recipes";


const FeatureContent = () => {
    return (
        <div className="bg-blue-gray-50 pb-10">
            <h1 className="text-center pt-10 md:text-5xl text-2xl font-semibold">Featured <span className="text-green-700">Content</span></h1>
            <div className="my-10 max-w-screen-xl mx-auto flex justify-between">
                <MealOfTheDay />
                <NutritionTips />
                <Recipes />
            </div>
        </div>
    );
};

export default FeatureContent;