import Hero from '../../component/sections/landing/Hero/Hero';
import MainContent from '../../component/sections/landing/MainContent/MainContent';
import './Home.css';

const Home = () => {
    return (
        <main className="home">
            <Hero />
            <MainContent />
        </main>
    );
};

export default Home;
