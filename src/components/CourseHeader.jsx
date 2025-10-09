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
                <h5>{t('whyBody')}</h5>
                    {[
                        {title: t('whyPoint1'), delay: '0.1s'},
                        {title: t('whyPoint2'), delay: '0.2s'},
                        {title: t('whyPoint3'), delay: '0.3s'},
                    ].map((item, i) => (
                        <p
                            data-aos="fade-up"
                            data-aos-delay={item.delay}
                            key={i}
                        >
                            {item.title}
                        </p>
                    ))}
            </div>
        </>
    );
}

export default CourseHeader;