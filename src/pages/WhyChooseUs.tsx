export default function WhyChooseUs() {
  return (
    <div className="pt-20">
      <section className="bg-gradient-to-br from-gray-50 to-white py-24">
        <div className="max-w-5xl mx-auto px-6">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">Why Choose Bhavishya Solutions</h1>
          <p className="text-lg text-gray-600 mb-8">We combine industry-leading solar technology with local expertise to deliver reliable, efficient, and cost-effective solar solutions tailored to your needs.</p>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-2xl shadow">
              <h3 className="text-xl font-bold mb-3">Proven Experience</h3>
              <p className="text-gray-600">Years of installations across residential and commercial projects with strong performance records.</p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow">
              <h3 className="text-xl font-bold mb-3">Certified Teams</h3>
              <p className="text-gray-600">Our engineers and electricians are certified and trained in the latest solar best practices.</p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow">
              <h3 className="text-xl font-bold mb-3">Warranty & Support</h3>
              <p className="text-gray-600">Comprehensive warranties and responsive support ensure your system performs for decades.</p>
            </div>
          </div>

          <div className="mt-12 bg-orange-600 text-white p-8 rounded-2xl text-center">
            <h3 className="text-2xl font-bold mb-2">Ready to get started?</h3>
            <p className="mb-4">Contact our team for a free consultation and customized quote.</p>
            <a href="/contact" className="inline-block bg-white text-orange-600 px-6 py-3 rounded-full font-semibold">Contact Us</a>
          </div>
        </div>
      </section>
    </div>
  );
}
