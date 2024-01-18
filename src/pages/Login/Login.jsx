
import logo from "/logo.png"

const Login = () => {
    return (
        <div className="h-screen max-w-screen-2xl mx-auto">
           <div>
           <div className="flex justify-center flex-col items-center">
                <img className="w-16" src={logo} alt="" />
                <h1  className="text-4xl font-semibold">Welcome Back</h1>
            </div>
            <div>
                <input type="text" name="email" id="" className="border border-green-200 rounded-md pl-4 h-12 font-normal font-comicSans min-w-[320px]" placeholder="Email" />
            </div>
           </div>
        </div>
    );
};

export default Login;