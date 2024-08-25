import React from "react";

const Hero = ({ title, imageUrl }) => {
    return (
        <>
            <div className="hero container">
                <div className="banner">
                    <h1>{title}</h1>
                    <p>
                        Kashif Health Network is a premier medical institution dedicated to delivering comprehensive healthcare services with unparalleled expertise and compassion. Our team of highly skilled professionals is committed to providing personalized care, meticulously tailored to meet the unique needs of each patient. At Kashif Health Network, we place your well-being at the forefront, guiding you through a seamless journey toward optimal health and wellness.
                    </p>
                </div>
                <div className="banner">
                    <img src={imageUrl} alt="hero" className="animated-image" />
                    <span>
                        <img src="/Vector.png" alt="vector" />
                    </span>
                </div>
            </div>
        </>
    );
};

export default Hero;
