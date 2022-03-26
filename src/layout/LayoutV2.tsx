import React from "react";
import {Routes, Route} from 'react-router-dom';
import Footer from './../layout/components/Footer';
import TopNavbar from './../layout/components/TopNavbar';
import HomePage from './../views/homepage/HomePage'
import NotFoundPage from "../views/404page";


const AppLayout = () => {
    return(
        <>
            <TopNavbar />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="*" element={<NotFoundPage />} />
                {/* <Route />
                <Route />
                <Route />
                 */}
            </Routes>
            <Footer />
        </>
    );
};

export default AppLayout;