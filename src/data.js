// Translations for Horizon SACCO website
export const translations = {
  en: {
    // Navigation
    nav: {
      home: 'Home',
      services: 'Services',
      calculator: 'Calculator',
      contact: 'Contact',
      joinNow: 'Join Now',
    },
    // Hero Section
    hero: {
      headline: 'Building Your Future',
      subhead: 'Join Horizon SACCO and secure your financial future with trusted savings and flexible loan options.',
      startSaving: 'Start Saving',
      getLoan: 'Get Loan',
    },
    // Services Section
    services: {
      savings: 'Savings',
      loans: 'Loans',
      benefits: 'Benefits',
    },
    // Calculator Section
    calculator: {
      title: 'Calculator',
      monthlySaving: 'Monthly Saving',
      months: 'Months',
      shares: 'Shares',
      totalCost: 'Total Cost',
      loanLimit: 'Loan Limit',
    },
    // Founder Section
    founder: {
      messageTitle: 'Message from CEO',
      name: 'Abrehet Ayele',
      title: 'Founder & CEO',
    },
  },
  am: {
    // Navigation
    nav: {
      home: 'መነሻ',
      services: 'አገልግሎቶች',
      calculator: 'ካልኩሌተር',
      contact: 'ያግኙን',
      joinNow: 'አሁን ይቀላቀሉ',
    },
    // Hero Section
    hero: {
      headline: 'የወደፊት ህይወትዎን እንገንባ',
      subhead: 'ሆራይዘን ሳኮን ይቀላቀሉ እና በታማኝ ቁጠባ እና ተለዋዋጭ የብድር አማራጮች የፋይናንስ ወደፊትዎን ያረጋግጡ።',
      startSaving: 'መቆጠብ ጀምር',
      getLoan: 'ብድር አግኝ',
    },
    // Services Section
    services: {
      savings: 'ቁጠባ',
      loans: 'ብድር',
      benefits: 'ጥቅማጥቅሞች',
    },
    // Calculator Section
    calculator: {
      title: 'ካልኩሌተር',
      monthlySaving: 'ወርሃዊ ቁጠባ',
      months: 'ወራት',
      shares: 'አክሲዮኖች',
      totalCost: 'ጠቅላላ ወጪ',
      loanLimit: 'የብድር ገደብ',
    },
    // Founder Section
    founder: {
      messageTitle: 'ከዋና ስራ አስፈፃሚ መልእክት',
      name: 'አብርሀት አየለ',
      title: 'መስራች እና ዋና ስራ አስፈፃሚ',
    },
  },
  ti: {
    // Navigation
    nav: {
      home: 'መበገሲ',
      services: 'ኣገልግሎታት',
      calculator: 'ካልኩሌተር',
      contact: 'ርኸቡና',
      joinNow: 'ሕጂ ተጸንበሩ',
    },
    // Hero Section
    hero: {
      headline: 'መጻኢኹም ንሃንጽ',
      subhead: 'ሆራይዘን ሳኮ ተጸንበሩ እሙን ዝኾነ ቁጠባን ተዓጻጻፊ ናይ ልቓሕ ኣማራጺታትን ብምጥቃም መጻኢ ፋይናንስኩም ኣውሕሱ።',
      startSaving: 'ምቁጣብ ጀምር',
      getLoan: 'ልቓሕ ርኸብ',
    },
    // Services Section
    services: {
      savings: 'ቁጠባ',
      loans: 'ልቓሕ',
      benefits: 'ረብሓታት',
    },
    // Calculator Section
    calculator: {
      title: 'ካልኩሌተር',
      monthlySaving: 'ወርሓዊ ቁጠባ',
      months: 'ኣዋርሕ',
      shares: 'ኣክስዮናት',
      totalCost: 'ጠቕላላ ወጻኢ',
      loanLimit: 'ናይ ልቓሕ ደረት',
    },
    // Founder Section
    founder: {
      messageTitle: 'ካብ ዋና ስራሕ ፈጻሚ መልእኽቲ',
      name: 'ኣብርሀት ኣየለ',
      title: 'መስራቲን ዋና ስራሕ ፈጻሚን',
    },
  },
};

// Calculator helper function for registration fee
export function calculateRegFee(savingsAmount) {
  if (savingsAmount >= 15000) {
    return 3500;
  } else if (savingsAmount >= 5000) {
    return 1000;
  } else if (savingsAmount >= 1000) {
    return 200;
  }
  return 0;
}
