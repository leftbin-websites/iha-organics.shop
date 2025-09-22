import React from "react";
import { Leaf, Users, Recycle, Heart } from "lucide-react";

export default function SustainabilitySection() {
  const impacts = [
    {
      icon: <Leaf className="w-8 h-8" />,
      title: "100% Chemical-Free Farming",
      description: "Our organic methods preserve soil health and protect biodiversity",
      color: "text-green-600"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Empowering Tribal Communities",
      description: "Supporting 50+ farming families with dignified employment",
      color: "text-blue-600"
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Women's Financial Independence",
      description: "Enabling tribal women to achieve economic empowerment",
      color: "text-red-600"
    },
    {
      icon: <Recycle className="w-8 h-8" />,
      title: "Eco-Friendly Packaging",
      description: "100% recyclable and biodegradable materials",
      color: "text-amber-600"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-r from-green-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our Commitment to Sustainability
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Every purchase contributes to a sustainable ecosystem that nurtures the land, 
            empowers communities, and preserves traditional farming wisdom for future generations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {impacts.map((impact, index) => (
            <div key={index} className="text-center space-y-4">
              <div className={`${impact.color} mx-auto w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg`}>
                {impact.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900">{impact.title}</h3>
              <p className="text-gray-600 leading-relaxed">{impact.description}</p>
            </div>
          ))}
        </div>

        {/* Quote Section */}
        <div className="mt-16 text-center">
          <div className="bg-white rounded-2xl p-8 shadow-lg max-w-4xl mx-auto">
            <blockquote className="text-2xl font-medium text-gray-900 mb-4">
              "Together, we can make a difference. Together, we can do what the planet needs."
            </blockquote>
            <cite className="text-amber-600 font-semibold">IHA Organics Sustainability Pledge</cite>
          </div>
        </div>
      </div>
    </section>
  );
}