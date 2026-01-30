import React, { useEffect } from 'react';
import about1 from '../assets/advance.png'; // Using the existing image for now, checking if valid
import { useTranslation } from "react-i18next";
import AOS from 'aos';
import DotGrid from './DotGrid';

const Experience = () => {
    const { t } = useTranslation();

    useEffect(() => {
        AOS.init({ duration: 800, once: true });
    }, []);

    const audienceBlocks = [
        {
            title: t('audience_medrep_title'),
            text: t('audience_medrep_list')
        },
        {
            title: t('audience_manager_title'),
            text: t('audience_manager_list')
        },
        {
            title: t('audience_marketing_title'),
            text: t('audience_marketing_list')
        }
    ];

    return (
        <div className="container-xxl py-6">
            <div className="container">
                <div className="d-flex justify-content-between align-items-center mb-3">
                    <div className="col-12 col-md-6">
                        <h2 className="text-uppercase">
                            {t('learningGoalsTitle')}
                        </h2>
                    </div>
                    <div className="col-4 d-none d-md-flex justify-content-centen">
                        <DotGrid />
                    </div>
                </div>
                <div className="row g-4">
                    {/* Left Column: Content */}
                    <div className="col-12 col-lg-6" data-aos="fade-right" data-aos-delay="100">
                        <div className="d-flex justify-content-between flex-column gap-3 image-1">
                            {audienceBlocks.map((block, index) => (
                                <div key={index} className="p-3 bg-light" style={{ borderRadius: '4px' }}>
                                    <h5 className="text-uppercase text-primary">
                                        {block.title}
                                    </h5>
                                    <p className="mb-0 text-dark" style={{ fontSize: '1.2rem', lineHeight: '1.5' }}
                                        dangerouslySetInnerHTML={{ __html: block.text }}
                                    ></p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Column: Image */}
                    <div className="col-12 col-lg-6" data-aos="fade-left" data-aos-delay="300">
                        <div className="overflow-hidden image-1">
                            <img
                                className="w-100 h-100"
                                src={about1}
                                alt="Learning Process"
                                style={{ objectFit: 'cover' }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Experience;
