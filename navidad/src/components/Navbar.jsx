import { NavLink } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <span className="navbar-logo">NaviMagia🎅✨</span>
      <NavLink to="/" end>Inicio 🎄</NavLink>
      <NavLink to="/traditions">Tradiciones 🕯️</NavLink>
      <NavLink to="/recipes">Recetas 🍲</NavLink>
      <NavLink to="/gallery">Galería 🖼️</NavLink>
      <NavLink to="/music">Música 🎶</NavLink>
      <NavLink to="/stories">Cuentos 📖</NavLink>
      <NavLink to="/crafts">Manualidades ✂️</NavLink>
      <NavLink to="/contact">Contacto 📬</NavLink>
    </nav>
  );
}
export default Navbar;
