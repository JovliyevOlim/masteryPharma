import React, { useEffect, useMemo, useState } from 'react';
import { useTranslation } from "react-i18next";
import { useFormik } from 'formik';
import * as Yup from 'yup';
import AOS from 'aos';
import { useSendStudentMutation } from "../slices/students/studentApi.js";
import { Link, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { useGetCoursesQuery } from "../slices/courses/coursesApi.js";
import ContactTop from '../components/ContactTop.jsx';

function Contact() {
    const { t, i18n } = useTranslation();
    const { id } = useParams();
    const [sendStudent, { isLoading }] = useSendStudentMutation();
    const { data: courses = [] } = useGetCoursesQuery();


    const [initialValues, setInitialValues] = useState({
        fullName: "",
        phoneNumber: "",
        email: "",
        companyName: "",
        position: "",
        courseId: id,
        region: "",
        comment: "",
        educationalFormat: true
    });

    const validationSchema = useMemo(
        () =>
            Yup.object({
                fullName: Yup.string().required(t("requiredFullName")),
                courseId: Yup.string().required(t("selectTraining")),
                phoneNumber: Yup.string()
                    .required(t("requiredPhoneNumber"))
                    .matches(/^[\d\+\-\s\(\)]+$/, t("invalidPhoneNumber")),
                email: Yup.string()
                    .email(t("invalidEmail"))
                    .required(t("requiredEmail")),
                companyName: Yup.string().required(t("requiredCompanyName")),
                position: Yup.string().required(t("requiredPosition")),
                region: Yup.string().required(t("requiredRegion")),
                comment: Yup.string().max(500, t("maxComment")),
            }),
        [i18n.language] // 🔑 til o‘zgarganda qaytadan schema yaratiladi
    );


    const validation = useFormik({
        // enableReinitialize : use this flag when initial values needs to be changed
        enableReinitialize: true,

        initialValues: initialValues,
        validationSchema: validationSchema,
        onSubmit: async (values) => {
            try {
                await sendStudent(values).unwrap();
                toast.success(t('successSubmit'));
                validation.resetForm();
            } catch (err) {
                console.error('Xatolik:', err);
            }
        },
    });


    useEffect(() => {
        AOS.init({ duration: 800, once: true });
    }, [])


    return (
        <>
            {/*<PageHeader title={t('contact')}/>*/}

            <div className="container-xxl py-6">
                <div className="container">
                    <ContactTop />

                    <div className="row g-5">
                        {/* Google Maps */}
                        <div className="col-lg-6"
                            data-aos="fade-up"
                            data-aos-delay={'0.1s'}
                            style={{ minHeight: '450px' }}>
                            <h3 className="title text-secondary text-uppercase mb-2">{t("contactUs")}</h3>
                            <h4 className="text-title text-secondary mb-4">{t("contactUsBody")}</h4>
                        </div>

                        {/* Contact Form */}
                        <div className="col-lg-6" data-aos="fade-up"
                            data-aos-delay='0.5s'>
                            <form key={i18n.language}
                                onSubmit={(e) => {
                                    e.preventDefault();
                                    validation.handleSubmit();
                                    return false;
                                }}>
                                <div className="row g-3">
                                    <div className="col-md-6">
                                        <div className="form-floating">
                                            <input type="text" className="form-control border-0 bg-light"
                                                placeholder={t('name')}
                                                id="fullName"
                                                name="fullName"
                                                onChange={validation.handleChange}
                                                onBlur={validation.handleBlur}
                                                value={validation.values.fullName || ''}
                                            />
                                            <label htmlFor="fullName">
                                                {validation.touched.fullName && validation.errors.fullName ? (
                                                    <h6 className="text-danger mt-1">
                                                        {validation.errors.fullName}
                                                    </h6>
                                                ) : t('name')}
                                            </label>
                                        </div>

                                    </div>

                                    <div className="col-md-6">
                                        <div className="form-floating">
                                            <input type="email" className="form-control border-0 bg-light" id="email"
                                                placeholder={t('email')}
                                                name="email"
                                                onChange={validation.handleChange}
                                                onBlur={validation.handleBlur}
                                                value={validation.values.email || ''}
                                            />
                                            <label
                                                htmlFor="email">{validation.touched.email && validation.errors.email ? (
                                                    <h6 className="text-danger mt-1">
                                                        {validation.errors.email}
                                                    </h6>
                                                ) : t('email')}</label>
                                        </div>
                                    </div>

                                    <div className="col-md-6">
                                        <div className="form-floating">
                                            <input type="text" className="form-control border-0 bg-light"
                                                id="phoneNumber"
                                                placeholder={t('phoneNumber')}
                                                name="phoneNumber"
                                                onChange={validation.handleChange}
                                                onBlur={validation.handleBlur}
                                                value={validation.values.phoneNumber || ''} />
                                            <label
                                                htmlFor="subject">  {validation.touched.phoneNumber && validation.errors.phoneNumber ? (
                                                    <h6 className="text-danger mt-1">
                                                        {validation.errors.phoneNumber}
                                                    </h6>
                                                ) : t('phoneNumber')}</label>
                                        </div>

                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-floating">
                                            <input type="text" className="form-control border-0 bg-light"
                                                id="companyName"
                                                placeholder={t('companyName')}
                                                name="companyName"
                                                onChange={validation.handleChange}
                                                onBlur={validation.handleBlur}
                                                value={validation.values.companyName || ''} />
                                            <label
                                                htmlFor="subject">{validation.touched.companyName && validation.errors.companyName ? (
                                                    <h6 className="text-danger mt-1">
                                                        {validation.errors.companyName}
                                                    </h6>
                                                ) : t('companyName')}</label>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-floating">
                                            <input type="text" className="form-control border-0 bg-light" id="position"
                                                placeholder={t('position')}
                                                name="position"
                                                onChange={validation.handleChange}
                                                onBlur={validation.handleBlur}
                                                value={validation.values.position || ''} />
                                            <label htmlFor="subject">
                                                {validation.touched.position && validation.errors.position ? (
                                                    <h6 className="text-danger mt-1">
                                                        {validation.errors.position}
                                                    </h6>
                                                ) : t('position')}</label>
                                        </div>

                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-floating">
                                            <input type="text" className="form-control border-0 bg-light" id="region"
                                                placeholder={t('region')}
                                                name="region"
                                                onChange={validation.handleChange}
                                                onBlur={validation.handleBlur}
                                                value={validation.values.region || ''} />
                                            <label htmlFor="region">
                                                {validation.touched.region && validation.errors.region ? (
                                                    <h6 className="text-danger mt-1">
                                                        {validation.errors.region}
                                                    </h6>
                                                ) : t('region')}</label>
                                        </div>

                                    </div>

                                    <div className="col-md-12">
                                        <div className="form-floating">
                                            <select
                                                className="form-control border-0 bg-light" id="courseId"
                                                name="courseId"
                                                onChange={validation.handleChange}
                                                onBlur={validation.handleBlur}
                                                value={validation.values.courseId || ''}>
                                                <option value="">{t("selectTraining")}</option>
                                                {
                                                    courses.map(course =>
                                                        <option value={course.id}>{course.title}</option>
                                                    )
                                                }
                                            </select>
                                            <label htmlFor="courseId">
                                                {validation.touched.courseId && validation.errors.courseId ? (
                                                    <h6 className="text-danger mt-1">
                                                        {validation.errors.courseId}!
                                                    </h6>
                                                ) : t('selectTraining')}</label>
                                        </div>

                                    </div>

                                    <div className="col-12">
                                        <div className="form-floating">
                                            <textarea
                                                className="form-control border-0 bg-light"
                                                placeholder="Leave a comment here"
                                                id="comment"
                                                onChange={validation.handleChange}
                                                onBlur={validation.handleBlur}
                                                value={validation.values.comment || ''}
                                                style={{ height: '150px' }}
                                            ></textarea>
                                            <label htmlFor="comment">
                                                {validation.touched.comment && validation.errors.comment ? (
                                                    <h6 className="text-danger mt-1">
                                                        {validation.errors.comment}
                                                    </h6>
                                                ) : t('message')}</label>
                                        </div>

                                    </div>

                                    <div className="col-12">
                                        <button disabled={isLoading} className="btn btn-secondary py-3 px-5 "
                                            type="submit">
                                            {t("submit")}
                                            {
                                                isLoading &&
                                                <div className="spinner-border ms-2 float-right spinner-border-sm"
                                                    role="status">
                                                    <span className="sr-only">Loading...</span>
                                                </div>
                                            }
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
        ;
}

export default Contact;

