import React from 'react';

import Navbar from '../components/navbar/Navbar';
import Planets from '../components/planets/Planets';
import Footer from '../components/footer/Footer';

const PlanetsPage = () => {
    return  (
        <>
            <Navbar />
            <Planets />
            <Footer />
        </>
    )
}

export default PlanetsPage;