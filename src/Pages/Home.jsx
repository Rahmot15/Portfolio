import React from 'react';
import HeroSection from '../Components/HeroSection';
import AboutMeSection from '../Components/AboutMe';
import Skills from '../Components/Skills';

const Home = () => {
    return (
        <div>
            <HeroSection></HeroSection>
            <AboutMeSection/>
            <Skills/>
        </div>
    );
};

export default Home;
