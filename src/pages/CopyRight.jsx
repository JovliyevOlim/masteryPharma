import React from 'react';

const Copyright = () => {
    return (
        <div className="container-fluid copyright text-light py-4 wow fadeIn" data-wow-delay="0.1s">
            <div className="container">
                <div className="row">
                    {/* Chap tomondagi matn */}
                    <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
                        &copy; <a href="#">Your Site Name</a>, All Right Reserved.
                    </div>

                    {/* O'ng tomondagi matn */}
                    <div className="col-md-6 text-center text-md-end">
                        Designed By <a href="https://htmlcodex.com" target="_blank" rel="noopener noreferrer">HTML Codex</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Copyright;
