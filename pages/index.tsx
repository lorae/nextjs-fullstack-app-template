import CatCard from '../components/cards/cat/CatCard';
import { mockCatCardProps } from '../components/cards/cat/CatCard.mocks';
import PrimaryLayout from '../components/layouts/primary/PrimaryLayout';
import { NextPageWithLayout } from '../types/nextPage';

const Home: NextPageWithLayout = () => {
  return (
    <section className="bg-gradient-to-r from-cyan-500 to-blue-500">
      <h1>
        Welcome to <a href="https://nextjs.org">Next.js!</a>
      </h1>
      <CatCard {...mockCatCardProps.base} />
    </section>
  );
};

export default Home;

Home.getLayout = (page) => {
  return <PrimaryLayout> {page}</PrimaryLayout>;
};
