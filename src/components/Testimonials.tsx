import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      quote: "My daughter improved her 400m time by 6 seconds after just one summer with Coach Jocelyn! Her confidence on the soccer field has skyrocketed too.",
      author: "Michelle P.",
      role: "Mother of 14-year-old soccer player",
      sport: "Soccer & Track"
    },
    {
      quote: "Coach Jocelyn doesn't just teach running - she builds athletes. My son's agility and endurance have transformed his basketball performance completely.",
      author: "Darnell T.",
      role: "Father of 12-year-old basketball player",
      sport: "Basketball"
    },
    {
      quote: "The Competitive Edge summer camp was amazing for my daughter's development. At 15, she needed that extra push to take her running to the next level, and Coach Jocelyn delivered!",
      author: "Sarah K.",
      role: "Mother of 15-year-old cross-country runner",
      sport: "Cross Country"
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            What Parents & Athletes <span className="text-[#1C9770]">Say</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real results from real families who've experienced The Competitive Edge difference
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 relative">
              <div className="absolute top-4 right-4">
                <Quote className="w-8 h-8 text-[#7AD1C3]/30" />
              </div>
              
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              
              <blockquote className="text-gray-700 mb-6 italic leading-relaxed">
                "{testimonial.quote}"
              </blockquote>
              
              <div className="border-t pt-4">
                <div className="font-semibold text-gray-900">{testimonial.author}</div>
                <div className="text-sm text-gray-600 mb-2">{testimonial.role}</div>
                <div className="inline-block bg-[#1C9770]/10 text-[#1C9770] px-3 py-1 rounded-full text-xs font-medium">
                  {testimonial.sport}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Results Highlight */}
        <div className="mt-16 bg-gradient-to-r from-[#1C9770] to-[#7AD1C3] rounded-2xl p-8 md:p-12 text-white text-center">
          <h3 className="text-3xl font-bold mb-8">Proven Results</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="text-4xl font-bold mb-2">150+</div>
              <div className="text-white/90">Athletes Trained</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">Multiple</div>
              <div className="text-white/90">School Records</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">1st</div>
              <div className="text-white/90">City Championship</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">100%</div>
              <div className="text-white/90">Satisfaction Rate</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;