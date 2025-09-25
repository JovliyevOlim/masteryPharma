import React from 'react';
import PageHeader from "../components/PageHeader.jsx";
import CourseStart from "../components/CourseStart.jsx";
import {useTranslation} from "react-i18next";

function Courses(props) {
    const {t, i18n} = useTranslation();

    return (
        <>
            <PageHeader title={t('courses')}/>
            <CourseStart/>
        </>
    );
}

export default Courses;