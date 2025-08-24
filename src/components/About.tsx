import React from 'react';
import { Award, Heart, Users, BookOpen } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Meet Coach <span className="text-[#1C9770]">Jocelyn Ingram</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Elite ultra and marathon runner dedicated to developing serious teenage and college athletes with comprehensive training that builds champions on and off the field.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="bg-gray-50 p-8 rounded-xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Elite Athletic Background</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <Award className="w-5 h-5 text-[#1C9770] mr-3 mt-1 flex-shrink-0" />
                  <span>Boston Marathon qualifier (3x) and Top 100 Female 100-mile Runner in North America</span>
                </li>
                <li className="flex items-start">
                  <Award className="w-5 h-5 text-[#1C9770] mr-3 mt-1 flex-shrink-0" />
                  <span>Cross Country and Track Coach at Charlotte Christian High School with multiple school records</span>
                </li>
                <li className="flex items-start">
                  <Award className="w-5 h-5 text-[#1C9770] mr-3 mt-1 flex-shrink-0" />
                  <span>Founded Randolph Middle School's first cross country program - led girls to city championship</span>
                </li>
              </ul>
            </div>

            <div className="bg-[#1C9770]/5 p-8 rounded-xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Holistic Development Approach</h3>
              <p className="text-gray-700 mb-4">
                Beyond mastering running mechanics, Coach Jocelyn champions a comprehensive approach to athletic development, covering:
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-[#1C9770] rounded-full mr-3"></div>
                  <span className="text-gray-700">Nutrition & Hydration</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-[#1C9770] rounded-full mr-3"></div>
                  <span className="text-gray-700">Mobility & Recovery</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-[#1C9770] rounded-full mr-3"></div>
                  <span className="text-gray-700">Strength Training</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-[#1C9770] rounded-full mr-3"></div>
                  <span className="text-gray-700">Mental Toughness</span>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="text-center p-8 bg-gradient-to-br from-[#1C9770] to-[#7AD1C3] text-white rounded-xl">
              <Users className="w-16 h-16 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2">150+</h3>
              <p className="text-lg">Athletes Coached</p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="text-center p-6 bg-gray-50 rounded-xl">
                <Heart className="w-12 h-12 text-[#1C9770] mx-auto mb-3" />
                <h4 className="font-semibold text-gray-900 mb-2">Faith-Based</h4>
                <p className="text-sm text-gray-600">Character development through Christian values</p>
              </div>
              <div className="text-center p-6 bg-gray-50 rounded-xl">
                <BookOpen className="w-12 h-12 text-[#1C9770] mx-auto mb-3" />
                <h4 className="font-semibold text-gray-900 mb-2">Education</h4>
                <p className="text-sm text-gray-600">MBA and extensive coaching experience</p>
              </div>
            </div>

            <div className="bg-[#7AD1C3]/10 p-6 rounded-xl border-l-4 border-[#1C9770]">
              <blockquote className="text-gray-700 italic">
                "I believe that coaching is about more than just winning races—it's about shaping young lives. My approach integrates athletic training with character development, helping athletes grow while pursuing excellence."
              </blockquote>
              <cite className="text-[#1C9770] font-semibold mt-2 block">- Coach Jocelyn Ingram</cite>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;