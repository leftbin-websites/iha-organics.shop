import React from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { ArrowRight, Users, Leaf, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function BrandStory() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Content */}
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl font-bold text-gray-900 mb-6">
                  From Corporate Dreams to 
                  <span className="text-amber-600 block">Spice Garden Reality</span>
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  Driven by passion for organic farming, two young entrepreneurs from Karnataka 
                  left their corporate jobs to create India's most ethical organic brand. 
                  Their journey began in the undiscovered spice gardens of Sirsi.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Today, every purchase from IHA Organics contributes to providing income to 
                  tribal families and empowers women with employment and financial independence.
                </p>
              </div>

              {/* Impact Stats */}
              <div className="grid grid-cols-3 gap-6">
                <div className="text-center p-4 bg-green-50 rounded-xl">
                  <Users className="w-8 h-8 text-green-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-green-600">50+</div>
                  <div className="text-sm text-gray-600">Families Supported</div>
                </div>
                <div className="text-center p-4 bg-amber-50 rounded-xl">
                  <Leaf className="w-8 h-8 text-amber-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-amber-600">100%</div>
                  <div className="text-sm text-gray-600">Organic Fields</div>
                </div>
                <div className="text-center p-4 bg-red-50 rounded-xl">
                  <Heart className="w-8 h-8 text-red-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-red-600">5+</div>
                  <div className="text-sm text-gray-600">Years Impact</div>
                </div>
              </div>

              <Link to={createPageUrl("About")}>
                <Button size="lg" className="bg-gradient-to-r from-amber-500 to-amber-600 text-white hover:from-amber-600 hover:to-amber-700">
                  Read Our Complete Story
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
            </div>

            {/* Images */}
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <img 
                  src="https://images.unsplash.com/photo-1605000797499-95a51c5269ae?w=300&h=400&fit=crop&crop=center"
                  alt="Spice farming in Sirsi"
                  className="w-full h-64 object-cover rounded-2xl"
                />
                <img 
                  src="https://images.unsplash.com/photo-1594736797933-d0ea2212d655?w=300&h=400&fit=crop&crop=center"
                  alt="Traditional spice processing"
                  className="w-full h-64 object-cover rounded-2xl mt-8"
                />
              </div>
              
              {/* Floating Quote */}
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-2xl border-l-4 border-amber-500 max-w-xs">
                <p className="text-sm text-gray-700 italic mb-2">
                  "Every spice tells a story of authenticity, purity, and the sheer joy of culinary discovery."
                </p>
                <p className="text-xs text-amber-600 font-semibold">- Founders, IHA Organics</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}