/* eslint-disable react/no-unescaped-entities */
import { Link } from "react-router-dom";
import SocialLogin from "./SocialLogin";
import logo from "/logo.png";
import animation from "../../assets/lottieAnimation/loginPage.json";
import Lottie from "lottie-react";
import { MdOutlineMailLock } from "react-icons/md";
import { GoShieldLock } from "react-icons/go";
import { HiMiniEye, HiMiniEyeSlash } from "react-icons/hi2";
import { useState } from "react";

const Login = () => {
    const [showPass, setShowPass] = useState(false);

    return (
        <div className="bg-green-100 h-screen">
            <div className="bg-homePageBg">
                <div className="h-screen max-w-screen-2xl mx-auto flex items-center justify-center">
                    {/* Login page container */}

                    <div className="grid grid-cols-1 md:grid-cols-2 w-full ">
                        {/* Animation File */}

                        <div className="  flex justify-center">
                            <Lottie
                                className="w-80  "
                                animationData={animation}
                                loop={true}
                            />
                        </div>

                        {/* Login section container */}

                        <div className="bg-green-100 drop-shadow-lg rounded-md  py-16">
                            {/* title and logo */}

                            <div className="flex justify-center flex-col items-center text-green-900">
                                <img className="w-16" src={logo} alt="" />
                                <h1 className="text-4xl font-semibold">
                                    Welcome Back
                                </h1>
                                <p>Hope you are doing well</p>
                            </div>

                            {/* Input field container */}

                            <div className="flex justify-center items-center flex-col mt-8">
                                {/* Email */}
                                <div className="relative">
                                    <input
                                        type="text"
                                        name="email"
                                        id=""
                                        className="border border-green-200 rounded-md pl-10 h-12 font-normal font-comicSans min-w-[320px] block focus:outline-none focus:border-2 focus:border-green-400"
                                        placeholder="Email"
                                    />
                                    <div className="absolute top-4 opacity-30 left-4">
                                        <MdOutlineMailLock />
                                    </div>
                                </div>

                                {/* Password */}
                                <div className="relative">
                                    <input
                                        type={showPass ? "text" : "password"}
                                        name="password"
                                        id=""
                                        className="border border-green-200 rounded-md pl-10 h-12 font-normal font-comicSans min-w-[320px] block mt-4 focus:outline-none focus:border-2 focus:border-green-400"
                                        placeholder="Password"
                                    />
                                    <div className="absolute top-8 opacity-30 left-4">
                                        <GoShieldLock />
                                    </div>
                                    <div
                                        className="absolute top-8 opacity-30 right-4"
                                        onClick={() => setShowPass(!showPass)}
                                    >
                                        {showPass ? (
                                            <button>
                                                <HiMiniEye />
                                            </button>
                                        ) : (
                                            <button>
                                                <HiMiniEyeSlash />
                                            </button>
                                        )}
                                    </div>
                                </div>

                                {/* Login */}
                                <div className="">
                                    <button className="bg-green-400 hover:bg-green-600 min-w-[320px] py-3 text-white mt-4 rounded-md">
                                        Login
                                    </button>
                                </div>

                                {/* Social Login */}
                                <SocialLogin />
                            </div>

                            {/* Go to signUp */}

                            <div className="mt-4 text-center">
                                <p className="font-comicSans">
                                    Don't have an account?{" "}
                                    <Link to="/signUp">
                                        <span className=" font-semibold hover:border-b-2 hover:border-green-900">
                                            Sign Up
                                        </span>
                                    </Link>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
