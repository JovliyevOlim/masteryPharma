import React, { useEffect } from 'react';
import about1 from '../assets/benifit2 (1).png'
import { useTranslation } from "react-i18next";
import AOS from 'aos';
import DotGrid from './DotGrid';
import icon1 from "../assets/img/222-1.png"
import icon2 from "../assets/img/222-2.png"
import icon3 from "../assets/img/222-3.png"
import icon4 from "../assets/img/222-4.png"

const CourseHeader = () => {
    const { t } = useTranslation();

    useEffect(() => {
        AOS.init({ duration: 800, once: true });
    }, []);

    const contentData = [
        { icon: icon1, title: t('hww_title_1'), text: t('hww_text_1') },
        { icon: icon4, title: t('hww_title_2'), text: t('hww_text_2') },
        { icon: icon2, title: t('hww_title_3'), text: t('hww_text_3') },
        { icon: icon3, title: t('hww_title_4'), text: t('hww_text_4') },
    ];

    return (
        <>
            <div className="d-flex justify-content-between align-items-center mb-3">
                <div className="col-12 col-md-6">
                    <h2 className="text-uppercase text-start text-secondary">{t('howWeWorkTitle')}</h2>
                </div>
                <div className="col-4 d-none d-md-flex justify-content-center">
                    <DotGrid />
                </div>
            </div>

            <div className="row g-5">

                {/* Left Side Content (formerly Right) */}
                <div className="col-lg-8" data-aos="fade-up" data-aos-delay="100">
                    <div className="row g-5 image-2">
                        {contentData.map((item, index) => (
                            <div className="col-md-6" key={index}>
                                <div className="h-100 bg-light p-3" style={{ borderRadius: '4px' }}>
                                    <h4 className="text-uppercase mb-3 text-title text-secondary">{item.title}</h4>
                                    <div className="d-flex align-items-start">
                                        <div className="me-3 text-secondary" style={{ fontSize: '2.2rem', minWidth: '50px' }}>
                                            <img src={item.icon} width={50} height={50} alt="" />
                                        </div>
                                        <p className="mb-0 text-body text-secondary new-title"
                                            dangerouslySetInnerHTML={{ __html: item.text }}
                                        ></p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right Side Images (formerly Left) */}
                <div className="col-lg-4" data-aos="fade-left" data-aos-delay="500">
                    <div className="position-relative overflow-hidden image-2">
                        <img
                            className="w-100 h-100"
                            src={about1}
                            alt=""
                            style={{ objectFit: 'cover', borderRadius: '10px', objectPosition: 'right center' }}
                        />
                    </div>
                </div>
            </div>
        </>
    );
};

export default CourseHeader;
