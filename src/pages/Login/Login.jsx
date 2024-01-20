
import logo from "/logo.png"

const Login = () => {
    return (
        <div className="h-screen max-w-screen-2xl mx-auto flex items-center justify-center">
           <div>
           <div className="flex justify-center flex-col items-center text-green-900">
                <img className="w-16" src={logo} alt="" />
                <h1  className="text-4xl font-semibold">Welcome Back</h1>
                <p>Hope you are doing well</p>
            </div>
            <div className="flex justify-center items-center flex-col mt-8">
                <input type="text" name="email" id="" className="border border-green-200 rounded-md pl-4 h-12 font-normal font-comicSans min-w-[320px] block focus:outline-none focus:border-2 focus:border-green-400" placeholder="Email" />
                <input type="password" name="password" id="" className="border border-green-200 rounded-md pl-4 h-12 font-normal font-comicSans min-w-[320px] block mt-4 focus:outline-none focus:border-2 focus:border-green-400" placeholder="Password" />
                <div className=""><button className="bg-green-400 hover:bg-green-600 min-w-[320px] py-3 text-white mt-4 rounded-md">Login</button></div>
                
            </div>
           </div>
        </div>
    );
};

export default Login;