import { Link } from 'react-router-dom';
import styles from './Logo.module.css'

import logo from './logo.svg'

const Logo = () => {
  return (
    <Link to="/" className={styles.logoLink}>
      <img src={logo} alt="Quizly" className={styles.logo} />
    </Link>
  );
};

export default Logo;