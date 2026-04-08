import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect } from 'react';
import Hero from '../../component/sections/landing/Hero/Hero';
import MainContent from '../../component/sections/landing/MainContent/MainContent';
import './Home.css';

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
    useEffect(() => {
        ScrollTrigger.create({
            snap: {
                snapTo: 0.5,
                duration: 0.5,
                ease: 'power3.inOut',
                delay: 0
            }
        });
    }, []);

    return (
        <main className="home">
            <Hero />
            <MainContent 
                title="Abre nuevas puertas para tu negocio,                    visibilidad, control y escalabilidad"
                image={<div className="main-content__image-placeholder"></div>}
                animation={{
                    title: { from: { y: 80, opacity: 0 }, to: { y: 0, opacity: 1 }, delay: 0.1 },
                    image: { from: { y: 100, opacity: 0 }, to: { y: 0, opacity: 1 }, delay: 0.3 }
                }}
            />
        </main>
    );
};

export default Home;
