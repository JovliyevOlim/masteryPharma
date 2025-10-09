import React, {useEffect} from 'react';
import about1 from '../assets/img/carousel-2.jpg'
import {useTranslation} from "react-i18next";
import AOS from 'aos';

const ForUs = () => {
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
                            <h6 className="text-primary text-uppercase mb-2">{t('forWhoTitle')}</h6>
                            <h3 className="mb-4">
                                {t("forWhoBody")} </h3>
                            <p>
                                {t('aboutUsTwo')}
                            </p>
                            <ul>
                                {[
                                    {title: t('forWhoBody1'), delay: '0.1s'},
                                    {title: t('forWhoBody2'), delay: '0.2s'},
                                    {title: t('forWhoBody3'), delay: '0.3s'},
                                ].map((item, i) => (
                                    <li
                                        data-aos="fade-up"
                                        data-aos-delay={item.delay}
                                        key={i}
                                    >
                                        {item.title}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ForUs;
