import React, { useEffect } from 'react';
import { useTranslation } from "react-i18next";
import DotGrid from './DotGrid.jsx';
import AOS from 'aos';

function Programma() {
    const { t } = useTranslation();

    useEffect(() => {
        AOS.init({ duration: 800, once: true });
    }, []);

    const programData = t('program_cards', { returnObjects: true });

    if (!Array.isArray(programData)) {
        return null;
    }

    return (
        <>
            {/* Header Row: Title + DotGrid */}
            <div className="d-flex justify-content-between align-items-center mt-3 mb-3 mb-lg-5 ">
                <div className="col-12 col-md-6">
                    <h3 className="text-uppercase mb-0 text-secondary" style={{ fontWeight: '800' }}>
                        {t("programTitle")}
                    </h3>
                </div>
                <div className="col-4 d-none d-md-flex justify-content-center pe-4">
                    <DotGrid />
                </div>
            </div>

            <div className="row g-4">
                {programData.map((item, index) => (
                    <div className="col-lg-4 col-md-6" key={index} data-aos="fade-up" data-aos-delay={100 + (index * 200)}>
                        <div className="bg-light rounded-5 h-100 rounded-5 p-4 d-flex flex-column">
                            <h4 className="mb-4 text-secondary text-start" style={{ fontWeight: '800', minHeight: '60px' }}>
                                {item.title}
                            </h4>
                            <div
                                className="program-content"
                                style={{ fontSize: '1.5rem', lineHeight: '1.4', color: '#525a5e' }}
                            >
                                {item.sections && item.sections.map((section, secIndex) => (
                                    <div key={secIndex}>
                                        <h6 className='fw-bold fs-4 text-secondary mb-1'>{section.title}</h6>
                                        <ul className='mb-2 ps-3 small'>
                                            {section.items && section.items.map((listItem, liIndex) => (
                                                <li key={liIndex}>{listItem}</li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}

export default Programma;