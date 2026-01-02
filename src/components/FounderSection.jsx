import { Quote } from 'lucide-react';

const FounderSection = ({ lang, translations }) => {
  const t = translations[lang].founder;

  const founderQuote = {
    en: "At Horizon SACCO, we believe that financial empowerment is the foundation of a thriving community. Our mission is to provide accessible, transparent, and member-focused financial services that help every Ethiopian build a secure future. Together, we are not just saving money – we are building dreams.",
    am: "በሆራይዘን ሳኮ፣ የፋይናንስ ብቃት የበለጸገ ማህበረሰብ መሰረት እንደሆነ እናምናለን። ተልዕኳችን ለእያንዳንዱ ኢትዮጵያዊ ደህንነቱ የተጠበቀ የወደፊት ህይወት ለመገንባት የሚያግዝ ተደራሽ፣ ግልጽ እና አባል-ተኮር የፋይናንስ አገልግሎት መስጠት ነው። በጋራ ገንዘብ ብቻ አንቆጥብም – ህልሞችን እንገነባለን።",
    ti: "ኣብ ሆራይዘን ሳኮ፣ ናይ ፋይናንስ ዓቕሚ ናይ ዝዓብይ ማሕበረሰብ መሰረት ምዃኑ ንኣምን። ተልእኾና ንነፍሲ ወከፍ ኢትዮጵያዊ ውሑስ መጻኢ ንምህናጽ ዝሕግዝ ተበጻሒ፣ ግልጺን ኣባል-ማእከልን ናይ ፋይናንስ ኣገልግሎት ምሃብ እዩ። ብሓባር ገንዘብ ጥራይ ኣይኮንናን እንቖጥብ – ሕልምታት ንሃንጽ ኣለና።",
  };

  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            {t.messageTitle}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-green-600 to-orange-500 mx-auto rounded-full" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image Side */}
          <div className="relative">
            {/* Decorative Elements */}
            <div className="absolute -top-6 -left-6 w-72 h-72 bg-green-100 rounded-full opacity-50 blur-2xl" />
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-orange-100 rounded-full opacity-50 blur-2xl" />

            {/* Main Image Container */}
            <div className="relative">
              {/* Frame Decoration */}
              <div className="absolute -inset-4 border-2 border-green-200 rounded-2xl transform rotate-3" />
              <div className="absolute -inset-4 border-2 border-orange-200 rounded-2xl transform -rotate-3" />

              {/* Image */}
              <div className="relative bg-gradient-to-br from-green-600 to-green-700 rounded-2xl p-1 shadow-2xl">
                <img
                  src="/Abrehet Ayele.jpg"
                  alt={t.name}
                  className="w-full aspect-[4/5] object-cover rounded-xl"
                />
              </div>

              {/* Floating Badge */}
              <div className="absolute -bottom-4 -right-4 bg-white rounded-xl shadow-xl p-4 border border-gray-100">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-600 to-green-700 rounded-full flex items-center justify-center">
                    <span className="text-white text-xl font-bold">H</span>
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-gray-900">{t.since}</div>
                    <div className="text-xs text-gray-500">{t.empowering}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Content Side */}
          <div className="relative">
            {/* Quote Icon */}
            <div className="absolute -top-4 -left-4 text-green-100">
              <Quote className="w-24 h-24" />
            </div>

            <div className="relative z-10">
              {/* Quote */}
              <blockquote className="text-xl sm:text-2xl text-gray-700 leading-relaxed mb-8 italic">
                "{founderQuote[lang]}"
              </blockquote>

              {/* Author Info */}
              <div className="flex items-center space-x-4">
                <div className="w-16 h-1 bg-gradient-to-r from-green-600 to-orange-500 rounded-full" />
                <div>
                  <div className="text-xl font-bold text-gray-900">{t.name}</div>
                  <div className="text-green-600 font-medium">{t.title}</div>
                </div>
              </div>

              {/* Achievements */}
              <div className="grid grid-cols-3 gap-6 mt-10 pt-8 border-t border-gray-100">
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">5+</div>
                  <div className="text-sm text-gray-500">{t.yearsExperience}</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">10K+</div>
                  <div className="text-sm text-gray-500">{t.membersServed}</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">50M+</div>
                  <div className="text-sm text-gray-500">{t.birrManaged}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FounderSection;
