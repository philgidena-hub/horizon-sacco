import { useState, useEffect } from 'react';
import { translations } from './data';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ServicesSection from './components/ServicesSection';
import FinancialCalculator from './components/FinancialCalculator';
import FounderSection from './components/FounderSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import JoinModal from './components/JoinModal';

function App() {
  const [lang, setLang] = useState('en');
  const [isJoinModalOpen, setIsJoinModalOpen] = useState(false);

  // Load Noto Sans Ethiopic font for Amharic and Tigrinya
  useEffect(() => {
    if (lang === 'am' || lang === 'ti') {
      // Check if font link already exists
      const existingLink = document.querySelector('link[href*="Noto+Sans+Ethiopic"]');
      if (!existingLink) {
        const link = document.createElement('link');
        link.href = 'https://fonts.googleapis.com/css2?family=Noto+Sans+Ethiopic:wght@400;500;600;700&display=swap';
        link.rel = 'stylesheet';
        document.head.appendChild(link);
      }
      document.body.style.fontFamily = "'Noto Sans Ethiopic', sans-serif";
    } else {
      document.body.style.fontFamily = "'Inter', sans-serif";
    }
  }, [lang]);

  // Enable smooth scrolling
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  const openJoinModal = () => setIsJoinModalOpen(true);
  const closeJoinModal = () => setIsJoinModalOpen(false);

  return (
    <div className="min-h-screen bg-white">
      <Navbar
        lang={lang}
        setLang={setLang}
        translations={translations}
        onJoinClick={openJoinModal}
      />
      <main>
        <Hero lang={lang} translations={translations} />
        <ServicesSection lang={lang} translations={translations} />
        <FinancialCalculator lang={lang} translations={translations} />
        <FounderSection lang={lang} translations={translations} />
        <ContactSection lang={lang} translations={translations} />
      </main>
      <Footer lang={lang} translations={translations} />

      {/* Join Modal */}
      <JoinModal
        isOpen={isJoinModalOpen}
        onClose={closeJoinModal}
        lang={lang}
      />
    </div>
  );
}

export default App;
