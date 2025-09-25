import {lazy} from 'react'
import {Route, Routes} from "react-router-dom";

import './App.css'
import Navbar from "./components/layout/Navbar.jsx";
import AppLayout from "./components/layout/AppLayout.jsx";

const HomePage = lazy(() => import('./pages/HomePage'));
const About = lazy(() => import('./pages/About'));
const Courses = lazy(() => import('./pages/Courses'));
const Contact = lazy(() => import('./pages/Contact'));
const TeacherDetails = lazy(() => import('./pages/TeacherDetails.jsx'));
const Footer = lazy(() => import('./components/layout/Footer.jsx'));

function App() {

    return (
        <>
            <Navbar/>
            <Routes>
                <Route element={<AppLayout/>}>
                    <Route path="/" element={<HomePage/>}/>
                    <Route path="/about" element={<About/>}/>
                    <Route path="/courses" element={<Courses/>}/>
                    <Route path="/contact/:id" element={<Contact/>}/>
                    <Route path="/team/:id" element={<TeacherDetails/>}/>
                    <Route path="*" element={<div>404 Not Found</div>}/>
                </Route>
            </Routes>
            <Footer/>
        </>
    )
}

export default App
