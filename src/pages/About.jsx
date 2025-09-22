import React from 'react';
import { Leaf, Award, Users, Heart, GitCommit, Target, Mountain } from 'lucide-react';

export default function AboutPage() {
  const founders = [
    {
      name: "Tarun Tej Donepudi",
      role: "Founder",
      story: "A strategic problem solver with a love for food and flavors. A visit to his grandfather in Sirsi revealed the rich, untapped potential of home-grown spices, sparking the vision for a brand that connects consumers to the authentic source.",
      image: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=200&h=200&fit=crop&crop=faces"
    },
    {
      name: "Shanker Raj",
      role: "Founder",
      story: "From a business family with a background in industrial electronics, Shanker sought a more sustainable and impactful venture. He joined forces with Tarun to build a circular ecosystem that supports women's employment and sustainable agriculture.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=faces"
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-b from-amber-50 to-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-extrabold text-gray-900 mb-4">Our Story: From a Spice Garden to Your Jar</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the passion, heritage, and commitment behind every IHA Organics product.
          </p>
        </div>
      </section>

      {/* The Journey Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-gray-900">The Journey Begins in Sirsi</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                The story of IHA Organics begins in Sirsi, a mesmerizing town in Southern India, home to lush valleys and gardens of spice. In this biodiversity hotspot, two young entrepreneurs left their corporate jobs, driven by a passion to create India's most ethical organic brand.
              </p>
              <p className="text-gray-600 leading-relaxed">
                They wished to create a meaningful business by connecting to their roots. This brand story originates from the undiscovered spice garden of Karnataka, where our founders, Shanker and Tarun, consciously nurtured authentic organic spices under strict organic practices, retaining the freshness of every spice through meticulous processing and packaging.
              </p>
            </div>
            <div>
              <img src="https://images.unsplash.com/photo-1533587839358-69d727a85231?w=600&h=400&fit=crop&crop=center" alt="Sirsi Landscape" className="rounded-2xl shadow-lg" />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-amber-50">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12">
          <div className="flex items-start space-x-6">
            <div className="bg-amber-500 text-white p-3 rounded-full mt-1">
              <Target className="w-8 h-8" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Our Mission</h3>
              <p className="text-gray-700 leading-relaxed">
                To build India's most trusted brand while retaining biodiversity, reviving soil, providing a better living to tribal farmers, and protecting our natural resources from chemical overuse.
              </p>
            </div>
          </div>
          <div className="flex items-start space-x-6">
            <div className="bg-green-500 text-white p-3 rounded-full mt-1">
              <GitCommit className="w-8 h-8" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Our Vision</h3>
              <p className="text-gray-700 leading-relaxed">
                To provide dignified employment to spice-farming tribal families, support women's participation in the workforce, and enable their financial independence.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* The Founders */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900">Meet the Founders</h2>
            <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">The heart and soul behind our commitment to quality and sustainability.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            {founders.map(founder => (
              <div key={founder.name} className="text-center">
                <img src={founder.image} alt={founder.name} className="w-32 h-32 rounded-full mx-auto mb-4 shadow-lg" />
                <h3 className="text-2xl font-bold text-gray-900">{founder.name}</h3>
                <p className="text-amber-600 font-semibold mb-2">{founder.role}</p>
                <p className="text-gray-600 leading-relaxed">{founder.story}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Promise */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <Leaf className="w-12 h-12 text-amber-400 mx-auto mb-4" />
          <h2 className="text-4xl font-bold mb-4">The 'OATH ORGANIC' Promise</h2>
          <p className="text-xl max-w-3xl mx-auto leading-relaxed">
            We promise to be a genuine organic brand with an uncompromising qualitative approach at every stage from sowing to packaging. Our spices are produced sustainably, minimally processed, and free from any artificial additives.
          </p>
          <div className="mt-8 flex justify-center space-x-8 text-amber-400">
              <div className="flex items-center space-x-2">
                  <Award className="w-6 h-6"/>
                  <span>Certified Organic</span>
              </div>
              <div className="flex items-center space-x-2">
                  <Heart className="w-6 h-6"/>
                  <span>Handpicked with Love</span>
              </div>
              <div className="flex items-center space-x-2">
                  <Users className="w-6 h-6"/>
                  <span>Community Focused</span>
              </div>
          </div>
        </div>
      </section>
    </div>
  );
}