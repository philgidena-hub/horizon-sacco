import { Eye, Target, Heart, Shield, Users } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const AboutSection = ({ lang, translations }) => {
  const t = translations[lang].about;
  const [headerRef, headerVisible] = useScrollAnimation(0.2);
  const [cardsRef, cardsVisible] = useScrollAnimation(0.1);
  const [valuesRef, valuesVisible] = useScrollAnimation(0.2);

  const valueIcons = [Shield, Users, Heart];

  return (
    <section id="about" className="py-20 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div
          ref={headerRef}
          className={`text-center mb-16 transition-all duration-700 ${
            headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="inline-flex items-center space-x-2 bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Users className="w-4 h-4" />
            <span>{t.title}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            {t.title}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t.subtitle}
          </p>
        </div>

        {/* Vision & Mission Cards */}
        <div
          ref={cardsRef}
          className={`grid md:grid-cols-2 gap-8 mb-16 transition-all duration-700 ${
            cardsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {/* Vision Card */}
          <div className="group relative bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden">
            {/* Green Gradient Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-green-500 to-green-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            {/* Content */}
            <div className="relative p-8">
              {/* Icon */}
              <div className="w-16 h-16 bg-green-100 group-hover:bg-white/20 rounded-2xl flex items-center justify-center mb-6 transition-colors duration-300">
                <Eye className="w-8 h-8 text-green-600 group-hover:text-white transition-colors duration-300" />
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold text-gray-900 group-hover:text-white mb-4 transition-colors duration-300">
                {t.visionTitle}
              </h3>

              {/* Description */}
              <p className="text-gray-600 group-hover:text-white/90 leading-relaxed transition-colors duration-300">
                {t.vision}
              </p>

              {/* Decorative Element */}
              <div className="absolute top-4 right-4 w-20 h-20 bg-green-50 group-hover:bg-white/10 rounded-full blur-2xl transition-colors duration-300" />
            </div>

            {/* Bottom Accent Bar */}
            <div className="h-1 bg-gradient-to-r from-green-400 to-green-600 group-hover:from-white/50 group-hover:to-white transition-colors duration-300" />
          </div>

          {/* Mission Card */}
          <div className="group relative bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden">
            {/* Orange Gradient Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-orange-500 to-orange-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            {/* Content */}
            <div className="relative p-8">
              {/* Icon */}
              <div className="w-16 h-16 bg-orange-100 group-hover:bg-white/20 rounded-2xl flex items-center justify-center mb-6 transition-colors duration-300">
                <Target className="w-8 h-8 text-orange-600 group-hover:text-white transition-colors duration-300" />
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold text-gray-900 group-hover:text-white mb-4 transition-colors duration-300">
                {t.missionTitle}
              </h3>

              {/* Description */}
              <p className="text-gray-600 group-hover:text-white/90 leading-relaxed transition-colors duration-300">
                {t.mission}
              </p>

              {/* Decorative Element */}
              <div className="absolute top-4 right-4 w-20 h-20 bg-orange-50 group-hover:bg-white/10 rounded-full blur-2xl transition-colors duration-300" />
            </div>

            {/* Bottom Accent Bar */}
            <div className="h-1 bg-gradient-to-r from-orange-400 to-orange-600 group-hover:from-white/50 group-hover:to-white transition-colors duration-300" />
          </div>
        </div>

        {/* Values Section */}
        <div
          ref={valuesRef}
          className={`transition-all duration-700 ${
            valuesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h3 className="text-xl font-bold text-gray-900 text-center mb-8">
            {t.valuesTitle}
          </h3>

          <div className="flex flex-wrap justify-center gap-4">
            {t.values.map((value, index) => {
              const Icon = valueIcons[index];
              return (
                <div
                  key={index}
                  className="flex items-center space-x-3 bg-white px-6 py-4 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100"
                >
                  <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center">
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <span className="font-semibold text-gray-800">{value}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
