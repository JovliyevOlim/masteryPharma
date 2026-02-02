import React, { useEffect } from 'react';
import AOS from 'aos';
import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faChartLine,
    faUserFriends,
    faBolt,
    faGraduationCap,
    faUserTie,
    faGlobe
} from '@fortawesome/free-solid-svg-icons';
import icon1 from "../assets/img/icon1.png"
import icon2 from "../assets/img/icon2.png"
import icon3 from "../assets/img/icon3.png"
import icon4 from "../assets/img/icon4.png"
import icon5 from "../assets/img/icon5.png"
import icon6 from "../assets/img/icon6.png"

const ForUsNew = () => {
    const { t } = useTranslation();

    useEffect(() => {
        AOS.init({ duration: 800, once: true });
    }, []);

    const challenges = [
        { icon: icon1, text: t('challenge1_text') },
        { icon: icon2, text: t('challenge2_text') },
        { icon: icon3, text: t('challenge3_text') },
    ];

    const barriers = [
        { icon: icon4, text: t('barrier1_text') },
        { icon: icon5, text: t('barrier2_text') },
        { icon: icon6, text: t('barrier3_text') },
    ];

    return (
        <div className="container-xxl py-6">
            <div className="container">
                <div className="row g-5">
                    {/* Left Column: Challenges */}
                    <div className="col-12 col-lg-6" data-aos="fade-right" data-aos-delay="100">
                        <h4 className="text-secondary fs-2 text-uppercase mb-4" style={{ height: '100px' }}>
                            {t('challengesTitle')}
                        </h4>
                        <div className="d-flex flex-column gap-4">
                            {challenges.map((item, index) => (
                                <div key={index} className="position-relative ms-4">
                                    <div className="position-absolute d-flex justify-content-center align-items-center bg-white shadow rounded-circle"
                                        style={{
                                            width: '60px',
                                            height: '60px',
                                            left: '-30px',
                                            top: '50%',
                                            transform: 'translateY(-50%)',
                                            border: '1px solid #eee',
                                            zIndex: 2
                                        }}>
                                        <img src={item.icon} width={50} height={50} alt="icon1" />

                                    </div>
                                    <div className="p-4 rounded d-flex align-items-center bg-light" style={{ height: '100px', paddingLeft: '40px' }}>
                                        <p className="mb-0 text-dark ms-3 text-body"
                                            dangerouslySetInnerHTML={{ __html: item.text }}
                                        ></p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Column: Barriers */}
                    <div className="col-12 col-lg-6" data-aos="fade-left" data-aos-delay="300">
                        <h4 className="text-secondary fs-2 text-uppercase mb-4" style={{ height: '100px' }}>
                            {t('barriersTitle')}
                        </h4>
                        <div className="d-flex flex-column gap-4">
                            {barriers.map((item, index) => (
                                <div key={index} className="position-relative ms-4">
                                    <div className="position-absolute d-flex justify-content-center align-items-center bg-white shadow rounded-circle"
                                        style={{
                                            width: '60px',
                                            height: '60px',
                                            left: '-30px',
                                            top: '50%',
                                            transform: 'translateY(-50%)',
                                            border: '1px solid #eee',
                                            zIndex: 2
                                        }}>
                                        <img src={item.icon} width={50} height={50} alt="icon1" />
                                    </div>
                                    <div className="p-4 rounded d-flex align-items-center bg-light" style={{ height: '100px', paddingLeft: '40px' }}>
                                        <p className="mb-0  text-dark ms-3 text-body"
                                            dangerouslySetInnerHTML={{ __html: item.text }}
                                        ></p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Footer Quote */}
                <div className="row mt-5" data-aos="fade-up" data-aos-delay="500">
                    <div className="col-12 text-center">
                        <h4 className="text-uppercase fw-bold text-secondary mb-2" style={{ fontStyle: 'italic', letterSpacing: '1px' }}>
                            {t('quoteText')}
                        </h4>
                        <p className="text-muted fw-bold mb-0">
                            {t('quoteAuthor')}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ForUsNew;
