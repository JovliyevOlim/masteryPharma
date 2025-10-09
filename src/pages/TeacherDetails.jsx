import React from 'react';
import {useParams} from "react-router-dom";
import {useTranslation} from "react-i18next";
import {teachers} from "../assets/data/teacher.js";
import PageHeader from "../components/PageHeader.jsx";

function TeacherDetails() {
    const {id} = useParams()
    const {t} = useTranslation();


    return (
        <>
            <div className="container-xxl py-6">
                <div className="container">
                    <div
                        className="text-center mx-auto mb-5"
                        data-aos="fade-up"
                        data-aos-duration={'500'}
                        style={{maxWidth: '800px'}}
                    >
                        <h6 className="text-primary text-uppercase mb-2">{t("trainersTitle")}</h6>
                        <h4 className="m-0">
                            {t("trainersTitleBody")}
                        </h4>
                    </div>
                    {
                        teachers.filter(item => id != item.id).map((teacher) =>
                            <div className="row g-5">
                                {/* Google Maps */}
                                <div className="col-lg-4"
                                     data-aos="fade-up"
                                     data-aos-delay={'0.1s'}
                                >
                                    <div className="team-item">
                                        <img
                                            className="img-fluid team-image"
                                            style={{height: '400px'}}
                                            src={teacher?.img}
                                        />
                                    </div>
                                </div>

                                {/* Contact Form */}
                                <div className="col-lg-8" data-aos="fade-up"
                                     data-aos-delay='0.5s'>
                                    <h2 className="text-primary text-uppercase mb-2">{t(teacher.name)} - <small
                                        className={'fs-5 text-secondary'}>{t(teacher.title)}</small>
                                    </h2>
                                    {/*{*/}
                                    {/*    teacher.info.map((item, index) =>*/}
                                    {/*        <h5 key={index} className="mb-3">{t(`${item}`)}</h5>*/}
                                    {/*    )*/}
                                    {/*}*/}
                                    <h5>{t(teacher.body)}</h5>
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
        </>

    );
}

export default TeacherDetails;