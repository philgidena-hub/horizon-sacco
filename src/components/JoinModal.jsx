import { useState } from 'react';
import { X, User, Mail, Phone, MapPin, Briefcase, CheckCircle, AlertCircle } from 'lucide-react';
import { calculateRegFee } from '../data';

const JoinModal = ({ isOpen, onClose, lang }) => {
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    address: '',
    occupation: '',
    initialDeposit: 1000,
    shares: 5,
    savingsType: 'regular',
  });

  const labels = {
    en: {
      title: 'Join Horizon SACCO',
      step1: 'Personal Info',
      step2: 'Membership Details',
      step3: 'Review & Submit',
      fullName: 'Full Name',
      email: 'Email Address',
      phone: 'Phone Number',
      address: 'Address',
      occupation: 'Occupation',
      initialDeposit: 'Initial Deposit (ETB)',
      shares: 'Number of Shares',
      savingsType: 'Savings Account Type',
      regular: 'Regular Savings (7.5%)',
      children: "Children's Savings (10%)",
      diaspora: 'Diaspora Savings (8%)',
      next: 'Next',
      back: 'Back',
      submit: 'Submit Application',
      submitting: 'Submitting...',
      review: 'Review Your Application',
      shareCost: 'Share Cost',
      regFee: 'Registration Fee',
      total: 'Total Initial Payment',
      success: 'Application Submitted!',
      successDesc: 'Welcome to Horizon SACCO! Our team will contact you within 48 hours to complete your registration.',
      close: 'Close',
    },
    am: {
      title: 'ሆራይዘን ሳኮን ይቀላቀሉ',
      step1: 'የግል መረጃ',
      step2: 'የአባልነት ዝርዝሮች',
      step3: 'ገምግም እና አስገባ',
      fullName: 'ሙሉ ስም',
      email: 'ኢሜል አድራሻ',
      phone: 'ስልክ ቁጥር',
      address: 'አድራሻ',
      occupation: 'ሙያ',
      initialDeposit: 'የመጀመሪያ ተቀማጭ (ብር)',
      shares: 'የአክሲዮን ብዛት',
      savingsType: 'የቁጠባ አካውንት አይነት',
      regular: 'መደበኛ ቁጠባ (7.5%)',
      children: 'የልጆች ቁጠባ (10%)',
      diaspora: 'ዲያስፖራ ቁጠባ (8%)',
      next: 'ቀጥል',
      back: 'ተመለስ',
      submit: 'ማመልከቻ አስገባ',
      submitting: 'በማስገባት ላይ...',
      review: 'ማመልከቻዎን ይገምግሙ',
      shareCost: 'የአክሲዮን ዋጋ',
      regFee: 'የምዝገባ ክፍያ',
      total: 'ጠቅላላ የመጀመሪያ ክፍያ',
      success: 'ማመልከቻ ገብቷል!',
      successDesc: 'እንኳን ወደ ሆራይዘን ሳኮ በደህና መጡ! ቡድናችን ምዝገባዎን ለማጠናቀቅ በ48 ሰዓታት ውስጥ ያገኝዎታል።',
      close: 'ዝጋ',
    },
    ti: {
      title: 'ሆራይዘን ሳኮ ተጸንበሩ',
      step1: 'ውልቃዊ ሓበሬታ',
      step2: 'ዝርዝራት ኣባልነት',
      step3: 'ገምግም እሞ ኣእቱ',
      fullName: 'ምሉእ ስም',
      email: 'ኢመይል ኣድራሻ',
      phone: 'ቁጽሪ ስልኪ',
      address: 'ኣድራሻ',
      occupation: 'ሞያ',
      initialDeposit: 'ናይ መጀመርታ ተቐማጢ (ብር)',
      shares: 'ብዝሒ ኣክስዮናት',
      savingsType: 'ዓይነት ናይ ቁጠባ ሕሳብ',
      regular: 'ስሩዕ ቁጠባ (7.5%)',
      children: 'ናይ ህጻናት ቁጠባ (10%)',
      diaspora: 'ዲያስፖራ ቁጠባ (8%)',
      next: 'ቀጽል',
      back: 'ተመለስ',
      submit: 'መመልከቲ ኣእቱ',
      submitting: 'ይኣቱ ኣሎ...',
      review: 'መመልከቲኻ ገምግም',
      shareCost: 'ዋጋ ኣክስዮን',
      regFee: 'ክፍሊት ምዝገባ',
      total: 'ጠቕላላ ናይ መጀመርታ ክፍሊት',
      success: 'መመልከቲ ኣትዩ!',
      successDesc: 'እንቋዕ ናብ ሆራይዘን ሳኮ ብደሓን መጻእኩም! ጉጅለና ምዝገባኹም ንምዝዛም ኣብ ውሽጢ 48 ሰዓታት ክረኽበኩም እዩ።',
      close: 'ዕጸው',
    },
  };

  const t = labels[lang];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === 'initialDeposit' || name === 'shares' ? Number(value) : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const handleClose = () => {
    setStep(1);
    setIsSubmitted(false);
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      address: '',
      occupation: '',
      initialDeposit: 1000,
      shares: 5,
      savingsType: 'regular',
    });
    onClose();
  };

  const shareCost = formData.shares * 200;
  const regFee = calculateRegFee(formData.initialDeposit);
  const totalCost = shareCost + formData.initialDeposit + regFee;

  const formatCurrency = (amount) => new Intl.NumberFormat('en-ET').format(amount);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={handleClose}
      />

      {/* Modal */}
      <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 bg-white border-b border-gray-100 px-6 py-4 flex items-center justify-between rounded-t-2xl">
          <h2 className="text-xl font-bold text-gray-900">{t.title}</h2>
          <button
            onClick={handleClose}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <X className="w-5 h-5 text-gray-500" />
          </button>
        </div>

        {isSubmitted ? (
          /* Success State */
          <div className="p-8 text-center">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-10 h-10 text-green-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">{t.success}</h3>
            <p className="text-gray-600 mb-6">{t.successDesc}</p>
            <button
              onClick={handleClose}
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-xl font-medium transition-colors"
            >
              {t.close}
            </button>
          </div>
        ) : (
          <>
            {/* Progress Steps */}
            <div className="px-6 pt-6">
              <div className="flex items-center justify-between mb-8">
                {[1, 2, 3].map((s) => (
                  <div key={s} className="flex items-center">
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center font-medium transition-colors ${
                        step >= s
                          ? 'bg-green-600 text-white'
                          : 'bg-gray-200 text-gray-500'
                      }`}
                    >
                      {s}
                    </div>
                    {s < 3 && (
                      <div
                        className={`w-16 sm:w-24 h-1 mx-2 rounded ${
                          step > s ? 'bg-green-600' : 'bg-gray-200'
                        }`}
                      />
                    )}
                  </div>
                ))}
              </div>
              <div className="text-center mb-6">
                <span className="text-sm font-medium text-green-600">
                  {step === 1 ? t.step1 : step === 2 ? t.step2 : t.step3}
                </span>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="px-6 pb-6">
              {/* Step 1: Personal Info */}
              {step === 1 && (
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      {t.fullName} *
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        required
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      {t.email} *
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      {t.phone} *
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      {t.address}
                    </label>
                    <div className="relative">
                      <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="text"
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      {t.occupation}
                    </label>
                    <div className="relative">
                      <Briefcase className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="text"
                        name="occupation"
                        value={formData.occupation}
                        onChange={handleChange}
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* Step 2: Membership Details */}
              {step === 2 && (
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      {t.savingsType}
                    </label>
                    <select
                      name="savingsType"
                      value={formData.savingsType}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent bg-white"
                    >
                      <option value="regular">{t.regular}</option>
                      <option value="children">{t.children}</option>
                      <option value="diaspora">{t.diaspora}</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      {t.shares} (200 ETB each)
                    </label>
                    <input
                      type="number"
                      name="shares"
                      value={formData.shares}
                      onChange={handleChange}
                      min="1"
                      max="100"
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    />
                    <input
                      type="range"
                      name="shares"
                      value={formData.shares}
                      onChange={handleChange}
                      min="1"
                      max="50"
                      className="w-full mt-2 accent-green-600"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      {t.initialDeposit}
                    </label>
                    <input
                      type="number"
                      name="initialDeposit"
                      value={formData.initialDeposit}
                      onChange={handleChange}
                      min="1000"
                      step="500"
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    />
                    <input
                      type="range"
                      name="initialDeposit"
                      value={formData.initialDeposit}
                      onChange={handleChange}
                      min="1000"
                      max="50000"
                      step="1000"
                      className="w-full mt-2 accent-green-600"
                    />
                  </div>

                  {/* Cost Preview */}
                  <div className="bg-gray-50 rounded-xl p-4 mt-4">
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-gray-600">{t.shareCost}</span>
                      <span className="font-medium">{formatCurrency(shareCost)} ETB</span>
                    </div>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-gray-600">{t.regFee}</span>
                      <span className="font-medium">{formatCurrency(regFee)} ETB</span>
                    </div>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-gray-600">{t.initialDeposit}</span>
                      <span className="font-medium">{formatCurrency(formData.initialDeposit)} ETB</span>
                    </div>
                    <div className="border-t border-gray-200 pt-2 mt-2 flex justify-between">
                      <span className="font-medium text-gray-900">{t.total}</span>
                      <span className="font-bold text-green-600">{formatCurrency(totalCost)} ETB</span>
                    </div>
                  </div>
                </div>
              )}

              {/* Step 3: Review */}
              {step === 3 && (
                <div className="space-y-4">
                  <h3 className="font-semibold text-gray-900 mb-4">{t.review}</h3>

                  <div className="bg-gray-50 rounded-xl p-4 space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-600">{t.fullName}</span>
                      <span className="font-medium text-gray-900">{formData.fullName}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">{t.email}</span>
                      <span className="font-medium text-gray-900">{formData.email}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">{t.phone}</span>
                      <span className="font-medium text-gray-900">{formData.phone}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">{t.savingsType}</span>
                      <span className="font-medium text-gray-900">
                        {formData.savingsType === 'regular' ? t.regular :
                         formData.savingsType === 'children' ? t.children : t.diaspora}
                      </span>
                    </div>
                  </div>

                  <div className="bg-green-50 rounded-xl p-4 border border-green-200">
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-gray-600">{t.shareCost} ({formData.shares} × 200)</span>
                      <span className="font-medium">{formatCurrency(shareCost)} ETB</span>
                    </div>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-gray-600">{t.regFee}</span>
                      <span className="font-medium">{formatCurrency(regFee)} ETB</span>
                    </div>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-gray-600">{t.initialDeposit}</span>
                      <span className="font-medium">{formatCurrency(formData.initialDeposit)} ETB</span>
                    </div>
                    <div className="border-t border-green-300 pt-2 mt-2 flex justify-between">
                      <span className="font-semibold text-gray-900">{t.total}</span>
                      <span className="font-bold text-green-600 text-lg">{formatCurrency(totalCost)} ETB</span>
                    </div>
                  </div>

                  <div className="flex items-start space-x-2 text-sm text-gray-500 bg-amber-50 p-3 rounded-lg">
                    <AlertCircle className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                    <p>By submitting, you agree to our terms of service and membership guidelines.</p>
                  </div>
                </div>
              )}

              {/* Navigation Buttons */}
              <div className="flex gap-3 mt-6">
                {step > 1 && (
                  <button
                    type="button"
                    onClick={() => setStep(step - 1)}
                    className="flex-1 border border-gray-300 text-gray-700 hover:bg-gray-50 py-3 rounded-xl font-medium transition-colors"
                  >
                    {t.back}
                  </button>
                )}
                {step < 3 ? (
                  <button
                    type="button"
                    onClick={() => setStep(step + 1)}
                    className="flex-1 bg-green-600 hover:bg-green-700 text-white py-3 rounded-xl font-medium transition-colors"
                  >
                    {t.next}
                  </button>
                ) : (
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="flex-1 bg-green-600 hover:bg-green-700 disabled:bg-green-400 text-white py-3 rounded-xl font-medium transition-colors flex items-center justify-center space-x-2"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        <span>{t.submitting}</span>
                      </>
                    ) : (
                      <span>{t.submit}</span>
                    )}
                  </button>
                )}
              </div>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default JoinModal;
