import Carbohydrates from "../Carbohydrates/Carbohydrates";
import Fats from "../Fats/Fats";
import Minerals from "../Minerals/Minerals";
import Protein from "../Protein/Protein";
import Vitamins from "../Vitamins/Vitamins";
import Water from "../Water/Water";

const VitaminProtein = () => {
    return (
        <div className="bg-light-green-50 pb-5 md:pb-10">
            <div className="bg-homePageBg">
                <div className="max-w-screen-2xl mx-auto">
                    <h1 className="text-center md:pt-20 mb-5 md:mb-14 md:text-5xl text-2xl font-semibold">
                        Essential{" "}
                        <span className="text-green-700">Nutrients</span>
                    </h1>
                    <div>
                        <Protein />
                        <Carbohydrates />
                        <Fats />
                        <Vitamins />
                        <Minerals />
                        <Water />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VitaminProtein;
