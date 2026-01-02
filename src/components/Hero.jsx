import { useEffect, useState } from 'react';
import { ArrowRight, TrendingUp, DollarSign, PiggyBank, Coins, BarChart3, Sparkles } from 'lucide-react';
import { useCountUp } from '../hooks/useScrollAnimation';

const Hero = ({ lang, translations }) => {
  const t = translations[lang].hero;
  const [isLoaded, setIsLoaded] = useState(false);

  // Animated counters
  const [membersRef, membersCount] = useCountUp(10000, 2000);
  const [savingsRef, savingsCount] = useCountUp(50, 2000);
  const [returnRef, returnCount] = useCountUp(15, 1500);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-[90vh] flex items-center overflow-hidden"
    >
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-50 via-white to-orange-50">
        {/* Decorative Blurred Elements */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-green-200/30 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-orange-200/30 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-green-100/20 rounded-full blur-3xl" />
      </div>

      {/* Animated Financial Icons */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Floating Coins */}
        <div className="absolute top-[15%] left-[8%] animate-float-slow">
          <div className="w-12 h-12 bg-yellow-400/20 rounded-full flex items-center justify-center backdrop-blur-sm">
            <Coins className="w-6 h-6 text-yellow-600/60" />
          </div>
        </div>
        <div className="absolute top-[25%] right-[12%] animate-float-medium">
          <div className="w-10 h-10 bg-green-400/20 rounded-full flex items-center justify-center backdrop-blur-sm">
            <DollarSign className="w-5 h-5 text-green-600/60" />
          </div>
        </div>
        <div className="absolute bottom-[30%] left-[5%] animate-float-fast">
          <div className="w-14 h-14 bg-orange-400/20 rounded-full flex items-center justify-center backdrop-blur-sm">
            <PiggyBank className="w-7 h-7 text-orange-600/60" />
          </div>
        </div>
        <div className="absolute top-[60%] right-[8%] animate-float-slow">
          <div className="w-11 h-11 bg-emerald-400/20 rounded-full flex items-center justify-center backdrop-blur-sm">
            <BarChart3 className="w-5 h-5 text-emerald-600/60" />
          </div>
        </div>
        <div className="absolute bottom-[15%] right-[25%] animate-float-medium">
          <div className="w-9 h-9 bg-yellow-400/20 rounded-full flex items-center justify-center backdrop-blur-sm">
            <Coins className="w-4 h-4 text-yellow-600/60" />
          </div>
        </div>
        <div className="absolute top-[40%] left-[15%] animate-float-fast hidden md:flex">
          <div className="w-8 h-8 bg-green-400/20 rounded-full flex items-center justify-center backdrop-blur-sm">
            <TrendingUp className="w-4 h-4 text-green-600/60" />
          </div>
        </div>

        {/* Animated Chart Line SVG */}
        <svg
          className="absolute bottom-0 left-0 w-full h-48 opacity-[0.08]"
          viewBox="0 0 1200 200"
          preserveAspectRatio="none"
        >
          <path
            d="M0,150 Q100,120 200,130 T400,100 T600,80 T800,90 T1000,50 T1200,30"
            fill="none"
            stroke="url(#chartGradient)"
            strokeWidth="3"
            className="animate-draw-line"
          />
          <path
            d="M0,180 Q150,160 300,170 T600,140 T900,120 T1200,80"
            fill="none"
            stroke="url(#chartGradient2)"
            strokeWidth="2"
            className="animate-draw-line-delayed"
          />
          <defs>
            <linearGradient id="chartGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#22c55e" />
              <stop offset="100%" stopColor="#f97316" />
            </linearGradient>
            <linearGradient id="chartGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#16a34a" />
              <stop offset="100%" stopColor="#ea580c" />
            </linearGradient>
          </defs>
        </svg>

        {/* Floating Plus Signs (representing growth) */}
        <div className="absolute top-[20%] left-[25%] text-green-300/40 text-2xl font-bold animate-pulse">+</div>
        <div className="absolute top-[35%] right-[20%] text-green-300/30 text-xl font-bold animate-pulse delay-500">+</div>
        <div className="absolute bottom-[40%] left-[30%] text-orange-300/30 text-lg font-bold animate-pulse delay-1000">+</div>
      </div>

      {/* Grid Pattern Overlay */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            {/* Badge */}
            <div
              className={`inline-flex items-center space-x-2 bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium mb-6 transition-all duration-700 ${
                isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              <Sparkles className="w-4 h-4 animate-pulse" />
              <span>Trusted by 10,000+ members</span>
            </div>

            {/* Headline with animated words */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              {t.headline.split(' ').map((word, index) => (
                <span
                  key={index}
                  className={`inline-block transition-all duration-700 ${
                    isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  } ${index === t.headline.split(' ').length - 1 ? 'text-green-600' : ''}`}
                  style={{ transitionDelay: `${200 + index * 100}ms` }}
                >
                  {word}{' '}
                </span>
              ))}
            </h1>

            {/* Subheadline */}
            <p
              className={`text-lg sm:text-xl text-gray-600 mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed transition-all duration-700 delay-500 ${
                isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              {t.subhead}
            </p>

            {/* CTA Buttons */}
            <div
              className={`flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4 transition-all duration-700 delay-700 ${
                isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              <a
                href="#calculator"
                className="group w-full sm:w-auto bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-green-200 flex items-center justify-center space-x-2 hover-glow"
              >
                <span>{t.startSaving}</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
              </a>
              <a
                href="#services"
                className="w-full sm:w-auto border-2 border-green-600 text-green-600 hover:bg-green-50 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 flex items-center justify-center hover-scale"
              >
                {t.getLoan}
              </a>
            </div>

            {/* Stats with animated counters */}
            <div
              className={`grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-gray-200 transition-all duration-700 delay-1000 ${
                isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              <div ref={membersRef} className="text-center lg:text-left group">
                <div className="text-2xl sm:text-3xl font-bold text-gray-900 group-hover:text-green-600 transition-colors">
                  {membersCount.toLocaleString()}+
                </div>
                <div className="text-sm text-gray-500">Members</div>
              </div>
              <div ref={savingsRef} className="text-center lg:text-left group">
                <div className="text-2xl sm:text-3xl font-bold text-gray-900 group-hover:text-green-600 transition-colors">
                  {savingsCount}M+
                </div>
                <div className="text-sm text-gray-500">Birr Saved</div>
              </div>
              <div ref={returnRef} className="text-center lg:text-left group">
                <div className="text-2xl sm:text-3xl font-bold text-gray-900 group-hover:text-green-600 transition-colors">
                  {returnCount}%
                </div>
                <div className="text-sm text-gray-500">Annual Return</div>
              </div>
            </div>
          </div>

          {/* Right Visual */}
          <div
            className={`hidden lg:flex items-center justify-center relative transition-all duration-1000 delay-500 ${
              isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
            }`}
          >
            {/* Main Card */}
            <div className="relative w-full max-w-md">
              {/* Floating Cards */}
              <div className="absolute -top-8 -left-8 bg-white rounded-2xl shadow-xl p-4 animate-bounce-slow hover-lift">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <TrendingUp className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-500">Monthly Growth</div>
                    <div className="text-lg font-bold text-green-600">
                      +12.5%
                    </div>
                  </div>
                </div>
              </div>

              {/* Main Illustration Card */}
              <div className="bg-gradient-to-br from-green-600 to-green-700 rounded-3xl p-8 shadow-2xl shadow-green-200 hover-lift">
                <div className="bg-white/10 backdrop-blur rounded-2xl p-6">
                  <div className="text-white/80 text-sm mb-2">
                    Total Savings
                  </div>
                  <div className="text-white text-4xl font-bold mb-4">
                    150,000 ETB
                  </div>
                  <div className="h-2 bg-white/20 rounded-full overflow-hidden">
                    <div className="h-full w-3/4 bg-white rounded-full animate-shimmer" />
                  </div>
                  <div className="text-white/60 text-sm mt-2">
                    75% of goal reached
                  </div>
                </div>
                <div className="mt-6 grid grid-cols-2 gap-4">
                  <div className="bg-white/10 backdrop-blur rounded-xl p-4 hover:bg-white/20 transition-colors">
                    <div className="text-white/80 text-sm">Loan Available</div>
                    <div className="text-white text-xl font-semibold">
                      300,000 ETB
                    </div>
                  </div>
                  <div className="bg-white/10 backdrop-blur rounded-xl p-4 hover:bg-white/20 transition-colors">
                    <div className="text-white/80 text-sm">Dividend</div>
                    <div className="text-white text-xl font-semibold">
                      22,500 ETB
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Floating Card */}
              <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-xl p-4 animate-bounce-slow delay-1000 hover-lift">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center animate-heartbeat">
                    <span className="text-orange-600 text-lg">🎯</span>
                  </div>
                  <div>
                    <div className="text-sm font-medium text-gray-900">
                      Goal Achieved!
                    </div>
                    <div className="text-xs text-gray-500">
                      Home purchase fund
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
