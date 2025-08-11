import React from 'react';
import HeroSection from '../Components/HeroSection';
import AboutMeSection from '../Components/AboutMe';
import Skills from '../Components/Skills';
import ProjectCard from '../Components/ProjectCard';

const Home = () => {
    return (
        <div id='home'>
            <HeroSection></HeroSection>
            <AboutMeSection/>
            <Skills/>
            <ProjectCard/>
        </div>
    );
};

export default Home;
