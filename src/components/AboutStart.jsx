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
                    <div className="col-lg-6"
                         data-aos="fade-up"
                         data-aos-delay={'500'}>
                        <div className="h-100">
                            <h6 className="text-primary text-uppercase mb-2">{t('about')}</h6>
                            <h4 className="mb-4">
                                {t('aboutUsOne')}</h4>
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
                        </div>
                    </div>
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
                </div>
            </div>
        </div>
    );
};

export default AboutUs;
