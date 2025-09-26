import React from 'react';
import {useTranslation} from "react-i18next";

function CourseHeader() {
    const {t, i18n} = useTranslation();

    return (
        <>
            <div
                className="text-center mx-auto mb-5"
                data-aos="fade-up"
                data-aos-duration={'500'}
                style={{maxWidth: '800px'}}
            >
                <h6 className="text-primary text-uppercase mb-2">{t("ourWays")}</h6>
                <h2 className="mb-4">
                    {t("ourWaysAbout")}
                </h2>
            </div>
        </>
    );
}

export default CourseHeader;