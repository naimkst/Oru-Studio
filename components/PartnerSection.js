import React from "react";
import Slider from "react-slick";

const partners = [
    {
        pImg: '/images/client1.svg',
    },
    {
        pImg: '/images/client2.svg',
    },
    {
        pImg: '/images/client3.svg',
    },
    {
        pImg: '/images/client4.svg',
    },
    {
        pImg: '/images/client5.svg',
    },
    {
        pImg: '/images/client6.svg',
    },
    {
        pImg: '/images/client7.svg',
    },
    {
        pImg: '/images/client2.svg',
    },
]

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
                        <span>companies we worked with</span>
                    </div>
                    <div className="brand-wrap brand-marquee">
                        <Slider {...settings}>
                            {partners.map((partner, pitem) => (
                                <div className="brand-logo" key={pitem}>
                                    <img src={partner.pImg} alt="Client Logo" />
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