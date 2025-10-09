import React from 'react';
import PageHeader from "../components/PageHeader.jsx";
import {useTranslation} from "react-i18next";
import MakeAppoinment from "../components/MakeAppoinment.jsx";
import TestEmotional from "../components/TestEmotional.jsx";

function Feedbacks() {
    const {t, i18n} = useTranslation();

    return (
        <div>
            <PageHeader title={t('testimonialTitle')}/>

            <MakeAppoinment/>
            {/*<Team/>*/}
            <TestEmotional/>
        </div>
    );
}

export default Feedbacks;