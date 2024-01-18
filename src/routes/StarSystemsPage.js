import React from 'react';

import Navbar from '../components/navbar/Navbar';
import StarSystems from '../components/starsystems/StarSystems';
import Footer from '../components/footer/Footer';

const StarSystemsPage = () => {
    return  (
        <>
            <Navbar />
            <StarSystems />
            <Footer />
        </>
    )
}

export default StarSystemsPage;