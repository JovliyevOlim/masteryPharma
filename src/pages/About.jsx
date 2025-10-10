import React from 'react';
import PageHeader from "../components/PageHeader.jsx";
import AboutStart from "../components/AboutStart.jsx";
import TeamStarts from "../components/TeamStarts.jsx";
import {useTranslation} from "react-i18next";
import TeacherDetails from "./TeacherDetails.jsx";

function About(props) {
    const {t, i18n} = useTranslation();

    return (
        <>
            <PageHeader title={t('about')}/>
            <AboutStart/>
            <TeacherDetails/>
        </>
    );
}

export default About;