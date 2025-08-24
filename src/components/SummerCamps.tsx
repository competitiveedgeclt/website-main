import React from 'react';
import { Calendar, Clock, MapPin, Users, Star, ArrowRight } from 'lucide-react';

const SummerCamps = () => {
  const camps = [
    {
      name: "Technique Builder",
      dates: "June 10-14, 2025",
      ageGroup: "12-15 years",
      focus: "Sprint mechanics, reaction time",
      color: "from-[#1C9770] to-[#7AD1C3]"
    },
    {
      name: "Endurance Builder",
      dates: "June 24-28, 2025",
      ageGroup: "12-16 years",
      focus: "Distance running, pacing strategy",
      color: "from-[#7AD1C3] to-[#1C9770]"
    },
    {
      name: "Multi-Sport Elite",
      dates: "July 8-12, 2025",
      ageGroup: "14-18 years",
      focus: "Comprehensive athletic development",
      color: "from-[#1C9770] to-[#464646]"
    },
    {
      name: "Speed on the Trails",
      dates: "July 22-26, 2025",
      ageGroup: "15-19 years",
      focus: "Advanced speed techniques",
      color: "from-[#464646] to-[#1C9770]"
    }
  ];

  return (
    <section id="camps" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-[#1C9770]/10 px-4 py-2 rounded-full mb-6">
            <Star className="w-5 h-5 text-[#1C9770] mr-2" />
            <span className="text-[#1C9770] font-semibold">Limited Spots Available!</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            2025 Summer <span className="text-[#1C9770]">Camps</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Intensive multi-day programs designed for serious athletes ready to elevate their performance. These elite camps fill up fast!
          </p>
          <div className="bg-[#7AD1C3]/20 border border-[#1C9770]/30 rounded-lg p-6 max-w-2xl mx-auto">
            <div className="text-3xl font-bold text-[#1C9770] mb-2">$250 per camp session</div>
            <p className="text-gray-700">Elite training sessions run 9:00 AM - 11:30 AM daily in Charlotte, NC</p>
          </div>
        </div>

        {/* Camps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {camps.map((camp, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className={`bg-gradient-to-r ${camp.color} p-6 text-white`}>
                <h3 className="text-2xl font-bold mb-2">{camp.name}</h3>
                <p className="text-white/90">{camp.focus}</p>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  <div className="flex items-center text-gray-700">
                    <Calendar className="w-5 h-5 text-[#1C9770] mr-3" />
                    <span className="font-semibold">{camp.dates}</span>
                  </div>
                  <div className="flex items-center text-gray-700">
                    <Users className="w-5 h-5 text-[#1C9770] mr-3" />
                    <span>Ages {camp.ageGroup}</span>
                  </div>
                  <div className="flex items-center text-gray-700">
                    <Clock className="w-5 h-5 text-[#1C9770] mr-3" />
                    <span>9:00 AM - 11:30 AM daily</span>
                  </div>
                  <div className="flex items-center text-gray-700">
                    <MapPin className="w-5 h-5 text-[#1C9770] mr-3" />
                    <span>Charlotte, NC</span>
                  </div>
                </div>
                <button className="w-full mt-6 bg-gray-400 text-white py-3 px-6 rounded-lg font-semibold cursor-not-allowed flex items-center justify-center" disabled>
                  Sold Out
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Why Off-Season Matters */}
        <div className="bg-gradient-to-br from-[#030303] to-[#464646] text-white rounded-2xl p-8 md:p-12">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-3xl md:text-4xl font-bold mb-6">
              Why the <span className="text-[#7AD1C3]">Off-Season</span> Matters
            </h3>
            <p className="text-xl mb-8 text-gray-200">
              Great athletes are built in the off-season.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
                <h4 className="text-lg font-semibold mb-3 text-[#7AD1C3]">Build Foundation</h4>
                <p className="text-gray-300 text-sm">
                  Address weaknesses and develop techniques without competition pressure
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
                <h4 className="text-lg font-semibold mb-3 text-[#7AD1C3]">Gain Advantage</h4>
                <p className="text-gray-300 text-sm">
                  While peers rest, dedicated athletes use summer to get ahead
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
                <h4 className="text-lg font-semibold mb-3 text-[#7AD1C3]">Return Stronger</h4>
                <p className="text-gray-300 text-sm">
                  Come back faster, stronger, and more confident than ever
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SummerCamps;