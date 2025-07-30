import React from 'react';
import PageHeader from "./PageHeader";
import AboutStart from "./AboutStart";
import TeamStarts from "./TeamStarts";
import {useTranslation} from "react-i18next";

function About(props) {
    const {t, i18n} = useTranslation();

    return (
        <>
            <PageHeader title={t('about')}/>
            <AboutStart/>
            <TeamStarts/>
        </>
    );
}

export default About;