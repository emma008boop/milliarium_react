import { useState } from 'react';
import './Nav.css';
import Logo from '../../../../assets/img/Logo-no-back.png';
import Button from '../../../ui/Button/Button';

const Nav = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="navbar">
            <div className="navbar__logo">
                <a href="/"><img src={Logo} alt="Logo" /></a>
            </div>
            
            <ul className="navbar__links">
                <li><a href="#home" data-text="Sobre nosotros">Sobre nosotros</a></li>
                <li><a href="#proyectos" data-text="Servicios">Servicios</a></li>
                <li><a href="#servicios" data-text="Proyectos">Proyectos</a></li>
                <li><a href="#contacto" data-text="Contacto">Contacto</a></li>
            </ul>

            <div className="navbar__actions">
                <Button name="login">Iniciar sesión</Button>
                <Button name="signup">Crear cuenta</Button>
            </div>

            <button className="navbar__toggle" onClick={() => setIsOpen(!isOpen)}>
                <span className={`navbar__toggle-icon ${isOpen ? 'open' : ''}`}></span>
            </button>

            <div className={`navbar__mobile ${isOpen ? 'open' : ''}`}>
                <ul className="navbar__mobile-links">
                    <li><a href="#home" onClick={() => setIsOpen(false)}>Sobre nosotros</a></li>
                    <li><a href="#proyectos" onClick={() => setIsOpen(false)}>Servicios</a></li>
                    <li><a href="#servicios" onClick={() => setIsOpen(false)}>Proyectos</a></li>
                    <li><a href="#contacto" onClick={() => setIsOpen(false)}>Contacto</a></li>
                </ul>
                <div className="navbar__mobile-actions">
                    <Button name="login" onClick={() => setIsOpen(false)}>Iniciar sesión</Button>
                    <Button name="signup" onClick={() => setIsOpen(false)}>Crear cuenta</Button>
                </div>
            </div>
        </nav>
    );
}

export default Nav;
