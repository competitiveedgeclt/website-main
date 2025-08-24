import React from 'react';
import { User, Users, Calendar, Target, Zap, Heart, Brain, Dumbbell } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: User,
      title: "Private Coaching",
      description: "One-on-one sessions tailored specifically to your athlete's sport, goals, and current abilities. Perfect for focused improvement and addressing individual challenges.",
      features: ["Personalized training plans", "Form analysis & correction", "Goal-specific programming", "Flexible scheduling"]
    },
    {
      icon: Users,
      title: "Semi-Private Training",
      description: "Small group sessions (2-4 athletes) that combine personalized attention with peer motivation. Great for friends or teammates looking to improve together.",
      features: ["Small group dynamics", "Peer motivation", "Cost-effective training", "Team building"]
    },
    {
      icon: Calendar,
      title: "Summer Camps",
      description: "Immersive multi-day programs designed to build comprehensive athletic foundations. Our popular summer camps combine technical training with fun team activities.",
      features: ["Multi-day intensive training", "Age-appropriate groups", "Comprehensive development", "Fun team activities"]
    },
    {
      icon: Target,
      title: "Specialized Clinics",
      description: "Focused workshops targeting specific skills like sprint technique, endurance building, or injury prevention. Perfect for athletes looking to strengthen particular aspects.",
      features: ["Skill-specific focus", "Workshop format", "Expert instruction", "Targeted improvement"]
    }
  ];

  const trainingAreas = [
    {
      icon: Zap,
      title: "Speed Development",
      description: "Proper running mechanics, explosive power training, and sprint-specific drills to maximize velocity and acceleration for any sport."
    },
    {
      icon: Heart,
      title: "Endurance Building",
      description: "Progressive cardiovascular training that builds stamina while preventing burnout, giving athletes the lung capacity and mental toughness to outlast the competition."
    },
    {
      icon: Brain,
      title: "Mobility & Agility",
      description: "Dynamic movement patterns that enhance flexibility, coordination, and quick directional changes essential for elite performance in field and court sports."
    },
    {
      icon: Dumbbell,
      title: "Strength & Power",
      description: "Age-appropriate resistance training and plyometrics to build explosive power, core stability, and overall muscular endurance."
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            What We <span className="text-[#1C9770]">Offer</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Elite training programs designed for serious athletes from upper middle school through college level, focusing on competitive excellence and performance optimization.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center mb-6">
                <div className="bg-[#1C9770]/10 p-3 rounded-lg mr-4">
                  <service.icon className="w-8 h-8 text-[#1C9770]" />
                </div>
                <div className="bg-[#1C9770] text-white px-3 py-1 rounded-full text-sm font-semibold">
                  {index + 1}
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-6">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-gray-700">
                    <div className="w-2 h-2 bg-[#7AD1C3] rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Training Philosophy */}
        <div className="bg-white rounded-2xl p-8 md:p-12">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Training <span className="text-[#1C9770]">Philosophy</span>
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Complete athletic development focusing on the four pillars of elite performance
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {trainingAreas.map((area, index) => (
              <div key={index} className="text-center group">
                <div className="bg-gradient-to-br from-[#1C9770] to-[#7AD1C3] p-6 rounded-xl mb-6 group-hover:scale-105 transition-transform duration-300">
                  <area.icon className="w-12 h-12 text-white mx-auto" />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">{area.title}</h4>
                <p className="text-gray-600 text-sm leading-relaxed">{area.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Sports We Train */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">Sports We Train</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {['Cross Country', 'Track & Field', 'Soccer', 'Football', 'Lacrosse', 'Field Hockey', 'Basketball', 'Baseball'].map((sport, index) => (
              <span key={index} className="bg-[#1C9770] text-white px-4 py-2 rounded-full text-sm font-medium">
                {sport}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;