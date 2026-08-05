import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Topics from '@/components/Topics';
import CallForPapers from '@/components/CallForPapers';
import Speakers from '@/components/Speakers';
import Schedule from '@/components/Schedule';
import Organizers from '@/components/Organizers';
import Reviewers from '@/components/Reviewers';

import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Topics />
        <CallForPapers />
        <Speakers />
        <Schedule />
        <Organizers />
        <Reviewers />

      </main>
      <Footer />
    </>
  );
}
