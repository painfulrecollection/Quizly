import styles from './NotFound.module.css'

const NotFound = () => {
  return (
    <section className={styles.wrapper}>
      <div className={styles.notFound}>
        ERROR 404 NOT FOUND
      </div>
    </section>
  );
};

export default NotFound;