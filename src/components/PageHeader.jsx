import React from 'react';

const PageHeader = ({title}) => {
    return (
        <div className="container-fluid page-header py-6 my-6 mt-0 wow fadeIn" data-wow-delay="0.1s">
            <div className="container text-center">
                <h1 className="display-4 text-white animated slideInDown mb-4">{title}</h1>
            </div>
        </div>
    );
};

export default PageHeader;
