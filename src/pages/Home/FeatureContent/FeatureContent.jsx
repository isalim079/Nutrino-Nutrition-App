import MealOfTheDay from "./MealOfTheDay";
import NutritionTips from "./NutritionTips";
import Recipes from "./Recipes";



const FeatureContent = () => {
    return (
       <div className="bg-light-green-50 p-3 md:p-0">
         <div className="bg-homePageBg">
            <h1 className="text-center pt-8 md:pt-20 md:text-5xl text-2xl font-semibold">Featured <span className="text-green-700">Content</span></h1>
            <div className="mt-5 md:mt-10 max-w-screen-2xl mx-auto grid md:grid-cols-3 grid-cols-1 gap-5 md:gap-14">
                <MealOfTheDay />
                <NutritionTips />
                <Recipes />
            </div>
        </div>
       </div>
    );
};

export default FeatureContent;