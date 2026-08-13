import React from "react";
import Slider from "react-slick";
import { platformLogos } from "../data/platforms";

var settings = {
    dots: false,
    infinite: true,
    speed: 5000,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: "linear",
    arrows: false,

    responsive: [
        {
            breakpoint: 1025,
            settings: {
                slidesToShow: 5,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 991,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 450,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 340,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        }
    ]
};



const PartnerSection = (props) => {

    return (
        <section className="brand section-padding">
            <div className="container">
                <div className="o-hidden">
                    <div className="brand-sub_title">
                        <span>platforms we build with</span>
                    </div>
                    <div className="brand-wrap brand-marquee">
                        <Slider {...settings}>
                            {platformLogos.map((partner) => (
                                <div className="brand-logo" key={partner.id}>
                                    <img src={partner.logo} alt={`${partner.name} logo`} />
                                </div>
                            ))}
                        </Slider>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default PartnerSection;
