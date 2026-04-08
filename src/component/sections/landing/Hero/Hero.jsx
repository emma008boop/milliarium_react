import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import Button from '../../../ui/Button/Button';
import './Hero.css';

const Hero = () => {
    const titleRef = useRef(null);
    const subtitleRef = useRef(null);
    const ctaRef = useRef(null);

    useEffect(() => {
        const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

        tl.fromTo('.hero__title', 
            { y: 100, opacity: 0 },
            { y: 0, opacity: 1, duration: 1 }
        )
        .fromTo('.hero__subtitle',
            { y: 30, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.8 },
            '-=0.5'
        )
        .fromTo('.hero__cta',
            { y: 20, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.6 },
            '-=0.4'
        );
    }, []);

    return (
        <section className="hero">
            <div className="hero__content">
                <h1 className="hero__title" ref={titleRef}>
                    Transformamos <span className="hero__title--light">el</span> tráfico <span className="hero__title--light">de</span> <span className="hero__title--light">tu</span> negocio
                </h1>
                <p className="hero__subtitle" ref={subtitleRef}>
                    Te guiamos en cada paso
                </p>
                <div className="hero__cta" ref={ctaRef}>
                    <Button name="signup">Conoce nuestro trabajo</Button>
                </div>
            </div>
            <div className="hero__decoration"></div>
        </section>
    );
};

export default Hero;
