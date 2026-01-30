import React, { useEffect } from 'react';
import { useTranslation } from "react-i18next";
import DotGrid from './DotGrid.jsx';
import AOS from 'aos';

function Programma() {
    const { t } = useTranslation();

    useEffect(() => {
        AOS.init({ duration: 800, once: true });
    }, []);

    const programData = [
        {
            title: t('prog_card1_title'),
            content: t('prog_card1_content'),
            delay: '100'
        },
        {
            title: t('prog_card2_title'),
            content: t('prog_card2_content'),
            delay: '300'
        },
        {
            title: t('prog_card3_title'),
            content: t('prog_card3_content'),
            delay: '500'
        }
    ];

    return (
        <>
            {/* Header Row: Title + DotGrid */}
            <div className="d-flex justify-content-between align-items-center mt-3 mb-3 mb-lg-5 ">
                <div className="col-12 col-md-6">
                    <h3 className="text-uppercase mb-0" style={{ fontWeight: '800' }}>
                        {t("programTitle")}
                    </h3>
                </div>
                <div className="col-4 d-none d-md-flex justify-content-center pe-4">
                    <DotGrid />
                </div>
            </div>

            <div className="row g-4">
                {programData.map((item, index) => (
                    <div className="col-lg-4 col-md-6" key={index} data-aos="fade-up" data-aos-delay={item.delay}>
                        <div className="bg-light h-100 rounded-5 p-4 d-flex flex-column">
                            <h4 className="mb-4 text-primary text-start" style={{ fontWeight: '800', minHeight: '60px' }}>
                                {item.title}
                            </h4>
                            <div
                                className="program-content"
                                style={{ fontSize: '1.2rem', lineHeight: '1.4', color: '#444' }}
                                dangerouslySetInnerHTML={{ __html: item.content }}
                            />
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}

export default Programma;