import { Sun, Camera, Zap, Droplet, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Services() {
  const services = [
    {
      icon: Sun,
      title: 'Solar Street Light',
      description:
        'Energy-efficient solar street lighting solutions for public areas, pathways and campuses. Long runtime, intelligent control and low maintenance.',
      features: [
        'Automatic dusk-to-dawn operation',
        'High-efficiency PV modules',
        'Motion-sensing dimming',
        'Long-life batteries',
        'Minimal cabling & easy install',
      ],
      image: 'https://images.pexels.com/photos/1115804/pexels-photo-1115804.jpeg?auto=compress&cs=tinysrgb&w=1200',
    },
    {
      icon: Zap,
      title: 'Solar Fencing',
      description:
        'Secure your perimeter with solar-powered electric fencing and integrated power systems — ideal for remote properties, farms and commercial sites.',
      features: [
        'Off-grid power options',
        'Remote monitoring ready',
        'Low maintenance',
        'Scalable to any perimeter size',
        'Solar-charged backup',
      ],
      // Local image; place the file at public/images/solar-fencing.jpg
      image: '/images/solar-fencing.jpg',
    },
    {
      icon: Camera,
      title: 'Solar Cameras',
      description:
        'Reliable, solar-powered surveillance camera systems for continuous monitoring without grid dependence — perfect for remote sites.',
      features: [
        '24/7 surveillance with battery backup',
        'Motion-triggered recording',
        'Remote live view',
        'Weatherproof enclosures',
        'Low-power, efficient components',
      ],
      // Local image; place the file at public/images/solar-cameras.jpg
      image: '/images/solar-cameras.jpg',
    },
    {
      icon: Droplet,
      title: 'Water Softener',
      description:
        'Advanced water softening systems to protect plumbing and increase appliance life. We offer solar-compatible control and pumping options where needed.',
      features: [
        'Mineral removal & scale prevention',
        'Smart regeneration scheduling',
        'Compact, service-friendly designs',
        'Optional solar-powered controls',
        'Extended equipment warranties',
      ],
      // Local image; place the file at public/images/water-softener.jpg
      image: '/images/water-softener.jpg',
    },
  ];

  return (
    <div className="pt-20">
      <section className="bg-gradient-to-br from-orange-50 to-amber-50 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">Our Services</h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Complete solar solutions tailored to your energy needs. From consultation to
              installation and ongoing support, we're with you every step of the way.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 space-y-24">
          {services.map((service, index) => (
            <div
              key={index}
              className={`grid lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center mb-6">
                  <service.icon className="w-8 h-8 text-orange-600" />
                </div>
                <h2 className="text-4xl font-bold text-gray-900 mb-4">{service.title}</h2>
                <p className="text-xl text-gray-600 mb-8">{service.description}</p>

                <div className="space-y-3 mb-8">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>

                <Link
                  to="/contact"
                  className="inline-block bg-orange-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-orange-700 transition-colors"
                >
                  Get Started
                </Link>
              </div>

              <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                <img
                  src={service.image}
                  srcSet={
                    service.title === 'Solar Street Light'
                      ? '/images/solar-street-light-small.jpg 600w, /images/solar-street-light.jpg 1200w'
                      : undefined
                  }
                  sizes="(max-width: 768px) 100vw, 50vw"
                  loading="lazy"
                  decoding="async"
                  alt={service.title}
                  className="rounded-3xl shadow-2xl w-full"
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Need a Custom Solution?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Every project is unique. Contact us to discuss your specific requirements
            and get a tailored solar solution.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-orange-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-orange-700 transition-colors shadow-lg"
          >
            Contact Our Team
          </Link>
        </div>
      </section>
    </div>
  );
}
