

const BMICalculator = () => {
    return (
        <div className="mb-10 w-full max-w-4xl">
            <div className="grid grid-cols-5">
                <div className="bg-blue-700 text-white text-center py-1">
                    <p>Underweight</p>
                    <p>{"<"} 18.5</p>
                </div>
                <div className="bg-green-700 text-white text-center py-1">
                    <p>Healthy</p>
                    <p>18.5 - 24.9</p>
                </div>
                <div className="bg-yellow-700 text-white text-center py-1">
                    <p>Overweight</p>
                    <p>25 - 29.9</p>
                </div>
                <div className="bg-orange-700 text-white text-center py-1">
                    <p>Obese</p>
                    <p>30 - 39.9</p>
                </div>
                <div className="bg-red-700 text-white text-center py-1">
                    <p>Severely Obese</p>
                    <p> ≥ 40 </p>
                </div>
               
            </div>
            <div className="flex justify-center items-center mt-5">
                <h3 className="text-xl flex  items-center gap-4">Your BMI is: <span className="font-bold text-4xl">0</span></h3>
            </div>
        </div>
    );
};

export default BMICalculator;