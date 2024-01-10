import saladImage from "../../../assets/images/bannerImage/saladBanner.png"

const HealthyFood = () => {
    return (
       <div className="bg-blue-gray-50 pb-10">
         <div className="bg-blue-gray-50 pb-10 max-w-screen-2xl mx-auto relative">
            <h1 className="text-center pt-20 mb-14 md:text-5xl text-2xl font-semibold"><span className="text-green-700">Healthy</span> Food</h1>
            <div className="flex justify-between gap-14">
                <div className="drop-shadow-lg">
                    <div className="bg-green-100 p-10 rounded-lg">
                        <h3 className="text-2xl font-bold ml-20">Vibrant and Nutrient-packed Salad Delights</h3>
                        <div className="border border-green-900 my-2 ml-16"></div>
                        <p className=" text-justify font-normal text-lg text-green-900"><span className="ml-12">Indulge</span> in a medley of fresh greens, vibrant vegetables, and wholesome <span className="">grains</span> harmoniously blended with flavorful dressings. These nutritious salad bowls offer a burst of flavors, enriching your palate while nourishing your body with essential vitamins and antioxidants. Elevate your dining experience with these colorful and revitalizing salad creations.</p>
                    </div>
                    <div className="absolute bottom-[170px] -left-8">
                        <img className="w-32" src={saladImage} alt="" />
                    </div>
                </div>
                <div>
                    <h3>The Pathway to Wellness</h3>
                    <p className="text-justify">Unlock the power of optimal nutrition and embrace a transformative journey towards holistic well-being. Explore the science-backed secrets to fueling your body, empowering your mind, and fostering a vibrant lifestyle. Dive into a realm where food becomes the ultimate catalyst for vitality, empowering you to thrive at your best.</p>
                </div>
            </div>
        </div>
       </div>
    );
};

export default HealthyFood;