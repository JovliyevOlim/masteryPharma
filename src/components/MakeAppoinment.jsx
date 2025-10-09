import React, {useEffect, useMemo, useState} from 'react';
import AOS from 'aos';
import * as Yup from "yup";
import {useTranslation} from "react-i18next";
import {useFormik} from "formik";
import {useSendFeedbackMutation} from "../slices/feedbacks/feedbackApi.js";

function MakeAppoinment() {
    const {t, i18n} = useTranslation();
    useEffect(() => {
        AOS.init({duration: 800, once: true});
    }, [])
    const [sendFeedback, {isLoading, isSuccess, error}] = useSendFeedbackMutation();
    const [message, setMessage] = useState(null);


    const [initialValues, setInitialValues] = useState({
        fullName: "",
        content: "",
    });

    const validationSchema = useMemo(
        () =>
            Yup.object({
                fullName: Yup.string().required(t("requiredFullName")),
                content: Yup.string().max(500, t("maxComment")),
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
                await sendFeedback(values).unwrap();
                setMessage("thanksFeedback");
                // validation.resetForm();
            } catch (err) {
                console.error('Xatolik:', err);
            }
        },
    });

    return (

        <div className="container-xxl">
            <div className="container">
                <div
                    className="text-center mx-auto mb-5"
                    data-aos="fade-up"
                    data-aos-delay="0.1s"
                    style={{maxWidth: '1000px'}}
                >
                    <h6 className="text-primary text-uppercase mb-2">{t('leaveFeedback')}</h6>
                    <h4>{t('feedbackBody')}</h4>
                </div>
                <div className="row justify-content-center">
                    {
                        message ?
                            <div className="col-lg-8">
                                <h1 className={'text-center'}>{t(message)}</h1>
                            </div> : <div className="col-lg-8 my-4"
                                          data-aos="fade-up"
                                          data-aos-delay="0.1s">
                                <div className="bg-primary text-center p-5 px-4 px-md-5">
                                    <h1 className="mb-4">{t('leaveFeedback')}</h1>
                                    <form
                                        key={i18n.language}
                                        onSubmit={(e) => {
                                            e.preventDefault();
                                            validation.handleSubmit();
                                            return false;
                                        }}
                                    >
                                        <div className="row g-3">
                                            <div className="col-sm-12">
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
                                            <div className="col-12">
                                                <div className="form-floating">
                     <textarea
                         className="form-control border-0 bg-light"
                         placeholder="Leave a content here"
                         id="content"
                         onChange={validation.handleChange}
                         onBlur={validation.handleBlur}
                         value={validation.values.content || ''}
                         style={{height: '150px'}}
                     ></textarea>
                                                    <label htmlFor="content">
                                                        {validation.touched.content && validation.errors.content ? (
                                                            <h6 className="text-danger mt-1">
                                                                {validation.errors.content}
                                                            </h6>
                                                        ) : t('message')}</label>
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <button disabled={isLoading} className="btn btn-dark py-3 px-5 "
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
                    }

                </div>
            </div>
        </div>
    );
}

export default MakeAppoinment;