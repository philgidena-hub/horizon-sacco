import { Eye, Target, Cpu, Shield, TrendingUp, Handshake, Home, Car, HeartPulse, ArrowRight } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const AboutSection = ({ lang, translations }) => {
  const t = translations[lang].about;
  const [headerRef, headerVisible] = useScrollAnimation(0.2);
  const [storyRef, storyVisible] = useScrollAnimation(0.15);
  const [bentoRef, bentoVisible] = useScrollAnimation(0.1);

  const valueIcons = [Cpu, Shield, TrendingUp, Handshake];
  const missionIcons = [Home, Car, HeartPulse];

  return (
    <section id="about" className="py-24 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div
          ref={headerRef}
          className={`text-center mb-16 transition-all duration-700 ${
            headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-green-100 to-emerald-100 text-green-700 px-5 py-2.5 rounded-full text-sm font-semibold mb-6 shadow-sm">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            <span>{t.title}</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-5 leading-tight">
            {t.subtitle}
          </h2>
        </div>

        {/* Section 1: Story - Text Left, Image Right */}
        <div
          ref={storyRef}
          className={`grid lg:grid-cols-2 gap-12 items-center mb-20 transition-all duration-700 delay-100 ${
            storyVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {/* Text Content */}
          <div className="space-y-6">
            <div className="inline-flex items-center space-x-2 text-sm font-medium text-gray-500">
              <span className="w-8 h-[2px] bg-gradient-to-r from-green-500 to-orange-500" />
              <span>OUR STORY</span>
            </div>
            <p className="text-lg text-gray-600 leading-relaxed">
              {t.intro}
            </p>

            {/* Vision Card */}
            <div className="group relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] border border-gray-100 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-emerald-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative flex items-start space-x-4">
                <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg shadow-green-500/25">
                  <Eye className="w-7 h-7 text-white" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-2">
                    <h3 className="text-xl font-bold text-gray-900">{t.visionTitle}</h3>
                    <span className="px-2 py-0.5 bg-green-100 text-green-700 text-xs font-semibold rounded-full">
                      {t.visionSubtitle}
                    </span>
                  </div>
                  <p className="text-gray-600 leading-relaxed">{t.vision}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Image with Floating Badge */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Modern fintech and digital banking"
                className="w-full h-[450px] object-cover"
              />
              {/* Ethiopian Flag Colors Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 h-2 flex">
                <div className="flex-1 bg-green-500/80" />
                <div className="flex-1 bg-yellow-400/80" />
                <div className="flex-1 bg-red-500/80" />
              </div>
            </div>

            {/* Floating Badge */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-5 shadow-xl border border-gray-100">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center shadow-lg shadow-orange-500/25">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-gray-900">{t.badge}</p>
                  <p className="text-sm text-gray-500">Vision 2031</p>
                </div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-green-400 to-green-500 rounded-full blur-2xl opacity-30" />
            <div className="absolute top-1/2 -right-8 w-16 h-16 bg-gradient-to-br from-orange-400 to-orange-500 rounded-full blur-xl opacity-40" />
          </div>
        </div>

        {/* Section 2: Bento Grid */}
        <div
          ref={bentoRef}
          className={`transition-all duration-700 delay-200 ${
            bentoVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Mission Card - Spans 2 columns */}
            <div className="md:col-span-2 group relative bg-gradient-to-br from-orange-500 to-orange-600 rounded-3xl p-8 shadow-xl overflow-hidden hover:scale-[1.02] transition-all duration-300">
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
                <div className="absolute bottom-0 left-0 w-48 h-48 bg-white rounded-full blur-2xl -translate-x-1/4 translate-y-1/4" />
              </div>

              <div className="relative">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                    <Target className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">{t.missionTitle}</h3>
                    <span className="text-orange-100 text-sm">{t.missionSubtitle}</span>
                  </div>
                </div>

                <p className="text-white/90 text-lg leading-relaxed mb-6 max-w-2xl">
                  {t.mission}
                </p>

                {/* Mission Highlights */}
                <div className="flex flex-wrap gap-3">
                  {t.missionHighlights.map((highlight, index) => {
                    const Icon = missionIcons[index];
                    return (
                      <div
                        key={index}
                        className="flex items-center space-x-2 bg-white/15 backdrop-blur-sm px-4 py-2 rounded-full"
                      >
                        <Icon className="w-4 h-4 text-white" />
                        <span className="text-white text-sm font-medium">{highlight}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Values Header Card */}
            <div className="group relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-6 shadow-xl overflow-hidden hover:scale-[1.02] transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              {/* Ethiopian Pattern Decoration */}
              <div className="absolute top-0 right-0 w-32 h-32 opacity-10">
                <div className="w-full h-full bg-[radial-gradient(circle,_white_1px,_transparent_1px)] bg-[length:8px_8px]" />
              </div>
              <div className="relative h-full flex flex-col justify-between min-h-[140px]">
                <div>
                  <div className="flex items-center space-x-2 mb-2">
                    <span className="w-8 h-1 bg-gradient-to-r from-green-500 via-yellow-400 to-red-500 rounded-full" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">{t.valuesTitle}</h3>
                </div>
                <div className="flex items-center text-green-400 group-hover:translate-x-2 transition-transform duration-300">
                  <span className="text-sm font-medium">What drives us</span>
                  <ArrowRight className="w-4 h-4 ml-2" />
                </div>
              </div>
            </div>

            {/* Value Cards */}
            {t.values.map((value, index) => {
              const Icon = valueIcons[index];
              const isEven = index % 2 === 0;
              return (
                <div
                  key={index}
                  className={`group relative rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] overflow-hidden ${
                    isEven
                      ? 'bg-white border border-gray-100'
                      : 'bg-gradient-to-br from-gray-50 to-white border border-gray-100'
                  }`}
                >
                  <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
                    isEven
                      ? 'bg-gradient-to-br from-green-500/5 to-green-500/10'
                      : 'bg-gradient-to-br from-orange-500/5 to-orange-500/10'
                  }`} />

                  <div className="relative">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 shadow-lg ${
                      isEven
                        ? 'bg-gradient-to-br from-green-500 to-green-600 shadow-green-500/25'
                        : 'bg-gradient-to-br from-orange-500 to-orange-600 shadow-orange-500/25'
                    }`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="text-lg font-bold text-gray-900 mb-2">{value.title}</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
                  </div>
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
