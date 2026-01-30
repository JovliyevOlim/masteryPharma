import React, { useEffect } from 'react';
import { useTranslation } from "react-i18next";
import { teachers } from "../assets/data/teacher.js";
import DotGrid from './DotGrid.jsx';
import AOS from 'aos';

function Teachers() {
    const { t } = useTranslation();

    useEffect(() => {
        AOS.init({ duration: 800, once: true });
    }, []);

    // Helper to map teacher ID to translation keys
    const getTeacherData = (teacher) => {
        // Assuming teacher.id is 1, 2, 3 corresponding to Zamira, Aliddin, Elena
        return {
            name: t(`trainer${teacher.id}_name`),
            exp: t(`trainer${teacher.id}_exp`),
            edu: t(`trainer${teacher.id}_edu`),
            certs: t(`trainer${teacher.id}_certs`),
            img: teacher.img
        };
    };

    return (
        <>
            {/* Header Row: Title + DotGrid */}
            <div className="d-flex justify-content-between align-items-center mb-5">
                <div className="col-12 col-md-6">
                    <h3 className="text-uppercase mb-0" style={{ fontWeight: '800' }}>
                        {t("ourTrainersTitle")}
                    </h3>
                </div>
                <div className="col-4 d-none d-md-flex justify-content-center">
                    <DotGrid />
                </div>
            </div>

            <div className="row g-4">
                {teachers.map((teacher, index) => {
                    const data = getTeacherData(teacher);
                    return (
                        <div className="col-12 col-lg-4 col-md-6" key={teacher.id} data-aos="fade-up" data-aos-delay={teacher.delay || '100'}>
                            <div className="bg-light h-100 rounded-5 overflow-hidden position-relative">
                                {/* Image Section */}
                                <div className="d-flex justify-content-center pt-3">
                                    <div style={{ width: '200px', height: '200px' }}>
                                        <img
                                            className="w-100 h-100"
                                            src={data.img}
                                            alt={data.name}
                                            style={{ objectFit: 'cover' }}
                                        />
                                    </div>
                                </div>

                                {/* Content Section */}
                                <div className="p-4">
                                    <h4 className="mb-3 text-dark text-start" style={{ fontWeight: '800' }}>
                                        {data.name}
                                    </h4>
                                    <div className="mb-3">
                                        <p className="text-body mb-2 small" style={{ lineHeight: '1.5' }}>
                                            {data.exp}
                                        </p>
                                    </div>
                                    <div className="mb-3">
                                        <p className="text-body mb-2 small" style={{ lineHeight: '1.5' }}>
                                            <strong>{data.edu && data.edu.split(':')[0]}:</strong> {data.edu && data.edu.split(':')[1]}
                                        </p>
                                    </div>
                                    <div>
                                        <p className="text-body mb-0 small" style={{ lineHeight: '1.5' }}>
                                            {data.certs}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </>

    );
}

export default Teachers;