import React, {useEffect} from 'react';
import about1 from '../assets/img/about-1.jpg'
import about2 from '../assets/img/about-2.jpg'
import AOS from 'aos';

const WhyChooseUs = () => {

    useEffect(() => {
        AOS.init({duration: 800, once: true});
    }, []);

    return (
        <div className="container-xxl py-6">
            <div className="container">
                <div className="row g-5">
                    <div className="col-lg-6"
                         data-aos="fade-up"
                         data-aos-delay={'100'}>
                        <h6 className="text-primary text-uppercase mb-2">Why Choose Us!</h6>
                        <h1 className="display-6 mb-4">
                            Best Driving Training Agency In Your City
                        </h1>
                        <p className="mb-5">
                            Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu
                            diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet
                            lorem sit clita duo justo magna dolore erat amet
                        </p>

                        <div className="row gy-5 gx-4">
                            {[
                                {title: 'Fully Licensed', delay: '0.1s'},
                                {title: 'Online Tracking', delay: '0.2s'},
                                {title: 'Afordable Fee', delay: '0.3s'},
                                {title: 'Best Trainers', delay: '0.4s'},
                            ].map((item, i) => (
                                <div
                                    className="col-sm-6"
                                    data-aos="fade-up"
                                    data-aos-delay={item.delay}
                                    key={i}
                                >
                                    <div className="d-flex align-items-center mb-3">
                                        <div className="flex-shrink-0 btn-square bg-primary me-3">
                                            <i className="fa fa-check text-white"></i>
                                        </div>
                                        <h5 className="mb-0">{item.title}</h5>
                                    </div>
                                    <span>
                    Magna sea eos sit dolor, ipsum amet ipsum lorem diam eos
                  </span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="col-lg-6"
                         data-aos="fade-up"
                         data-aos-delay={'0.5s'}>
                        <div
                            className="position-relative overflow-hidden pe-5 pt-5 h-100"
                            style={{minHeight: '400px'}}
                        >
                            <img
                                className="position-absolute w-100 h-100"
                                src={about1}
                                alt=""
                                style={{objectFit: 'cover'}}
                            />
                            <img
                                className="position-absolute top-0 end-0 bg-white ps-3 pb-3"
                                src={about2}
                                alt=""
                                style={{width: '200px', height: '200px'}}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WhyChooseUs;
