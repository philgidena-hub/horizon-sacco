import { useState } from 'react';
import { Calculator, CreditCard, Users, TrendingUp, Coins, Receipt } from 'lucide-react';
import { calculateRegFee } from '../data';

const FinancialCalculator = ({ lang, translations }) => {
  const [mode, setMode] = useState('loan'); // 'loan' or 'membership'
  const t = translations[lang].calculator;

  // Loan Calculator State
  const [monthlySaving, setMonthlySaving] = useState(1000);
  const [months, setMonths] = useState(12);

  // Membership Calculator State
  const [shares, setShares] = useState(5);
  const [initialDeposit, setInitialDeposit] = useState(1000);

  // Loan Calculation
  const loanLimit = monthlySaving * months * 3;

  // Membership Calculation
  const shareCost = shares * 200;
  const regFee = calculateRegFee(initialDeposit);
  const totalMembershipCost = shareCost + initialDeposit + regFee;

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-ET').format(amount);
  };

  return (
    <section id="calculator" className="py-20 bg-gradient-to-br from-gray-900 via-green-900 to-gray-900 relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-green-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-green-600/5 rounded-full blur-3xl" />
      </div>

      {/* Grid Pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M0 0h40v40H0V0zm1 1v38h38V1H1z'/%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 bg-green-500/20 text-green-400 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Calculator className="w-4 h-4" />
            <span>{t.financialTools}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            {t.title}
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            {t.subtitle}
          </p>
        </div>

        {/* Toggle Switch */}
        <div className="flex justify-center mb-10">
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-1.5 inline-flex flex-col sm:flex-row w-full sm:w-auto">
            <button
              onClick={() => setMode('loan')}
              className={`flex items-center justify-center space-x-2 px-4 sm:px-6 py-3 rounded-lg font-medium transition-all duration-300 text-sm sm:text-base ${
                mode === 'loan'
                  ? 'bg-green-600 text-white shadow-lg shadow-green-600/30'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              <CreditCard className="w-5 h-5" />
              <span>{t.loanEligibility}</span>
            </button>
            <button
              onClick={() => setMode('membership')}
              className={`flex items-center justify-center space-x-2 px-4 sm:px-6 py-3 rounded-lg font-medium transition-all duration-300 text-sm sm:text-base ${
                mode === 'membership'
                  ? 'bg-green-600 text-white shadow-lg shadow-green-600/30'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              <Users className="w-5 h-5" />
              <span>{t.membershipCost}</span>
            </button>
          </div>
        </div>

        {/* Calculator Card */}
        <div className="bg-gray-800/40 backdrop-blur-xl rounded-3xl border border-gray-700/50 overflow-hidden shadow-2xl">
          {mode === 'loan' ? (
            /* Loan Eligibility Calculator */
            <div className="grid md:grid-cols-2 gap-0">
              {/* Input Side */}
              <div className="p-8 border-b md:border-b-0 md:border-r border-gray-700/50">
                <h3 className="text-xl font-semibold text-white mb-6 flex items-center space-x-2">
                  <TrendingUp className="w-5 h-5 text-green-500" />
                  <span>{t.calculateLoanLimit}</span>
                </h3>

                {/* Monthly Saving Input */}
                <div className="mb-6">
                  <label className="block text-gray-400 text-sm font-medium mb-2">
                    {t.monthlySaving} (ETB)
                  </label>
                  <input
                    type="number"
                    value={monthlySaving}
                    onChange={(e) => setMonthlySaving(Number(e.target.value) || 0)}
                    className="w-full bg-gray-900/50 border border-gray-700 rounded-xl px-4 py-3 text-white text-lg font-medium focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-500/20 transition-all duration-200"
                    min="0"
                    step="100"
                  />
                  <input
                    type="range"
                    value={monthlySaving}
                    onChange={(e) => setMonthlySaving(Number(e.target.value))}
                    min="500"
                    max="50000"
                    step="500"
                    className="w-full mt-3 accent-green-500"
                  />
                </div>

                {/* Duration Input */}
                <div>
                  <label className="block text-gray-400 text-sm font-medium mb-2">
                    {t.months}
                  </label>
                  <input
                    type="number"
                    value={months}
                    onChange={(e) => setMonths(Number(e.target.value) || 0)}
                    className="w-full bg-gray-900/50 border border-gray-700 rounded-xl px-4 py-3 text-white text-lg font-medium focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-500/20 transition-all duration-200"
                    min="1"
                    max="60"
                  />
                  <input
                    type="range"
                    value={months}
                    onChange={(e) => setMonths(Number(e.target.value))}
                    min="6"
                    max="60"
                    step="6"
                    className="w-full mt-3 accent-green-500"
                  />
                </div>
              </div>

              {/* Result Side */}
              <div className="p-8 bg-gradient-to-br from-green-600/20 to-emerald-600/10 flex flex-col justify-center items-center text-center">
                <div className="text-gray-400 text-sm font-medium mb-2">
                  {t.loanLimit}
                </div>
                <div className="text-5xl sm:text-6xl font-bold text-white mb-4">
                  {formatCurrency(loanLimit)}
                  <span className="text-2xl text-gray-400 ml-2">ETB</span>
                </div>
                <div className="text-gray-400 text-sm max-w-xs">
                  {t.basedOn} {formatCurrency(monthlySaving)} ETB {t.monthlyFor}{' '}
                  {months} {t.multiplier}
                </div>

                {/* Formula Breakdown */}
                <div className="mt-6 bg-gray-900/30 rounded-xl p-4 w-full max-w-xs">
                  <div className="text-xs text-gray-500 mb-2">{t.formula}</div>
                  <div className="text-green-400 font-mono text-sm">
                    {formatCurrency(monthlySaving)} × {months} × 3 ={' '}
                    {formatCurrency(loanLimit)}
                  </div>
                </div>
              </div>
            </div>
          ) : (
            /* Membership Cost Calculator */
            <div className="grid md:grid-cols-2 gap-0">
              {/* Input Side */}
              <div className="p-8 border-b md:border-b-0 md:border-r border-gray-700/50">
                <h3 className="text-xl font-semibold text-white mb-6 flex items-center space-x-2">
                  <Coins className="w-5 h-5 text-green-500" />
                  <span>{t.calculateMembershipCost}</span>
                </h3>

                {/* Shares Input */}
                <div className="mb-6">
                  <label className="block text-gray-400 text-sm font-medium mb-2">
                    {t.shares} ({t.sharesEach})
                  </label>
                  <input
                    type="number"
                    value={shares}
                    onChange={(e) => setShares(Number(e.target.value) || 0)}
                    className="w-full bg-gray-900/50 border border-gray-700 rounded-xl px-4 py-3 text-white text-lg font-medium focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-500/20 transition-all duration-200"
                    min="1"
                    max="100"
                  />
                  <input
                    type="range"
                    value={shares}
                    onChange={(e) => setShares(Number(e.target.value))}
                    min="1"
                    max="50"
                    step="1"
                    className="w-full mt-3 accent-green-500"
                  />
                </div>

                {/* Initial Deposit Input */}
                <div>
                  <label className="block text-gray-400 text-sm font-medium mb-2">
                    {t.initialDeposit} (ETB)
                  </label>
                  <input
                    type="number"
                    value={initialDeposit}
                    onChange={(e) => setInitialDeposit(Number(e.target.value) || 0)}
                    className="w-full bg-gray-900/50 border border-gray-700 rounded-xl px-4 py-3 text-white text-lg font-medium focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-500/20 transition-all duration-200"
                    min="0"
                    step="500"
                  />
                  <input
                    type="range"
                    value={initialDeposit}
                    onChange={(e) => setInitialDeposit(Number(e.target.value))}
                    min="1000"
                    max="50000"
                    step="1000"
                    className="w-full mt-3 accent-green-500"
                  />
                </div>
              </div>

              {/* Result Side */}
              <div className="p-8 bg-gradient-to-br from-green-600/20 to-emerald-600/10">
                <div className="text-center mb-6">
                  <div className="text-gray-400 text-sm font-medium mb-2">
                    {t.totalCost}
                  </div>
                  <div className="text-5xl sm:text-6xl font-bold text-white">
                    {formatCurrency(totalMembershipCost)}
                    <span className="text-2xl text-gray-400 ml-2">ETB</span>
                  </div>
                </div>

                {/* Breakdown */}
                <div className="bg-gray-900/30 rounded-xl p-5 space-y-4">
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center space-x-2 text-gray-400">
                      <Receipt className="w-4 h-4" />
                      <span>{t.shareCost} ({shares} × 200)</span>
                    </div>
                    <span className="text-white font-medium">
                      {formatCurrency(shareCost)} ETB
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center space-x-2 text-gray-400">
                      <Coins className="w-4 h-4" />
                      <span>{t.initialDeposit}</span>
                    </div>
                    <span className="text-white font-medium">
                      {formatCurrency(initialDeposit)} ETB
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center space-x-2 text-gray-400">
                      <Users className="w-4 h-4" />
                      <span>{t.registrationFee}</span>
                    </div>
                    <span className="text-white font-medium">
                      {formatCurrency(regFee)} ETB
                    </span>
                  </div>
                  <div className="border-t border-gray-700 pt-4 flex items-center justify-between">
                    <span className="text-green-400 font-medium">{t.total}</span>
                    <span className="text-green-400 font-bold text-lg">
                      {formatCurrency(totalMembershipCost)} ETB
                    </span>
                  </div>
                </div>

                {/* Fee Info */}
                <div className="mt-4 text-xs text-gray-500 text-center">
                  {t.feeInfo}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Bottom Note */}
        <div className="text-center mt-8">
          <p className="text-gray-500 text-sm">
            {t.disclaimer}
          </p>
        </div>
      </div>
    </section>
  );
};

export default FinancialCalculator;
