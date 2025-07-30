import React, {useEffect, useState} from 'react';
import PageHeader from "./PageHeader";
import {useTranslation} from "react-i18next";
import {useFormik} from 'formik';
import * as Yup from 'yup';
import AOS from 'aos';
import {useSendStudentMutation} from "../slices/students/studentApi.js";
import {useParams} from "react-router-dom";
import {toast} from "react-toastify";

function Contact() {
    const {t, i18n} = useTranslation();
    const {id} = useParams();
    const [sendStudent, {isLoading, isSuccess, error}] = useSendStudentMutation();


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


    const validation = useFormik({
        // enableReinitialize : use this flag when initial values needs to be changed
        enableReinitialize: true,

        initialValues: initialValues,
        validationSchema: Yup.object({
            fullName: Yup.string()
                .required('Ismni kiriting!'),
            phoneNumber: Yup.string()
                .required('Telefon raqamni kiriting!')
                .matches(/^[\d\+\-\s\(\)]+$/, 'Noto‘g‘ri telefon raqam'),
            email: Yup.string()
                .email('Email noto‘g‘ri!')
                .required('Emailni kiriting!'),
            companyName: Yup.string()
                .required('Kompaniya nomini kiriting!'),
            position: Yup.string()
                .required('Lavozimingizni kiriting!'),
            region: Yup.string()
                .required('Hududni tanlang!'),
            comment: Yup.string()
                .max(500, 'Izoh 500 ta belgidan oshmasligi kerak'),
        }),
        onSubmit: async (values) => {
            try {
                await sendStudent(values).unwrap();
                toast.success('Ariza qabul qilindi ,tez orada aloqaga chiqamiz!');
                validation.resetForm();
            } catch (err) {
                console.error('Xatolik:', err);
            }
        },
    });

    console.log(validation.errors);
    console.log(validation.values);

    useEffect(() => {
        AOS.init({duration: 800, once: true});
    }, [])


    // function showtoast() {
    //     toast.success('Ariza qabul qilindi ,tez orada aloqaga chiqamiz!');
    // }

    return (
        <>
            <PageHeader title={t('contact')}/>

            <div className="container-xxl py-6">
                <div className="container">
                    <div className="row g-5">
                        {/* Google Maps */}
                        <div className="col-lg-6"
                             data-aos="fade-up"
                             data-aos-delay={'0.1s'}
                             style={{minHeight: '450px'}}>
                            <div className="position-relative h-100">
                                <iframe
                                    className="position-relative w-100 h-100"
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d95821.74849352763!2d69.1815609!3d41.3110815!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b9fa4e4aaab%3A0x66c7f2b6a7b13412!2sTashkent%2C%20Uzbekistan!5e0!3m2!1sen!2s!4v1720161889553!5m2!1sen!2s"
                                    frameBorder="0"
                                    style={{minHeight: '450px', border: 0}}
                                    allowFullScreen=""
                                    aria-hidden="false"
                                    tabIndex="0"
                                    title="Google Map - Tashkent"
                                />
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className="col-lg-6" data-aos="fade-up"
                             data-aos-delay='0.5s'>
                            <h6 className="text-primary text-uppercase mb-2">Contact Us</h6>
                            <h1 className="display-6 mb-4">If You are interested, Please Contact Us</h1>
                            {/*<p className="mb-4">*/}
                            {/*    The contact form is currently inactive. Get a functional and working contact form with*/}
                            {/*    Ajax & PHP in a few*/}
                            {/*    minutes. Just copy and paste the files, add a little code and you're done.{' '}*/}
                            {/*    <a href="https://htmlcodex.com/contact-form" target="_blank" rel="noopener noreferrer">*/}
                            {/*        Download Now*/}
                            {/*    </a>.*/}
                            {/*</p>*/}

                            <form
                                onSubmit={(e) => {
                                    e.preventDefault();
                                    validation.handleSubmit();
                                    return false;
                                }}>
                                <div className="row g-3">
                                    <div className="col-md-6">
                                        <div className="form-floating">
                                            <input type="text" className="form-control border-0 bg-light"
                                                   placeholder="Your Name"
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
                                                ) : 'Your Name'}
                                            </label>
                                        </div>

                                    </div>

                                    <div className="col-md-6">
                                        <div className="form-floating">
                                            <input type="email" className="form-control border-0 bg-light" id="email"
                                                   placeholder="Your Email"
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
                                            ) : 'Your Email'}</label>
                                        </div>
                                    </div>

                                    <div className="col-md-6">
                                        <div className="form-floating">
                                            <input type="text" className="form-control border-0 bg-light"
                                                   id="phoneNumber"
                                                   placeholder="phoneNumber"
                                                   name="phoneNumber"
                                                   onChange={validation.handleChange}
                                                   onBlur={validation.handleBlur}
                                                   value={validation.values.phoneNumber || ''}/>
                                            <label
                                                htmlFor="subject">  {validation.touched.phoneNumber && validation.errors.phoneNumber ? (
                                                <h6 className="text-danger mt-1">
                                                    {validation.errors.phoneNumber}
                                                </h6>
                                            ) : "Phone Number"}</label>
                                        </div>

                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-floating">
                                            <input type="text" className="form-control border-0 bg-light"
                                                   id="companyName"
                                                   placeholder="companyName"
                                                   name="companyName"
                                                   onChange={validation.handleChange}
                                                   onBlur={validation.handleBlur}
                                                   value={validation.values.companyName || ''}/>
                                            <label
                                                htmlFor="subject">{validation.touched.companyName && validation.errors.companyName ? (
                                                <h6 className="text-danger mt-1">
                                                    {validation.errors.companyName}
                                                </h6>
                                            ) : 'Company Name'}</label>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-floating">
                                            <input type="text" className="form-control border-0 bg-light" id="position"
                                                   placeholder="position"
                                                   name="position"
                                                   onChange={validation.handleChange}
                                                   onBlur={validation.handleBlur}
                                                   value={validation.values.position || ''}/>
                                            <label htmlFor="subject">
                                                {validation.touched.position && validation.errors.position ? (
                                                    <h6 className="text-danger mt-1">
                                                        {validation.errors.position}
                                                    </h6>
                                                ) : 'Position'}</label>
                                        </div>

                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-floating">
                                            <input type="text" className="form-control border-0 bg-light" id="region"
                                                   placeholder="region"
                                                   name="region"
                                                   onChange={validation.handleChange}
                                                   onBlur={validation.handleBlur}
                                                   value={validation.values.region || ''}/>
                                            <label htmlFor="region">
                                                {validation.touched.region && validation.errors.region ? (
                                                    <h6 className="text-danger mt-1">
                                                        {validation.errors.region}
                                                    </h6>
                                                ) : 'Region'}</label>
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
                        style={{height: '150px'}}
                    ></textarea>
                                            <label htmlFor="comment">
                                                {validation.touched.comment && validation.errors.comment ? (
                                                    <h6 className="text-danger mt-1">
                                                        {validation.errors.comment}
                                                    </h6>
                                                ) : 'Comment'}</label>
                                        </div>

                                    </div>

                                    <div className="col-12">
                                        <button disabled={isLoading} className="btn btn-primary py-3 px-5 "
                                                type="submit">
                                            Send Message
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