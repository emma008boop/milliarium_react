import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect, useRef } from 'react';
import './MainContent.css';

gsap.registerPlugin(ScrollTrigger);

const MainContent = ({ title, image, animation }) => {
    const titleRef = useRef(null);
    const imageRef = useRef(null);

    useEffect(() => {
        const defaults = {
            title: { x: -100, opacity: 0, duration: 0.4, ease: 'power3.out' },
            image: { y: 80, opacity: 0, duration: 1.2, ease: 'power3.out' }
        };

        const config = animation || {};

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: '.main-content',
                start: 'top 80%',
                toggleActions: 'play none none reverse'
            }
        });

        tl.fromTo('.main-content__title span', 
            { x: -50, opacity: 0 },
            { x: 0, opacity: 1, duration: 0.4, stagger: 0.03, ease: 'power3.out', delay: config.title?.delay || 0 }
        )
        .fromTo('.main-content__image', 
            { ...defaults.image, ...config.image?.from },
            { ...defaults.image, ...config.image?.to, delay: config.image?.delay || 0 },
            config.image?.delay ? 0 : '-=0.8'
        );
    }, [animation, title]);

    const renderTitle = (text) => {
        return text.split('').map((char, i) => (
            <span key={i}>{char === ' ' ? '\u00A0' : char}</span>
        ));
    };

    return (
        <section className="main-content">
            <div className="main-content__inner">
                <div className="main-content__text">
                    <h2 className="main-content__title" ref={titleRef}>
                        {renderTitle(title)}
                    </h2>
                </div>
                <div className="main-content__image" ref={imageRef}>
                    {image}
                </div>
            </div>
        </section>
    );
};

export default MainContent;
