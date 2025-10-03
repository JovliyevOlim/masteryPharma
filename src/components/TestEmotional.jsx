import React, {useEffect} from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import {Pagination, Autoplay} from 'swiper/modules';
import AOS from 'aos';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import {useTranslation} from "react-i18next";
import {useGetFeedBacksQuery} from "../slices/feedbacks/feedbackApi.js";


const Testimonial = () => {
    const {t, i18n} = useTranslation();
    const {data: feedbacks = [], isLoading} = useGetFeedBacksQuery();

    useEffect(() => {
        AOS.init({duration: 800, once: true});
        setTimeout(() => {
            AOS.refresh(); // DOM to‘liq yuklangandan keyin delay ishlasin
        }, 500);
    }, [])

    const updateCustomPagination = (swiper) => {
        const bullets = document.querySelectorAll('.custom-pagination .swiper-pagination-bullet');
        bullets.forEach((bullet, index) => {
            const activeIndex = swiper.activeIndex;
            const shouldShow =
                index === activeIndex || index === activeIndex - 1 || index === activeIndex + 1;

            bullet.style.display = shouldShow ? 'inline-block' : 'none';
        });
    };
    return (
        <div className="container-xxl py-6">
            <div className="container">
                <div
                    className="text-center mx-auto mb-5"
                    data-aos="fade-up"
                    data-aos-delay="0.1s"
                    style={{maxWidth: '500px'}}
                >
                    <h6 className="text-primary text-uppercase mb-2">{t("testimonialTitle")}</h6>
                    <h1 className="display-6 mb-4">{t("whatOurClientsSay")}</h1>
                </div>

                <div className="row justify-content-center">
                    <div className="col-lg-8"
                         data-aos="fade-up"
                         data-aos-delay="0.1s"
                    >
                        <Swiper
                            modules={[Pagination, Autoplay]}
                            onSlideChange={(swiper) => updateCustomPagination(swiper)}
                            onInit={(swiper) => updateCustomPagination(swiper)}
                            slidesPerView={1}
                            spaceBetween={30}
                            pagination={{
                                clickable: true,
                                el: '.custom-pagination',
                            }} autoplay={{delay: 3000, disableOnInteraction: false}}
                            loop={true}
                            className="testimonial-swiper"
                        >
                            {feedbacks.map((item) => (
                                <SwiperSlide key={item.id}>
                                    <div className="testimonial-item text-center">
                                        {/*<div className="position-relative mb-5">*/}
                                        {/*    <img*/}
                                        {/*        className="img-fluid rounded-circle mx-auto"*/}
                                        {/*        src={item.img}*/}
                                        {/*        alt="Client"*/}
                                        {/*    />*/}
                                        {/*    <div*/}
                                        {/*        className="position-absolute top-100 start-50 translate-middle d-flex align-items-center justify-content-center bg-white rounded-circle"*/}
                                        {/*        style={{width: '60px', height: '60px'}}*/}
                                        {/*    >*/}
                                        {/*        <i className="fa fa-quote-left fa-2x text-primary"></i>*/}
                                        {/*    </div>*/}
                                        {/*</div>*/}
                                        <p className="fs-4">{item.content}</p>
                                        <hr className="w-25 mx-auto"/>
                                        <h5>{item.fullName}</h5>
                                        {/*<span>{item.profession}</span>*/}
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                        <div className={'custom-pagination'}>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonial;
