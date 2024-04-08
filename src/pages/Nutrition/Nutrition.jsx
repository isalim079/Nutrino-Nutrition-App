import { useForm } from "react-hook-form";

const Nutrition = () => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();

    const onSubmit = async (data) => {};

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <p>Protein</p>
                    <input
                        type="text"
                        name="protein"
                        id="protein"
                        className="border border-green-200 rounded-md pl-10 h-12 font-normal font-comicSans min-w-[320px] block focus:outline-none focus:border-2 focus:border-green-400"
                        placeholder="100gm"
                        {...register("protein")}
                    />
                </div>
            </form>
        </div>
    );
};

export default Nutrition;
