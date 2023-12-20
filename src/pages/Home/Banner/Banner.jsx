import image1 from "../../../assets/images/bannerImage/Fruits.jpg";
import image2 from "../../../assets/images/bannerImage/Fruits-on-plate.jpg";
import image3 from "../../../assets/images/bannerImage/leaf-fruits.jpg";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export function Banner() {
    return (
        <div>
            <div>
                <Carousel>
                    <div>
                        <img src={image1} />
                        <p className="legend">Eat healthy</p>
                    </div>
                    <div>
                        <img src={image2} />
                        <p className="legend">Diet properly</p>
                    </div>
                    <div>
                        <img src={image3} />
                        <p className="legend">Lead a healthy life</p>
                    </div>
                </Carousel>
            </div>
        </div>
    );
}
