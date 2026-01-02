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
} from 'lucide-react';

const ServicesSection = ({ lang, translations }) => {
  const [activeTab, setActiveTab] = useState('savings');
  const t = translations[lang].services;

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
      },
    ],
  };

  const currentServices = servicesData[activeTab];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Our <span className="text-green-600">Services</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive financial solutions designed to help you save, grow,
            and achieve your goals.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex bg-white rounded-xl p-1.5 shadow-md">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                    activeTab === tab.id
                      ? 'bg-green-600 text-white shadow-lg'
                      : 'text-gray-600 hover:text-green-600 hover:bg-gray-50'
                  }`}
                >
                  <Icon className="w-5 h-5" />
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
                key={index}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden group"
              >
                {/* Card Header */}
                <div className={`${service.color} p-6 relative overflow-hidden`}>
                  <div className="absolute -right-4 -top-4 w-24 h-24 bg-white/10 rounded-full" />
                  <div className="absolute -right-8 -bottom-8 w-32 h-32 bg-white/10 rounded-full" />
                  <div className="relative z-10 flex items-center justify-between">
                    <div className="bg-white/20 backdrop-blur-sm rounded-xl p-3">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-right">
                      <div className="text-white/80 text-sm">Rate</div>
                      <div className="text-white text-2xl font-bold">
                        {service.rate}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features List */}
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center space-x-2">
                        <div
                          className={`w-1.5 h-1.5 rounded-full ${service.color}`}
                        />
                        <span className="text-sm text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <button
                    className={`w-full py-3 rounded-xl font-medium transition-all duration-300 ${service.lightColor} ${service.textColor} hover:opacity-80`}
                  >
                    Learn More
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">
            Ready to get started? Join thousands of satisfied members today.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center space-x-2 bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-xl font-medium transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            <span>Become a Member</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
