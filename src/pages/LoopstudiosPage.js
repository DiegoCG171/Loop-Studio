import React from 'react';
import { AboutSection } from '../components/AboutSection';
import { Footer } from '../components/Footer';
import { GalerySection } from '../components/GalerySection';
import { HeroSection } from '../components/HeroSection';
import { Navbar } from '../components/Navbar';

export const LoopstudiosPage = () => {
    return (
        <>
            <Navbar />
            <HeroSection />
            <AboutSection />
            <GalerySection />
            <Footer />
        </>
    )
}
