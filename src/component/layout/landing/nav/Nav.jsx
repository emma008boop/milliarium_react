import './Nav.css';
import Logo from '../../../../assets/img/Logo-no-back.png';
import Button from '../../../ui/Button/Button';


const Nav = () => {

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

        </nav>
    );
}
export default Nav;