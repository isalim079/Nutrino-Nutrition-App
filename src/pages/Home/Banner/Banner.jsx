/* eslint-disable react/no-unescaped-entities */
import image1 from "../../../assets/images/bannerImage/top banner.png";

export function Banner() {
    return (
        <div className="bg-light-green-300">
            <div className="max-w-screen-2xl mx-auto ">
                <div className="flex justify-between items-center h-[calc(100vh-72px)]">
                    <div className="flex-1">
                        <div>
                            <h1 className=" text-5xl font-bold text-light-green-900">
                                Fueling Your Body for Optimal Health
                            </h1>
                            <div className="border border-light-green-900 my-3 w-[580px]"></div>
                            <p className="text-light-green-900 w-[520px] text-justify">
                                Nutrition plays a pivotal role in our daily
                                lives, acting as the cornerstone for our overall
                                health and vitality. It's more than just
                                consuming food; it's about nourishing our bodies
                                with the essential nutrients it needs to
                                function optimally. A balanced diet comprising a
                                diverse range of fruits, vegetables, lean
                                proteins, and whole grains is fundamental.{" "}
                            </p>
                        </div>
                    </div>
                    <div className="flex-1">
                        <div>
                            <img className="" src={image1} alt="" />
                            <div className="border-4 border-light-green-700"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
