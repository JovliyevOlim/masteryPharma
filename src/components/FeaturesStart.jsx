import React, {useEffect} from 'react';
import about1 from '../assets/pirture6.webp'
import about2 from '../assets/picture.jpg'
import AOS from 'aos';
import {useTranslation} from "react-i18next";

const WhyChooseUs = () => {
    const {t} = useTranslation();

    useEffect(() => {
        AOS.init({duration: 800, once: true});
    }, []);

    return (
        <div className="container-xxl py-6">
            <div className="container">
                <div className="row g-5">
                    <div className="col-lg-6"
                         data-aos="fade-up"
                         data-aos-delay={'100'}>
                        <h6 className="text-primary text-uppercase mb-2">{t("whyChoose")}</h6>
                        <h2 className="mb-4">
                            {t("aboutCompany")}:
                        </h2>
                        <p className="mb-5">
                            {t("aboutCompanyBody")}
                        </p>

                        <div className="row gy-5 gx-4">
                            {[
                                {title: t('forWho1'), delay: '0.1s'},
                                {title: t('forWho2'), delay: '0.2s'},
                                {title: t('forWho3'), delay: '0.3s'},
                            ].map((item, i) => (
                                <div
                                    className="col-sm-6"
                                    data-aos="fade-up"
                                    data-aos-delay={item.delay}
                                    key={i}
                                >
                                    <div className="d-flex align-items-center mb-3">
                                        <div className="flex-shrink-0 btn-square bg-primary me-3">
                                            <i className="fa fa-check text-white"></i>
                                        </div>
                                        <h5 className="mb-0">{item.title}</h5>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="col-lg-6"
                         data-aos="fade-up"
                         data-aos-delay={'0.5s'}>
                        <div
                            className="position-relative overflow-hidden pe-5 pt-5 h-100"
                            style={{minHeight: '400px'}}
                        >
                            <img
                                className="position-absolute w-100 h-100"
                                src={about1}
                                alt=""
                                style={{objectFit: 'cover'}}
                            />
                            <img
                                className="position-absolute top-0 end-0 bg-white ps-3 pb-3"
                                src={about2}
                                alt=""
                                style={{width: '200px', height: '200px'}}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WhyChooseUs;
