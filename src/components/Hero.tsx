import React from 'react';
import { ArrowRight, Trophy, Target, Zap } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-[#030303] via-[#464646] to-[#030303] text-white py-16 lg:py-24">
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div>
            <img 
              src="/tce logo white cropped.png" 
              alt="The Competitive Edge Logo" 
              className="mx-auto h-24 md:h-32 lg:h-40 w-auto"
            />
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight mt-16">
            Elite Athletic Training for
            <span className="block text-[#1C9770]">Young Champions</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto text-gray-200 leading-relaxed">
            Give your young athlete the competitive advantage they deserve! Professional run coaching and athletic performance training in Charlotte, North Carolina for athletes of all sports and abilities.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a 
              href="#contact" 
              className="bg-[#1C9770] hover:bg-[#7AD1C3] text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
            >
              Start Training Today
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>
            <a 
              href="#camps" 
              className="border-2 border-[#1C9770] text-[#1C9770] hover:bg-[#1C9770] hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 flex items-center justify-center"
            >
              View Summer Camps
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="flex flex-col items-center p-6 bg-white/10 backdrop-blur-sm rounded-lg">
              <Trophy className="w-12 h-12 text-[#7AD1C3] mb-4" />
              <h3 className="text-xl font-semibold mb-2">Elite Results</h3>
              <p className="text-gray-300 text-center">Multiple school records and championship teams</p>
            </div>
            <div className="flex flex-col items-center p-6 bg-white/10 backdrop-blur-sm rounded-lg">
              <Target className="w-12 h-12 text-[#7AD1C3] mb-4" />
              <h3 className="text-xl font-semibold mb-2">Personalized Training</h3>
              <p className="text-gray-300 text-center">Tailored programs for every athlete's goals</p>
            </div>
            <div className="flex flex-col items-center p-6 bg-white/10 backdrop-blur-sm rounded-lg">
              <Zap className="w-12 h-12 text-[#7AD1C3] mb-4" />
              <h3 className="text-xl font-semibold mb-2">All Sports</h3>
              <p className="text-gray-300 text-center">Cross country, track, soccer, football, and more</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;