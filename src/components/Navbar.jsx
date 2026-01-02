import { useState } from 'react';
import { Menu, X, ChevronDown, Globe } from 'lucide-react';

const Navbar = ({ lang, setLang, translations, onJoinClick }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const t = translations[lang].nav;

  const navLinks = [
    { href: '#home', label: t.home },
    { href: '#services', label: t.services },
    { href: '#calculator', label: t.calculator },
    { href: '#contact', label: t.contact },
  ];

  const languages = [
    { code: 'en', label: 'English', short: 'EN' },
    { code: 'am', label: 'አማርኛ', short: 'AM' },
    { code: 'ti', label: 'ትግርኛ', short: 'TG' },
  ];

  const currentLang = languages.find((l) => l.code === lang);

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100 shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#home" className="flex items-center space-x-2">
            <img
              src="/horizon_logo.png"
              alt="Horizon SACCO"
              className="h-10 w-auto"
            />
            <span className="text-xl font-bold text-gray-900">
              Horizon <span className="text-green-600">SACCO</span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-gray-600 hover:text-green-600 font-medium transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Right Side: Language Switcher + CTA */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Language Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsLangOpen(!isLangOpen)}
                className="flex items-center space-x-2 px-3 py-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
              >
                <Globe className="w-4 h-4 text-gray-500" />
                <span className="text-sm font-medium text-gray-700">
                  {currentLang?.short} - {currentLang?.label}
                </span>
                <ChevronDown
                  className={`w-4 h-4 text-gray-500 transition-transform duration-200 ${
                    isLangOpen ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {isLangOpen && (
                <div className="absolute right-0 mt-2 w-40 bg-white rounded-lg shadow-lg border border-gray-100 py-1 z-50">
                  {languages.map((language) => (
                    <button
                      key={language.code}
                      onClick={() => {
                        setLang(language.code);
                        setIsLangOpen(false);
                      }}
                      className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-50 transition-colors duration-200 ${
                        lang === language.code
                          ? 'text-green-600 bg-green-50'
                          : 'text-gray-700'
                      }`}
                    >
                      {language.short} - {language.label}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Join Now Button */}
            <button
              onClick={onJoinClick}
              className="bg-green-600 hover:bg-green-700 text-white px-5 py-2.5 rounded-lg font-medium transition-colors duration-200 shadow-sm hover:shadow-md"
            >
              {t.joinNow}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-gray-600" />
            ) : (
              <Menu className="w-6 h-6 text-gray-600" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-100">
            <div className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-gray-600 hover:text-green-600 font-medium px-2 py-2 rounded-lg hover:bg-gray-50 transition-colors duration-200"
                >
                  {link.label}
                </a>
              ))}

              {/* Mobile Language Switcher */}
              <div className="flex items-center space-x-2 px-2 py-2">
                <Globe className="w-4 h-4 text-gray-500" />
                <div className="flex space-x-2">
                  {languages.map((language) => (
                    <button
                      key={language.code}
                      onClick={() => setLang(language.code)}
                      className={`px-3 py-1 text-sm rounded-md transition-colors duration-200 ${
                        lang === language.code
                          ? 'bg-green-600 text-white'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      {language.short}
                    </button>
                  ))}
                </div>
              </div>

              {/* Mobile CTA */}
              <button
                onClick={() => {
                  setIsMenuOpen(false);
                  onJoinClick();
                }}
                className="bg-green-600 hover:bg-green-700 text-white px-5 py-2.5 rounded-lg font-medium text-center transition-colors duration-200 mx-2"
              >
                {t.joinNow}
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
