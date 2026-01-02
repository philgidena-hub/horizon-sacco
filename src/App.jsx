import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import {
  Globe,
  TrendingUp,
  Shield,
  Users,
  Home,
  Car,
  Briefcase,
  GraduationCap,
  PiggyBank,
  Baby,
  Plane,
  Heart,
  Phone,
  Mail,
  MapPin,
  Calculator,
  ChevronDown,
  Menu,
  X,
  Target,
  Eye,
  ShieldCheck,
  Cpu,
  Globe2,
  Award,
  Building2,
  Send,
  DollarSign,
  Info
} from 'lucide-react';

// ==================== TRANSLATIONS ====================
const translations = {
  en: {
    // Navbar
    brandName: 'Horizon SACCO',
    navHome: 'Home',
    navAbout: 'About',
    navServices: 'Services',
    navMembership: 'Membership',
    navRates: 'Interest Rates',
    navCalculator: 'Calculator',
    navContact: 'Contact',
    navJoin: 'Join Now',

    // Hero Section
    heroTitle: 'Building Your Future, Protecting Your Journey!',
    heroSubtitle: 'Secure savings and flexible loans up to 10 Million Birr',
    heroDescription: 'Your trusted financial partner in Mekelle, Ethiopia. Join thousands of members building wealth through smart savings and accessible credit.',
    heroCtaSave: 'Start Saving',
    heroCtaLoan: 'Get a Loan',

    // About Section
    aboutTitle: 'About Horizon SACCO',
    aboutSubtitle: 'Our Vision & Mission',
    visionTitle: 'Our Vision',
    visionText: 'To be a leading, modern, and competitive cooperative by 2025.',
    missionTitle: 'Our Mission',
    missionText: 'Providing affordable credit for housing, transport, and health needs, backed by modern technology and comprehensive loan life insurance for our valued members.',

    // Services Section
    servicesTitle: 'Our Services',
    servicesSubtitle: 'Comprehensive Financial Solutions',

    // Savings
    savingsTitle: 'Savings',
    savingsRegular: 'Regular Saving',
    savingsRegularDesc: 'Earn 7.5% annual interest on your deposits',
    savingsChildren: "Children's Saving",
    savingsChildrenDesc: 'Secure your child\'s future with 10% annual interest',
    savingsDiaspora: 'Diaspora Saving',
    savingsDiasporaDesc: 'Special accounts for our members abroad',
    savingsVoluntary: 'Voluntary Saving',
    savingsVoluntaryDesc: 'Flexible savings with competitive returns',

    // Loans
    loansTitle: 'Loans',
    loanHousing: 'Housing Loan',
    loanHousingDesc: 'Build or buy your dream home',
    loanVehicle: 'Vehicle Loan',
    loanVehicleDesc: 'Get the car you need',
    loanBusiness: 'Business Loan',
    loanBusinessDesc: 'Grow your enterprise',
    loanEducation: 'Education Loan',
    loanEducationDesc: 'Invest in knowledge',

    // Membership Section
    membershipTitle: 'Membership & Shares',
    membershipSubtitle: 'Join Our Growing Community',
    shareCapitalTitle: 'Share Capital',
    shareInfo: '1 Share = 200 Birr',
    shareMin: 'Minimum: 5 shares (1,000 Birr)',
    shareMax: 'Maximum: 250 shares (50,000 Birr)',
    registrationTitle: 'Registration Fees',
    regFee1: 'Savings 1,000 - 5,000 Birr',
    regFee1Amount: '200 Birr',
    regFee2: 'Savings 5,000 - 15,000 Birr',
    regFee2Amount: '1,000 Birr',
    regFee3: 'Savings above 15,000 Birr',
    regFee3Amount: '3,500 Birr',

    // Share Calculator
    shareCalcTitle: 'Share Cost Calculator',
    shareCalcSubtitle: 'Calculate your investment',
    shareCalcInput: 'Number of Shares',
    shareCalcMin: 'Min: 5',
    shareCalcMax: 'Max: 250',
    shareCalcButton: 'Calculate Cost',
    shareCalcResult: 'Total Investment',
    shareCalcNote: 'Each share costs 200 Birr',

    // Why Choose Us
    whyChooseTitle: 'Why Choose Horizon SACCO',
    whyChooseSubtitle: 'Your trusted financial partner',
    feature1Title: 'Loan Life Insurance',
    feature1Desc: 'Comprehensive coverage protecting your family',
    feature2Title: 'Technology Backed',
    feature2Desc: 'Modern digital systems for your convenience',
    feature3Title: 'Inclusive Community',
    feature3Desc: 'Open to both Diaspora and local members',
    feature4Title: 'Competitive Rates',
    feature4Desc: 'Best interest rates in the market',
    feature5Title: 'Trusted & Secure',
    feature5Desc: 'Licensed and regulated financial institution',
    feature6Title: 'Fast Processing',
    feature6Desc: 'Quick loan approval and disbursement',

    // Interest Rates Section
    ratesTitle: 'Interest Rates & Limits',
    ratesSubtitle: 'Competitive Returns on Your Savings',
    rateRegularLabel: 'Regular Saving Rate',
    rateRegularValue: '7.5% per year',
    rateChildrenLabel: "Children's Saving Rate",
    rateChildrenValue: '10% per year',
    rateLoanLabel: 'Maximum Loan Amount',
    rateLoanValue: '10,000,000 Birr',

    // Calculator Section
    calcTitle: 'Loan Calculator',
    calcSubtitle: 'Estimate Your Loan Eligibility',
    calcMonthlySaving: 'Monthly Saving (Birr)',
    calcDuration: 'Duration (Months)',
    calcButton: 'Calculate',
    calcResult: 'Estimated Loan Amount',
    calcFormula: 'Formula: Monthly Saving × Duration × 3',

    // Founder Section
    founderTitle: 'Meet the CEO',
    founderName: 'Abrehet Ayele',
    founderRole: 'Founder & CEO',
    founderQuote: 'Building your future, protecting your journey.',
    founderMessage: 'Our goal is to empower every member to build a secure financial future. By 2025, we envision Horizon SACCO as the most modern and trusted partner for your journey.',

    // Contact Section
    contactTitle: 'Get In Touch',
    contactSubtitle: 'We\'d love to hear from you',
    contactName: 'Your Name',
    contactPhone: 'Phone Number',
    contactMessage: 'Your Message',
    contactSend: 'Send Message',
    contactSending: 'Sending...',
    contactSuccessTitle: 'Message Sent!',
    contactSuccessMessage: 'Thank you! We will contact you shortly.',
    contactErrorTitle: 'Error',
    contactErrorMessage: 'Something went wrong. Please try again.',
    contactNote: 'We typically respond within 24 hours during business days.',

    // UI Labels
    languageLabel: 'Language',
    menuOpen: 'Open menu',
    menuClose: 'Close menu',
    calculating: 'Calculating...',

    // Hero Stats
    statInterestRate: 'Interest Rate',
    statMaxLoan: 'Max Loan',
    statMembers: 'Members',

    // Calculator Errors & Placeholders
    shareCalcPlaceholder: 'Enter number of shares',
    shareCalcErrorEmpty: 'Please enter number of shares',
    shareCalcErrorMin: 'Minimum is 5 shares',
    shareCalcErrorMax: 'Maximum is 250 shares',
    calcMonthlySavingPlaceholder: '5000',
    calcDurationPlaceholder: '12',
    calcErrorSaving: 'Please enter a valid monthly saving amount',
    calcErrorDuration: 'Please enter a valid duration in months',

    // Footer
    footerTagline: 'Building prosperity together',
    footerContact: 'Contact Us',
    footerBankInfo: 'Bank Details',
    footerBankName: 'Bank of Abyssinia',
    footerAccountNumber: 'Account Number',
    footerQuickLinks: 'Quick Links',
    footerAddress: 'Address',
    footerAddressLine1: 'Hawelti Sub-city',
    footerAddressLine2: 'Mekelle, Tigray',
    footerAddressLine3: 'Ethiopia',
    footerRights: '© 2024 Horizon SACCO. All rights reserved.',
  },

  am: {
    // Navbar
    brandName: 'ሆራይዘን ሳኮ',
    navHome: 'መነሻ',
    navAbout: 'ስለ እኛ',
    navServices: 'አገልግሎቶች',
    navMembership: 'አባልነት',
    navRates: 'የወለድ መጠን',
    navCalculator: 'ማስሊያ',
    navContact: 'ያግኙን',
    navJoin: 'አሁን ይቀላቀሉ',

    // Hero Section
    heroTitle: 'የወደፊትዎን እየገነቡ፣ ጉዞዎን እየጠበቁ!',
    heroSubtitle: 'እስከ 10 ሚሊዮን ብር ድረስ ደህንነቱ የተጠበቀ ቁጠባ እና ብድር',
    heroDescription: 'በመቀሌ፣ ኢትዮጵያ ውስጥ የሚታመን የፋይናንስ አጋርዎ። በብልህ ቁጠባ እና በተደራሽ ብድር ሀብት የሚገነቡ በሺዎች የሚቆጠሩ አባላትን ይቀላቀሉ።',
    heroCtaSave: 'ማቆጠብ ይጀምሩ',
    heroCtaLoan: 'ብድር ያግኙ',

    // About Section
    aboutTitle: 'ስለ ሆራይዘን ሳኮ',
    aboutSubtitle: 'የእኛ ራዕይ እና ተልዕኮ',
    visionTitle: 'የእኛ ራዕይ',
    visionText: 'በ2025 ዓ.ም መሪ፣ ዘመናዊ እና ተወዳዳሪ ማህበር መሆን።',
    missionTitle: 'የእኛ ተልዕኮ',
    missionText: 'ለመኖሪያ ቤት፣ ለትራንስፖርት እና ለጤና ፍላጎቶች ተመጣጣኝ ብድር መስጠት፣ በዘመናዊ ቴክኖሎጂ እና አጠቃላይ የብድር የህይወት መድህን የተደገፈ።',

    // Services Section
    servicesTitle: 'የእኛ አገልግሎቶች',
    servicesSubtitle: 'አጠቃላይ የፋይናንስ መፍትሄዎች',

    // Savings
    savingsTitle: 'ቁጠባ',
    savingsRegular: 'መደበኛ ቁጠባ',
    savingsRegularDesc: 'በመቀመጥዎ ላይ 7.5% ዓመታዊ ወለድ ያግኙ',
    savingsChildren: 'የልጆች ቁጠባ',
    savingsChildrenDesc: 'የልጅዎን ወደፊት በ10% ዓመታዊ ወለድ ያስጠብቁ',
    savingsDiaspora: 'የዲያስፖራ ቁጠባ',
    savingsDiasporaDesc: 'በውጭ ላሉ አባሎቻችን ልዩ መለያዎች',
    savingsVoluntary: 'ፈቃደኛ ቁጠባ',
    savingsVoluntaryDesc: 'ተወዳዳሪ ተመላሾች ያለው ተለዋዋጭ ቁጠባ',

    // Loans
    loansTitle: 'ብድር',
    loanHousing: 'የቤት ብድር',
    loanHousingDesc: 'የህልምዎን ቤት ይገንቡ ወይም ይግዙ',
    loanVehicle: 'የተሽከርካሪ ብድር',
    loanVehicleDesc: 'የሚፈልጉትን መኪና ያግኙ',
    loanBusiness: 'የንግድ ብድር',
    loanBusinessDesc: 'ኢንተርፕራይዝዎን ያሳድጉ',
    loanEducation: 'የትምህርት ብድር',
    loanEducationDesc: 'በእውቀት ላይ ኢንቨስት ያድርጉ',

    // Membership Section
    membershipTitle: 'አባልነት እና ድርሻዎች',
    membershipSubtitle: 'እያደገ ያለን ማህበረሰባችንን ይቀላቀሉ',
    shareCapitalTitle: 'የአክሲዮን ካፒታል',
    shareInfo: '1 ድርሻ = 200 ብር',
    shareMin: 'አነስተኛ: 5 ድርሻዎች (1,000 ብር)',
    shareMax: 'ከፍተኛ: 250 ድርሻዎች (50,000 ብር)',
    registrationTitle: 'የምዝገባ ክፍያዎች',
    regFee1: 'ቁጠባ 1,000 - 5,000 ብር',
    regFee1Amount: '200 ብር',
    regFee2: 'ቁጠባ 5,000 - 15,000 ብር',
    regFee2Amount: '1,000 ብር',
    regFee3: 'ቁጠባ ከ 15,000 ብር በላይ',
    regFee3Amount: '3,500 ብር',

    // Share Calculator
    shareCalcTitle: 'የድርሻ ዋጋ ማስሊያ',
    shareCalcSubtitle: 'የእርስዎን ኢንቨስትመንት ያስሉ',
    shareCalcInput: 'የድርሻዎች ብዛት',
    shareCalcMin: 'ዝቅተኛ: 5',
    shareCalcMax: 'ከፍተኛ: 250',
    shareCalcButton: 'ዋጋ አስላ',
    shareCalcResult: 'ጠቅላላ ኢንቨስትመንት',
    shareCalcNote: 'እያንዳንዱ ድርሻ 200 ብር ነው',

    // Why Choose Us
    whyChooseTitle: 'ለምን ሆራይዘን ሳኮን መምረጥ አለብዎት',
    whyChooseSubtitle: 'የሚታመን የፋይናንስ አጋርዎ',
    feature1Title: 'የብድር የህይወት መድህን',
    feature1Desc: 'ቤተሰብዎን የሚጠብቅ አጠቃላይ ሽፋን',
    feature2Title: 'በቴክኖሎጂ የተደገፈ',
    feature2Desc: 'ለእርስዎ ምቹነት ዘመናዊ ዲጂታል ስርዓቶች',
    feature3Title: 'አካታች ማህበረሰብ',
    feature3Desc: 'ለዲያስፖራ እና ለአካባቢ አባላት ክፍት',
    feature4Title: 'ተወዳዳሪ ተመኖች',
    feature4Desc: 'በገበያው ውስጥ ምርጥ የወለድ ተመኖች',
    feature5Title: 'የታመነ እና ደህንነቱ የተጠበቀ',
    feature5Desc: 'ፈቃድ ያለው እና ቁጥጥር የተደረገበት የፋይናንስ ተቋም',
    feature6Title: 'ፈጣን ሂደት',
    feature6Desc: 'ፈጣን የብድር ፈቃድ እና ክፍያ',

    // Interest Rates Section
    ratesTitle: 'የወለድ መጠን እና ገደቦች',
    ratesSubtitle: 'በቁጠባዎ ላይ ተወዳዳሪ ተመላሾች',
    rateRegularLabel: 'መደበኛ የቁጠባ መጠን',
    rateRegularValue: 'በዓመት 7.5%',
    rateChildrenLabel: 'የልጆች የቁጠባ መጠን',
    rateChildrenValue: 'በዓመት 10%',
    rateLoanLabel: 'ከፍተኛ የብድር መጠን',
    rateLoanValue: '10,000,000 ብር',

    // Calculator Section
    calcTitle: 'የብድር ማስሊያ',
    calcSubtitle: 'የብድር ብቁነትዎን ይገምቱ',
    calcMonthlySaving: 'ወርሃዊ ቁጠባ (ብር)',
    calcDuration: 'ጊዜ (ወራት)',
    calcButton: 'አስላ',
    calcResult: 'የተገመተ የብድር መጠን',
    calcFormula: 'ቀመር: ወርሃዊ ቁጠባ × ጊዜ × 3',

    // Founder Section
    founderTitle: 'ዋና ስራ አስፈፃሚን ያግኙ',
    founderName: 'አብርሄት አየለ',
    founderRole: 'መስራች እና ዋና ሥራ አስፈፃሚ',
    founderQuote: 'የወደፊት ህይወትዎን በመገንባት ጉዞዎን ይጠብቁ!',
    founderMessage: 'ግባችን እያንዳንዱ አባል ደህንነቱ የተጠበቀ የፋይናንስ ወደፊት እንዲገነባ ማበረታታት ነው። በ2025 ሆራይዘን ሳኮ ለጉዞዎ በጣም ዘመናዊ እና የሚታመን አጋር እንደሚሆን እናስባለን።',

    // Contact Section
    contactTitle: 'ያግኙን',
    contactSubtitle: 'ከእርስዎ መስማት እንፈልጋለን',
    contactName: 'ስምዎ',
    contactPhone: 'ስልክ ቁጥር',
    contactMessage: 'መልእክትዎ',
    contactSend: 'መልእክት ላክ',
    contactSending: 'በመላክ ላይ...',
    contactSuccessTitle: 'መልእክት ተልኳል!',
    contactSuccessMessage: 'እናመሰግናለን! በቅርቡ እናገኝዎታለን።',
    contactErrorTitle: 'ስህተት',
    contactErrorMessage: 'የሆነ ስህተት ተፈጥሯል። እባክዎ እንደገና ይሞክሩ።',
    contactNote: 'በስራ ቀናት ውስጥ በ24 ሰዓታት ውስጥ እንመልሳለን።',

    // UI Labels
    languageLabel: 'ቋንቋ',
    menuOpen: 'ምናሌ ክፈት',
    menuClose: 'ምናሌ ዝጋ',
    calculating: 'በማስላት ላይ...',

    // Hero Stats
    statInterestRate: 'የወለድ መጠን',
    statMaxLoan: 'ከፍተኛ ብድር',
    statMembers: 'አባላት',

    // Calculator Errors & Placeholders
    shareCalcPlaceholder: 'የድርሻዎች ብዛት ያስገቡ',
    shareCalcErrorEmpty: 'እባክዎ የድርሻዎች ብዛት ያስገቡ',
    shareCalcErrorMin: 'ዝቅተኛ 5 ድርሻዎች ነው',
    shareCalcErrorMax: 'ከፍተኛ 250 ድርሻዎች ነው',
    calcMonthlySavingPlaceholder: '5000',
    calcDurationPlaceholder: '12',
    calcErrorSaving: 'እባክዎ ትክክለኛ ወርሃዊ ቁጠባ ያስገቡ',
    calcErrorDuration: 'እባክዎ ትክክለኛ የወራት ብዛት ያስገቡ',

    // Footer
    footerTagline: 'ብልጽግናን በአንድነት እየገነቡ',
    footerContact: 'ያግኙን',
    footerBankInfo: 'የባንክ ዝርዝሮች',
    footerBankName: 'የአቢሲኒያ ባንክ',
    footerAccountNumber: 'የሂሳብ ቁጥር',
    footerQuickLinks: 'ፈጣን አገናኞች',
    footerAddress: 'አድራሻ',
    footerAddressLine1: 'ሃውልቲ ክፍለ ከተማ',
    footerAddressLine2: 'መቀሌ፣ ትግራይ',
    footerAddressLine3: 'ኢትዮጵያ',
    footerRights: '© 2024 ሆራይዘን ሳኮ። ሁሉም መብቶች የተጠበቁ ናቸው።',
  },

  ti: {
    // Navbar
    brandName: 'ሆራይዘን ዕቁርን ልቓሕን',
    navHome: 'ገጽ ቤት',
    navAbout: 'ብዛዕባና',
    navServices: 'ኣገልግሎታት',
    navMembership: 'ኣባልነት',
    navRates: 'መጠን ወለድ',
    navCalculator: 'መስሊ',
    navContact: 'ርኸቡና',
    navJoin: 'ሕጂ ተመዝገብ',

    // Hero Section
    heroTitle: 'ብውሕስ ጉዕዞ ህንፀት መፃኢኹም የረጋግፁ!',
    heroSubtitle: 'ውሕስ ዕቁርን ክሳዕ 10 ሚልዮን ብር ልቓሕን',
    heroDescription: 'ኣብ መቐለ ትግራይ ኢትዮጵያ ዘሎ እሙን መሻርኽትኹም። ብጥበባዊ ዕቁርን ምህዞ ብድሪን ሃብቲ ዝሃንፁ ብኣሽሓት ዝቑፀሩ ኣባላት ተሓዋወሱ።',
    heroCtaSave: 'ምቁፃር ጀምር',
    heroCtaLoan: 'ልቓሕ ተቐበል',

    // About Section
    aboutTitle: 'ብዛዕባ ሆራይዘን ዕቁርን ልቓሕን',
    aboutSubtitle: 'ራእይናን ዕላማናን',
    visionTitle: 'ራእይና',
    visionText: 'ባህሊ ዕቁር ብምዕባይ ኣብ 2025 ዓ/ም መሪ፣ ዘመናዊን ተወዳዳሪን ማሕበር ምዃን።',
    missionTitle: 'ዕላማና',
    missionText: 'ባህጊ ኣባላት ንምምላእ፣ ንገዛ፣ መጓዓዝያን ጥዕናን ተመጣጣኒ ልቓሕ ብምሃብ፣ ብቴክኖሎጂን መደሕን ህይወትን ዝተደገፈ።',

    // Services Section
    servicesTitle: 'ኣገልግሎታትና',
    servicesSubtitle: 'ዝተፈላለዩ ፋይናንሳዊ ፍታሕ',

    // Savings
    savingsTitle: 'ዕቁር',
    savingsRegular: 'ስሩዕ ዕቁር',
    savingsRegularDesc: 'ኣብ ዕቁርኩም 7.5% ዓመታዊ ወለድ ተቐበሉ',
    savingsChildren: 'ዕቁር ቈልዑ',
    savingsChildrenDesc: 'መፃኢ ቈልዑኹም ብ10% ዓመታዊ ወለድ ኣድሕኑ',
    savingsDiaspora: 'ዕቁር ዲያስፖራ',
    savingsDiasporaDesc: 'ንደገፍቲ ኣባላትና ፍሉይ ሕሳብ',
    savingsVoluntary: 'ፍቓደኛ ዕቁር',
    savingsVoluntaryDesc: 'ተወዳዳሪ ምላሽ ዘለዎ ተለዋዋጢ ዕቁር',

    // Loans
    loansTitle: 'ልቓሕ',
    loanHousing: 'ልቓሕ ገዛ',
    loanHousingDesc: 'ናይ ህልምኹም ገዛ ሃንፁ ወይ ግዝኡ',
    loanVehicle: 'ልቓሕ መካይን',
    loanVehicleDesc: 'እትደልይዎ መካይን ተቐበሉ',
    loanBusiness: 'ልቓሕ ንግዲ',
    loanBusinessDesc: 'ንግድኹም ኣዕብዩ',
    loanEducation: 'ልቓሕ ትምህርቲ',
    loanEducationDesc: 'ኣብ ፍልጠት ኢንቨስት ግበሩ',

    // Membership Section
    membershipTitle: 'ኣባልነትን ድርሻታትን',
    membershipSubtitle: 'ዝዓበየ ማሕበረሰብና ተሓዋወሱ',
    shareCapitalTitle: 'ማዕረ ድርሻታት',
    shareInfo: '1 ድርሻ = 200 ብር',
    shareMin: 'ዝተሓተ: 5 ድርሻታት (1,000 ብር)',
    shareMax: 'ዝለዓለ: 250 ድርሻታት (50,000 ብር)',
    registrationTitle: 'መኽፈሊ ምዝገባ',
    regFee1: 'ዕቁር 1,000 - 5,000 ብር',
    regFee1Amount: '200 ብር',
    regFee2: 'ዕቁር 5,000 - 15,000 ብር',
    regFee2Amount: '1,000 ብር',
    regFee3: 'ዕቁር ልዕሊ 15,000 ብር',
    regFee3Amount: '3,500 ብር',

    // Share Calculator
    shareCalcTitle: 'መስሊ ዋጋ ድርሻታት',
    shareCalcSubtitle: 'ወፍርኹም ስሉ',
    shareCalcInput: 'ቁፅሪ ድርሻታት',
    shareCalcMin: 'ዝተሓተ: 5',
    shareCalcMax: 'ዝለዓለ: 250',
    shareCalcButton: 'ዋጋ ስሉ',
    shareCalcResult: 'ጠቕላላ ወፍሪ',
    shareCalcNote: 'ነፍሲ ወከፍ ድርሻ 200 ብር እዩ',

    // Why Choose Us
    whyChooseTitle: 'ስለምንታይ ሆራይዘን ዕቁርን ልቓሕን ክትመርፁ ይግባእ',
    whyChooseSubtitle: 'እሙን መሻርኽትኹም',
    feature1Title: 'መደሕን ህይወት ልቓሕ',
    feature1Desc: 'ስድራቤትኩም ዝሕሉ ምሉእ ሽፋን',
    feature2Title: 'ብቴክኖሎጂ ዝተደገፈ',
    feature2Desc: 'ንመሃዝኹም ዘገልግል ዘመናዊ ዲጂታል ስርዓት',
    feature3Title: 'ኩሉ ዘጠቓልል ማሕበረሰብ',
    feature3Desc: 'ንዲያስፖራን ናይ ውሽጢን ኣባላት ክፉት',
    feature4Title: 'ተወዳዳሪ መጠናት',
    feature4Desc: 'ኣብ ዕዳጋ እቲ ዝበለፀ መጠን ወለድ',
    feature5Title: 'እሙንን ውሕስን',
    feature5Desc: 'ፍቓድ ዘለዎን ቁፅፅር ዝግበረሉን ፋይናንሳዊ ትካል',
    feature6Title: 'ቅልጡፍ ስርሒት',
    feature6Desc: 'ቅልጡፍ ፍቓድ ልቓሕን ክፍሊትን',

    // Interest Rates Section
    ratesTitle: 'መጠን ወለድን ደረጃን',
    ratesSubtitle: 'ኣብ ዕቁርኩም ተወዳዳሪ ምላሽ',
    rateRegularLabel: 'ስሩዕ መጠን ዕቁር',
    rateRegularValue: 'ኣብ ዓመት 7.5%',
    rateChildrenLabel: 'መጠን ዕቁር ቈልዑ',
    rateChildrenValue: 'ኣብ ዓመት 10%',
    rateLoanLabel: 'ዝለዓለ መጠን ልቓሕ',
    rateLoanValue: '10,000,000 ብር',

    // Calculator Section
    calcTitle: 'መስሊ ልቓሕ',
    calcSubtitle: 'ብቕዓትኩም ንልቓሕ ግምት ግበሩ',
    calcMonthlySaving: 'ወርሓዊ ዕቁር (ብር)',
    calcDuration: 'ግዜ (ኣዋርሕ)',
    calcButton: 'ስሉ',
    calcResult: 'እተገመተ መጠን ልቓሕ',
    calcFormula: 'ቀመር: ወርሓዊ ዕቁር × ግዜ × 3',

    // Founder Section
    founderTitle: 'ዋና ስራሕ ፈፃሚት ርኸቡ',
    founderName: 'አብርሄት አየለ',
    founderRole: 'መስራቲን ዋና ስራሕ ፈፃሚን',
    founderQuote: 'ብውሕስ ጉዕዞ ህንፀት መፃኢኹም የረጋግፁ!',
    founderMessage: 'ዕላማና ነፍሲ ወከፍ ኣባል ውሑስ ፋይናንስያዊ መፃኢ ክሃንፅ ምሕያል እዩ። ብ2025 ሆራይዘን ዕቁርን ልቓሕን ንጉዕዞኹም እቲ ዝያዳ ዘመናዊን እምነት ዝውሃቦን መሻርኽቲ ክኸውን ኢና እንሓስብ።',

    // Contact Section
    contactTitle: 'ርኸቡና',
    contactSubtitle: 'ካባኹም ክንሰምዕ ንደሊ',
    contactName: 'ስምኹም',
    contactPhone: 'ቁፅሪ ተሌፎን',
    contactMessage: 'መልእኽትኹም',
    contactSend: 'መልእኽቲ ስደዱ',
    contactSending: 'ይለኣኽ ኣሎ...',
    contactSuccessTitle: 'መልእኽቲ ተላኢኹ!',
    contactSuccessMessage: 'የቐንየልና! ኣብ ቀረባ እዋን ክንረኽበኩም ኢና።',
    contactErrorTitle: 'ጌጋ',
    contactErrorMessage: 'ገለ ጌጋ ተፈጢሩ። በጃኹም ከም ብሓድሽ ፈትኑ።',
    contactNote: 'ኣብ ናይ ስራሕ መዓልታት ኣብ ውሽጢ 24 ሰዓታት ንምልስ።',

    // UI Labels
    languageLabel: 'ቋንቋ',
    menuOpen: 'ሜኑ ክፈት',
    menuClose: 'ሜኑ ዕፀው',
    calculating: 'ይስላሕ ኣሎ...',

    // Hero Stats
    statInterestRate: 'መጠን ወለድ',
    statMaxLoan: 'ዝለዓለ ልቓሕ',
    statMembers: 'ኣባላት',

    // Calculator Errors & Placeholders
    shareCalcPlaceholder: 'ቁፅሪ ድርሻታት ኣእትው',
    shareCalcErrorEmpty: 'በጃኹም ቁፅሪ ድርሻታት ኣእትው',
    shareCalcErrorMin: 'ዝተሓተ 5 ድርሻታት እዩ',
    shareCalcErrorMax: 'ዝለዓለ 250 ድርሻታት እዩ',
    calcMonthlySavingPlaceholder: '5000',
    calcDurationPlaceholder: '12',
    calcErrorSaving: 'በጃኹም ቅኑዕ ወርሓዊ ዕቁር ኣእትው',
    calcErrorDuration: 'በጃኹም ቅኑዕ ቁፅሪ ኣዋርሕ ኣእትው',

    // Footer
    footerTagline: 'ብሓባር ራህዋ ንሃንፅ',
    footerContact: 'ርኸቡና',
    footerBankInfo: 'ዝርዝር ባንኪ',
    footerBankName: 'ባንኪ ኣቢሲንያ',
    footerAccountNumber: 'ቁፅሪ ሕሳብ',
    footerQuickLinks: 'ቅልጡፍ መላግቦታት',
    footerAddress: 'ኣድራሻ',
    footerAddressLine1: 'ሃውልቲ ክፍለ-ከተማ',
    footerAddressLine2: 'መቐለ፣ ትግራይ',
    footerAddressLine3: 'ኢትዮጵያ',
    footerRights: '© 2024 ሆራይዘን ዕቁርን ልቓሕን። ብሩህ መሰላት ተሓሊዩ።',
  }
};

// ==================== LANGUAGE CONTEXT ====================
const LanguageContext = createContext();

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(() => {
    // Load saved language from localStorage or default to 'en'
    if (typeof window !== 'undefined') {
      return localStorage.getItem('horizon-language') || 'en';
    }
    return 'en';
  });

  // Save language to localStorage when it changes
  useEffect(() => {
    localStorage.setItem('horizon-language', language);
    // Update document font based on language
    if (language === 'am' || language === 'ti') {
      document.documentElement.classList.add('font-ethiopic');
    } else {
      document.documentElement.classList.remove('font-ethiopic');
    }
  }, [language]);

  const t = (key) => {
    return translations[language][key] || key;
  };

  // Smooth scroll function
  const scrollToSection = useCallback((sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, []);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, scrollToSection }}>
      {children}
    </LanguageContext.Provider>
  );
};

// ==================== NAVBAR COMPONENT ====================
const Navbar = () => {
  const { language, setLanguage, t, scrollToSection } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Track scroll position for glassmorphism effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close language dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (isLangOpen && !e.target.closest('.lang-selector')) {
        setIsLangOpen(false);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isLangOpen]);

  const languages = [
    { code: 'en', name: 'English', flag: '🇬🇧' },
    { code: 'am', name: 'አማርኛ', flag: '🇪🇹' },
    { code: 'ti', name: 'ትግርኛ', flag: '🇪🇹' }
  ];

  const currentLang = languages.find(lang => lang.code === language);

  // Handle navigation click with smooth scroll
  const handleNavClick = (e, sectionId) => {
    e.preventDefault();
    scrollToSection(sectionId);
    setIsMenuOpen(false); // Close mobile menu
  };

  const navLinks = [
    { id: 'home', label: t('navHome') },
    { id: 'about', label: t('navAbout') },
    { id: 'services', label: t('navServices') },
    { id: 'membership', label: t('navMembership') },
    { id: 'rates', label: t('navRates') },
    { id: 'contact', label: t('navContact') }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled
        ? 'bg-white/95 backdrop-blur-md shadow-lg'
        : 'bg-white shadow-md'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img
              src="/horizon_logo.png"
              alt="Horizon SACCO Logo"
              className="h-12 w-auto"
            />
            <span className="text-xl font-bold text-gray-800">{t('brandName')}</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={(e) => handleNavClick(e, link.id)}
                className="text-gray-700 hover:text-primary-600 transition font-medium"
              >
                {link.label}
              </a>
            ))}

            {/* Language Selector */}
            <div className="relative lang-selector">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setIsLangOpen(!isLangOpen);
                }}
                className="flex items-center space-x-2 text-gray-700 hover:text-primary-600 transition"
              >
                <Globe className="w-5 h-5" />
                <span>{currentLang.flag}</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${isLangOpen ? 'rotate-180' : ''}`} />
              </button>

              {isLangOpen && (
                <div className="absolute right-0 mt-2 w-40 bg-white rounded-lg shadow-xl py-2 border border-gray-100 animate-[fadeIn_0.2s_ease-out]">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => {
                        setLanguage(lang.code);
                        setIsLangOpen(false);
                      }}
                      className={`w-full text-left px-4 py-2 hover:bg-primary-50 transition ${
                        language === lang.code ? 'bg-primary-100 text-primary-700' : 'text-gray-700'
                      }`}
                    >
                      <span className="mr-2">{lang.flag}</span>
                      {lang.name}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <button
              onClick={(e) => handleNavClick(e, 'membership')}
              className="bg-primary-600 text-white px-6 py-2 rounded-lg hover:bg-primary-700 transition transform hover:scale-105"
            >
              {t('navJoin')}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-gray-700 p-2"
            aria-label={isMenuOpen ? t('menuClose') || 'Close menu' : t('menuOpen') || 'Open menu'}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu with Animation */}
      <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
        isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
      }`}>
        <div className="bg-white/95 backdrop-blur-md border-t border-gray-100">
          <div className="px-4 py-3 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={(e) => handleNavClick(e, link.id)}
                className="block text-gray-700 hover:text-primary-600 hover:bg-primary-50 py-3 px-2 rounded-lg transition"
              >
                {link.label}
              </a>
            ))}

            <div className="pt-3 border-t border-gray-100">
              <p className="text-sm text-gray-500 mb-2 px-2">{t('languageLabel') || 'Language'}</p>
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => {
                    setLanguage(lang.code);
                    setIsMenuOpen(false);
                  }}
                  className={`w-full text-left px-3 py-2 rounded-lg mb-1 transition ${
                    language === lang.code ? 'bg-primary-100 text-primary-700' : 'text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  <span className="mr-2">{lang.flag}</span>
                  {lang.name}
                </button>
              ))}
            </div>

            <button
              onClick={(e) => handleNavClick(e, 'membership')}
              className="w-full bg-primary-600 text-white px-6 py-3 rounded-lg hover:bg-primary-700 transition mt-2"
            >
              {t('navJoin')}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

// ==================== HERO SECTION ====================
const Hero = () => {
  const { t, scrollToSection } = useLanguage();

  return (
    <section id="home" className="pt-24 pb-16 bg-gradient-to-br from-primary-600 via-primary-500 to-accent-500 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-600/90 via-primary-500/80 to-accent-500/90"></div>
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 left-10 w-72 h-72 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent-400/20 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight drop-shadow-lg">
              {t('heroTitle')}
            </h1>
            <p className="text-xl text-white/90">
              {t('heroSubtitle')}
            </p>
            <p className="text-lg text-white/80">
              {t('heroDescription')}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button
                onClick={() => scrollToSection('membership')}
                className="bg-white text-primary-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition transform hover:scale-105 flex items-center justify-center space-x-2 font-semibold shadow-lg"
              >
                <PiggyBank className="w-5 h-5" />
                <span>{t('heroCtaSave')}</span>
              </button>
              <button
                onClick={() => scrollToSection('calculator')}
                className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white/10 transition flex items-center justify-center space-x-2 font-semibold"
              >
                <TrendingUp className="w-5 h-5" />
                <span>{t('heroCtaLoan')}</span>
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 sm:gap-6 pt-8">
              <div className="text-center bg-white/10 backdrop-blur-sm rounded-xl p-4">
                <p className="text-2xl sm:text-3xl font-bold text-white">10%</p>
                <p className="text-xs sm:text-sm text-white/80">{t('statInterestRate') || 'Interest Rate'}</p>
              </div>
              <div className="text-center bg-white/10 backdrop-blur-sm rounded-xl p-4">
                <p className="text-2xl sm:text-3xl font-bold text-white">10M</p>
                <p className="text-xs sm:text-sm text-white/80">{t('statMaxLoan') || 'Max Loan'}</p>
              </div>
              <div className="text-center bg-white/10 backdrop-blur-sm rounded-xl p-4">
                <p className="text-2xl sm:text-3xl font-bold text-white">5000+</p>
                <p className="text-xs sm:text-sm text-white/80">{t('statMembers') || 'Members'}</p>
              </div>
            </div>
          </div>

          {/* Right Image/Illustration */}
          <div className="relative">
            <div className="bg-gradient-to-br from-primary-400 to-accent-400 rounded-3xl p-8 shadow-2xl">
              <div className="bg-white rounded-2xl p-8 space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="bg-primary-100 p-3 rounded-full">
                    <Shield className="w-8 h-8 text-primary-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">Secure & Trusted</p>
                    <p className="text-sm text-gray-500">Licensed Financial Institution</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="bg-accent-100 p-3 rounded-full">
                    <Users className="w-8 h-8 text-accent-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">Community Driven</p>
                    <p className="text-sm text-gray-500">Member-owned cooperative</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="bg-primary-100 p-3 rounded-full">
                    <TrendingUp className="w-8 h-8 text-primary-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">Competitive Rates</p>
                    <p className="text-sm text-gray-500">Up to 10% on savings</p>
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

// ==================== ABOUT SECTION ====================
const About = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-12 sm:py-16 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">{t('aboutTitle')}</h2>
          <p className="text-lg sm:text-xl text-gray-600">{t('aboutSubtitle')}</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Vision */}
            <div className="bg-gradient-to-r from-primary-50 to-white p-8 rounded-2xl border-l-4 border-primary-600 shadow-lg">
              <div className="flex items-start space-x-4">
                <div className="bg-primary-600 p-3 rounded-lg">
                  <Eye className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-3">{t('visionTitle')}</h3>
                  <p className="text-gray-600 leading-relaxed">{t('visionText')}</p>
                </div>
              </div>
            </div>

            {/* Mission */}
            <div className="bg-gradient-to-r from-accent-50 to-white p-8 rounded-2xl border-l-4 border-accent-600 shadow-lg">
              <div className="flex items-start space-x-4">
                <div className="bg-accent-600 p-3 rounded-lg">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-3">{t('missionTitle')}</h3>
                  <p className="text-gray-600 leading-relaxed">{t('missionText')}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Image Placeholder */}
          <div className="relative">
            <div className="bg-gradient-to-br from-primary-100 via-accent-50 to-primary-100 rounded-3xl h-96 flex items-center justify-center overflow-hidden shadow-2xl">
              <div className="text-center p-8">
                <Building2 className="w-32 h-32 text-primary-600 mx-auto mb-4 opacity-20" />
                <p className="text-gray-400 text-lg">Building a Better Future</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// ==================== SERVICES SECTION ====================
const Services = () => {
  const { t } = useLanguage();

  const savingsServices = [
    {
      icon: PiggyBank,
      title: t('savingsRegular'),
      description: t('savingsRegularDesc'),
      color: 'primary'
    },
    {
      icon: Baby,
      title: t('savingsChildren'),
      description: t('savingsChildrenDesc'),
      color: 'accent'
    },
    {
      icon: Plane,
      title: t('savingsDiaspora'),
      description: t('savingsDiasporaDesc'),
      color: 'primary'
    },
    {
      icon: Heart,
      title: t('savingsVoluntary'),
      description: t('savingsVoluntaryDesc'),
      color: 'accent'
    }
  ];

  const loanServices = [
    {
      icon: Home,
      title: t('loanHousing'),
      description: t('loanHousingDesc'),
      color: 'primary'
    },
    {
      icon: Car,
      title: t('loanVehicle'),
      description: t('loanVehicleDesc'),
      color: 'accent'
    },
    {
      icon: Briefcase,
      title: t('loanBusiness'),
      description: t('loanBusinessDesc'),
      color: 'primary'
    },
    {
      icon: GraduationCap,
      title: t('loanEducation'),
      description: t('loanEducationDesc'),
      color: 'accent'
    }
  ];

  const ServiceCard = ({ icon: Icon, title, description, color }) => {
    const colorClasses = {
      primary: 'bg-primary-100',
      accent: 'bg-accent-100'
    };
    const iconColorClasses = {
      primary: 'text-primary-600',
      accent: 'text-accent-600'
    };

    return (
      <div className="bg-white rounded-xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition transform hover:-translate-y-1">
        <div className={`${colorClasses[color]} w-12 h-12 sm:w-14 sm:h-14 rounded-lg flex items-center justify-center mb-3 sm:mb-4`}>
          <Icon className={`w-6 h-6 sm:w-7 sm:h-7 ${iconColorClasses[color]}`} />
        </div>
        <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-2">{title}</h3>
        <p className="text-gray-600 text-sm">{description}</p>
      </div>
    );
  };

  return (
    <section id="services" className="py-12 sm:py-16 md:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">{t('servicesTitle')}</h2>
          <p className="text-lg sm:text-xl text-gray-600">{t('servicesSubtitle')}</p>
        </div>

        {/* Savings Section */}
        <div className="mb-10 sm:mb-12 md:mb-16">
          <h3 className="text-2xl font-bold text-gray-800 mb-8 flex items-center">
            <PiggyBank className="w-7 h-7 mr-3 text-primary-600" />
            {t('savingsTitle')}
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {savingsServices.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>

        {/* Loans Section */}
        <div>
          <h3 className="text-2xl font-bold text-gray-800 mb-8 flex items-center">
            <TrendingUp className="w-7 h-7 mr-3 text-accent-600" />
            {t('loansTitle')}
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {loanServices.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// ==================== MEMBERSHIP SECTION ====================
const Membership = () => {
  const { t } = useLanguage();

  return (
    <section id="membership" className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-gray-50 via-white to-primary-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <div className="inline-block px-4 py-2 bg-primary-100 rounded-full mb-4">
            <span className="text-primary-700 font-semibold text-sm uppercase tracking-wide">
              {t('membershipBadge') || 'Membership'}
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">{t('membershipTitle')}</h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">{t('membershipSubtitle')}</p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-3 gap-6 sm:gap-8 mb-10 sm:mb-12 md:mb-16">
          {/* Share Capital - Large Featured Card */}
          <div className="lg:col-span-2 bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100 hover:shadow-3xl transition-shadow duration-300">
            <div className="bg-gradient-to-r from-primary-600 to-primary-700 p-8 text-white">
              <div className="flex items-center space-x-4 mb-3">
                <div className="p-3 bg-white/20 backdrop-blur-sm rounded-xl">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold">{t('shareCapitalTitle')}</h3>
              </div>
              <p className="text-primary-100 text-lg">{t('shareCapitalDesc') || 'Become a member by purchasing shares'}</p>
            </div>

            <div className="p-8">
              <div className="grid md:grid-cols-3 gap-6">
                {/* Share Price */}
                <div className="text-center p-6 bg-gradient-to-br from-primary-50 to-white rounded-2xl border border-primary-100">
                  <div className="inline-block p-3 bg-primary-100 rounded-xl mb-4">
                    <DollarSign className="w-6 h-6 text-primary-700" />
                  </div>
                  <p className="text-sm text-gray-600 mb-2 font-medium uppercase tracking-wide">{t('sharePriceLabel') || 'Price Per Share'}</p>
                  <p className="text-3xl sm:text-4xl font-bold text-primary-600">200</p>
                  <p className="text-sm text-gray-500 mt-1">{t('currency') || 'Birr'}</p>
                </div>

                {/* Minimum Shares */}
                <div className="text-center p-6 bg-gradient-to-br from-green-50 to-white rounded-2xl border border-green-100">
                  <div className="inline-block p-3 bg-green-100 rounded-xl mb-4">
                    <TrendingUp className="w-6 h-6 text-green-700" />
                  </div>
                  <p className="text-sm text-gray-600 mb-2 font-medium uppercase tracking-wide">{t('minSharesLabel') || 'Minimum'}</p>
                  <p className="text-3xl sm:text-4xl font-bold text-green-600">5</p>
                  <p className="text-sm text-gray-500 mt-1">{t('sharesLabel') || 'Shares'}</p>
                </div>

                {/* Maximum Shares */}
                <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-white rounded-2xl border border-blue-100">
                  <div className="inline-block p-3 bg-blue-100 rounded-xl mb-4">
                    <Target className="w-6 h-6 text-blue-700" />
                  </div>
                  <p className="text-sm text-gray-600 mb-2 font-medium uppercase tracking-wide">{t('maxSharesLabel') || 'Maximum'}</p>
                  <p className="text-3xl sm:text-4xl font-bold text-blue-600">250</p>
                  <p className="text-sm text-gray-500 mt-1">{t('sharesLabel') || 'Shares'}</p>
                </div>
              </div>

              {/* Additional Info */}
              <div className="mt-6 p-5 bg-gradient-to-r from-primary-50 to-primary-100/50 rounded-xl border-l-4 border-primary-600">
                <div className="flex items-start space-x-3">
                  <Info className="w-5 h-5 text-primary-700 mt-0.5 flex-shrink-0" />
                  <p className="text-gray-700 leading-relaxed">
                    {t('shareCapitalNote') || 'Share capital represents your ownership in the cooperative and entitles you to dividends and voting rights.'}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Registration Fees - Compact Card */}
          <div className="lg:col-span-1 bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100 hover:shadow-3xl transition-shadow duration-300">
            <div className="bg-gradient-to-r from-accent-600 to-accent-700 p-6 text-white">
              <div className="flex items-center space-x-3 mb-2">
                <div className="p-2.5 bg-white/20 backdrop-blur-sm rounded-xl">
                  <Award className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold">{t('registrationTitle')}</h3>
              </div>
              <p className="text-accent-100">{t('registrationDesc') || 'One-time fees'}</p>
            </div>

            <div className="p-6 space-y-4">
              {/* Fee Option 1 */}
              <div className="p-4 bg-gradient-to-r from-accent-50 to-white rounded-xl border border-accent-100 hover:border-accent-300 transition-colors">
                <div className="flex justify-between items-center">
                  <div className="flex-1">
                    <p className="text-gray-700 font-medium mb-1">{t('regFee1')}</p>
                    <p className="text-2xl font-bold text-accent-600">{t('regFee1Amount')}</p>
                  </div>
                  <div className="w-2 h-2 bg-accent-500 rounded-full"></div>
                </div>
              </div>

              {/* Fee Option 2 */}
              <div className="p-4 bg-gradient-to-r from-accent-50 to-white rounded-xl border border-accent-100 hover:border-accent-300 transition-colors">
                <div className="flex justify-between items-center">
                  <div className="flex-1">
                    <p className="text-gray-700 font-medium mb-1">{t('regFee2')}</p>
                    <p className="text-2xl font-bold text-accent-600">{t('regFee2Amount')}</p>
                  </div>
                  <div className="w-2 h-2 bg-accent-500 rounded-full"></div>
                </div>
              </div>

              {/* Fee Option 3 */}
              <div className="p-4 bg-gradient-to-r from-accent-50 to-white rounded-xl border border-accent-100 hover:border-accent-300 transition-colors">
                <div className="flex justify-between items-center">
                  <div className="flex-1">
                    <p className="text-gray-700 font-medium mb-1">{t('regFee3')}</p>
                    <p className="text-2xl font-bold text-accent-600">{t('regFee3Amount')}</p>
                  </div>
                  <div className="w-2 h-2 bg-accent-500 rounded-full"></div>
                </div>
              </div>

              {/* Info Note */}
              <div className="mt-4 p-4 bg-gray-50 rounded-xl border border-gray-200">
                <div className="flex items-start space-x-2">
                  <Info className="w-4 h-4 text-gray-600 mt-0.5 flex-shrink-0" />
                  <p className="text-xs text-gray-600 leading-relaxed">
                    {t('regFeeNote') || 'Choose based on your membership category'}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Share Calculator */}
        <ShareCalculator />
      </div>
    </section>
  );
};

// ==================== SHARE CALCULATOR ====================
const ShareCalculator = () => {
  const { t } = useLanguage();
  const [shares, setShares] = useState('');
  const [totalCost, setTotalCost] = useState(null);
  const [isCalculating, setIsCalculating] = useState(false);
  const [error, setError] = useState('');

  const handleSharesChange = (e) => {
    const value = e.target.value;
    // Only allow positive numbers
    if (value === '' || (parseInt(value) >= 0 && !value.includes('-'))) {
      setShares(value);
      setError('');
    }
  };

  const calculateCost = async () => {
    const numShares = parseInt(shares);

    if (!shares || isNaN(numShares)) {
      setError(t('shareCalcErrorEmpty') || 'Please enter number of shares');
      return;
    }

    if (numShares < 5) {
      setError(t('shareCalcErrorMin') || 'Minimum is 5 shares');
      return;
    }

    if (numShares > 250) {
      setError(t('shareCalcErrorMax') || 'Maximum is 250 shares');
      return;
    }

    setIsCalculating(true);
    setError('');

    // Simulate calculation delay for better UX
    await new Promise(resolve => setTimeout(resolve, 500));

    const cost = numShares * 200;
    setTotalCost(cost);
    setIsCalculating(false);
  };

  return (
    <div>
      <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
        <div className="grid md:grid-cols-2">
          {/* Left Side - Info */}
          <div className="bg-gradient-to-br from-primary-600 to-primary-700 p-8 md:p-12 text-white">
            <div className="mb-8">
              <div className="bg-white/20 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                <Calculator className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold mb-3">{t('shareCalcTitle')}</h3>
              <p className="text-primary-100 text-lg mb-8">{t('shareCalcSubtitle')}</p>
            </div>

            <div className="space-y-6">
              <div className="bg-white/10 backdrop-blur rounded-xl p-5">
                <div className="flex items-center space-x-3 mb-2">
                  <div className="bg-white/20 w-10 h-10 rounded-lg flex items-center justify-center">
                    <span className="text-2xl font-bold">1</span>
                  </div>
                  <div>
                    <p className="font-semibold text-lg">Share Price</p>
                    <p className="text-primary-100 text-sm">200 Birr per share</p>
                  </div>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur rounded-xl p-5">
                <div className="flex items-center space-x-3 mb-2">
                  <div className="bg-white/20 w-10 h-10 rounded-lg flex items-center justify-center">
                    <span className="text-2xl font-bold">5</span>
                  </div>
                  <div>
                    <p className="font-semibold text-lg">Minimum Shares</p>
                    <p className="text-primary-100 text-sm">Start with 5 shares</p>
                  </div>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur rounded-xl p-5">
                <div className="flex items-center space-x-3 mb-2">
                  <div className="bg-white/20 w-10 h-10 rounded-lg flex items-center justify-center">
                    <span className="text-lg font-bold">250</span>
                  </div>
                  <div>
                    <p className="font-semibold text-lg">Maximum Shares</p>
                    <p className="text-primary-100 text-sm">Up to 250 shares</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Calculator */}
          <div className="p-8 md:p-12 bg-gray-50">
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-3 uppercase tracking-wide">
                  {t('shareCalcInput')}
                </label>
                <div className="relative">
                  <input
                    type="number"
                    value={shares}
                    onChange={handleSharesChange}
                    placeholder={t('shareCalcPlaceholder') || 'Enter number of shares'}
                    min="5"
                    max="250"
                    className={`w-full px-6 py-5 text-2xl font-semibold border-2 rounded-xl focus:ring-2 focus:outline-none transition bg-white ${
                      error ? 'border-red-300 focus:border-red-500 focus:ring-red-200' : 'border-gray-200 focus:border-primary-500 focus:ring-primary-200'
                    }`}
                  />
                  <div className="absolute right-5 top-1/2 transform -translate-y-1/2 text-gray-400">
                    <Users className="w-6 h-6" />
                  </div>
                </div>
                <div className="flex justify-between mt-3 text-sm text-gray-500">
                  <span>{t('shareCalcMin')}</span>
                  <span>{t('shareCalcMax')}</span>
                </div>
                {error && (
                  <p className="mt-2 text-sm text-red-600 animate-[fadeIn_0.2s_ease-out]">{error}</p>
                )}
              </div>

              <button
                onClick={calculateCost}
                disabled={isCalculating}
                className={`w-full py-5 rounded-xl transition transform flex items-center justify-center space-x-3 text-lg font-bold shadow-xl ${
                  isCalculating
                    ? 'bg-gray-400 cursor-not-allowed'
                    : 'bg-primary-600 hover:bg-primary-700 hover:scale-[1.02] active:scale-[0.98] shadow-primary-500/30'
                } text-white`}
              >
                {isCalculating ? (
                  <>
                    <svg className="animate-spin w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    <span>{t('calculating') || 'Calculating...'}</span>
                  </>
                ) : (
                  <>
                    <Calculator className="w-6 h-6" />
                    <span>{t('shareCalcButton')}</span>
                  </>
                )}
              </button>

              {totalCost !== null && (
                <div className="bg-gradient-to-br from-primary-50 to-accent-50 rounded-2xl p-8 border-2 border-primary-200 animate-[fadeIn_0.3s_ease-in]">
                  <p className="text-sm font-semibold text-gray-600 uppercase tracking-wide mb-3">
                    {t('shareCalcResult')}
                  </p>
                  <div className="flex items-baseline space-x-2 mb-4">
                    <span className="text-4xl sm:text-5xl font-bold text-primary-700">
                      {totalCost.toLocaleString()}
                    </span>
                    <span className="text-2xl font-semibold text-gray-600">Birr</span>
                  </div>
                  <div className="bg-white/60 backdrop-blur rounded-lg p-4">
                    <p className="text-sm text-gray-600">
                      <span className="font-semibold">{t('shareCalcNote')}</span>
                    </p>
                    <p className="text-xs text-gray-500 mt-2">
                      {shares} shares × 200 = {totalCost.toLocaleString()} Birr
                    </p>
                  </div>
                </div>
              )}

              {!totalCost && (
                <div className="text-center text-gray-400 py-8">
                  <Calculator className="w-12 h-12 mx-auto mb-3 opacity-30" />
                  <p className="text-sm">Enter number of shares to calculate</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// ==================== WHY CHOOSE US SECTION ====================
const WhyChooseUs = () => {
  const { t } = useLanguage();

  const features = [
    {
      icon: ShieldCheck,
      title: t('feature1Title'),
      description: t('feature1Desc'),
      color: 'primary'
    },
    {
      icon: Cpu,
      title: t('feature2Title'),
      description: t('feature2Desc'),
      color: 'accent'
    },
    {
      icon: Globe2,
      title: t('feature3Title'),
      description: t('feature3Desc'),
      color: 'primary'
    },
    {
      icon: TrendingUp,
      title: t('feature4Title'),
      description: t('feature4Desc'),
      color: 'accent'
    },
    {
      icon: Shield,
      title: t('feature5Title'),
      description: t('feature5Desc'),
      color: 'primary'
    },
    {
      icon: Award,
      title: t('feature6Title'),
      description: t('feature6Desc'),
      color: 'accent'
    }
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">{t('whyChooseTitle')}</h2>
          <p className="text-lg sm:text-xl text-gray-600">{t('whyChooseSubtitle')}</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            const colorClasses = {
              primary: 'bg-primary-100',
              accent: 'bg-accent-100'
            };
            const iconColorClasses = {
              primary: 'text-primary-600',
              accent: 'text-accent-600'
            };

            return (
              <div
                key={index}
                className="bg-white rounded-xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2"
              >
                <div className={`${colorClasses[feature.color]} w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mb-4 sm:mb-6`}>
                  <Icon className={`w-7 h-7 sm:w-8 sm:h-8 ${iconColorClasses[feature.color]}`} />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-2 sm:mb-3">{feature.title}</h3>
                <p className="text-sm sm:text-base text-gray-600">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

// ==================== INTEREST RATES SECTION ====================
const InterestRates = () => {
  const { t } = useLanguage();

  const rates = [
    {
      label: t('rateRegularLabel'),
      value: t('rateRegularValue'),
      icon: PiggyBank,
      color: 'primary'
    },
    {
      label: t('rateChildrenLabel'),
      value: t('rateChildrenValue'),
      icon: Baby,
      color: 'accent'
    },
    {
      label: t('rateLoanLabel'),
      value: t('rateLoanValue'),
      icon: TrendingUp,
      color: 'primary'
    }
  ];

  return (
    <section id="rates" className="py-12 sm:py-16 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">{t('ratesTitle')}</h2>
          <p className="text-lg sm:text-xl text-gray-600">{t('ratesSubtitle')}</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
          {rates.map((rate, index) => {
            const Icon = rate.icon;
            const bgGradientClasses = {
              primary: 'bg-gradient-to-br from-primary-50 to-white',
              accent: 'bg-gradient-to-br from-accent-50 to-white'
            };
            const borderClasses = {
              primary: 'border-primary-200 hover:border-primary-400',
              accent: 'border-accent-200 hover:border-accent-400'
            };
            const bgColorClasses = {
              primary: 'bg-primary-600',
              accent: 'bg-accent-600'
            };
            const textColorClasses = {
              primary: 'text-primary-600',
              accent: 'text-accent-600'
            };

            return (
              <div
                key={index}
                className={`${bgGradientClasses[rate.color]} rounded-2xl p-6 sm:p-8 border-2 ${borderClasses[rate.color]} transition shadow-lg`}
              >
                <div className={`${bgColorClasses[rate.color]} w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mb-4 sm:mb-6 mx-auto`}>
                  <Icon className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
                </div>
                <h3 className="text-base sm:text-lg font-semibold text-gray-700 text-center mb-2 sm:mb-3">
                  {rate.label}
                </h3>
                <p className={`text-2xl sm:text-3xl font-bold ${textColorClasses[rate.color]} text-center`}>
                  {rate.value}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

// ==================== LOAN CALCULATOR SECTION ====================
const LoanCalculator = () => {
  const { t } = useLanguage();
  const [monthlySaving, setMonthlySaving] = useState('');
  const [duration, setDuration] = useState('');
  const [estimatedLoan, setEstimatedLoan] = useState(null);
  const [isCalculating, setIsCalculating] = useState(false);
  const [error, setError] = useState('');

  const handleInputChange = (setter) => (e) => {
    const value = e.target.value;
    // Only allow positive numbers
    if (value === '' || (parseFloat(value) >= 0 && !value.includes('-'))) {
      setter(value);
      setError('');
    }
  };

  const calculateLoan = async () => {
    const saving = parseFloat(monthlySaving);
    const months = parseFloat(duration);

    if (!monthlySaving || isNaN(saving) || saving <= 0) {
      setError(t('calcErrorSaving') || 'Please enter a valid monthly saving amount');
      return;
    }

    if (!duration || isNaN(months) || months <= 0) {
      setError(t('calcErrorDuration') || 'Please enter a valid duration in months');
      return;
    }

    setIsCalculating(true);
    setError('');

    // Simulate calculation delay for better UX
    await new Promise(resolve => setTimeout(resolve, 500));

    const loan = Math.min(saving * months * 3, 10000000); // Cap at 10M
    setEstimatedLoan(loan);
    setIsCalculating(false);
  };

  return (
    <section id="calculator" className="py-12 sm:py-16 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <div className="inline-block px-4 py-2 bg-accent-100 rounded-full mb-4">
            <span className="text-accent-700 font-semibold text-sm uppercase tracking-wide">
              {t('calcBadge') || 'Loan Calculator'}
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">{t('calcTitle')}</h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">{t('calcSubtitle')}</p>
        </div>

        {/* Calculator Card */}
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
          <div className="grid md:grid-cols-2">
            {/* Left Side - Info & Formula */}
            <div className="bg-gradient-to-br from-accent-600 to-accent-700 p-8 md:p-12 text-white">
              <div className="mb-8">
                <div className="bg-white/20 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                  <Calculator className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold mb-3">{t('calcTitle')}</h3>
                <p className="text-accent-100 text-lg mb-8">{t('calcSubtitle')}</p>
              </div>

              {/* How It Works */}
              <div className="space-y-6">
                <div className="bg-white/10 backdrop-blur rounded-xl p-5">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="bg-white/20 w-10 h-10 rounded-lg flex items-center justify-center">
                      <span className="text-xl font-bold">1</span>
                    </div>
                    <h4 className="font-semibold text-lg">{t('calcStep1') || 'Enter Monthly Saving'}</h4>
                  </div>
                  <p className="text-accent-100 text-sm ml-13">
                    {t('calcStep1Desc') || 'Input how much you can save monthly'}
                  </p>
                </div>

                <div className="bg-white/10 backdrop-blur rounded-xl p-5">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="bg-white/20 w-10 h-10 rounded-lg flex items-center justify-center">
                      <span className="text-xl font-bold">2</span>
                    </div>
                    <h4 className="font-semibold text-lg">{t('calcStep2') || 'Choose Duration'}</h4>
                  </div>
                  <p className="text-accent-100 text-sm ml-13">
                    {t('calcStep2Desc') || 'Select saving period in months'}
                  </p>
                </div>

                <div className="bg-white/10 backdrop-blur rounded-xl p-5">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="bg-white/20 w-10 h-10 rounded-lg flex items-center justify-center">
                      <span className="text-xl font-bold">3×</span>
                    </div>
                    <h4 className="font-semibold text-lg">{t('calcStep3') || 'Get 3x Loan'}</h4>
                  </div>
                  <p className="text-accent-100 text-sm ml-13">
                    {t('calcStep3Desc') || 'Eligible for 3 times your total savings'}
                  </p>
                </div>
              </div>
            </div>

            {/* Right Side - Calculator Interface */}
            <div className="p-8 md:p-12 bg-gray-50">
              <div className="space-y-6">
                {/* Error Message */}
                {error && (
                  <div className="p-4 bg-red-50 border border-red-200 rounded-xl animate-[fadeIn_0.2s_ease-out]">
                    <p className="text-sm text-red-600">{error}</p>
                  </div>
                )}

                {/* Monthly Saving Input */}
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-3 uppercase tracking-wide">
                    {t('calcMonthlySaving')}
                  </label>
                  <div className="relative">
                    <input
                      type="number"
                      value={monthlySaving}
                      onChange={handleInputChange(setMonthlySaving)}
                      placeholder={t('calcMonthlySavingPlaceholder') || '5000'}
                      className={`w-full px-6 py-5 text-2xl font-semibold border-2 rounded-xl focus:ring-2 focus:outline-none transition bg-white ${
                        error && !monthlySaving ? 'border-red-300 focus:border-red-500 focus:ring-red-200' : 'border-gray-200 focus:border-accent-500 focus:ring-accent-200'
                      }`}
                    />
                    <div className="absolute right-5 top-1/2 transform -translate-y-1/2 text-gray-400">
                      <PiggyBank className="w-6 h-6" />
                    </div>
                  </div>
                  <p className="mt-2 text-sm text-gray-500">{t('calcMonthlySavingHint') || 'Amount in Birr'}</p>
                </div>

                {/* Duration Input */}
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-3 uppercase tracking-wide">
                    {t('calcDuration')}
                  </label>
                  <div className="relative">
                    <input
                      type="number"
                      value={duration}
                      onChange={handleInputChange(setDuration)}
                      placeholder={t('calcDurationPlaceholder') || '12'}
                      className={`w-full px-6 py-5 text-2xl font-semibold border-2 rounded-xl focus:ring-2 focus:outline-none transition bg-white ${
                        error && !duration ? 'border-red-300 focus:border-red-500 focus:ring-red-200' : 'border-gray-200 focus:border-accent-500 focus:ring-accent-200'
                      }`}
                    />
                    <div className="absolute right-5 top-1/2 transform -translate-y-1/2 text-gray-400">
                      <TrendingUp className="w-6 h-6" />
                    </div>
                  </div>
                  <p className="mt-2 text-sm text-gray-500">{t('calcDurationHint') || 'Number of months'}</p>
                </div>

                {/* Calculate Button */}
                <button
                  onClick={calculateLoan}
                  disabled={isCalculating}
                  className={`w-full py-5 rounded-xl transition transform flex items-center justify-center space-x-3 text-lg font-bold shadow-xl ${
                    isCalculating
                      ? 'bg-gray-400 cursor-not-allowed'
                      : 'bg-accent-600 hover:bg-accent-700 hover:scale-[1.02] active:scale-[0.98] shadow-accent-500/30'
                  } text-white`}
                >
                  {isCalculating ? (
                    <>
                      <svg className="animate-spin w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      <span>{t('calculating') || 'Calculating...'}</span>
                    </>
                  ) : (
                    <>
                      <Calculator className="w-6 h-6" />
                      <span>{t('calcButton')}</span>
                    </>
                  )}
                </button>

                {/* Result Display */}
                {estimatedLoan !== null && (
                  <div className="bg-gradient-to-br from-accent-50 to-primary-50 rounded-2xl p-8 border-2 border-accent-200 animate-[fadeIn_0.3s_ease-in]">
                    <p className="text-sm font-semibold text-gray-600 uppercase tracking-wide mb-3">
                      {t('calcResult')}
                    </p>
                    <div className="flex items-baseline space-x-2 mb-4">
                      <span className="text-4xl sm:text-5xl font-bold text-accent-700">
                        {estimatedLoan.toLocaleString()}
                      </span>
                      <span className="text-2xl font-semibold text-gray-600">Birr</span>
                    </div>
                    <div className="bg-white/60 backdrop-blur rounded-lg p-4">
                      <p className="text-sm text-gray-600 mb-2">
                        <span className="font-semibold">{t('calcFormula')}</span>
                      </p>
                      <p className="text-xs text-gray-500">
                        {monthlySaving} Birr × {duration} months × 3 = {estimatedLoan.toLocaleString()} Birr
                      </p>
                    </div>
                  </div>
                )}

                {/* Empty State */}
                {!estimatedLoan && (
                  <div className="text-center text-gray-400 py-8">
                    <Calculator className="w-12 h-12 mx-auto mb-3 opacity-30" />
                    <p className="text-sm">{t('calcEmptyState') || 'Enter values to calculate your loan eligibility'}</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// ==================== FOUNDER SECTION ====================
const Founder = () => {
  const { t } = useLanguage();

  return (
    <section id="founder" className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-10">
          <div className="inline-block px-4 py-2 bg-primary-100 rounded-full mb-3">
            <span className="text-primary-700 font-semibold text-sm uppercase tracking-wide">
              {t('founderBadge') || 'Leadership'}
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">{t('founderTitle')}</h2>
        </div>

        {/* Founder Card */}
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
          <div className="grid md:grid-cols-2 gap-6 md:gap-8 items-center">
            {/* Left Side - Image */}
            <div className="p-6 md:p-8">
              <div className="relative max-w-sm mx-auto">
                <div className="absolute inset-0 bg-gradient-to-br from-primary-400 to-accent-400 rounded-2xl transform rotate-3"></div>
                <div className="relative bg-white p-2 rounded-2xl shadow-xl">
                  <div className="w-full h-80 overflow-hidden rounded-xl">
                    <img
                      src="/Abrehet Ayele.jpg"
                      alt={t('founderName')}
                      className="w-full h-full object-cover object-top"
                      style={{ objectPosition: 'center 15%' }}
                      onError={(e) => {
                        e.target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="320" viewBox="0 0 400 320"%3E%3Crect fill="%2322c55e" width="400" height="320"/%3E%3Ctext x="50%25" y="50%25" dominant-baseline="middle" text-anchor="middle" font-family="sans-serif" font-size="32" fill="%23ffffff"%3EAbrehet Ayele%3C/text%3E%3C/svg%3E';
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Content */}
            <div className="p-6 md:p-8 md:pl-0">
              <div className="space-y-4">
                {/* Name & Role */}
                <div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-1">
                    {t('founderName')}
                  </h3>
                  <p className="text-lg text-primary-600 font-semibold">
                    {t('founderRole')}
                  </p>
                </div>

                {/* Quote */}
                <div className="relative pl-4 border-l-4 border-primary-600">
                  <svg
                    className="absolute -left-2 -top-1 w-6 h-6 text-primary-200"
                    fill="currentColor"
                    viewBox="0 0 32 32"
                  >
                    <path d="M10 8c-3.3 0-6 2.7-6 6v10h10V14H8c0-1.1.9-2 2-2V8zm16 0c-3.3 0-6 2.7-6 6v10h10V14h-6c0-1.1.9-2 2-2V8z" />
                  </svg>
                  <p className="text-lg font-serif text-gray-700 italic leading-relaxed">
                    "{t('founderQuote')}"
                  </p>
                </div>

                {/* Message */}
                <div className="bg-gradient-to-r from-primary-50 to-accent-50 rounded-xl p-4">
                  <p className="text-gray-700 leading-relaxed text-sm">
                    {t('founderMessage')}
                  </p>
                </div>

                {/* Signature Line */}
                <div className="pt-1">
                  <div className="h-0.5 w-20 bg-gradient-to-r from-primary-600 to-accent-600 mb-2"></div>
                  <p className="text-xs font-semibold text-gray-600">
                    {t('founderName')}
                  </p>
                  <p className="text-xs text-gray-500">{t('founderRole')}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// ==================== CONTACT SECTION ====================
const Contact = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' | 'error' | null

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    // Simulate API call
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      setSubmitStatus('success');
      setFormData({ name: '', phone: '', message: '' });
      // Auto-hide success message after 5 seconds
      setTimeout(() => setSubmitStatus(null), 5000);
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-gray-50 via-white to-primary-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <div className="inline-block px-4 py-2 bg-primary-100 rounded-full mb-4">
            <span className="text-primary-700 font-semibold text-sm uppercase tracking-wide">
              {t('contactBadge') || 'Contact Us'}
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">{t('contactTitle')}</h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">{t('contactSubtitle')}</p>
        </div>

        {/* Contact Card */}
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
          <div className="grid md:grid-cols-2">
            {/* Left Side - Contact Info */}
            <div className="bg-gradient-to-br from-primary-600 to-primary-700 p-8 md:p-12 text-white">
              <div className="mb-8">
                <div className="bg-white/20 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                  <Mail className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold mb-3">{t('contactTitle')}</h3>
                <p className="text-primary-100 text-lg mb-8">{t('contactSubtitle')}</p>
              </div>

              {/* Contact Information */}
              <div className="space-y-6">
                {/* Phone */}
                <div className="bg-white/10 backdrop-blur rounded-xl p-5">
                  <div className="flex items-start space-x-4">
                    <div className="bg-white/20 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-2">{t('contactPhoneLabel') || 'Phone'}</h4>
                      <p className="text-primary-100">+251 912 345 678</p>
                      <p className="text-primary-100">+251 911 234 567</p>
                    </div>
                  </div>
                </div>

                {/* Email */}
                <div className="bg-white/10 backdrop-blur rounded-xl p-5">
                  <div className="flex items-start space-x-4">
                    <div className="bg-white/20 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-2">{t('contactEmailLabel') || 'Email'}</h4>
                      <p className="text-primary-100">info@horizonsacco.et</p>
                      <p className="text-primary-100">support@horizonsacco.et</p>
                    </div>
                  </div>
                </div>

                {/* Location */}
                <div className="bg-white/10 backdrop-blur rounded-xl p-5">
                  <div className="flex items-start space-x-4">
                    <div className="bg-white/20 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-2">{t('contactLocationLabel') || 'Office'}</h4>
                      <p className="text-primary-100">Mekelle, Tigray</p>
                      <p className="text-primary-100">Ethiopia</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Contact Form */}
            <div className="p-8 md:p-12 bg-gray-50">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Input */}
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-3 uppercase tracking-wide">
                    {t('contactName')}
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      className="w-full px-6 py-4 text-lg border-2 border-gray-200 rounded-xl focus:border-primary-500 focus:ring-2 focus:ring-primary-200 focus:outline-none transition bg-white"
                      placeholder="John Doe"
                    />
                    <div className="absolute right-5 top-1/2 transform -translate-y-1/2 text-gray-400">
                      <Users className="w-5 h-5" />
                    </div>
                  </div>
                </div>

                {/* Phone Input */}
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-3 uppercase tracking-wide">
                    {t('contactPhone')}
                  </label>
                  <div className="relative">
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      required
                      className="w-full px-6 py-4 text-lg border-2 border-gray-200 rounded-xl focus:border-primary-500 focus:ring-2 focus:ring-primary-200 focus:outline-none transition bg-white"
                      placeholder="+251 912 345 678"
                    />
                    <div className="absolute right-5 top-1/2 transform -translate-y-1/2 text-gray-400">
                      <Phone className="w-5 h-5" />
                    </div>
                  </div>
                </div>

                {/* Message Input */}
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-3 uppercase tracking-wide">
                    {t('contactMessage')}
                  </label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    rows="5"
                    className="w-full px-6 py-4 text-lg border-2 border-gray-200 rounded-xl focus:border-primary-500 focus:ring-2 focus:ring-primary-200 focus:outline-none transition resize-none bg-white"
                    placeholder="Your message..."
                  />
                </div>

                {/* Success Message */}
                {submitStatus === 'success' && (
                  <div className="p-4 bg-green-50 border border-green-200 rounded-xl animate-[fadeIn_0.3s_ease-out]">
                    <div className="flex items-center space-x-3">
                      <div className="bg-green-100 p-2 rounded-full">
                        <ShieldCheck className="w-5 h-5 text-green-600" />
                      </div>
                      <div>
                        <p className="font-semibold text-green-800">{t('contactSuccessTitle') || 'Message Sent!'}</p>
                        <p className="text-sm text-green-600">{t('contactSuccessMessage') || 'Thank you! We will contact you shortly.'}</p>
                      </div>
                    </div>
                  </div>
                )}

                {/* Error Message */}
                {submitStatus === 'error' && (
                  <div className="p-4 bg-red-50 border border-red-200 rounded-xl animate-[fadeIn_0.3s_ease-out]">
                    <div className="flex items-center space-x-3">
                      <div className="bg-red-100 p-2 rounded-full">
                        <X className="w-5 h-5 text-red-600" />
                      </div>
                      <div>
                        <p className="font-semibold text-red-800">{t('contactErrorTitle') || 'Error'}</p>
                        <p className="text-sm text-red-600">{t('contactErrorMessage') || 'Something went wrong. Please try again.'}</p>
                      </div>
                    </div>
                  </div>
                )}

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-5 rounded-xl transition transform flex items-center justify-center space-x-3 text-lg font-bold shadow-xl ${
                    isSubmitting
                      ? 'bg-gray-400 cursor-not-allowed'
                      : 'bg-primary-600 hover:bg-primary-700 hover:scale-[1.02] active:scale-[0.98] shadow-primary-500/30'
                  } text-white`}
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      <span>{t('contactSending') || 'Sending...'}</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-6 h-6" />
                      <span>{t('contactSend')}</span>
                    </>
                  )}
                </button>

                {/* Info Note */}
                <div className="mt-4 p-4 bg-white rounded-xl border border-gray-200">
                  <div className="flex items-start space-x-2">
                    <Info className="w-4 h-4 text-gray-600 mt-0.5 flex-shrink-0" />
                    <p className="text-xs text-gray-600 leading-relaxed">
                      {t('contactNote') || 'We typically respond within 24 hours during business days.'}
                    </p>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// ==================== FOOTER SECTION ====================
const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <img
                src="/horizon_logo.png"
                alt="Horizon SACCO Logo"
                className="h-10 w-auto"
              />
              <span className="text-xl font-bold">{t('brandName')}</span>
            </div>
            <p className="text-gray-400">{t('footerTagline')}</p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">{t('footerContact')}</h4>
            <div className="space-y-3">
              <a href="tel:+251909800203" className="flex items-center space-x-2 text-gray-400 hover:text-white transition">
                <Phone className="w-5 h-5" />
                <span>+251 909 800 203</span>
              </a>
              <a href="mailto:saccohorizon@gmail.com" className="flex items-center space-x-2 text-gray-400 hover:text-white transition">
                <Mail className="w-5 h-5" />
                <span>saccohorizon@gmail.com</span>
              </a>
            </div>
          </div>

          {/* Bank Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">{t('footerBankInfo')}</h4>
            <div className="space-y-3 text-gray-400">
              <p className="flex items-start space-x-2">
                <Building2 className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <span>{t('footerBankName')}</span>
              </p>
              <p className="text-sm">
                <span className="block text-gray-500 mb-1">{t('footerAccountNumber')}:</span>
                <span className="font-mono text-primary-400 font-semibold">013201695108100</span>
              </p>
            </div>
          </div>

          {/* Address */}
          <div>
            <h4 className="text-lg font-semibold mb-4">{t('footerAddress')}</h4>
            <div className="flex items-start space-x-2 text-gray-400">
              <MapPin className="w-5 h-5 mt-1 flex-shrink-0" />
              <div>
                <p>{t('footerAddressLine1')}</p>
                <p>{t('footerAddressLine2')}</p>
                <p>{t('footerAddressLine3')}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>{t('footerRights')}</p>
        </div>
      </div>
    </footer>
  );
};

// ==================== MAIN APP COMPONENT ====================
function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-white">
        <Navbar />
        <Hero />
        <About />
        <Services />
        <Membership />
        <WhyChooseUs />
        <InterestRates />
        <LoanCalculator />
        <Founder />
        <Contact />
        <Footer />
      </div>
    </LanguageProvider>
  );
}

export default App;
