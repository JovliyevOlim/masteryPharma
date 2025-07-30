import {createRoot} from 'react-dom/client'
import App from './App.jsx'
import {BrowserRouter} from "react-router-dom";
import './index.css'
import './assets/css/bootstrap.min.css';
import './assets/css/style.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './i18n'
import {Provider} from "react-redux";
import 'flag-icon-css/css/flag-icons.css';
import {store} from './store';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

createRoot(document.getElementById('root')).render(
    <Provider store={store}>
        <BrowserRouter>
            <ToastContainer
                position="top-right"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                toastClassName="custom-toast" // 👈 className beramiz
            />
            <App/>
        </BrowserRouter>
    </Provider>
)
