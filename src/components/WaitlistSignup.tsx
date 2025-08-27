import React, { useState } from 'react';
import { Bell, CheckCircle, Send, Star, Clock } from 'lucide-react';
import emailjs from '@emailjs/browser';

const WaitlistSignup = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    athleteAge: '',
    sport: '',
    interests: '',
    honeypot: '' // Anti-spam field
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Anti-spam check - if honeypot field is filled, it's likely spam
    if (formData.honeypot) {
      console.log('Spam detected - form submission blocked');
      return;
    }
    
    setIsSubmitting(true);

    try {
      const templateParams = {
        to_name: 'competitiveedgeclt@gmail.com',
        subject: 'Join Waitlist Request',
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone,
        athlete_age: formData.athleteAge,
        sport: formData.sport,
        interests: formData.interests,
      };

      await emailjs.send(
        'service_2e8eag6',
        'template_jr1wfnr', 
        templateParams,
        '0S2Mhg2y8uLXVe3b4'
      );
      
      setIsSubmitted(true);
      setTimeout(() => setIsSubmitted(false), 5000);
    } catch (error) {
      console.error('Error sending email:', error);
      alert('There was an error sending your message. Please try again or contact us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section className="py-20 bg-gradient-to-br from-[#030303] via-[#464646] to-[#030303] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center bg-[#1C9770]/20 px-4 py-2 rounded-full mb-6">
            <Star className="w-5 h-5 text-[#7AD1C3] mr-2" />
            <span className="text-[#7AD1C3] font-semibold">Exclusive Access</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Join the <span className="text-[#7AD1C3]">Elite Waitlist</span>
          </h2>
          
          <p className="text-xl mb-8 text-gray-200 max-w-3xl mx-auto">
            Our camps and specialized clinics sell out within hours of opening registration. 
            Join our exclusive waitlist to be the first notified when new elite training opportunities become available.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
              <Bell className="w-8 h-8 text-[#7AD1C3] mx-auto mb-3" />
              <h3 className="font-semibold mb-2">First Access</h3>
              <p className="text-sm text-gray-300">Get notified 24-48 hours before public registration opens</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
              <Clock className="w-8 h-8 text-[#7AD1C3] mx-auto mb-3" />
              <h3 className="font-semibold mb-2">Priority Booking</h3>
              <p className="text-sm text-gray-300">Secure your spot before programs fill up</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
              <Star className="w-8 h-8 text-[#7AD1C3] mx-auto mb-3" />
              <h3 className="font-semibold mb-2">Exclusive Updates</h3>
              <p className="text-sm text-gray-300">Receive training tips and program announcements</p>
            </div>
          </div>

          {isSubmitted ? (
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl max-w-md mx-auto">
              <CheckCircle className="w-16 h-16 text-[#7AD1C3] mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2">You're On The List!</h3>
              <p className="text-gray-300">You'll be the first to know about new elite training opportunities.</p>
            </div>
          ) : (
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl max-w-2xl mx-auto">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                      Parent/Guardian Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg focus:ring-2 focus:ring-[#7AD1C3] focus:border-transparent text-white placeholder-gray-400"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg focus:ring-2 focus:ring-[#7AD1C3] focus:border-transparent text-white placeholder-gray-400"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg focus:ring-2 focus:ring-[#7AD1C3] focus:border-transparent text-white placeholder-gray-400"
                      placeholder="(240) 555-0123"
                    />
                  </div>
                  <div>
                    <label htmlFor="athleteAge" className="block text-sm font-medium text-gray-300 mb-2">
                      Athlete's Age *
                    </label>
                    <select
                      id="athleteAge"
                      name="athleteAge"
                      required
                      value={formData.athleteAge}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg focus:ring-2 focus:ring-[#7AD1C3] focus:border-transparent text-white"
                    >
                      <option value="" className="text-gray-900">Select age range</option>
                      <option value="12-14" className="text-gray-900">12-14 years (Middle School)</option>
                      <option value="15-18" className="text-gray-900">15-18 years (High School)</option>
                      <option value="18-22" className="text-gray-900">18-22 years (College)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="sport" className="block text-sm font-medium text-gray-300 mb-2">
                    Primary Sport(s) *
                  </label>
                  <input
                    type="text"
                    id="sport"
                    name="sport"
                    required
                    value={formData.sport}
                    onChange={handleChange}
                    placeholder="e.g., Cross Country, Track, Soccer, Football"
                    className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg focus:ring-2 focus:ring-[#7AD1C3] focus:border-transparent text-white placeholder-gray-400"
                  />
                </div>

                <div>
                  <label htmlFor="interests" className="block text-sm font-medium text-gray-300 mb-2">
                    Training Interests
                  </label>
                  <textarea
                    id="interests"
                    name="interests"
                    rows={3}
                    value={formData.interests}
                    onChange={handleChange}
                    placeholder="What type of training are you most interested in? (Speed, Endurance, Technique, etc.)"
                    className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg focus:ring-2 focus:ring-[#7AD1C3] focus:border-transparent text-white placeholder-gray-400"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#1C9770] hover:bg-[#7AD1C3] disabled:bg-gray-600 text-white py-4 px-6 rounded-lg font-semibold text-lg transition-colors duration-300 flex items-center justify-center"
                >
                  {isSubmitting ? 'Joining Waitlist...' : 'Join Elite Waitlist'}
                  <Send className="ml-2 w-5 h-5" />
                </button>
                
                {/* Honeypot field - hidden from users but visible to bots */}
                <input
                  type="text"
                  name="honeypot"
                  value={formData.honeypot}
                  onChange={handleChange}
                  style={{ display: 'none' }}
                  tabIndex={-1}
                  autoComplete="off"
                />
              </form>
            </div>
          )}

          <div className="mt-8 text-sm text-gray-400">
            <p>🔒 Your information is secure and will only be used for camp and clinic notifications.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WaitlistSignup;