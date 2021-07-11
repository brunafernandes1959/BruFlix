import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Logo from '../../assets/img/Logo.png';
import './Menu.css';
import Button from '../Button';
// import ButtonLink from './components/ButtonLink';

function Menu() {
  const location = useLocation();

  return (
    <nav className="Menu">
      <Link to="/">
        <img className="Logo" src={Logo} alt="TecFlix logo" />
      </Link>

      {location.pathname === '/cadastro/video' ? (
        <Button as={Link} to="/cadastro/categoria" className="ButtonLink">
          Nova categoria
        </Button>
      ) : (
        <Button as={Link} to="/cadastro/video" className="ButtonLink">
          Novo vídeo
        </Button>
      )}
    </nav>
  );
}

export default Menu;
