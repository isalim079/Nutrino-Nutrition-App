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
    const proteinCal = parseInt(proteinVal) * 4;
    console.log(proteinCal);
    // console.log(proteinVal);

    const onSubmit = async (data) => {};

    return (
        <div className="flex justify-center items-center my-10">
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="flex items-center">
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
            </form>
        </div>
    );
};

export default Nutrition;
