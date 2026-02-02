import React from 'react';
import logoDark from "../../assets/img/logo/mastery_logo_dark-removebg.png"
import { routes } from "../../routes.js";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const Footer = () => {
    const { t, i18n } = useTranslation();

    return (
        <div className="container-fluid bg-dark text-light footer my-6 mb-0 py-6 wow fadeIn" data-wow-delay="0.1s">
            <div className="container">
                <div className="row g-5">
                    {/* Contact Info */}
                    <div className="col-lg-4 col-md-4">
                        <h2 className="text-secondary mb-4">
                            <img src={logoDark} width={140} height={52} className='img-fluid' alt="logo" />
                        </h2>
                        <a href="mailto:mastery.pharma@mail.ru" className={'text-white'}>
                            <p className="mb-2">
                                <i className="fa fa-envelope me-3"></i>
                                mastery.pharma@mail.ru
                            </p>
                        </a>


                    </div>

                    {/* Quick Links */}
                    <div className="col-lg-4 col-md-4">
                        <h4 className="text-light mb-4">{t("quickLinks")}</h4>
                        {
                            routes.map((route, index) =>
                                <Link className="btn btn-link" key={index} to={route.path}> {t(`${route.name}`)}</Link>
                            )
                        }
                    </div>


                    {/* Newsletter */}
                    <div className="col-lg-4 col-md-4">
                        <h4 className="text-light mb-4">{t("followUs")}</h4>
                        <div className="d-flex pt-2">
                            <a target='_blank' rel="noopener noreferrer"
                                className="btn btn-square btn-outline-light me-1"
                                href="https://www.instagram.com/mastery.pharma?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="><i
                                    className="fab fa-instagram"></i></a>
                            <a target='_blank' rel="noopener noreferrer"
                                className="btn btn-square btn-outline-light me-1"
                                href="https://t.me/MASTERYpharma"><i
                                    className="fab fa-telegram"></i></a>
                            <a target='_blank' className="btn btn-square btn-outline-light me-1" href="#"><i
                                className="fab fa-youtube"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
