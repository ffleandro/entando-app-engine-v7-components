import React from 'react';

import entandoLogo from '../../assets/entando-dark-logo.svg';
import styles from './Footer.module.css';

export const Footer = () => (
  <footer className={styles.wrapper}>
    {'Powered by '}
    <a href="https://entando.com/" target="_blank" rel="noopener noreferrer">
      <img src={entandoLogo} alt="Entando" width="80" />
    </a>
  </footer>
);

export default Footer;
