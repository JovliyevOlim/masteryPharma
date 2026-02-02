import { useTranslation } from "react-i18next";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/img/logo/mastery_logo.jpg";
import { routes } from "../../routes.js";
import React, { useState } from "react";
import LanguageDropdown from "../LanguageDropdown.jsx";

function Navbar() {
    const { t, i18n } = useTranslation();


    const [isOpen, setIsOpen] = useState(false);

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };
    return (
        <nav className="navbar navbar-expand-lg bg-white navbar-light sticky-top p-0 top-0 shadow-sm">
            <Link to="/" className="navbar-brand d-flex align-items-center border-end px-4 px-lg-5">
                <h2 className="m-0">
                    <img src={logo} width={120} height={48} className='img-fluid' alt="logo" />
                </h2>
            </Link>
            <button
                type="button"
                className="navbar-toggler me-4"
                onClick={toggleNavbar}
            >
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`} id="navbarCollapse">
                <div className="navbar-nav ms-auto p-4  p-lg-0">
                    {
                        routes.map((route, index) =>
                            <NavLink to={route.path} key={index} onClick={toggleNavbar}
                                className={({ isActive }) => (isActive ? 'active nav-item nav-link fw-bold' : 'nav-item nav-link fw-normal')}>
                                {t(`${route.name}`)}
                            </NavLink>
                        )
                    }

                    <LanguageDropdown />

                </div>
            </div>
        </nav>
    );
}

export default Navbar;