import MealOfTheDay from "./MealOfTheDay";
import NutritionTips from "./NutritionTips";
import Recipes from "./Recipes";


const FeatureContent = () => {
    return (
        <div className="bg-blue-gray-50">
            <h1 className="text-center pt-20 md:text-5xl text-2xl font-semibold">Featured <span className="text-green-700">Content</span></h1>
            <div className="mt-10 max-w-screen-2xl mx-auto grid md:grid-cols-3 grid-cols-1 gap-14">
                <MealOfTheDay />
                <NutritionTips />
                <Recipes />
            </div>
        </div>
    );
};

export default FeatureContent;