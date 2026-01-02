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

  const servicesData = {
    savings: [
      {
        icon: Baby,
        title: "Children's Saving",
        rate: '10%',
        description:
          'Secure your children\'s future with our highest-yield savings account. Start early and watch their savings grow.',
        features: ['Highest interest rate', 'No minimum balance', 'Flexible withdrawals'],
        color: 'bg-pink-500',
        lightColor: 'bg-pink-50',
        textColor: 'text-pink-600',
        hoverGlow: 'hover:shadow-pink-200',
      },
      {
        icon: PiggyBank,
        title: 'Regular Saving',
        rate: '7.5%',
        description:
          'Our standard savings account with competitive interest rates and full flexibility for your everyday needs.',
        features: ['Competitive rates', 'Easy access', 'Monthly dividends'],
        color: 'bg-green-500',
        lightColor: 'bg-green-50',
        textColor: 'text-green-600',
        hoverGlow: 'hover:shadow-green-200',
      },
      {
        icon: Globe,
        title: 'Diaspora Saving',
        rate: '8%',
        description:
          'Special savings program for Ethiopians abroad. Save in foreign currency with premium benefits.',
        features: ['Foreign currency', 'Premium rates', 'Remittance support'],
        color: 'bg-blue-500',
        lightColor: 'bg-blue-50',
        textColor: 'text-blue-600',
        hoverGlow: 'hover:shadow-blue-200',
      },
    ],
    loans: [
      {
        icon: Home,
        title: 'Housing Loan',
        rate: '12%',
        description:
          'Make your dream home a reality with our affordable housing loans. Flexible terms up to 15 years.',
        features: ['Up to 2M Birr', '15-year terms', 'Low down payment'],
        color: 'bg-orange-500',
        lightColor: 'bg-orange-50',
        textColor: 'text-orange-600',
        hoverGlow: 'hover:shadow-orange-200',
      },
      {
        icon: Briefcase,
        title: 'Business Loan',
        rate: '14%',
        description:
          'Grow your business with our tailored financing solutions. Quick approval and competitive rates.',
        features: ['Quick approval', 'Flexible collateral', 'Business support'],
        color: 'bg-purple-500',
        lightColor: 'bg-purple-50',
        textColor: 'text-purple-600',
        hoverGlow: 'hover:shadow-purple-200',
      },
      {
        icon: Car,
        title: 'Vehicle Loan',
        rate: '13%',
        description:
          'Get behind the wheel of your dream car with our vehicle financing options.',
        features: ['New & used vehicles', '5-year terms', 'Fast processing'],
        color: 'bg-cyan-500',
        lightColor: 'bg-cyan-50',
        textColor: 'text-cyan-600',
        hoverGlow: 'hover:shadow-cyan-200',
      },
    ],
    benefits: [
      {
        icon: Shield,
        title: 'Loan Life Insurance',
        rate: 'Free',
        description:
          'Your loan is fully insured at no extra cost. Protect your family from debt burden in unforeseen circumstances.',
        features: ['100% loan coverage', 'No extra premium', 'Family protection'],
        color: 'bg-emerald-500',
        lightColor: 'bg-emerald-50',
        textColor: 'text-emerald-600',
        hoverGlow: 'hover:shadow-emerald-200',
      },
      {
        icon: Percent,
        title: 'Interest-Free Options',
        rate: '0%',
        description:
          'Sharia-compliant financing options available for members who prefer interest-free banking solutions.',
        features: ['Sharia compliant', 'Profit sharing', 'Ethical banking'],
        color: 'bg-amber-500',
        lightColor: 'bg-amber-50',
        textColor: 'text-amber-600',
        hoverGlow: 'hover:shadow-amber-200',
      },
    ],
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
            Our <span className="text-green-600">Services</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive financial solutions designed to help you save, grow,
            and achieve your goals.
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
                    <div className="text-right">
                      <div className="text-white/80 text-sm">Rate</div>
                      <div className="text-white text-2xl font-bold group-hover:scale-110 transition-transform duration-300 origin-right">
                        {service.rate}
                      </div>
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
                    <span>Learn More</span>
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
            Ready to get started? Join thousands of satisfied members today.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center space-x-2 bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-xl font-medium transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-green-200 hover-glow group"
          >
            <span>Become a Member</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
