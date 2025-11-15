import React, {useEffect} from 'react';
import about1 from '../assets/benifit2 (1).png'
import about2 from '../assets/benifit1 (1).png'
import {useTranslation} from "react-i18next";
import AOS from 'aos';

const CourseHeader = () => {
    const {t, i18n} = useTranslation();

    useEffect(() => {
        AOS.init({duration: 800, once: true});
    }, []);

    return (
        <div className="container-xxl">
            <div className="container">
                <div className="row g-5">
                    {/* Left Side Images */}
                    <div className="col-lg-4"
                         data-aos="fade-up"
                         data-aos-delay={'100'}>
                        <div
                            className="position-relative overflow-hidden h-100"
                            style={{minHeight: '600px'}}
                        >
                            <img
                                className="position-absolute w-100 h-50"
                                src={about1}
                                alt=""
                                style={{objectFit: 'cover'}}
                            />
                            <img
                                className="position-absolute bottom-0 w-100 h-50"
                                src={about2}
                                alt=""
                                style={{objectFit: 'cover'}}
                            />
                        </div>
                    </div>

                    {/* Right Side Content */}
                    <div className="col-lg-8"
                         data-aos="fade-up"
                         data-aos-delay={'500'}>
                        <div className="h-100">
                            <h1 className="text-primary text-uppercase mb-4">{t('ourAdvantagesTitle')}</h1>
                            <div className={'row gy-5 d-flex justify-content-center align-items-start flex-wrap'}>
                                {Array.from({length: 4}).map((item, i) => (
                                    <div
                                        className="col-12 col-md-6"
                                        data-aos="fade-up"
                                        data-aos-delay={`${100 * (i + 1)}`}
                                        key={i}
                                    >
                                        <div style={{minHeight:'85px'}} className='d-flex gap-2 align-items-start'>
                                            <span className={'btn btn-warning fs-3'}>0{i + 1}</span>
                                            <h3> {t(`title1_${i + 1}`)}</h3>
                                        </div>
                                        <p className={'mt-3'}>{t(`text1_${i + 1}`)}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CourseHeader;
