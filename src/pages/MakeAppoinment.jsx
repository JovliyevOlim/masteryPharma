import React, {useEffect} from 'react';
import AOS from 'aos';

function MakeAppoinment() {
    useEffect(() => {
        AOS.init({duration: 800, once: true});
    }, [])
    return (
        <div className="col-lg-8 my-6 mb-0"
             data-aos="fade-up"
             data-aos-delay="0.1s">
            <div className="bg-primary text-center p-5">
                <h1 className="mb-4">Make Appointment</h1>
                <form>
                    <div className="row g-3">
                        {[
                            {id: 'gname', type: 'text', label: 'Your Name'},
                            {id: 'gmail', type: 'email', label: 'Your Email'},
                            {id: 'cname', type: 'text', label: 'Courses Type'},
                            {id: 'cage', type: 'text', label: 'Car Type'},
                        ].map((input, i) => (
                            <div className="col-sm-6" key={i}>
                                <div className="form-floating">
                                    <input
                                        type={input.type}
                                        className="form-control border-0"
                                        id={input.id}
                                        placeholder={input.label}
                                    />
                                    <label htmlFor={input.id}>{input.label}</label>
                                </div>
                            </div>
                        ))}

                        <div className="col-12">
                            <div className="form-floating">
                    <textarea
                        className="form-control border-0"
                        placeholder="Leave a message here"
                        id="message"
                        style={{height: '100px'}}
                    ></textarea>
                                <label htmlFor="message">Message</label>
                            </div>
                        </div>
                        <div className="col-12">
                            <button className="btn btn-dark w-100 py-3" type="submit">
                                Submit
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default MakeAppoinment;