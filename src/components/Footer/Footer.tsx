import styles from './Footer.module.css';

import { NavLink } from 'react-router-dom';

import Logo from '../Logo';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Logo />

      <nav aria-label="Footer">
        <ul className={styles.links}>
          <li>
            <NavLink to="/privacy" className="link_underline">
              Privacy Policy
            </NavLink>
          </li>

          <li>
            <NavLink to="/legal" className="link_underline">
              Legal
            </NavLink>
          </li>

          <li>
            <NavLink to="/terms" className="link_underline">
              Terms of Service
            </NavLink>
          </li>
        </ul>
      </nav>

      <a href="https://github.com/painfulrecollection/Quizly" className="link_underline">
        Source code
      </a>
    </footer>
  );
};

export default Footer;
