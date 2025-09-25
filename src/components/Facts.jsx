import React, {useEffect, useRef} from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import {useTranslation} from "react-i18next";


const Facts = () => {
    const {t} = useTranslation();
    const facts = [
        {
            icon: 'fa-user-graduate',
            title: t("factText1"),
            delay: '100',
        },
        {
            icon: 'fa-chalkboard-teacher',
            title: t("factText2"),
            delay: '400',
        },
        {
            icon: 'fa-tasks',
            title: t("factText3"),
            delay: '800',
        },
    ];

    useEffect(() => {
        AOS.init({duration: 800, once: true});
    }, []);
    return (
        <div className="container-fluid facts py-5 pt-lg-0">
            <div className="container py-5 pt-lg-0">
                <div className="row gx-0">
                    {facts.map((fact, index) => (
                        <div
                            key={index}
                            className="col-lg-4"
                            data-aos="fade-up"
                            data-aos-delay={fact.delay}
                        >
                            <div
                                className="bg-white shadow d-flex align-items-center h-100 p-4"
                                style={{minHeight: '150px'}}
                            >
                                <div className="d-flex">
                                    <div
                                        className="flex-shrink-0 btn-lg-square bg-primary d-flex align-items-center justify-content-center">
                                        <i className={`fa ${fact.icon} text-white`}></i>
                                    </div>
                                    <div className="ps-4">
                                        <h5>{fact.title}</h5>
                                        {/*<span>{fact.desc}</span>*/}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Facts;
