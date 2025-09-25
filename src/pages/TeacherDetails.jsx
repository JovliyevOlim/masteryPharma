import React from 'react';
import {useParams} from "react-router-dom";
import PageHeader from "../components/PageHeader.jsx";
import {useTranslation} from "react-i18next";
import {getTeachersById} from "../assets/data/teacher.js";

function TeacherDetails() {
    const {id} = useParams()
    const {t, i18n} = useTranslation();

    const teacher = getTeachersById(id)


    const teacherDetails = [
        ['teacherOneBodyOne', "teacherOneBodyTwo", "teacherOneBodyThree"],
        ['teacherTwoBodyOne', "teacherTwoBodyTwo", "teacherTwoBodyThree"],
        ['teacherThreeBodyOne', "teacherThreeBodyTwo", "teacherThreeBodyThree", "teacherThreeBodyFour"],
        ['teacherFourBodyOne', "teacherFourBodyTwo", "teacherFourBodyThree", "teacherFourBodyFour", "teacherFourBodyFive"],
    ]

    return (
        <>
            <PageHeader title={t('teacher')}/>
            <div className="container-xxl py-6">
                <div className="container">
                    <div className="row g-5">
                        {/* Google Maps */}
                        <div className="col-lg-4"
                             data-aos="fade-up"
                             data-aos-delay={'0.1s'}
                             style={{minHeight: '450px', objectFit: 'cover'}}>
                            <div className="position-relative h-100">
                                <img
                                    className="position-relative w-100 h-100"
                                    src={teacher?.img}
                                    style={{minHeight: '450px', border: 0}}
                                />
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className="col-lg-8" data-aos="fade-up"
                             data-aos-delay='0.5s'>
                            <h2 className="text-primary text-uppercase mb-2">{t(`trainer${id}`)}</h2>
                            {
                                teacherDetails[id - 1].map((item, index) =>
                                    <h5 key={index} className="mb-3">{t(`${item}`)}</h5>
                                )
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>

    );
}

export default TeacherDetails;