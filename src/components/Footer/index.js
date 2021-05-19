import React from 'react';
import { FooterBase } from './styles';

function Footer() {
  return (
    <FooterBase>
      <a href="http://www.faetec.rj.gov.br/">
        <img src="src/assets/Faetec_universal.png" alt="Logo Faetec" />
      </a>
      <p>
        Orgulhosamente criado durante o
        {' '}
        <a href="http://www.faetec.rj.gov.br/">
          Tećnico em informática
        </a>
      </p>
    </FooterBase>
  );
}

export default Footer;
