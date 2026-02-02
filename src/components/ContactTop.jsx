import React, { useEffect } from 'react';
import about1 from '../assets/contact.png';
import { useTranslation } from "react-i18next";
import AOS from 'aos';
import DotGrid from './DotGrid.jsx';

const ContactTop = () => {
    const { t } = useTranslation();

    useEffect(() => {
        AOS.init({ duration: 800, once: true });
    }, []);

    return (
        <div className="container-xxl py-5">
            <div className="d-flex justify-content-between align-items-center mt-3 mb-3 mb-lg-5 ">
                <div className="col-12 col-md-6">
                    <h3 className="text-uppercase mb-0 text-secondary" style={{ fontWeight: '800' }}>
                        {t('contact_main_title')}
                    </h3>
                </div>
                <div className="col-4 d-none d-md-flex justify-content-center pe-4">
                    <DotGrid />
                </div>
            </div>
            <div className="row g-5 align-items-center">
                {/* Left Column: Text Content */}
                <div className="col-lg-7" data-aos="fade-right">
                    {/* Info Boxes */}
                    <div className="d-flex flex-column gap-3">
                        {/* Box 1 */}
                        <div className="bg-light p-4 rounded-3 text-secondary fs-5" >
                            {t('contact_box1_text')}
                        </div>

                        {/* Box 2 */}
                        <div className="bg-light p-4  rounded-3" >
                            <h4 className="fw-bold text-secondary mb-0 text-uppercase">
                                {t('contact_box2_text')}
                            </h4>
                        </div>

                        {/* Box 3: Contact Info */}
                        <div className="bg-light p-4 rounded-3">
                            <h5 className="fw-bold text-uppercase mb-3 text-secondary">{t('contact_info_title')}</h5>
                            <div className="row">
                                <div className="col-md-10">
                                    <div className="d-flex mb-2">
                                        <span className="fw-bold text-secondary" style={{ minWidth: '100px' }}>{t('contact_label_email')}</span>
                                        <span className="text-dark">mastery.pharma@mail.ru</span>
                                    </div>
                                    <div className="d-flex mb-2">
                                        <span className="fw-bold text-secondary" style={{ minWidth: '100px' }}>{t('contact_label_tg')}</span>
                                        <a href="https://t.me/MASTERYpharma" target="_blank" rel="noreferrer" className="text-dark text-decoration-none">https://t.me/MASTERYpharma</a>
                                    </div>
                                    <div className="d-flex mb-2">
                                        <span className="fw-bold text-secondary" style={{ minWidth: '100px' }}>{t('contact_label_insta')}</span>
                                        <span className="text-dark">@mastery.pharma</span>
                                    </div>
                                    <div className="d-flex mb-2">
                                        <span className="fw-bold text-secondary" style={{ minWidth: '100px' }}>{t('contact_label_web')}</span>
                                        <span className="text-dark">mastery-pharma.uz</span>
                                    </div>
                                    <div className="d-flex mb-0">
                                        <span className="fw-bold text-secondary" style={{ minWidth: '100px' }}>{t('contact_label_phone')}</span>
                                        <span className="text-dark">+99890 480 73 90</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Column: Image */}
                <div className="col-lg-5" data-aos="fade-left">
                    <div className="position-relative">
                        <img
                            className="img-fluid rounded-5 w-100"
                            src={about1}
                            alt="Success"
                            style={{ objectFit: 'cover' }}
                        />
                    </div>
                </div>
            </div>
        </div >
    );
};

export default ContactTop;
