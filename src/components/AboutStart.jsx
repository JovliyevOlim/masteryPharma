import React, { useEffect } from 'react';
import about1 from '../assets/Picture.png'; // Using existing image
import { useTranslation } from "react-i18next";
import AOS from 'aos';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faChalkboardTeacher,
    faUsersViewfinder,
    faUserCheck,
    faBuilding
} from '@fortawesome/free-solid-svg-icons';
import DotGrid from './DotGrid';

const AboutUs = () => {
    const { t } = useTranslation();

    useEffect(() => {
        AOS.init({ duration: 800, once: true });
    }, []);

    const clientsData = [
        {
            icon: faChalkboardTeacher,
            title: t('client_block1_title'),
            desc: t('client_block1_desc')
        },
        {
            icon: faUsersViewfinder,
            title: t('client_block2_title'),
            desc: t('client_block2_desc')
        },
        {
            icon: faUserCheck,
            title: t('client_block3_title'),
            desc: t('client_block3_desc')
        },
        {
            icon: faBuilding, // Using building icon for total stats
            title: t('client_block4_title'),
            desc: t('client_block4_desc')
        }
    ];

    return (
        <div className="container-xxl py-6">
            <div className="container">
                {/* Header Row: Title + DotGrid */}
                <div className="d-flex justify-content-between align-items-center mb-3">
                    <div className="col-lg-6">
                        <h2 className="text-uppercase mb-0">
                            {t('ourClientsTitle')}
                        </h2>
                    </div>
                    <div className="col-lg-4 d-flex justify-content-center pe-4">
                        <DotGrid />
                    </div>
                </div>

                <div className="row g-5">
                    {/* Left Column: Data Blocks */}
                    <div className="col-lg-7" data-aos="fade-right" data-aos-delay="100" >
                        <div className="d-flex flex-column gap-3 justify-content-between" style={{ height: '450px' }}>
                            {clientsData.map((item, index) => (
                                <div key={index} className="d-flex align-items-center p-3 bg-light">
                                    <div className="flex-shrink-0 d-flex justify-content-center align-items-center" style={{ width: '60px', height: '60px' }}>
                                        <FontAwesomeIcon icon={item.icon} className="text-primary" style={{ fontSize: '2.5rem' }} />
                                    </div>
                                    <div className="ms-3">
                                        <h5 className="text-uppercase mb-1" style={{ fontWeight: '700', lineHeight: '1.2' }}>
                                            {item.title}
                                        </h5>
                                        <p className="mb-0  text-secondary" style={{ fontSize: '0.8rem' }}
                                            dangerouslySetInnerHTML={{ __html: item.desc }}
                                        ></p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Column: Image */}
                    <div className="col-lg-5" data-aos="fade-left" data-aos-delay="300">
                        <div className="position-relative overflow-hidden" style={{ height: '450px', borderRadius: '4px' }}>
                            <img
                                className="w-100 h-100"
                                src={about1}
                                alt="Our Clients"
                                style={{ objectFit: 'cover', objectPosition: 'bottom' }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;
