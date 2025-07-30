import {lazy, useState} from 'react'
import {Route, Routes} from "react-router-dom";

import './App.css'
import ScrollToTop from "./pages/ScrollToTop.jsx";
import Navbar from "./pages/Navbar.jsx";
import AppLayout from "./pages/AppLayout.jsx";
import Footer from "./pages/Footer.jsx";

const HomePage = lazy(() => import('./pages/HomePage'));
const About = lazy(() => import('./pages/About'));
const Courses = lazy(() => import('./pages/Courses'));
const Contact = lazy(() => import('./pages/Contact'));

function App() {
    const [count, setCount] = useState(0)

    return (
        <>
            <Navbar/>
            <ScrollToTop/>
            <Routes>
                <Route element={<AppLayout/>}>
                    <Route path="/" element={<HomePage/>}/>
                    <Route path="/about" element={<About/>}/>
                    <Route path="/courses" element={<Courses/>}/>
                    <Route path="/contact/:id" element={<Contact/>}/>
                    <Route path="*" element={<div>404 Not Found</div>}/>
                </Route>
            </Routes>
            <Footer/>
        </>
    )
}

export default App
