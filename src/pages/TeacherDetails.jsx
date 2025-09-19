import React from 'react';
import {useParams} from "react-router-dom";
import PageHeader from "./PageHeader.jsx";
import {useTranslation} from "react-i18next";
import {getTeachersById} from "../assets/data/teacher.js";

function TeacherDetails() {
    const {id} = useParams()
    const {t, i18n} = useTranslation();

    const teacher = getTeachersById(id)

    console.log(teacher)
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
                            <h6 className="text-primary text-uppercase mb-2">{t(`trainergit${id}`)}</h6>
                            <h1 className="display-6 mb-4">If You are interested, Please Contact Us</h1>
                            {/*<p className="mb-4">*/}
                            {/*    The contact form is currently inactive. Get a functional and working contact form with*/}
                            {/*    Ajax & PHP in a few*/}
                            {/*    minutes. Just copy and paste the files, add a little code and you're done.{' '}*/}
                            {/*    <a href="https://htmlcodex.com/contact-form" target="_blank" rel="noopener noreferrer">*/}
                            {/*        Download Now*/}
                            {/*    </a>.*/}
                            {/*</p>*/}
                        </div>
                    </div>
                </div>
            </div>
        </>

    );
}

export default TeacherDetails;