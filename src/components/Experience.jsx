import React, {useEffect} from 'react';
import about1 from '../assets/advance.png'
import {useTranslation} from "react-i18next";
import AOS from 'aos';

const Experience = () => {
    const {t, i18n} = useTranslation();

    useEffect(() => {
        AOS.init({duration: 800, once: true});
    }, []);

    return (
        <div className="container-xxl py-6">
            <div className="container">
                <div className="row g-5">
                    <div className="col-12 col-md-6 col-lg-8 mb-3"
                         data-aos="fade-up"
                         data-aos-delay={'500'}>
                        <div className="h-100">
                            <h1 className="title text-primary text-uppercase mb-4">{t('experienceTitle')}</h1>
                            <div className={'row'}>
                                {Array.from({length: 5}).map((item, i) => (
                                    <div className={'col-12'}
                                         data-aos="fade-up"
                                         data-aos-delay={`${100 * i}s`}
                                         key={i}
                                    >
                                        <h4 className={'text-title mt-2'}>{t(`title2_${i + 1}`)}</h4>
                                        <p className={"text-body"}>{t(`text2_${i + 1}`)}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4"
                         data-aos="fade-up"
                         data-aos-delay={'100'}>
                        <div
                            className="position-relative overflow-hidden h-100"
                            style={{minHeight: '550px'}}
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

export default Experience;
