import { Users, Target, Heart, Lightbulb } from 'lucide-react';

export default function About() {
  return (
    <div className="pt-20">
      <section className="bg-gradient-to-br from-orange-50 to-amber-50 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              About SolarTech
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              For over 25 years, we've been at the forefront of the renewable energy revolution,
              helping thousands of families and businesses transition to clean, sustainable solar power.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <img
                src="https://images.pexels.com/photos/8297537/pexels-photo-8297537.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Solar technician at work"
                className="rounded-3xl shadow-2xl"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-gray-900">How Solar Panels Work</h2>
                <p className="text-gray-600 leading-relaxed">
                  Solar panels convert sunlight into electricity using semiconductor cells (usually
                  silicon) arranged in modules. When sunlight hits these cells it excites electrons,
                  creating a flow of direct current (DC). An inverter then converts DC to alternating
                  current (AC) which powers homes and businesses or is exported to the grid.
                </p>

                <h3 className="text-2xl font-semibold text-gray-900 mt-6">Benefits of Solar</h3>
                <p className="text-gray-600 leading-relaxed">
                  Solar power reduces energy bills, lowers carbon emissions, and increases energy
                  independence. Modern systems are reliable, require minimal maintenance, and can be
                  paired with battery storage for backup power and load shifting.
                </p>

                <h3 className="text-2xl font-semibold text-gray-900 mt-6">Things to Consider</h3>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>Roof orientation and shading affect production — south-facing, unshaded roofs perform best.</li>
                  <li>System size should match your load and budget; net metering and incentives may impact ROI.</li>
                  <li>Quality components, proper installation, and monitoring improve long-term performance.</li>
                  <li>Consider batteries if you need backup power or want to maximize self-consumption.</li>
                </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Our Values
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Target,
                title: 'Excellence',
                description: 'We deliver superior quality in every installation and service.',
              },
              {
                icon: Heart,
                title: 'Integrity',
                description: 'Honest, transparent business practices in all our interactions.',
              },
              {
                icon: Lightbulb,
                title: 'Innovation',
                description: 'Constantly adopting the latest solar technology and methods.',
              },
              {
                icon: Users,
                title: 'Customer First',
                description: 'Your satisfaction and success are our top priorities.',
              },
            ].map((value, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="w-14 h-14 bg-orange-100 rounded-xl flex items-center justify-center mb-6">
                  <value.icon className="w-7 h-7 text-orange-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Team section removed per request */}

      <section className="py-24 bg-orange-600">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Join Our Mission
          </h2>
          <p className="text-xl text-orange-100 mb-8">
            Be part of the clean energy revolution. Together, we can create a sustainable future.
          </p>
        </div>
      </section>
    </div>
  );
}
