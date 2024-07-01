import Navbar from '../components/Navbar';
import MainSection from '@/components/MainSection';
import UseCasesSection from '@/components/UseCaseSection';
import GetStartedSection from '@/components/GetStartedSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div>
      <Navbar />
      <MainSection />
      <UseCasesSection />
      <GetStartedSection />
      <Footer />
    </div>
  );
}
