import React from 'react';
import Banner from '../Banner/Banner';
import About from '../About/About';
import Services from '../Services/Services';
import OurProduct from '../OurProduct/OurProduct';
import OurTeam from '../OurTeam/OurTeam';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Services></Services>
            <OurProduct></OurProduct>
            <OurTeam></OurTeam>
        </div>
    );
};

export default Home;