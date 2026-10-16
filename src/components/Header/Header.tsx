import styles from './Header.module.css'
import { Link, NavLink } from 'react-router-dom';

import Logo from '../Logo';

const Header = () => {


  return (
    <header className={styles.header}>
      <Logo />

      <nav aria-label="Main">
        <ul className={styles.links}>
          <li>
            <NavLink to="/quizzes" className="link_underline">Quizzes</NavLink>
          </li>

          <li>
            <NavLink to="/rooms" className="link_underline">Rooms</NavLink>
          </li>

          <li>
            <NavLink to="/leaderboard" className="link_underline">Leaderboard</NavLink>
          </li>

          <li>
            <NavLink to="/create-quiz" className="link_underline">Create quiz</NavLink>
          </li>
        </ul>
      </nav>

      <Link to="/login" className="link_underline">Log In</Link>



    </header>
  );
};

export default Header;