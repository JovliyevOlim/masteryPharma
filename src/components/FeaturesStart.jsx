import React, {useEffect, useRef, useState} from 'react';
import about1 from '../assets/whous.jpg'
import about2 from '../assets/vedio.png'
import vedio from '../assets/vedio/IMG_9860.MP4'
import AOS from 'aos';
import {useTranslation} from "react-i18next";

const WhyChooseUs = () => {
    const {t} = useTranslation();


    const [open, setOpen] = useState(false);
    const videoRef = useRef(null);

    // modal ochilganda videoni avtomatik play qilish
    useEffect(() => {
        if (open && videoRef.current) {
            videoRef.current.play();
        }
    }, [open]);

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
                        <h1 className="title text-primary text-uppercase mb-2">{t("whyChoose")}</h1>
                        <p className="text-body mb-4">
                            {t("aboutCompany")}
                        </p>
                        <ul>
                            {[
                                {title: t('forWho1'), delay: '0.1s'},
                                {title: t('forWho2'), delay: '0.2s'},
                                {title: t('forWho3'), delay: '0.3s'},
                            ].map((item, i) => (
                                <li
                                    className={'text-body'}
                                    data-aos="fade-up"
                                    data-aos-delay={item.delay}
                                    key={i}
                                >
                                    {item.title}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="col-lg-6"
                         data-aos="fade-up"
                         data-aos-delay={'0.5s'}>
                        <div
                            className="position-relative overflow-hidden h-100"
                            style={{minHeight: '400px'}}
                        >
                            <img
                                className="position-absolute w-100 h-100"
                                src={about1}
                                alt="about1"
                                style={{objectFit: 'cover'}}
                            />
                        </div>
                    </div>
                </div>

                {open && (
                    <div
                        style={{
                            position: "fixed",
                            top: 0,
                            left: 0,
                            width: "100%",
                            height: "100%",
                            background: "rgba(0,0,0,0.85)",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            zIndex: 1000,
                            flexDirection: "column",
                        }}
                    >
                        {/* Video */}
                        <video
                            ref={videoRef}
                            src={vedio}
                            controls
                            style={{width: "80%", maxHeight: "70%", borderRadius: "12px"}}
                        />

                        {/* Cancel button */}
                        <button className={'btn btn-primary mt-3'}
                                onClick={() => {
                                    if (videoRef.current) {
                                        videoRef.current.pause(); // yopilganda videoni to‘xtatish
                                        videoRef.current.currentTime = 0; // boshiga qaytarish
                                    }
                                    setOpen(false);
                                }}
                        >
                            {t("exit")}
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default WhyChooseUs;
