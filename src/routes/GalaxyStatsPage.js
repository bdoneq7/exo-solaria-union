import React from 'react';

import Navbar from '../components/navbar/Navbar';
import GalaxyStats from '../components/galaxystats/GalaxyStats';
import Footer from '../components/footer/Footer';

const GalaxyStatsPage = () => {
    return  (
        <>
            <Navbar />
            <GalaxyStats />
            <Footer />
        </>
    )
}

export default GalaxyStatsPage;