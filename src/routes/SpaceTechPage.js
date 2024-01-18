import React from 'react';

import Navbar from '../components/navbar/Navbar';
import SpaceTech from '../components/spacetech/SpaceTech.js';
import Footer from '../components/footer/Footer';

const SpaceTechPage = () => {
    return  (
        <>
            <Navbar />
            <SpaceTech />
            <Footer />
        </>
    )
}

export default SpaceTechPage;