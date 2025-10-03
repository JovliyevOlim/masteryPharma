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
                <h6 className="text-primary text-uppercase mb-2">{t("whyUsTitle")} ?</h6>
                <h4 className="m-0">
                    {t("whyPoint1")}
                </h4>
                <h4 className="m-0">
                    {t("whyPoint2")}
                </h4>
                <h4 className="m-0">
                    {t("whyPoint3")}
                </h4>
                <h4 className="m-0">
                    {t("whyPoint4")}
                </h4>
            </div>
        </>
    );
}

export default CourseHeader;