import React from 'react';
import { FooterBase } from './styles';

function Footer() {
  return (
    <FooterBase>
      <a href="http://www.faetec.rj.gov.br/">
        <img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Ficonape.com%2Ffaetec-logo-logo-icon-svg-png.html&psig=AOvVaw17HcQAsc9OSkxv6VTtD7BA&ust=1621545110531000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCLiept7U1vACFQAAAAAdAAAAABAD" alt="Logo Faetec" />
      </a>
      <p>
        Orgulhosamente criado durante o Tećnico em informática - 
        {' '}
        <a href="http://www.faetec.rj.gov.br/">
          Faetec
        </a>
      </p>
    </FooterBase>
  );
}

export default Footer;
