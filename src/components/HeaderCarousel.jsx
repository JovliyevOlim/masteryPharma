import React from "react";

;
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import carousel1 from "../assets/img/carousel-1.jpg"
import {useTranslation} from "react-i18next";
import {Link} from "react-router-dom";

const HeaderCarousel = () => {
    const {t, i18n} = useTranslation();


    return (
        <div id='header-carousel' className="container-fluid p-0 wow fadeIn" data-wow-delay="0.1s"
             style={{position: 'relative'}}>

            <div className="position-relative">
                <img className="w-100 carousel-image" src={carousel1} alt={`slide`}/>
                <div className="carousel-caption">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-7 text-center">
                                <h1 className="display-5 text-light mb-2 animate__animated animate__slideInDown">
                                    {t("slideText")}
                                </h1>
                                <h1 className="text-light mb-3 mb-md-5 animate__animated animate__slideInDown">{t("slideText1")}
                                </h1>
                                <Link to="/about"
                                      className="btn btn-primary py-sm-2 py-md-3 px-sm-5">{t("learnMore")}</Link>
                                <Link to="/courses"
                                      className="btn btn-light py-sm-2 py-md-3 px-sm-5 ms-3">{t("ourCourses")}</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default HeaderCarousel;