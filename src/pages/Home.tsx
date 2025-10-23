import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Zap, Shield, Award, TrendingDown } from 'lucide-react';
import { useSwipeable } from 'react-swipeable';

const slides = [
  {
    id: 1,
    title: 'Power Your Future with Solar Intelligence',
    subtitle: 'Clean Energy Revolution',
    description:
      'Experience next-gen renewable energy technology designed to power homes and industries sustainably. Solar energy, smarter than ever.',
  // Photo by Pixabay from Pexels (closeup solar panel)
  imageUrl: 'https://images.pexels.com/photos/159243/pexels-photo-159243.jpeg?auto=compress&cs=tinysrgb&h=720&w=1280',
  },
  {
    id: 2,
    title: 'Commercial Solar Grids for Businesses',
    subtitle: 'Scale with Confidence',
    description:
      'Reliable and scalable solar grid installations for industrial and commercial buildings. Maximize uptime, minimize carbon footprint.',
  // Photo by Towfiqu barbhuiya from Pexels (aerial roof with solar panels)
  imageUrl: 'https://images.pexels.com/photos/12606669/pexels-photo-12606669.jpeg?auto=compress&cs=tinysrgb&h=720&w=1280',
  },
  {
    id: 3,
    title: 'Smart Battery Storage for 24/7 Power',
    subtitle: 'Energy Retention & Freedom',
    description:
      'Store solar energy for round-the-clock power even when the sun isn’t shining. Be independent, resilient, and future-ready.',
    // Photo by Dhruvan Patel from Pexels (back view of solar panels)
    imageUrl: 'https://images.pexels.com/photos/25751713/pexels-photo-25751713.jpeg?auto=compress&cs=tinysrgb&h=720&w=1280',
  },
];

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000); // change slide every 5 seconds
    return () => clearInterval(timer);
  }, []);

  const handlers = useSwipeable({
    onSwipedLeft: () => setCurrentSlide((prev) => (prev + 1) % slides.length),
    onSwipedRight: () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length),
    trackMouse: true,
  });

  const slide = slides[currentSlide];
  const [hoveredImage, setHoveredImage] = useState<string | null>(null);

  const titleParts = slide.title.includes('with') ? slide.title.split('with') : [slide.title, ''];

  return (
    <div className="bg-futuristic min-h-screen text-white">
      {/* Hero Section - full viewport height with sliding background images */}
      <section
        className="relative futuristic-accent overflow-hidden min-h-screen"
        {...handlers}
      >
        {/* Sliding backgrounds */}
        <div className="absolute inset-0 overflow-hidden h-full">
          <div
            className="flex h-full transition-transform duration-700 ease-in-out"
            style={{ width: `${slides.length * 100}%`, transform: `translateX(-${currentSlide * (100 / slides.length)}%)` }}
          >
            {slides.map((s) => (
              <div
                key={s.id}
                className="w-full flex-shrink-0 h-full bg-cover bg-center"
                style={{ backgroundImage: `url(${s.imageUrl})` }}
              />
            ))}
          </div>
          {/* dark overlay for contrast */}
          <div className="absolute inset-0 bg-black/40" />
        </div>

        {/* Content overlay - full-bleed dark panel with centered content */}
        <div className="absolute inset-0 flex items-center">
          <div className="w-full h-full">
            <div className="w-full h-full bg-black/40 flex items-center">
              <div className="w-full max-w-5xl mx-auto px-6 md:px-8">
                <div>
                  <span className="bg-orange-500/20 text-orange-300 px-3 py-1.5 rounded-full text-sm font-semibold">
                    {slide.subtitle}
                  </span>

                  <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight mt-3">
                    {titleParts[0].trim()}
                    {titleParts[1] && (
                      <span className="block text-orange-400 mt-1">{titleParts[1].trim()}</span>
                    )}
                  </h1>

                  <p className="text-sm sm:text-base text-gray-200 mt-3 leading-relaxed max-w-3xl">
                    {slide.description}
                  </p>
                </div>

                <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[{ Icon: Zap, title: 'Residential Solar', desc: 'Custom rooftop systems for modern homes' },
                    { Icon: Shield, title: 'Commercial Installations', desc: 'Reliable and scalable solar grids' },
                    { Icon: Award, title: 'Battery Storage', desc: 'Smart energy retention for round-the-clock power' },
                    { Icon: TrendingDown, title: 'Cost Efficiency', desc: 'Save up to 70% on your annual energy bills' }].map(({ Icon, title, desc }, i) => (
                    <div key={i} className="flex items-start space-x-3">
                      <div className="w-8 h-8 bg-orange-500/30 rounded-lg flex items-center justify-center">
                        <Icon className="w-4 h-4 text-orange-300" />
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold">{title}</h4>
                        <p className="text-xs text-gray-300">{desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 flex flex-wrap gap-3">
                  <Link
                    to="/contact"
                    className="bg-orange-500 text-white px-4 py-2 rounded-full font-semibold hover:bg-orange-600 transition-all shadow text-sm"
                  >
                    Start Saving Today
                  </Link>
                  <Link
                    to="/services"
                    className="bg-white/10 text-white px-4 py-2 rounded-full font-semibold hover:bg-white/20 transition-colors border border-white/30 text-sm"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Controls: dots + arrows */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex items-center space-x-4">
          <button
            onClick={() => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)}
            className="bg-white/20 text-white p-2 rounded-full shadow-lg hover:bg-white/30"
            aria-label="Previous slide"
          >
            &lt;
          </button>
          <div className="flex items-center space-x-2">
            {slides.map((s, i) => (
              <button
                key={s.id}
                onClick={() => setCurrentSlide(i)}
                className={`w-3 h-3 rounded-full ${i === currentSlide ? 'bg-white' : 'bg-white/40'} transition-all`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
          <button
            onClick={() => setCurrentSlide((prev) => (prev + 1) % slides.length)}
            className="bg-white/20 text-white p-2 rounded-full shadow-lg hover:bg-white/30"
            aria-label="Next slide"
          >
            &gt;
          </button>
        </div>
      </section>

      {/* Why Choose Us Section - bigger cards with images and hover interactions */}
      <section
        className="py-20 text-gray-900 relative"
        style={hoveredImage ? { backgroundImage: `url(${hoveredImage})`, backgroundSize: 'cover', backgroundPosition: 'center' } : { backgroundColor: '#ffffff' }}
      >
        <div className="max-w-6xl mx-auto text-center px-6">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">Why Choose SolarTech?</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Premium solar solutions backed by innovation, reliability, and long-term support.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {[
              { title: 'High Efficiency', desc: 'Panels with 22% solar conversion efficiency.', image: 'https://images.pexels.com/photos/356049/pexels-photo-356049.jpeg?auto=compress&cs=tinysrgb&h=720&w=1280' },
              { title: '25-Year Warranty', desc: 'Industry-leading protection on all products.', image: 'https://images.pexels.com/photos/34369598/pexels-photo-34369598.jpeg?auto=compress&cs=tinysrgb&h=720&w=1280' },
              { title: 'Certified Experts', desc: 'Professional engineers & trusted technicians.', image: '/images/solar-cameras.jpg' },
              { title: 'Affordable Plans', desc: 'Flexible EMI and low-cost financing options.', image: '/images/water-softener.jpg' },
            ].map(({ title, desc, image }, i) => (
              <div
                key={i}
                onMouseEnter={() => setHoveredImage(image)}
                onMouseLeave={() => setHoveredImage(null)}
                className="bg-white/90 backdrop-blur-sm rounded-xl p-4 text-center transform transition-all hover:scale-105 hover:shadow-2xl cursor-pointer"
              >
                <div className="w-24 h-24 mb-4 overflow-hidden rounded-full mx-auto shadow-md">
                  <img src={image} alt={title} className="w-full h-full object-cover" />
                </div>
                <h3 className="text-lg font-bold">{title}</h3>
                <p className="text-gray-600 mt-2 text-sm">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-orange-600 to-orange-700 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Ready to Go Solar?
          </h2>
          <p className="text-lg text-orange-100 mb-8 max-w-2xl mx-auto">
            Get your free consultation and start saving energy — and money — with SolarTech.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center space-x-2 bg-white text-orange-600 px-6 py-3 rounded-full font-semibold hover:bg-orange-50 transition-all shadow-xl"
          >
            <span>Get Your Free Quote</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
 
