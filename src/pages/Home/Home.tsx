import styles from './Home.module.css'

import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <section className={styles.wrapper}>
      <div className={styles.home}>
        <h1 className={styles.name}>Quizly<span className={styles.animation} aria-hidden="true">_</span></h1>
        <p className={styles.desc}>Create quizzes, challenge friends, and play together</p>

        <Link to="/" className={styles.button}>Join with code</Link>
      </div>
    </section>
  );
};

export default Home;