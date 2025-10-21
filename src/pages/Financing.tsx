import { DollarSign, CreditCard, PiggyBank, TrendingUp, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Financing() {
  const options = [
    {
      icon: CreditCard,
      title: 'Solar Loans',
      rate: '2.99% APR',
      description: 'Own your system from day one with competitive loan rates.',
      features: [
        'No down payment options',
        'Terms up to 25 years',
        'Fixed interest rates',
        'Keep all tax credits',
        'Improve credit score',
      ],
    },
    {
      icon: PiggyBank,
      title: 'Cash Purchase',
      rate: 'Best ROI',
      description: 'Maximum savings with upfront payment.',
      features: [
        'Lowest total cost',
        'Fastest payback period',
        'Full tax benefits',
        'Immediate ownership',
        'No interest charges',
      ],
    },
    {
      icon: TrendingUp,
      title: 'Solar Lease',
      rate: '$0 Down',
      description: 'Start saving immediately with no upfront costs.',
      features: [
        'No installation costs',
        'Fixed monthly payment',
        'Maintenance included',
        'Immediate savings',
        'Flexible terms',
      ],
    },
  ];

  const incentives = [
    {
      title: 'Federal Solar Tax Credit',
      amount: '30%',
      description: 'Deduct 30% of your solar installation cost from federal taxes.',
    },
    {
      title: 'State Rebates',
      amount: 'Up to $3,000',
      description: 'Additional state-level incentives available in many areas.',
    },
    {
      title: 'Net Metering',
      amount: 'Full Credit',
      description: 'Earn credits for excess energy sent back to the grid.',
    },
    {
      title: 'Accelerated Depreciation',
      amount: '85%',
      description: 'Commercial properties can depreciate solar assets quickly.',
    },
  ];

  return (
    <div className="pt-20">
      <section className="bg-gradient-to-br from-orange-50 to-amber-50 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Flexible Financing Options
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Going solar is more affordable than ever. Explore our flexible financing solutions
              designed to fit any budget and maximize your savings.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Choose Your Payment Plan
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Multiple financing options to make solar accessible for everyone
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {options.map((option, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl p-8 border-2 border-gray-200 hover:border-orange-600 hover:shadow-2xl transition-all"
              >
                <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center mb-6">
                  <option.icon className="w-8 h-8 text-orange-600" />
                </div>

                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{option.title}</h3>
                  <div className="text-3xl font-bold text-orange-600 mb-3">{option.rate}</div>
                  <p className="text-gray-600">{option.description}</p>
                </div>

                <ul className="space-y-3 mb-8">
                  {option.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start space-x-2">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  to="/contact"
                  className="block w-full bg-orange-600 text-white py-3 rounded-full font-semibold text-center hover:bg-orange-700 transition-colors"
                >
                  Learn More
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-br from-gray-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Tax Credits & Incentives
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Take advantage of federal and state programs to reduce your solar investment
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {incentives.map((incentive, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg border-2 border-orange-100"
              >
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-2xl font-bold text-gray-900">{incentive.title}</h3>
                  <div className="text-2xl font-bold text-orange-600">{incentive.amount}</div>
                </div>
                <p className="text-gray-600">{incentive.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-orange-600 rounded-3xl p-8 text-center">
            <DollarSign className="w-12 h-12 text-white mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-white mb-4">
              Calculate Your Savings
            </h3>
            <p className="text-orange-100 mb-6 max-w-2xl mx-auto">
              Our team will help you maximize all available incentives and calculate your exact
              savings based on your location, energy usage, and system size.
            </p>
            <Link
              to="/contact"
              className="inline-block bg-white text-orange-600 px-8 py-3 rounded-full font-semibold hover:bg-orange-50 transition-colors"
            >
              Get Free Analysis
            </Link>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Typical Savings Timeline
            </h2>
          </div>

          <div className="space-y-6">
            {[
              { year: 'Year 1', savings: '$1,500', note: 'Immediate reduction in energy bills' },
              { year: 'Year 5', savings: '$7,500', note: 'System typically pays for itself' },
              { year: 'Year 10', savings: '$15,000', note: 'Pure savings begin' },
              { year: 'Year 25', savings: '$37,500+', note: 'Total lifetime savings' },
            ].map((item, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-6 bg-gray-50 rounded-xl"
              >
                <div>
                  <div className="font-bold text-gray-900 text-lg">{item.year}</div>
                  <div className="text-sm text-gray-600">{item.note}</div>
                </div>
                <div className="text-2xl font-bold text-orange-600">{item.savings}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
