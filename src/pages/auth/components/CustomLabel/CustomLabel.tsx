import styles from './CustomLabel.module.css';

import { type ReactNode } from 'react';

interface CustomLabelProps {
  children: ReactNode;
  title: string;
  htmlFor: string;
}

const CustomLabel = ({ children, title, htmlFor }: CustomLabelProps) => {
  return (
    <label className={styles.label} htmlFor={htmlFor}>
      <span className={styles.title}>{title}</span>
      {children}
    </label>
  );
};

export default CustomLabel;
