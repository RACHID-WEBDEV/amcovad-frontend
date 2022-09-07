import { Navbar, Hero } from '@/components/index';

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
    </>
  );
}

const styles = {
  header: 'text-3xl font-bold underline text-red-500 mt-10'
};
