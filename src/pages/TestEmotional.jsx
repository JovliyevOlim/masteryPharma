import React, {useEffect} from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import {Pagination, Autoplay} from 'swiper/modules';
import AOS from 'aos';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import image1 from "../assets/img/testimonial-1.jpg"
import image2 from "../assets/img/testimonial-2.jpg"
import image3 from "../assets/img/testimonial-3.jpg"
import {useTranslation} from "react-i18next";
import {useGetFeedBacksQuery} from "../slices/feedbacks/feedbackApi.js";

const testimonials = [
    {
        id: 1,
        img: image1,
        text: "Здравствуйте! Хочу искренне поблагодарить организаторов такого мощного, незабываемого, полезного тренинга! Отдельно выразить благодарность тренеру- Замире Рустамовне за интересную и доступную подачу материала!!! Эти незабываемые дни коуча подарили нам нужные знания, которые мы обязательно будем применять в практике!!! Огромное спасибо всем за участие!❤️🌺🌹💐",
        name: 'Елена Белякова',
        profession: 'Profession',
    },
    {
        id: 2,
        img: image2,
        text: 'Замира, спасибо огромное! За огромную работу, которую вы провели в подготовке к тренингу, за доступную и очень нужную информацию! За непринужденный стиль общения и добрую атмосферу! За ваш профессионализм!\n' +
            'Дальнейших успехов и процветания MASTERYPHARMA! Здоровья вам!\n' +
            '\n' +
            'С искренним уважением, команда VEGAPHARM.',
        name: 'Ulfat Abidova',
        profession: 'Profession',
    },
    {
        id: 3,
        img: image3,
        text: 'Уважаемая Замира Рустамовна ! Хотим  выразить искреннюю благодарность за проведение потрясающего тренинга.  Каждый момент был наполнен ценными уроками и практическими инструментами, которые мы обязательно будем использовать в своей жизни и работе.\n' +
            'Особенно ценим ваш подход — внимательность к каждому участнику, открытость и способность создать комфортную атмосферу для открытого общения. \n' +
            'Большое спасибо за ваше время и усилия. Процветания Вам ! \n' +
            'С благодарностью , Команда SPEY',
        name: 'Lemara Osmanova',
        profession: 'Profession',
    },
    {
        id: 4,
        img: image3,
        text: 'Уважаемая Замира Рустамовна! Я хочу поблагодарить Вас за ваши знания ,за Вашу грамотность, за Ваше доброе сердце! Благодаря Вам очень многое и новое узнали. Огромное спасибо за Вашу профессиональность, честность , а также за то, что Вы уделяете нам своё время и внимание. Спасибо!🥰🥰🥰',
        name: 'Nadira',
        profession: 'Profession',
    },
    {
        id: 5,
        img: image3,
        text: 'Еще раз большое спасибо! Было очень непросто, но вы нам показали маркетинг совсем с другой стороны. Теперь мы еще прокачаннее))) благодарим Замира Рустамовна, за полную отдачу, за такой труд, и нашу компанию, организаторов за вклад в нас🙏🏻 дай Бог внедрим в свою практику и будем тиграми 🐅 P.S: За вкусные печеньки и чай отдельно спасибо 😂',
        name: 'Shahnoza Xashimova',
        profession: 'Profession',
    },
    {
        id: 6,
        img: image3,
        text: 'Замира Рустамовна! Спасибо огромное! Вы дали нам очень ценные знания и навыки! 🙏🏻 Также большая  благодарность руководству и Нонне Сергеевне за предоставленную возможность!',
        name: 'Мафтуна Хамракулова',
        profession: 'Profession',
    },
];

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
                    <h6 className="text-primary text-uppercase mb-2">Testimonial</h6>
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
