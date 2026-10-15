import styles from './Header.module.css'
import { Link, NavLink } from 'react-router-dom';

import Logo from '@/components/Logo';

const Header = () => {


  return (
    <header className={styles.header}>
      <Logo />

      <nav>
        <ul className={styles.links}>
          <li>
            <NavLink to="/quizzes" className={styles.link}>Quizzes</NavLink>
          </li>

          <li>
            <NavLink to="/rooms" className={styles.link}>Rooms</NavLink>
          </li>

          <li>
            <NavLink to="/leaderboard" className={styles.link}>Leaderboard</NavLink>
          </li>

          <li>
            <NavLink to="/create-quiz" className={styles.link}>Create quiz</NavLink>
          </li>
        </ul>
      </nav>

      <Link to="/login" className={styles.link}>Log In</Link>



    </header>
  );
};

export default Header;