import styles from './Loading.module.css'

const Loading = () => {
  return (
    <section className={styles.wrapper} role="status">
      <div className={styles.loading}>
        Loading
      </div>
    </section>
  );
};

export default Loading;