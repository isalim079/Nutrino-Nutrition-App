import { useEffect, useState } from "react";
import { useAuth } from "../AuthContext/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import { FaUserCheck } from "react-icons/fa";
import floatingProfile from "../../../assets/lottieAnimation/floatingUser.json";
import Lottie from "lottie-react";

const FloatingProfile = () => {
    const { user, logOut } = useAuth;

    const [showButton, setShowButton] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        const handleScroll = () => {
            const yPosition = window.scrollY;
            if (yPosition > 70) {
                setShowButton(true);
            } else {
                setShowButton(false);
            }
        };

        window?.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const [menuToggle, setMenuToggle] = useState(false);

    const handleSignOut = () => {
        logOut()
            .then(() => {
                console.log("you have logged out successfully");
                navigate("/");
            })
            .catch((error) => {
                console.log(error.code);
                console.log(error.message);
            });
    };

    return (
        <div className="">
            {showButton && (
                <div className="fixed bottom-10 right-10 z-50">
                    <div className=" drop-shadow-[0_10px_10px_rgba(0,0,0,0.15)] rounded-full bottom-10 right-10">
                        {user?.email ? (
                            <div>
                                <button
                                    onClick={() => setMenuToggle(!menuToggle)}
                                >
                                    {user?.photoUrl ? (
                                        <img
                                            className="w-14 h-14 rounded-full"
                                            src={user?.photoURL}
                                            alt=""
                                        />
                                    ) : (
                                        <FaUserCheck className="text-5xl" />
                                    )}
                                </button>
                                <div
                                    className="absolute text-white"
                                    onClick={() => setMenuToggle(!menuToggle)}
                                >
                                    {menuToggle ? (
                                        <div className="bg-green-800 p-6 absolute bottom-10 right-5 rounded-md w-60">
                                            <div className="space-y-4 text-xs">
                                                <p className="text-base">
                                                    Hey, {user?.displayName}
                                                </p>
                                                <p className="">
                                                    Welcome to your health
                                                    partner
                                                </p>
                                                <button
                                                    onClick={handleSignOut}
                                                    className="bg-slate-600 w-full py-2 text-sm"
                                                >
                                                    Logout
                                                </button>
                                            </div>
                                        </div>
                                    ) : (
                                        ""
                                    )}
                                </div>
                            </div>
                        ) : (
                            <div>
                                <button
                                    onClick={() => setMenuToggle(!menuToggle)}
                                    className=""
                                >
                                    <Lottie
                                        animationData={floatingProfile}
                                        loop={true}
                                        className="w-16 rounded-full p-3 bg-green-100"
                                    />
                                </button>
                                <div
                                    className="absolute text-white"
                                    onClick={() => setMenuToggle(!menuToggle)}
                                >
                                    {menuToggle ? (
                                        <div className="bg-green-900 p-6 absolute bottom-10 right-5 rounded-md w-52">
                                            <div className="space-y-4 text-xs">
                                                <p className="text-base">
                                                    Hey User,
                                                </p>
                                                <Link to="/login">
                                                    <button className="bg-green-600 w-full py-2 text-sm mt-4">
                                                        Login First!
                                                    </button>
                                                </Link>
                                            </div>
                                        </div>
                                    ) : (
                                        ""
                                    )}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
};

export default FloatingProfile;
