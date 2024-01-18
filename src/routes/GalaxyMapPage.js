import React from 'react';

import Navbar from '../components/navbar/Navbar';
import GalaxyMap from '../components/galaxymap/GalaxyMap';
import Footer from '../components/footer/Footer';

const GalaxyMapPage = () => {
    return  (
        <>
            <Navbar />
            <GalaxyMap />
            <Footer />
        </>
    )
}

export default GalaxyMapPage;