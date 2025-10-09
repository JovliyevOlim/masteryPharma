import React, {useEffect} from 'react';
import courses1 from "../assets/img/courses-1.jpg"
import AOS from 'aos';
import {useGetCoursesQuery} from "../slices/courses/coursesApi.js";
import {Autoplay, Navigation, Pagination} from "swiper/modules";
import {Swiper, SwiperSlide} from "swiper/react";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import {useTranslation} from "react-i18next";
import {baseUrl} from "../slices/apiSlice.js";

const CoursesSection = () => {
    const {t, i18n} = useTranslation();
    const {data: courses = [], isLoading} = useGetCoursesQuery();

    useEffect(() => {
        AOS.init({duration: 800, once: true});
    }, []);

    function formatNumber(num) {
        const numStr = num.toString();
        const formatted = numStr.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1 '); // Raqamlar orasiga bo'shliq qo'shamiz
        return formatted;
    }


    const getFileById = async (id) => {
        const response = await fetch(`${baseUrl}/files/${id}`, {
            method: "GET",
        });

        if (!response.ok) {
            throw new Error(`File not found: ${response.status}`);
        }

        const data = await response.json();

        const byteCharacters = atob(data.data); // base64 → binary
        const byteNumbers = new Array(byteCharacters.length);

        for (let i = 0; i < byteCharacters.length; i++) {
            byteNumbers[i] = byteCharacters.charCodeAt(i);
        }

        const byteArray = new Uint8Array(byteNumbers);
        const blob = new Blob([byteArray], {type: data.type});
        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = data.name;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

        URL.revokeObjectURL(link.href);
    };


    return (
        <>
            <div
                className="text-center mx-auto mb-5"
                data-aos="fade-up"
                data-aos-duration={'500'}
                style={{maxWidth: '800px'}}
            >
                <h6 className="text-primary text-uppercase mb-2">{t("upcomingTrainings")}</h6>
                <h4 className="m-0">
                    {t('upcomingTrainingsBody')}
                </h4>
            </div>
            <Swiper
                modules={[Autoplay, Navigation, Pagination]}
                spaceBetween={0}
                slidesPerView={3}
                breakpoints={{
                    320: {
                        slidesPerView: 1, // telefonlar
                    },
                    640: {
                        slidesPerView: 2, // kichik planshetlar
                    },
                    1024: {
                        slidesPerView: 3, // katta ekranlar
                    }
                }}
                loop={true}
                autoplay={{delay: 4000}}
                // pagination={{ clickable: true }}
                observer={true}
                observeParents={true}
            >
                {courses.map((course, index) => (
                    <SwiperSlide key={index}>
                        <div
                            className={'mx-3'}
                            data-aos="fade-up"
                            data-aos-delay={index * 100}
                            key={index}
                        >
                            <div className="courses-item d-flex flex-column bg-white overflow-hidden h-100">
                                <div className="text-center p-4 pt-0">
                                    <div className="d-inline-block bg-primary text-white fs-5 py-1 px-4 mb-4">
                                        {formatNumber(course?.price)} {t("currency")}
                                    </div>
                                    <h5 className="mb-3">{course?.title}</h5>
                                    <p style={{height: '100px'}}>
                                        {course?.description}
                                    </p>
                                    <ol className="breadcrumb justify-content-center mb-0" style={{height: '50px'}}>
                                        <li className="breadcrumb-item small">
                                            <i className="fa fa-chalkboard-teacher text-primary me-2"></i>{course?.teacherName}
                                        </li>
                                        <li className="breadcrumb-item small">
                                            <i className="fa fa-calendar-alt text-primary me-2"></i>
                                            {course?.durationHours} Hours
                                        </li>
                                    </ol>
                                    <div style={{height: '50px'}}>
                                        {
                                            course?.fileId &&
                                            <button className={'btn btn-outline-primary border-2'}
                                                    onClick={() => getFileById(course?.fileId)}
                                            >
                                                {t("downloadFile")}
                                            </button>
                                        }
                                    </div>


                                </div>
                                <div className="position-relative mt-auto">
                                    <img className="img-fluid w-100" style={{height: '300px', objectFit: 'cover'}}
                                         src={course?.imageId ? `${baseUrl}/files/download/${course?.imageId}` : courses1}
                                         alt=""/>
                                    <div className="courses-overlay">
                                        <a className="btn btn-outline-primary border-2"
                                           href={`/contact/${course?.id}`}>
                                            {t("leaveRequest")}
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </>

    );
};

export default CoursesSection;
