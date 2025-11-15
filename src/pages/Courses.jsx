import React from 'react';
import PageHeader from "../components/PageHeader.jsx";
import CourseStart from "../components/CourseStart.jsx";
import {useTranslation} from "react-i18next";
import CourseHeader from "../components/CourseHeader.jsx";
import CourseDirections from "../components/CourseDirections.jsx";
import TeacherDetails from "./TeacherDetails.jsx";

function Courses(props) {
    const {t, i18n} = useTranslation();

    return (
        <>
            {/*<PageHeader title={t('courses')}/>*/}
            <div className="container-xxl courses my-6 py-6 pb-0">
                <div className="container">
                    <CourseHeader/>
                    <CourseDirections/>
                    <TeacherDetails/>
                    <CourseStart/>
                </div>
            </div>
        </>
    );
}

export default Courses;