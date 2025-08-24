import React, { useState } from 'react';
import { Phone, Mail, Instagram, MapPin, Clock, Send, CheckCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    athleteAge: '',
    sport: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Ready to Give Your Athlete the <span className="text-[#1C9770]">Edge?</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Contact Coach Jocelyn today to discuss elite training sessions, upcoming camps, or to create a customized performance plan for your dedicated athlete.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-gradient-to-br from-[#1C9770] to-[#7AD1C3] p-8 rounded-xl text-white">
              <h3 className="text-2xl font-bold mb-6">Get In Touch</h3>
              <div className="space-y-4">
                <a href="tel:240-328-7404" className="flex items-center hover:text-white/80 transition-colors">
                  <Phone className="w-6 h-6 mr-4" />
                  <div>
                    <div className="font-semibold">(240) 328-7404</div>
                    <div className="text-sm text-white/80">Call or text anytime</div>
                  </div>
                </a>
                <a href="mailto:coach@competitiveedgeclt.com" className="flex items-center hover:text-white/80 transition-colors">
                  <Mail className="w-6 h-6 mr-4" />
                  <div>
                    <div className="font-semibold">coach@competitiveedgeclt.com</div>
                    <div className="text-sm text-white/80">Email for detailed inquiries</div>
                  </div>
                </a>
                <a href="https://instagram.com/jmwi22" target="_blank" rel="noopener noreferrer" className="flex items-center hover:text-white/80 transition-colors">
                  <Instagram className="w-6 h-6 mr-4" />
                  <div>
                    <div className="font-semibold">@jmwi22</div>
                    <div className="text-sm text-white/80">Follow for training tips</div>
                  </div>
                </a>
              </div>
            </div>

            <div className="bg-gray-50 p-8 rounded-xl">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Training Location</h3>
              <div className="flex items-start mb-4">
                <MapPin className="w-6 h-6 text-[#1C9770] mr-3 mt-1" />
                <div>
                  <div className="font-semibold text-gray-900">Charlotte, North Carolina</div>
                  <div className="text-gray-600">Exact location details provided upon registration</div>
                </div>
              </div>
              <div className="flex items-start">
                <Clock className="w-6 h-6 text-[#1C9770] mr-3 mt-1" />
                <div>
                  <div className="font-semibold text-gray-900">Flexible Scheduling</div>
                  <div className="text-gray-600">Year-round training opportunities available</div>
                </div>
              </div>
            </div>

            <div className="bg-[#7AD1C3]/10 border border-[#1C9770]/20 p-6 rounded-xl">
              <h4 className="font-bold text-gray-900 mb-2">⚡ Quick Response Guarantee</h4>
              <p className="text-gray-700 text-sm">
                Spaces fill quickly, especially for summer programs. We respond to all inquiries within 24 hours!
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-50 p-8 rounded-xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Send a Message</h3>
            
            {isSubmitted ? (
              <div className="text-center py-8">
                <CheckCircle className="w-16 h-16 text-[#1C9770] mx-auto mb-4" />
                <h4 className="text-xl font-bold text-gray-900 mb-2">Message Sent!</h4>
                <p className="text-gray-600">Coach Jocelyn will get back to you within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Parent/Guardian Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1C9770] focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1C9770] focus:border-transparent"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1C9770] focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label htmlFor="athleteAge" className="block text-sm font-medium text-gray-700 mb-2">
                      Athlete's Age
                    </label>
                    <select
                      id="athleteAge"
                      name="athleteAge"
                      value={formData.athleteAge}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1C9770] focus:border-transparent"
                    >
                      <option value="">Select age range</option>
                      <option value="8-12">8-12 years</option>
                      <option value="13-15">13-15 years</option>
                      <option value="16-18">16-18 years</option>
                      <option value="18+">18+ years</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="sport" className="block text-sm font-medium text-gray-700 mb-2">
                    Primary Sport(s)
                  </label>
                  <input
                    type="text"
                    id="sport"
                    name="sport"
                    value={formData.sport}
                    onChange={handleChange}
                    placeholder="e.g., Soccer, Track, Cross Country, Football"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1C9770] focus:border-transparent"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your athlete's goals, current training, or any specific questions you have..."
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1C9770] focus:border-transparent"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#1C9770] hover:bg-[#7AD1C3] text-white py-4 px-6 rounded-lg font-semibold text-lg transition-colors duration-300 flex items-center justify-center"
                >
                  Send Message
                  <Send className="ml-2 w-5 h-5" />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;