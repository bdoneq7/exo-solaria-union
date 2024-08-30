import React from 'react';

import Navbar from '../components/navbar/Navbar';
import Abductees from '../components/abductees/Abductees';
import Footer from '../components/footer/Footer';

const AbducteesPage = () => {
    return  (
        <>
            <Navbar />
            <Abductees />
            <Footer />
        </>
    )
}

export default AbducteesPage;