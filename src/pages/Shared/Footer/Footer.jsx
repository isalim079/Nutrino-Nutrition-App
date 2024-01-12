import { Typography } from "@material-tailwind/react";
import footerLogo from '/logo.png'

const today = new Date()
const year = today.getFullYear()

const Footer = () => {
    return (
        <div>
            <footer className="w-full bg-green-100 p-8">
                <div className="flex flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 bg-green-100 text-center md:justify-between">
                    <img
                        src={footerLogo}
                        alt="logo-ct"
                        className="w-14"
                    />
                    <ul className="flex flex-wrap items-center gap-y-2 gap-x-8">
                        <li>
                            <Typography
                                as="a"
                                href="#"
                                color="blue-gray"
                                className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
                            >
                                About Us
                            </Typography>
                        </li>
                        <li>
                            <Typography
                                as="a"
                                href="#"
                                color="blue-gray"
                                className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
                            >
                                License
                            </Typography>
                        </li>
                        <li>
                            <Typography
                                as="a"
                                href="#"
                                color="blue-gray"
                                className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
                            >
                                Contribute
                            </Typography>
                        </li>
                        <li>
                            <Typography
                                as="a"
                                href="#"
                                color="blue-gray"
                                className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
                            >
                                Contact Us
                            </Typography>
                        </li>
                    </ul>
                </div>
                <hr className="my-8 border-green-800" />
                <Typography
                    color="blue-gray"
                    className="text-center font-normal"
                >
                    &copy; {year} Nutrino
                </Typography>
            </footer>
        </div>
    );
};

export default Footer;
