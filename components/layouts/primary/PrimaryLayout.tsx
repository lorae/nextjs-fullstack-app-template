import Head from 'next/head';
import { ReactNode } from 'react';

export interface IPrimaryLayout {
  children?: ReactNode;
}

const PrimaryLayout: React.FC<IPrimaryLayout> = ({ children }) => {
  return (
    <>
      <Head>
        <title>Primary Layout Example</title>
      </Head>
      <main className="flex h-[calc(100vh-64px)] bg-red-500">{children}</main>
    </>
  );
};

export default PrimaryLayout;
