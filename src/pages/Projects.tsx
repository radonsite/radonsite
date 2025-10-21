// no icon imports needed for projects card summary
import AboutPanel from '../components/AboutPanel';

export default function Projects() {
  const projects = [
    {
      title: 'Residential Installation - Beverly Hills',
      location: 'Beverly Hills, CA',
      date: 'October 2024',
      capacity: '12 kW',
      image: 'https://images.pexels.com/photos/4254167/pexels-photo-4254167.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Premium residential solar installation featuring high-efficiency panels and battery storage.',
      savings: '$2,400/year',
    },
    {
      title: 'Commercial Complex - Downtown LA',
      location: 'Los Angeles, CA',
      date: 'September 2024',
      capacity: '250 kW',
      image: 'https://images.pexels.com/photos/356036/pexels-photo-356036.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Large-scale commercial installation for a multi-tenant office building.',
      savings: '$45,000/year',
    },
    {
      title: 'Smart Home Solar System',
      location: 'San Diego, CA',
      date: 'August 2024',
      capacity: '8 kW',
      image: 'https://images.pexels.com/photos/8853502/pexels-photo-8853502.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Integrated solar and battery storage with smart home automation.',
      savings: '$1,800/year',
    },
    {
      title: 'Industrial Facility - Riverside',
      location: 'Riverside, CA',
      date: 'July 2024',
      capacity: '500 kW',
      image: 'https://images.pexels.com/photos/414943/pexels-photo-414943.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Massive industrial solar array with advanced monitoring systems.',
      savings: '$90,000/year',
    },
    {
      title: 'Eco-Friendly Resort',
      location: 'Palm Springs, CA',
      date: 'June 2024',
      capacity: '150 kW',
      image: 'https://images.pexels.com/photos/1549326/pexels-photo-1549326.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Sustainable energy solution for a luxury resort with pool heating integration.',
      savings: '$28,000/year',
    },
    {
      title: 'Community Solar Project',
      location: 'Orange County, CA',
      date: 'May 2024',
      capacity: '75 kW',
      image: 'https://images.pexels.com/photos/9875415/pexels-photo-9875415.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Community center solar installation serving local neighborhood.',
      savings: '$15,000/year',
    },
  ];

  return (
    <div className="pt-20">
      <section className="bg-gradient-to-br from-orange-50 to-amber-50 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Our Projects
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Explore our portfolio of successful solar installations. From residential homes
              to large commercial facilities, we deliver excellence in every project.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
                {projects.map((project, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-2xl overflow-hidden border-2 border-gray-100 hover:border-orange-200 hover:shadow-2xl transition-all duration-300"
                  >
                    <div className="relative h-64 overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                      />
                      <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full text-sm font-bold text-orange-600">
                        {project.capacity}
                      </div>
                    </div>

                    <div className="p-6 space-y-4">
                      <h3 className="text-xl font-bold text-gray-900">{project.title}</h3>

                      <p className="text-gray-600 text-sm leading-relaxed">{project.description}</p>

                      <p className="text-gray-600 text-sm leading-relaxed">{project.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <aside className="lg:col-span-1">
              <AboutPanel />
            </aside>
          </div>
        </div>
      </section>

      <section className="py-24 bg-orange-600">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Your Project Could Be Next
          </h2>
          <p className="text-xl text-orange-100 mb-8">
            Join our growing list of satisfied customers who are saving money and helping the planet.
          </p>
        </div>
      </section>
    </div>
  );
}
