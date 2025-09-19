import React, {useEffect} from 'react';
import team1 from '../assets/img/teacher1.png'
import team2 from '../assets/img/teacher2.png'
import team3 from '../assets/img/teacher3.png'
import team4 from '../assets/img/teacher4.png'
import {useTranslation} from "react-i18next";
import AOS from 'aos';
import {Link} from "react-router-dom";


const Team = () => {
    const {t, i18n} = useTranslation();


    const teamMembers = [
        {id: 1, img: team1, name: t('trainer1'), delay: '100'},
        {id: 2, img: team2, name: t('trainer2'), delay: '300'},
        {id: 3, img: team3, name: t('trainer3'), delay: '500'},
        {id: 4, img: team4, name: t('trainer4'), delay: '700'},
    ];

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

                <div className="row g-0 team-items">
                    {teamMembers.map((member) => (
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
                                            Read More
                                        </Link>
                                        {/*<a*/}
                                        {/*    className="btn btn-square btn-outline-primary border-2 m-1"*/}
                                        {/*    href="#"*/}
                                        {/*>*/}
                                        {/*    <i className="fab fa-twitter"></i>*/}
                                        {/*</a>*/}
                                        {/*<a*/}
                                        {/*    className="btn btn-square btn-outline-primary border-2 m-1"*/}
                                        {/*    href="#"*/}
                                        {/*>*/}
                                        {/*    <i className="fab fa-instagram"></i>*/}
                                        {/*</a>*/}
                                    </div>
                                </div>
                                <div className="bg-light text-center p-4 team-info">
                                    <h5 className="mt-2">{member.name}</h5>
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
