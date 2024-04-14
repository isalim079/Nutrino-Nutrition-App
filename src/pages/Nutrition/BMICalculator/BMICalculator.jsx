/* eslint-disable no-unused-vars */
import { useForm } from "react-hook-form";

const BMICalculator = () => {
    const {
        register,
        handleSubmit,
        watch,
        reset,
        formState: { errors },
    } = useForm();

    return (
        <div className="mb-16 w-full max-w-4xl">
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
                <h3 className="text-xl flex  items-center gap-4">
                    Your BMI is: <span className="font-bold text-4xl">0</span>
                </h3>
            </div>
            <div className="flex justify-center items-center mt-5">
                <form className="flex items-center space-x-7">

                    {/* ---------------- Height -------------- */}
                    <div className="flex items-center gap-2">
                    <p className="font-bold">Height (cm):</p>
                <input
                    type="number"
                    name="height"
                    id="height"
                    className="border border-green-200 rounded-md px-4 h-10 font-normal font-comicSans max-w-[120px] block focus:outline-none focus:border-2 focus:border-green-400"
                    placeholder="140 cm"
                    {...register("height")}
                />
                    </div>

                    {/* ------------------- Weight --------------------- */}
                    <div className="flex items-center gap-2">
                    <p className="font-bold">Weight (kg):</p>
                <input
                    type="number"
                    name="weight"
                    id="weight"
                    className="border border-green-200 rounded-md px-4 h-10 font-normal font-comicSans max-w-[120px] block focus:outline-none focus:border-2 focus:border-green-400"
                    placeholder="55 kg"
                    {...register("weight")}
                />
                    </div>
                    <div className="">
                        <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 hover:shadow-md">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default BMICalculator;
