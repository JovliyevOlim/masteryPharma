import React, {useState, useRef, useEffect} from 'react';
import {useTranslation} from "react-i18next";

const LanguageDropdown = () => {
    const {t, i18n} = useTranslation();
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);
    const [flag, setFlag] = useState('flag-icon-uz');
    const [language, setLanguage] = useState("O'zbek");

    const handleChangeLanguage = (lng) => {
        i18n.changeLanguage(lng.value);
        toggleDropdown();
        setFlag(lng.flags);
        setLanguage(lng.name);
    };
    const toggleDropdown = () => setIsOpen(prev => !prev);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);


    const languages = [
        {name: 'English', value: 'en', flags: "flag-icon-gb"},
        {name: 'Русский', value: 'ru', flags: "flag-icon-ru"},
        {name: "O'zbek", value: 'uz', flags: "flag-icon-uz"},
        {name: 'Кирилл', value: 'kr', flags: "flag-icon-uz"},
    ]

    return (
        <div className="dropdown nav-item" ref={dropdownRef}>
            <a
                className="nav-link dropdown-toggle"
                href="#"
                onClick={toggleDropdown}
                id="Dropdown"
                role="button"
                aria-expanded={isOpen}
            >
                <i className={`flag-icon ${flag} me-1`}></i>
                {language}
            </a>

            {isOpen && (
                <ul className="dropdown-menu dropdown-menu-lg-start show" aria-labelledby="Dropdown">

                    {
                        languages.filter(item => item.value !== i18n.language).map((l) =>
                            <li><a onClick={() => handleChangeLanguage(l)} className="dropdown-item" href="#"><i
                                className={`me-1 flag-icon ${l?.flags}`}></i>{l?.name}</a>
                            </li>
                        )
                    }
                </ul>
            )}
        </div>
    );
};

export default LanguageDropdown;
