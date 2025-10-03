import React, {useEffect} from 'react';
import {useTranslation} from "react-i18next";
import AOS from 'aos';
import {Link} from "react-router-dom";
import {teachers} from "../assets/data/teacher.js";


const Team = () => {
    const {t, i18n} = useTranslation();


    useEffect(() => {
        AOS.init({duration: 800, once: true});
    }, []);

    return (
        <div className="container-xxl py-6">
            <div className="container">
                <div
                    className="text-center mx-auto mb-5"
                    data-aos="fade-up"
                    data-aos-delay={'100'}
                    style={{maxWidth: '500px'}}
                >
                    <h6 className="text-primary text-uppercase mb-2">{t("meetTheTeam")}</h6>
                    <h1 className="display-6 mb-4">{t("teamExperience")}</h1>
                </div>

                <div className="row g-0 justify-content-between team-items">
                    {teachers.map((member) => (
                        <div
                            className="col-lg-3 col-md-6"
                            data-aos="fade-up"
                            data-aos-delay={member.delay}
                            key={member.id}
                        >
                            <div className="team-item position-relative">
                                <div className="position-relative">
                                    <img className="img-fluid team-image"
                                         src={member.img}
                                         alt="Team member"/>
                                    <div className="team-social text-center">
                                        <Link to={`/team/${member.id}`}
                                              className="btn btn-square w-50 btn-outline-primary border-2 m-1">
                                            {t("readMore")}
                                        </Link>
                                    </div>
                                </div>
                                <div className="bg-light text-center p-4 team-info">
                                    <h5 className="mt-2">{t(member.name)}</h5>
                                    <span>Trainer</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Team;
