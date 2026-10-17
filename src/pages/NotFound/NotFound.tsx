import styles from './NotFound.module.css';

const NotFound = () => {
  return (
    <section className={styles.wrapper}>
      <title>Page not found - Quizly</title>
      <div className={styles.notFound}>
        ERROR 404 NOT FOUND
      </div>
    </section>
  );
};

export default NotFound;
