import React from 'react';
import {useParams} from "react-router-dom";
import PageHeader from "../components/PageHeader.jsx";
import {useTranslation} from "react-i18next";
import {teachers} from "../assets/data/teacher.js";

function TeacherDetails() {
    const {id} = useParams()
    const {t} = useTranslation();


    return (
        <>
            <PageHeader title={t('trainersTitle')}/>
            <div className="container-xxl py-6">
                <div className="container">
                    {
                        teachers.filter(item => id == item.id).map((teacher) =>
                            <div className="row g-5">
                                <div className="col-lg-4"
                                     data-aos="fade-up"
                                     data-aos-delay={'0.1s'}>
                                    <div className="team-item">
                                        <img
                                            className="img-fluid team-image"
                                            style={{height: '400px'}}
                                            src={teacher?.img}
                                        />
                                    </div>
                                </div>

                                {/* Contact Form */}
                                <div className="col-lg-8"
                                     data-aos="fade-up"
                                     data-aos-delay='0.5s'>
                                    <h2 className="text-primary text-uppercase mb-2">{t(teacher.name)}</h2>
                                    {
                                        teacher.info.map((item, index) =>
                                            <h5 key={index} className="mb-3">{t(`${item}`)}</h5>
                                        )
                                    }
                                </div>
                            </div>
                        )
                    }
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
                                    <h2 className="text-primary text-uppercase mb-2">{t(teacher.name)}</h2>
                                    {
                                        teacher.info.map((item, index) =>
                                            <h5 key={index} className="mb-3">{t(`${item}`)}</h5>
                                        )
                                    }
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