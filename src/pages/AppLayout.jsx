import {useEffect, useState} from 'react';
import {useLocation, Outlet} from 'react-router-dom';
import Spinner from './Spinner';

export default function AppLayout() {
    const location = useLocation();
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);

        const timer = setTimeout(() => {
            setLoading(false);
        }, 300); // sahifa yuklanish vaqtini simulyatsiya qilish

        return () => clearTimeout(timer);
    }, [location.pathname]);

    return loading ? <Spinner/> : <Outlet/>;
}
