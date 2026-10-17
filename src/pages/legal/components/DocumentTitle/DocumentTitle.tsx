import styles from './DocumentTitle.module.css';

type DocumentTitleProps = {
  title: string;
};

const DocumentTitle = ({ title }: DocumentTitleProps) => {
  return (
    <h1 className={styles.title}>{title}</h1>
  );
};

export default DocumentTitle;
