/* eslint-disable no-unused-vars */
import { useState } from "react";
import { useForm } from "react-hook-form";

const Nutrition = () => {
    const {
        register,
        handleSubmit,
        watch,
        reset,
        formState: { errors },
    } = useForm();

    const proteinVal = watch("protein");
    const carbohydratesVal = watch("carbohydrates");
    const fatsVal = watch("fats");
    const watersVal = watch("waters");

    const proteinCal = parseInt(proteinVal) * 4;
    const carbohydratesCal = parseInt(carbohydratesVal) * 4;
    const fatsCal = parseInt(fatsVal) * 9;
    const watersLtr = parseFloat(watersVal) * 3.7;
    // console.log(proteinCal);
    // console.log(proteinVal);

    const onSubmit = async (data) => {};

    return (
        <div className="flex justify-center items-center my-10">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">

                {/* ----------- Protein ---------------- */}
                <div className="grid grid-cols-3">
                    <p className="font-semibold mr-4">Protein</p>
                    <input
                        type="number"
                        name="protein"
                        id="protein"
                        className="border border-green-200 rounded-md px-4 h-10 font-normal font-comicSans min-w-[200px] block focus:outline-none focus:border-2 focus:border-green-400"
                        placeholder="100gm"
                        {...register("protein")}
                    />
                    <p className="ml-4 font-semibold text-xl">
                        {" "}
                        ={" "}
                        <span className="ml-1 font-bold font-Poppins">
                            {!proteinCal ? 0 : proteinCal}
                        </span>{" "}
                        <span className="text-sm">cal</span>
                    </p>
                </div>
                

                {/* ----------- Carbohydrates ---------------- */}
                <div className="grid grid-cols-3">
                    <p className="font-semibold mr-4">Carbohydrates</p>
                    <input
                        type="number"
                        name="carbohydrates"
                        id="carbohydrates"
                        className="border border-green-200 rounded-md px-4 h-10 font-normal font-comicSans min-w-[200px] block focus:outline-none focus:border-2 focus:border-green-400"
                        placeholder="100gm"
                        {...register("carbohydrates")}
                    />
                    <p className="ml-4 font-semibold text-xl">
                        {" "}
                        ={" "}
                        <span className="ml-1 font-bold font-Poppins">
                            {!carbohydratesCal ? 0 : carbohydratesCal}
                        </span>{" "}
                        <span className="text-sm">cal</span>
                    </p>
                </div>

                {/* ----------- Fats ---------------- */}
                <div className="grid grid-cols-3">
                    <p className="font-semibold mr-4">Fats</p>
                    <input
                        type="number"
                        name="fats"
                        id="fats"
                        className="border border-green-200 rounded-md px-4 h-10 font-normal font-comicSans min-w-[200px] block focus:outline-none focus:border-2 focus:border-green-400"
                        placeholder="100gm"
                        {...register("fats")}
                    />
                    <p className="ml-4 font-semibold text-xl">
                        {" "}
                        ={" "}
                        <span className="ml-1 font-bold font-Poppins">
                            {!fatsCal ? 0 : fatsCal}
                        </span>{" "}
                        <span className="text-sm">cal</span>
                    </p>
                </div>


                {/* ----------- Waters ---------------- */}
                <div className="grid grid-cols-3">
                    <p className="font-semibold mr-4">Waters</p>
                    <input
                        type="number"
                        name="waters"
                        id="waters"
                        className="border border-green-200 rounded-md px-4 h-10 font-normal font-comicSans min-w-[200px] block focus:outline-none focus:border-2 focus:border-green-400"
                        placeholder="100gm"
                        {...register("waters")}
                    />
                    <p className="ml-4 font-semibold text-xl">
                        {" "}
                        ={" "}
                        <span className="ml-1 font-bold font-Poppins">
                            {!watersLtr ? 0 : watersLtr}
                        </span>{" "}
                        <span className="text-sm">Ltr</span>
                    </p>
                </div>

            </form>
        </div>
    );
};

export default Nutrition;
