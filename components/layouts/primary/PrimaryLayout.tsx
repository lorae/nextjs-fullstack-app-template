import Head from 'next/head';
import { ReactNode } from 'react'; // ✅ Add this import
import styles from './PrimaryLayout.module.css';

export interface IPrimaryLayout {
  children?: ReactNode; // ✅ Add children here
}

const PrimaryLayout: React.FC<IPrimaryLayout> = ({ children }) => {
  return (
    <>
      <Head>
        <title>Primary Layout Example</title>
      </Head>
      <main className={styles.main}>{children}</main>
    </>
  );
};

export default PrimaryLayout;
