import Header from '@/components/Header';
import AcceptedPapers from '@/components/AcceptedPapers';
import Footer from '@/components/Footer';

export default function AcceptedPapersPage() {
  return (
    <>
      <Header />
      <main className="pt-16">
        <AcceptedPapers />
      </main>
      <Footer />
    </>
  );
}
