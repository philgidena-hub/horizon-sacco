import { useState } from 'react';
import {
  MapPin,
  Phone,
  Mail,
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
  Copy,
  Check,
  CreditCard,
  Building2,
  ExternalLink,
} from 'lucide-react';

const Footer = ({ lang, translations }) => {
  const [copied, setCopied] = useState(false);
  const t = translations[lang].nav;

  const accountNumber = '013201695108100';

  const handleCopy = () => {
    navigator.clipboard.writeText(accountNumber);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const quickLinks = [
    { label: t.home, href: '#home' },
    { label: t.services, href: '#services' },
    { label: t.calculator, href: '#calculator' },
    { label: t.contact, href: '#contact' },
  ];

  const services = [
    { label: 'Regular Savings', href: '#services' },
    { label: "Children's Savings", href: '#services' },
    { label: 'Housing Loans', href: '#services' },
    { label: 'Business Loans', href: '#services' },
  ];

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
  ];

  return (
    <footer id="contact" className="bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Column 1: About */}
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <img
                src="/horizon_logo.png"
                alt="Horizon SACCO"
                className="h-10 w-auto"
              />
              <span className="text-xl font-bold">
                Horizon <span className="text-green-500">SACCO</span>
              </span>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Empowering Ethiopians with accessible savings and loan services.
              Join us to build a secure financial future.
            </p>
            {/* Social Links */}
            <div className="flex space-x-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="w-10 h-10 bg-gray-800 hover:bg-green-600 rounded-lg flex items-center justify-center transition-colors duration-300"
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-green-500 transition-colors duration-200 flex items-center space-x-2"
                  >
                    <span className="w-1.5 h-1.5 bg-green-500 rounded-full" />
                    <span>{link.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Our Services</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.label}>
                  <a
                    href={service.href}
                    className="text-gray-400 hover:text-green-500 transition-colors duration-200 flex items-center space-x-2"
                  >
                    <span className="w-1.5 h-1.5 bg-green-500 rounded-full" />
                    <span>{service.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="https://maps.google.com/?q=Mekelle,Ethiopia"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start space-x-3 text-gray-400 hover:text-green-500 transition-colors duration-200"
                >
                  <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" />
                  <span>Mekelle, Tigray Region, Ethiopia</span>
                </a>
              </li>
              <li>
                <a
                  href="tel:+251909800203"
                  className="flex items-center space-x-3 text-gray-400 hover:text-green-500 transition-colors duration-200"
                >
                  <Phone className="w-5 h-5 flex-shrink-0" />
                  <span>+251 909 800 203</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@horizonsacco.com"
                  className="flex items-center space-x-3 text-gray-400 hover:text-green-500 transition-colors duration-200"
                >
                  <Mail className="w-5 h-5 flex-shrink-0" />
                  <span>info@horizonsacco.com</span>
                </a>
              </li>
            </ul>

            {/* Bank Card */}
            <div className="mt-6 bg-gradient-to-br from-gray-800 to-gray-850 rounded-xl p-4 border border-gray-700">
              <div className="flex items-center space-x-2 mb-3">
                <Building2 className="w-5 h-5 text-green-500" />
                <span className="font-medium text-sm">Bank of Abyssinia</span>
              </div>
              <div className="flex items-center justify-between bg-gray-900/50 rounded-lg px-3 py-2">
                <div className="flex items-center space-x-2">
                  <CreditCard className="w-4 h-4 text-gray-500" />
                  <span className="font-mono text-sm text-gray-300">
                    {accountNumber}
                  </span>
                </div>
                <button
                  onClick={handleCopy}
                  className="p-1.5 hover:bg-gray-700 rounded-md transition-colors duration-200"
                  title="Copy account number"
                >
                  {copied ? (
                    <Check className="w-4 h-4 text-green-500" />
                  ) : (
                    <Copy className="w-4 h-4 text-gray-400 hover:text-white" />
                  )}
                </button>
              </div>
              {copied && (
                <div className="text-xs text-green-500 mt-2 text-center">
                  Copied to clipboard!
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="text-gray-500 text-sm">
              © {new Date().getFullYear()} Horizon SACCO. All rights reserved.
            </div>
            <div className="flex items-center space-x-6 text-sm">
              <a
                href="#"
                className="text-gray-500 hover:text-green-500 transition-colors duration-200"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-green-500 transition-colors duration-200"
              >
                Terms of Service
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-green-500 transition-colors duration-200"
              >
                FAQ
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
