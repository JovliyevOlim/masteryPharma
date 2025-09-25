import {useEffect, useState} from 'react';
import {useLocation, Outlet} from 'react-router-dom';
import Spinner from '../Spinner.jsx';

export default function AppLayout() {
    const location = useLocation();
    const [loading, setLoading] = useState(false);
    const {pathname} = useLocation();

    useEffect(() => {
        window.scrollTo({top: 0, behavior: 'smooth'}); // optional: behavior: 'auto'
    }, [pathname]);

    useEffect(() => {
        setLoading(true);

        const timer = setTimeout(() => {
            setLoading(false);
        }, 300); // sahifa yuklanish vaqtini simulyatsiya qilish

        return () => clearTimeout(timer);
    }, [location.pathname]);

    return loading ? <Spinner/> : <Outlet/>;
}
