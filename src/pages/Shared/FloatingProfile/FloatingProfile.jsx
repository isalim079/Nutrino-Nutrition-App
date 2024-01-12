import { useState } from "react";


const FloatingProfile = () => {

    const [showButton, setShowButton] = useState(true)

    return (
        <div>
            {
                showButton && (
                    <div className="fixed bottom-10 right-10 z-50">
                        <div className=" drop-shadow-[0_10px_10px_rgba(0,0,0,0.25)] rounded-full bottom-10 right-10">

                        </div>
                    </div>
                )
            }
        </div>
    );
};

export default FloatingProfile;