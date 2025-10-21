import { Link } from 'react-router-dom';
import { ArrowRight, Zap, Shield, Award, TrendingDown } from 'lucide-react';

export default function Home() {
  return (
    <div className="pt-20">
      <section className="relative bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-6 py-24 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-block">
                <span className="bg-orange-100 text-orange-800 px-4 py-2 rounded-full text-sm font-semibold">
                  Clean Energy Solutions
                </span>
              </div>

              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Power Your Future with
                <span className="block text-orange-600 mt-2">Solar Energy</span>
              </h1>

              <p className="text-xl text-gray-600 leading-relaxed">
                Switch to sustainable solar power and reduce your energy costs by up to 70%.
                Join thousands of satisfied customers who've made the smart choice.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="group bg-orange-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-orange-700 transition-all shadow-xl shadow-orange-200 flex items-center justify-center space-x-2"
                >
                  <span>Start Saving Today</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/services"
                  className="bg-white text-gray-900 px-8 py-4 rounded-full font-semibold hover:bg-gray-50 transition-colors border-2 border-gray-200 text-center"
                >
                  Learn More
                </Link>
              </div>

              <div className="flex items-center space-x-8 pt-4">
                <div>
                  <div className="text-3xl font-bold text-gray-900">25+</div>
                  <div className="text-sm text-gray-600">Years Experience</div>
                </div>
                <div className="h-12 w-px bg-gray-300"></div>
                <div>
                  <div className="text-3xl font-bold text-gray-900">10K+</div>
                  <div className="text-sm text-gray-600">Happy Customers</div>
                </div>
                <div className="h-12 w-px bg-gray-300"></div>
                <div>
                  <div className="text-3xl font-bold text-gray-900">99%</div>
                  <div className="text-sm text-gray-600">Satisfaction Rate</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.pexels.com/photos/4254167/pexels-photo-4254167.jpeg?auto=compress&cs=tinysrgb&w=1200"
                  alt="Solar panels on modern home"
                  className="w-full h-auto"
                />
              </div>
              <div className="absolute -top-6 -right-6 w-72 h-72 bg-orange-200 rounded-full blur-3xl opacity-50"></div>
              <div className="absolute -bottom-6 -left-6 w-72 h-72 bg-yellow-200 rounded-full blur-3xl opacity-50"></div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Why Choose SolarTech?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Industry-leading solar solutions backed by expertise and innovation
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Zap,
                title: 'High Efficiency',
                description: 'Premium solar panels with 22% efficiency rating',
              },
              {
                icon: Shield,
                title: '25-Year Warranty',
                description: 'Comprehensive coverage on all installations',
              },
              {
                icon: Award,
                title: 'Certified Experts',
                description: 'Licensed and insured professional installers',
              },
              {
                icon: TrendingDown,
                title: 'Best Pricing',
                description: 'Competitive rates with flexible financing',
              },
            ].map((feature, index) => (
              <div key={index} className="text-center space-y-4">
                <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center mx-auto">
                  <feature.icon className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-br from-orange-600 to-orange-700">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Go Solar?
          </h2>
          <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
            Get a free consultation and discover how much you can save with solar energy
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center space-x-2 bg-white text-orange-600 px-8 py-4 rounded-full font-semibold hover:bg-orange-50 transition-colors shadow-xl"
          >
            <span>Get Your Free Quote</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
