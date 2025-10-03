import React, {useEffect} from 'react';
import about1 from '../assets/about.png'
import {useTranslation} from "react-i18next";
import AOS from 'aos';

const AboutUs = () => {
    const {t, i18n} = useTranslation();

    useEffect(() => {
        AOS.init({duration: 800, once: true});
    }, []);

    return (
        <div className="container-xxl py-6">
            <div className="container">
                <div className="row g-5">
                    {/* Left Side Images */}
                    <div className="col-lg-6"
                         data-aos="fade-up"
                         data-aos-delay={'100'}>
                        <div
                            className="position-relative overflow-hidden h-100"
                            style={{minHeight: '500px'}}
                        >
                            <img
                                className="position-absolute w-100 h-100"
                                src={about1}
                                alt=""
                                style={{objectFit: 'cover'}}
                            />
                        </div>
                    </div>

                    {/* Right Side Content */}
                    <div className="col-lg-6"
                         data-aos="fade-up"
                         data-aos-delay={'500'}>
                        <div className="h-100">
                            <h6 className="text-primary text-uppercase mb-2">{t('about')}</h6>
                            <h3 className="mb-4">
                                Мы разрабатываем и проводим практические программы для медицинских представителей,
                                продакт-менеджеров и руководителей. В основе — международные методики и локальный опыт
                                рынка Узбекистана. </h3>
                            <p>
                                {t('aboutUsTwo')}
                            </p>
                            <p className="mb-4">
                                {t('aboutThree')}
                            </p>

                            <div className="row g-2 mb-4 pb-2">
                                {[
                                    t('aboutTypeCourse1'),
                                    t('aboutTypeCourse2'),
                                    t('aboutTypeCourse3'),
                                    t('aboutTypeCourse4'),
                                    t('aboutTypeCourse5'),
                                    t('aboutTypeCourse6')
                                ].map((item, i) => (
                                    <div key={i} className="col-sm-6">
                                        <i className="fa fa-check text-primary me-2"></i>
                                        {item}
                                    </div>
                                ))}
                            </div>

                            <div className="row g-4">
                                <div className="col-sm-6">
                                    <a className="btn btn-primary py-3 px-5" href="">
                                        {t("readMore")}
                                    </a>
                                </div>
                                <div className="col-sm-6">
                                    <a
                                        className="d-inline-flex align-items-center btn btn-outline-primary border-2 p-2"
                                        href="tel:+998 93 590 93 39"
                                    >
                    <span
                        className="flex-shrink-0 btn-square bg-primary d-flex align-items-center justify-content-center">
                      <i className="fa fa-phone-alt text-white"></i>
                    </span>
                                        <span className="px-3">+998 93 590 93 39</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;
