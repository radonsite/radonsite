import { Link } from 'react-router-dom';
import { ArrowRight, Zap, Shield, Award, TrendingDown } from 'lucide-react';

export default function Home() {
  return (
    <div className="bg-futuristic min-h-screen text-white">
      {/* Hero Section */}
      <section className="relative futuristic-accent py-24 lg:py-32 overflow-hidden" >
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side */}
            <div className="space-y-10">
              <div>
<span className="bg-orange-500/20 text-orange-300 px-4 py-2 rounded-full text-sm font-semibold">
Clean Energy Revolution
</span>

          <h1 className="text-5xl lg:text-6xl font-extrabold leading-tight mt-4">
            Power Your Future with
            <span className="block text-orange-400 mt-2">Solar Intelligence</span>
          </h1>

          <p className="text-lg text-gray-200 mt-4 leading-relaxed">
            Experience next-gen renewable energy technology designed to power homes and industries sustainably. Solar energy, smarter than ever.
          </p>
        </div>

        {/* Features */}
        {[
          { Icon: Zap, title: 'Residential Solar', desc: 'Custom rooftop systems for modern homes' },
          { Icon: Shield, title: 'Commercial Installations', desc: 'Reliable and scalable solar grids' },
          { Icon: Award, title: 'Battery Storage', desc: 'Smart energy retention for round-the-clock power' },
          { Icon: TrendingDown, title: 'Cost Efficiency', desc: 'Save up to 70% on your annual energy bills' },
        ].map(({ Icon, title, desc }, i) => (
          <div key={i} className="flex items-start space-x-4">
            <div className="w-12 h-12 bg-orange-500/30 rounded-lg flex items-center justify-center">
              <Icon className="w-6 h-6 text-orange-300" />
            </div>
            <div>
              <h4 className="text-lg font-semibold">{title}</h4>
              <p className="text-sm text-gray-300">{desc}</p>
            </div>
          </div>
        ))}

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 pt-4">
          <Link
            to="/contact"
            className="group bg-orange-500 text-white px-8 py-4 rounded-full font-semibold hover:bg-orange-600 transition-all shadow-lg flex items-center justify-center space-x-2"
          >
            <span>Start Saving Today</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            to="/services"
            className="bg-white/10 text-white px-8 py-4 rounded-full font-semibold hover:bg-white/20 transition-colors border border-white/30 text-center"
          >
            Learn More
          </Link>
        </div>

        {/* Stats */}
        <div className="flex items-center space-x-8 pt-6">
          <div>
            <div className="text-3xl font-bold text-white">25+</div>
            <div className="text-sm text-gray-300">Years Experience</div>
          </div>
          <div className="h-12 w-px bg-gray-500/50"></div>
          <div>
            <div className="text-3xl font-bold text-white">10K+</div>
            <div className="text-sm text-gray-300">Happy Customers</div>
          </div>
          <div className="h-12 w-px bg-gray-500/50"></div>
          <div>
            <div className="text-3xl font-bold text-white">99%</div>
            <div className="text-sm text-gray-300">Satisfaction Rate</div>
          </div>
        </div>
      </div>

      {/* Right Side Image */}
      <div className="relative hero-glide-right">
        <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border border-white/10">
          <img
            src="https://images.pexels.com/photos/4254167/pexels-photo-4254167.jpeg?auto=compress&cs=tinysrgb&w=1200"
            alt="Solar panels on modern home"
            className="w-full h-auto"
          />
        </div>
        <div className="absolute -top-10 -right-10 w-72 h-72 bg-orange-400/30 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-10 -left-10 w-72 h-72 bg-cyan-400/30 rounded-full blur-3xl"></div>
      </div>
    </div>
  </section>

  {/* Why Choose Us Section */}
  <section className="py-24 bg-white text-gray-900">
    <div className="max-w-7xl mx-auto px-6">
      <div className="text-center mb-16">
        <h2 className="text-4xl lg:text-5xl font-bold mb-4">Why Choose SolarTech?</h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Premium solar solutions backed by innovation, reliability, and long-term support.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
        {[
          { Icon: Zap, title: 'High Efficiency', desc: 'Panels with 22% solar conversion efficiency.' },
          { Icon: Shield, title: '25-Year Warranty', desc: 'Industry-leading protection on all products.' },
          { Icon: Award, title: 'Certified Experts', desc: 'Professional engineers & trusted technicians.' },
          { Icon: TrendingDown, title: 'Affordable Plans', desc: 'Flexible EMI and low-cost financing options.' },
        ].map(({ Icon, title, desc }, i) => (
          <div key={i} className="text-center space-y-4">
            <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center mx-auto">
              <Icon className="w-8 h-8 text-orange-600" />
            </div>
            <h3 className="text-xl font-bold">{title}</h3>
            <p className="text-gray-600">{desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>

  {/* CTA Section */}
  <section className="py-24 bg-gradient-to-br from-orange-600 to-orange-700 text-center">
    <div className="max-w-7xl mx-auto px-6">
      <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
        Ready to Go Solar?
      </h2>
      <p className="text-lg text-orange-100 mb-8 max-w-2xl mx-auto">
        Get your free consultation and start saving energy — and money — with SolarTech.
      </p>
      <Link
        to="/contact"
        className="inline-flex items-center space-x-2 bg-white text-orange-600 px-8 py-4 rounded-full font-semibold hover:bg-orange-50 transition-all shadow-xl"
      >
        <span>Get Your Free Quote</span>
        <ArrowRight className="w-5 h-5" />
      </Link>
    </div>
  </section>
</div>


);
}