import { FaGoogle } from "react-icons/fa";
import { SiGithub } from "react-icons/si";

const SocialLogin = () => {
    return (
        <div className="flex text-4xl text-green-900 space-x-8 mt-4">
            <FaGoogle className="border-b-2 border-green-900 rounded-full p-1 transition-all duration-100 hover:rounded-none" />
            <SiGithub className="border-b-2 border-green-900 rounded-full p-1 transition-all duration-100 hover:rounded-none" />
        </div>
    );
};

export default SocialLogin;