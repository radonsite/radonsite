import { Mail, Phone, MapPin, Clock } from 'lucide-react';

export default function Contact() {
  // Form removed — contact info and map are retained

  return (
    <div className="pt-20">
      <section className="bg-gradient-to-br from-orange-50 to-amber-50 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Contact Us
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Ready to start your solar journey? Get in touch with our team for a free
              consultation and custom quote.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Get In Touch</h2>
                <p className="text-gray-600 leading-relaxed">
                  Our team of solar experts is here to answer your questions and guide you
                  through every step of the process. Reach out today and discover how solar
                  can transform your energy future.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                    <Phone className="w-6 h-6 text-orange-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 mb-1">Phone</div>
                    <div className="text-gray-600">+91 9701834593</div>
                    <div className="text-sm text-gray-500">Mon-Fri, 8am-6pm PST</div>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                    <Mail className="w-6 h-6 text-orange-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 mb-1">Email</div>
                    <div className="text-gray-600">bhavishyasolutions25@gmail.com</div>
                    <div className="text-sm text-gray-500">24-hour response time</div>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-orange-600" />
                  </div>
                    <div>
                      <div className="font-semibold text-gray-900 mb-1">Office Location</div>
                      <div className="text-gray-600">R.R.Pet Main Road, Powerpet</div>
                      <div className="text-gray-600">Eluru, Andhra Pradesh 534002</div>
                    </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                    <Clock className="w-6 h-6 text-orange-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 mb-1">Business Hours</div>
                    <div className="text-gray-600">Monday - Friday: 8:00 AM - 6:00 PM</div>
                    <div className="text-gray-600">Saturday: 9:00 AM - 3:00 PM</div>
                    <div className="text-gray-600">Sunday: Closed</div>
                  </div>
                </div>
              </div>

              <div className="bg-orange-600 rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">Why Choose Us?</h3>
                <ul className="space-y-3">
                  <li className="flex items-center space-x-3">
                    <span className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">✓</span>
                    <span>Free energy consultation</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <span className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">✓</span>
                    <span>No-obligation custom quote</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <span className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">✓</span>
                    <span>25-year warranty guarantee</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <span className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">✓</span>
                    <span>0% financing available</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Message form removed per request */}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-white rounded-3xl overflow-hidden shadow-xl">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3833.1234567890123!2d81.1123456!3d16.7101234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a3a6f123456789%3A0xabcdef1234567890!2sR.R.Pet%20Main%20Road%2C%20Powerpet%2C%20Eluru%2C%20Andhra%20Pradesh%20534002!5e0!3m2!1sen!2sin!4v1700000000000"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Office Location"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
}
