import { useRef, useEffect } from 'react';
import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import Link from 'next/link';
import { Fade } from "react-awesome-reveal";

const ExprienceArray = [
    {
        Id: '1',
        sIcon: '/images/exprience1.svg',
        title: 'Project analysis and exploration',
        slug: 'Project analysis and exploration',
        duration: 1000,
        description: 'To lay a solid foundation for the creative process that follows, we begin our journey with the discovery phase.',
    },
    {
        Id: '2',
        sIcon: '/images/exprience2.svg',
        title: 'Selection of technologies',
        slug: 'Selection of technologies',
        duration: 1200,
        description: 'By putting users needs at the forefront, we tell a unique story of your company, juggling with fancy visual elements.',
    },
    {
        Id: '3',
        sIcon: '/images/exprience3.svg',
        title: 'Robust Development',
        slug: 'Robust Development',
        duration: 1400,
        description: 'The motto of our development process is creating digital experiences that are both appealing and functional.',
    }
]

const Exprience = () => {

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    const prevRef = useRef(null);
    const nextRef = useRef(null);
    const swiperRef = useRef(null);

    useEffect(() => {
        if (swiperRef.current && prevRef.current && nextRef.current) {
            swiperRef.current.params.navigation.prevEl = prevRef.current;
            swiperRef.current.params.navigation.nextEl = nextRef.current;
            swiperRef.current.navigation.init();
            swiperRef.current.navigation.update();
        }
    }, []);


    return (
        <div>
            <section className="exprience-area section-padding pt-0">
                <div className="container">
                    <div className="exprience-wrap">
                        <div className="exprience-top">
                            <div className="row align-items-center">
                                <div className="col-lg-6 col-sm-6 col-12">
                                    <div className="section-title">
                                        <h2>OUR <br />
                                            Expertise</h2>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-sm-4 col-12">
                                    <div className="sa-tes_button">
                                        <div className="sa-swiper-btn swiper-button-prev" ref={prevRef}><i className="ti-angle-left"></i></div>
                                        <div className="sa-swiper-btn active swiper-button-next" ref={nextRef}><i className="ti-angle-right"></i></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row justify-content-md-center mt-none-30">
                            <Swiper
                                // install Swiper modules
                                modules={[Navigation]}
                                spaceBetween={50}
                                slidesPerView={5}
                                loop={true}
                                speed={1800}
                                parallax={true}
                                ref={swiperRef}
                                breakpoints={{
                                    1600: {
                                        slidesPerView: 3,
                                    },
                                    768: {
                                        slidesPerView: 2,
                                        centeredSlides: false,
                                    },
                                    576: {
                                        slidesPerView: 1,
                                    },
                                    0: {
                                        slidesPerView: 1,
                                    },
                                }}
                                onBeforeInit={(swiper) => {
                                    swiperRef.current = swiper;
                                }}
                            >
                                {ExprienceArray.map((exprience, srv) => (
                                    <SwiperSlide key={srv}>
                                        <div className="exprience-item">
                                            <div className="exprience-icon mb-50">
                                                <div className="icon">
                                                    <img src={exprience.sIcon} alt="" />
                                                </div>
                                            </div>
                                            <div className="exprience-content">
                                                <h3><Link onClick={ClickHandler} href={'/exprience-single/[slug]'} as={`/exprience-single/${exprience.slug}`}>{exprience.title}</Link></h3>
                                                <Link className="link-btn" href={"/"}>
                                                    <i className='ti-plus'></i>
                                                </Link>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                ))}
                                <SwiperSlide>
                                    <div className="exprience-item exprience-des">
                                        <div className="exprience-image mb-50">
                                            <img src="/images/exprience-man.webp" alt="" />
                                        </div>
                                        <div className="exprience-content">
                                            <h3>This is Julia, our manager, she will answer all your questions</h3>
                                        </div>
                                        <Link href="/home" className='btn-style-1 button'>
                                            <span className='main-text'>Let’s TALK</span>
                                            <span className='hover-text'>Let’s TALK</span>
                                        </Link>
                                    </div>
                                </SwiperSlide>
                            </Swiper>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Exprience;
