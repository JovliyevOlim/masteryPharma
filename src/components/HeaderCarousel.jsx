import React from "react";

;
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import carousel1 from "../assets/logo.jpg"
import {useTranslation} from "react-i18next";
import {Link} from "react-router-dom";

const HeaderCarousel = () => {
    const {t, i18n} = useTranslation();


    return (
        <div id='header-carousel' className="container-fluid p-0 wow fadeIn" data-wow-delay="0.1s">
            <div className="carousel-caption">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className='col-8 col-lg-6 mb-5'>
                            <img className="w-100" src={carousel1} alt={`slide`}/>
                        </div>
                        <div className="col-12 text-center mt-5">
                            <h1 className="display-md-6 display-5 fst-italic mb-2 animate__animated animate__slideInDown">
                                {t("title")}
                            </h1>
                            <p className="mb-3 text-dark display-6 fw-light mb-md-5 animate__animated animate__slideInDown">{t("subtitle")}
                            </p>
                            {/*<Link to="/about"*/}
                            {/*      className="btn btn-primary py-sm-2 py-md-3 px-sm-5">{t("learnMore")}</Link>*/}
                            {/*<Link to="/training"*/}
                            {/*      className="btn btn-light py-sm-2 py-md-3 px-sm-5 ms-3">{t("ourCourses")}</Link>*/}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeaderCarousel;