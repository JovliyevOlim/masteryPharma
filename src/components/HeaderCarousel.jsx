import React from "react";
import {Swiper, SwiperSlide} from 'swiper/react';
import {Autoplay, Navigation} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import carousel1 from "../assets/img/carousel-1.jpg"
import carousel2 from "../assets/img/carousel-2.jpg"
import {useTranslation} from "react-i18next";
import {Link} from "react-router-dom";

const HeaderCarousel = () => {
    const {t, i18n} = useTranslation();

    const slides = [
        {
            img: carousel1,
            title: t('slideText1'),
            title2: t('slideSubText1')
        },
        {
            img: carousel2,
            title: t('slideText2'),
        },
    ];

    return (
        <div id='header-carousel' className="container-fluid p-0 wow fadeIn" data-wow-delay="0.1s"
             style={{position: 'relative'}}>
            <Swiper
                modules={[Autoplay, Navigation]}
                spaceBetween={0}
                slidesPerView={1}
                loop={true}
                autoplay={{delay: 4000}}
                navigation={{
                    nextEl: '.carousel-control-next',
                    prevEl: '.carousel-control-prev',
                }}
                observer={true}
                observeParents={true}
            >
                {slides.map((slide, index) => (
                    <SwiperSlide key={index}>
                        <div className="position-relative">
                            <img className="w-100" src={slide.img} alt={`slide-${index}`}/>
                            <div className="carousel-caption">
                                <div className="container">
                                    <div className="row justify-content-center">
                                        <div className="col-lg-7 text-center">
                                            <h1 className="display-5 text-light mb-2 mb-md-5 animate__animated animate__slideInDown">
                                                {slide.title}
                                            </h1>
                                            <h5 className="text-light mb-3 mb-md-5 animate__animated animate__slideInDown">{slide.title2}</h5>
                                            <Link to="/about"
                                                  className="btn btn-primary py-sm-2 py-md-3 px-sm-5">{t("learnMore")}</Link>
                                            <Link to="/courses"
                                                  className="btn btn-light py-sm-2 py-md-3 px-sm-5 ms-3">{t("ourCourses")}</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            {/* Custom Bootstrap-styled navigation buttons */}
            <button
                className="carousel-control-prev"
                type="button"
                style={{
                    position: 'absolute',
                    top: '50%',
                    left: '15px',
                    transform: 'translateY(-50%)',
                    zIndex: 10,
                    background: 'none',
                    border: 'none',
                }}
            >
                <span className="carousel-control-prev-icon " aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>

            <button
                className="carousel-control-next"
                type="button"
                style={{
                    position: 'absolute',
                    top: '50%',
                    right: '15px',
                    transform: 'translateY(-50%)',
                    zIndex: 10,
                    background: 'none',
                    border: 'none',
                }}
            >
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    );
};

export default HeaderCarousel;