import React, { useEffect } from 'react';
import about1 from '../assets/benifit1 (1).png';
import AOS from 'aos';
import { useTranslation } from "react-i18next";

const WhyChooseUs = () => {
    const { t } = useTranslation();

    useEffect(() => {
        AOS.init({ duration: 800, once: true });
    }, []);

    return (
        <div className="container-xxl py-5">
            <div className="container">
                <div className="row g-5 align-items-stretch">
                    {/* Left Column: 3 Text Blocks */}
                    <div className="col-lg-6 d-flex flex-column justify-content-between gap-3" data-aos="fade-up" data-aos-delay="100">

                        {/* Block 1 */}
                        <div className="d-flex align-items-center p-4 bg-light justify-content-start" >
                            <h2 className="text-uppercase text-start mb-0 text-secondary">
                                {t('features_block1')}
                            </h2>
                        </div>

                        {/* Block 2 */}
                        <div className="d-flex align-items-center p-4 bg-light justify-content-start">
                            <h3 className="mb-0 text-start text-secondary">
                                {t('features_block2')}
                            </h3>
                        </div>

                        {/* Block 3 */}
                        <div className="d-flex align-items-center bg-light justify-content-start">
                            <ul className="list-unstyled mb-0 p-4 w-100">
                                {[t('features_block3_1'), t('features_block3_2'), t('features_block3_3')].map((text, i) => (
                                    <li key={i} className="mb-2 fs-4 position-relative">
                                        {text}
                                    </li>
                                ))}
                            </ul>
                        </div>

                    </div>

                    {/* Right Column: Image */}
                    <div className="col-lg-6" data-aos="fade-left" data-aos-delay="500">
                        <div className="position-relative overflow-hidden" style={{ height: '400px', borderRadius: '20px' }}>
                            <img
                                className="w-100 h-100"
                                src={about1}
                                alt="About Us"
                                style={{ objectFit: 'cover', objectPosition: 'top' }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WhyChooseUs;
