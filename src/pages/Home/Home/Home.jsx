import { Banner } from "../Banner/Banner";
import FeatureContent from "../FeatureContent/FeatureContent";
import HealthyFood from "../HealthyFood/HealthyFood";
import VitaminProtein from "../VitaminProtin/VitaminProtein/VitaminProtein";

const Home = () => {
    return (
        <div >
            <Banner />
            <FeatureContent />
            <HealthyFood />
            <VitaminProtein />
        </div>
    );
};

export default Home;
