import React, {useEffect} from "react";
import HeaderCarousel from "./HeaderCarousel.jsx";
import Facts from "./Facts.jsx";
import AboutUs from "./AboutStart.jsx";
import TestEmotional from "./TestEmotional.jsx";
import CoursesSection from "./CourseStart.jsx";
import FeaturesStart from "./FeaturesStart.jsx";
import Team from "./TeamStarts.jsx";

function HomePage() {
    return (
        <>
            <HeaderCarousel/>
            <Facts/>
            <AboutUs/>
            <CoursesSection/>
            <FeaturesStart/>
            <Team/>
            <TestEmotional/>
            <a href="#" className="btn btn-lg btn-primary btn-lg-square back-to-top"><i
                className="bi bi-arrow-up"></i></a>
        </>
    );
}

export default HomePage;
