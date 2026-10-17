import styles from '../Layout.module.css'

import { Outlet } from 'react-router-dom';

import Header from '@/components/Header';

const AuthLayout = () => {
  return (
    <div className={styles.layout}>
      <Header />
      <main className={styles.main}>
        <Outlet />
      </main>
    </div>
  );
};

export default AuthLayout;
