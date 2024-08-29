import React from 'react';

import Navbar from '../components/navbar/Navbar';
import PlanetEarthView from '../components/starsystems/PlanetEarthView';
import Footer from '../components/footer/Footer';

const PlanetEarthViewPage = () => {
    return  (
        <>
            <Navbar />
            <PlanetEarthView />
            <Footer />
        </>
    )
}

export default PlanetEarthViewPage;