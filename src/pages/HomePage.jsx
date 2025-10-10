import React from "react";
import HeaderCarousel from "../components/HeaderCarousel.jsx";
import Facts from "../components/Facts.jsx";
import AboutUs from "../components/AboutStart.jsx";
import TestEmotional from "../components/TestEmotional.jsx";
import CoursesSection from "../components/CourseStart.jsx";
import FeaturesStart from "../components/FeaturesStart.jsx";
import Team from "../components/TeamStarts.jsx";
import CourseHeader from "../components/CourseHeader.jsx";
import CourseStart from "../components/CourseStart.jsx";
import MakeAppoinment from "../components/MakeAppoinment.jsx";
import ForUs from "../components/ForUs.jsx";

function HomePage() {

    function scrollToTop() {
        window.scrollTo({top: 0, behavior: 'smooth'}); // optional: behavior: 'auto'
    }

    return (
        <>
            <HeaderCarousel/>
            {/*<Facts/>*/}
            <FeaturesStart/>
            <ForUs/>
            <AboutUs/>
            <div className="container-xxl courses my-6 py-6 pb-0">
                <div className="container">
                    <CourseHeader/>
                    <CourseStart/>
                </div>
            </div>
            <MakeAppoinment/>
            {/*<Team/>*/}
            <TestEmotional/>
            <button onClick={scrollToTop} className="btn btn-lg btn-primary btn-lg-square back-to-top"><i
                className="bi bi-arrow-up"></i></button>
        </>
    );
}

export default HomePage;
