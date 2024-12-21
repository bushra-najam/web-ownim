// pages/-app.js
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";
import img1 from '../../../public/img1.png'
import img2 from '../../../public/img2.png'
import img3 from '../../../public/img3.png'
import img4 from '../../../public/img4.png'
import img5 from '../../../public/img5.png'
const NextJsCarousel = () => {
    return (
        <div>
            <Carousel showArrows={true} transitionTime={3000} infiniteLoop={true} autoPlay={true}  dynamicHeight={true}  showThumbs={false} > 
                <div>
                    <Image
                        src={img1}
                        alt="image1"
                        style={{height:500}}
        
                    />
                    <p className="legend">
                        Leather products
                    </p>
                </div>
                <div>
                    <Image
                        src={img2}
                        alt="image2"
                        style={{height:500}}
                    />
                    <p className="legend">
                       Flexo Printing 
                    </p>
                </div>
                <div>
                    <Image
                        src={img3}
                        alt="image3"
                        style={{height:500}}
                    />
                    <p className="legend">
                        Logistics
                    </p>
                </div>
                <div>
                    <Image
                        src={img4}
                        alt="image4"
                        style={{height:500}}
                    />
                    <p className="legend">
                        Offset Printing
                    </p>
                </div>
                <div>
                    <Image
                        src={img5}
                        alt="image5"
                        style={{height:500}}
                    />
                    <p className="legend">
                        Software Services
                    </p>
                </div>
                
            </Carousel>
        </div>
    );
};

export default NextJsCarousel;