import React from 'react';
import { FooterBase } from './styles';

function Footer() {
  return (
    <FooterBase>
      <a href="http://www.faetec.rj.gov.br/">
        <img src="https://fontmeme.com/permalink/210519/181bf36f9e030c53b89b834bec4c0ffb.png" alt="Logo Faetec" />
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
