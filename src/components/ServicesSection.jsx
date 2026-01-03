import { useState } from 'react';
import {
  PiggyBank,
  Home,
  Briefcase,
  Car,
  Shield,
  Heart,
  Baby,
  Wallet,
  Globe,
  Percent,
  ArrowRight,
} from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const ServicesSection = ({ lang, translations }) => {
  const [activeTab, setActiveTab] = useState('savings');
  const t = translations[lang].services;

  const [headerRef, headerVisible] = useScrollAnimation(0.2);
  const [tabsRef, tabsVisible] = useScrollAnimation(0.2);
  const [ctaRef, ctaVisible] = useScrollAnimation(0.2);

  const tabs = [
    { id: 'savings', label: t.savings, icon: PiggyBank },
    { id: 'loans', label: t.loans, icon: Wallet },
    { id: 'benefits', label: t.benefits, icon: Heart },
  ];

  // Styling configurations for each service type
  const savingsStyles = [
    { color: 'bg-pink-500', lightColor: 'bg-pink-50', textColor: 'text-pink-600', hoverGlow: 'hover:shadow-pink-200', icon: Baby, rate: '10%' },
    { color: 'bg-green-500', lightColor: 'bg-green-50', textColor: 'text-green-600', hoverGlow: 'hover:shadow-green-200', icon: PiggyBank, rate: '7.5%' },
    { color: 'bg-blue-500', lightColor: 'bg-blue-50', textColor: 'text-blue-600', hoverGlow: 'hover:shadow-blue-200', icon: Globe, rate: '8%' },
  ];

  const loansStyles = [
    { color: 'bg-orange-500', lightColor: 'bg-orange-50', textColor: 'text-orange-600', hoverGlow: 'hover:shadow-orange-200', icon: Home, rate: '12%' },
    { color: 'bg-purple-500', lightColor: 'bg-purple-50', textColor: 'text-purple-600', hoverGlow: 'hover:shadow-purple-200', icon: Briefcase, rate: '14%' },
    { color: 'bg-cyan-500', lightColor: 'bg-cyan-50', textColor: 'text-cyan-600', hoverGlow: 'hover:shadow-cyan-200', icon: Car, rate: '13%' },
  ];

  const benefitsStyles = [
    { color: 'bg-emerald-500', lightColor: 'bg-emerald-50', textColor: 'text-emerald-600', hoverGlow: 'hover:shadow-emerald-200', icon: Shield, rate: lang === 'en' ? 'Free' : lang === 'am' ? 'ነጻ' : 'ነጻ' },
    { color: 'bg-amber-500', lightColor: 'bg-amber-50', textColor: 'text-amber-600', hoverGlow: 'hover:shadow-amber-200', icon: Percent, rate: '0%' },
  ];

  // Combine translated data with styling
  const servicesData = {
    savings: t.savingsData.map((item, index) => ({
      ...item,
      ...savingsStyles[index],
    })),
    loans: t.loansData.map((item, index) => ({
      ...item,
      ...loansStyles[index],
    })),
    benefits: t.benefitsData.map((item, index) => ({
      ...item,
      ...benefitsStyles[index],
    })),
  };

  const currentServices = servicesData[activeTab];

  return (
    <section id="services" className="py-20 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div
          ref={headerRef}
          className={`text-center mb-12 transition-all duration-700 ${
            headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            {t.title.split(' ').map((word, i) => (
              <span key={i} className={i === t.title.split(' ').length - 1 ? 'text-green-600' : ''}>
                {word}{' '}
              </span>
            ))}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t.subtitle}
          </p>
        </div>

        {/* Tabs */}
        <div
          ref={tabsRef}
          className={`flex justify-center mb-12 transition-all duration-700 delay-200 ${
            tabsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="inline-flex bg-white rounded-xl p-1.5 shadow-md flex-wrap justify-center">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center space-x-2 px-4 sm:px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                    activeTab === tab.id
                      ? 'bg-green-600 text-white shadow-lg shadow-green-200'
                      : 'text-gray-600 hover:text-green-600 hover:bg-gray-50'
                  }`}
                >
                  <Icon className={`w-5 h-5 ${activeTab === tab.id ? 'animate-bounce-slow' : ''}`} />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Service Cards */}
        <div
          className={`grid gap-8 ${
            currentServices.length === 2
              ? 'md:grid-cols-2 max-w-4xl mx-auto'
              : 'md:grid-cols-2 lg:grid-cols-3'
          }`}
        >
          {currentServices.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={`${activeTab}-${index}`}
                className={`bg-white rounded-2xl shadow-lg hover:shadow-2xl ${service.hoverGlow} transition-all duration-500 hover:-translate-y-2 overflow-hidden group animate-fade-in`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                {/* Card Header */}
                <div className={`${service.color} p-6 relative overflow-hidden`}>
                  <div className="absolute -right-4 -top-4 w-24 h-24 bg-white/10 rounded-full transition-transform duration-500 group-hover:scale-150" />
                  <div className="absolute -right-8 -bottom-8 w-32 h-32 bg-white/10 rounded-full transition-transform duration-500 group-hover:scale-150" />
                  <div className="relative z-10 flex items-center justify-between">
                    <div className="bg-white/20 backdrop-blur-sm rounded-xl p-3 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-green-600 transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features List */}
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li
                        key={idx}
                        className="flex items-center space-x-2 group/item"
                      >
                        <div
                          className={`w-1.5 h-1.5 rounded-full ${service.color} group-hover/item:scale-150 transition-transform duration-200`}
                        />
                        <span className="text-sm text-gray-600 group-hover/item:text-gray-900 transition-colors duration-200">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <button
                    className={`w-full py-3 rounded-xl font-medium transition-all duration-300 ${service.lightColor} ${service.textColor} hover:opacity-90 group/btn flex items-center justify-center space-x-2`}
                  >
                    <span>{t.learnMore}</span>
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-200" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div
          ref={ctaRef}
          className={`text-center mt-12 transition-all duration-700 ${
            ctaVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <p className="text-gray-600 mb-4">
            {t.ctaText}
          </p>
          <a
            href="#contact"
            className="inline-flex items-center space-x-2 bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-xl font-medium transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-green-200 hover-glow group"
          >
            <span>{t.ctaButton}</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
