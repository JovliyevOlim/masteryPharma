import React from 'react';
import {useTranslation} from "react-i18next";
import img1 from '../assets/img/Picture2.png'
import img2 from '../assets/img/Picture3.png'
import img3 from '../assets/img/Picture4.png'

function CourseDirections() {
    const {t} = useTranslation();

    const courseWays = [
        {
            title: t("ourWaysOne"),
            body: t("ourWaysOneBody"),
            img: img1
        },
        {
            title: t("ourWaysTwo"),
            body: t("ourWaysTwoBody"),
            img: img2

        },
        {
            title: t("ourWaysThree"),
            body: t("ourWaysThreeBody"),
            img: img3

        },
    ]
    return (
        <>
            <div className="container-xxl py-6">
                <div className="container">
                    {
                        courseWays.map((item, i) =>
                            <div className="row g-md-5 mt-2">

                                <div
                                    className={`col-lg-6 ${i % 2 === 0 ? "order-lg-1" : "order-lg-2"}`}
                                    data-aos="fade-up"
                                    data-aos-delay='0.5s'>
                                    <h2 className="text-primary text-uppercase mb-2">{t(`${item.title}`)}</h2>
                                    <h3 className="mb-4">
                                        {t(`${item.body}`)}
                                    </h3>
                                </div>
                                <div className={`col-lg-6 ${i % 2 === 0 ? "order-lg-2" : "order-lg-1"}`}
                                     data-aos="fade-up"
                                     data-aos-duration={i * 100}
                                     style={{minHeight: '300px', objectFit: 'cover'}}>
                                    <div className="position-relative h-100">
                                        <img
                                            className="position-relative w-100 h-100"
                                            src={item.img}
                                            style={{minHeight: '300px', border: 0}}
                                        />
                                    </div>
                                </div>
                            </div>
                        )
                    }

                </div>
            </div>
        </>

    );
}

export default CourseDirections;