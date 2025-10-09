import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faBullhorn,
    faHandshake,
    faStethoscope,
    faBriefcase,
} from "@fortawesome/free-solid-svg-icons";
import {useTranslation} from "react-i18next";

const Programs = () => {
    const {t} = useTranslation();
    const items = [
        {
            title: 'marketingMasteryTitle',
            subtitle: '',
            list: ['marketingMasteryOne', 'marketingMasteryTwo', 'marketingMasteryThree'],
            body: 'marketingMasteryBody',
            icon: faBullhorn,
            color: "#f97316"
        },
        {
            title: "regionalManagementMasteryTitle", subtitle: '',
            body: 'regionalManagerBody',

            list: ['regionalManagementMasteryOne', 'regionalManagementMasteryTwo'],

            icon: faHandshake, color: "#0ea5a4"
        },
        {
            title: "medicalRepresentativeMasteryTitle", subtitle: '',
            body: 'medicalRepresentativeBody',

            list: ['medicalRepresentativeMasteryOne'],

            icon: faStethoscope, color: "#06b6d4"
        },
        {
            title: "corporateProgramsTitle", subtitle: 'corporateProgramsSubtitle',
            body: 'corporateProgramsBody',

            list: ['corporateProgramsOne', 'corporateProgramsTwo', 'corporateProgramsThree', "corporateProgramsFour", "corporateProgramsFive"],

            icon: faBriefcase, color: "#374151"
        },
    ];

    return (
        <div className="row mx-lg-3 mb-5 gap-5 justify-content-evenly">
            {items.map((item, i) => (
                <div
                    key={i}
                    className="col-lg-5 p-lg-4 bg-white course-direction"
                >
                    <div className={'p-3 px-0'}>
                        <FontAwesomeIcon icon={item.icon} size="3x" style={{color: "f3bd00"}}/>
                    </div>
                    <div>
                        <h5 className="text-lg font-semibold">{t(item.title)}</h5>
                        <p>{t(item.body)}</p>
                    </div>
                </div>
            ))}

        </div>
    );
};

export default Programs;