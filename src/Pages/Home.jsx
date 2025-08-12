import React from 'react';
import HeroSection from '../Components/HeroSection';
import AboutMeSection from '../Components/AboutMe';
import Skills from '../Components/Skills';
import ProjectCard from '../Components/ProjectCard';
import ContactMe from '../Components/ContactMe';

const Home = () => {
    return (
        <div id='home'>
            <HeroSection></HeroSection>
            <AboutMeSection/>
            <Skills/>
            <ProjectCard/>
            <ContactMe/>
        </div>
    );
};

export default Home;
