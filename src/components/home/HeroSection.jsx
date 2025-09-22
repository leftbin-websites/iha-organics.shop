import React from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-amber-50 via-white to-orange-50">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-72 h-72 bg-amber-200/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-orange-200/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Content */}
        <div className="space-y-8">
          <div className="flex items-center space-x-2">
            <Sparkles className="w-5 h-5 text-amber-500" />
            <Badge variant="secondary" className="bg-amber-100 text-amber-800 px-4 py-1">
              Premium Organic Spices from Sirsi, Karnataka
            </Badge>
          </div>

          <div className="space-y-6">
            <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
              <span className="text-gray-900">Where Every</span>
              <br />
              <span className="bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
                Spice Tells
              </span>
              <br />
              <span className="text-gray-900">a Story</span>
            </h1>
            
            <p className="text-xl lg:text-2xl text-gray-600 leading-relaxed max-w-2xl">
              Embark on a tantalizing odyssey with IHA Organics, where every spice is a vibrant 
              testament to the essence of culinary artistry and authentic heritage.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link to={createPageUrl("Products")}>
              <Button size="lg" className="bg-gradient-to-r from-amber-500 to-amber-600 text-white hover:from-amber-600 hover:to-amber-700 transition-all duration-300 transform hover:scale-105">
                Begin Your Culinary Journey
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-200">
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900">12+</div>
              <div className="text-sm text-gray-600 mt-1">Premium Spices</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900">100%</div>
              <div className="text-sm text-gray-600 mt-1">Organic Certified</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900">1000+</div>
              <div className="text-sm text-gray-600 mt-1">Happy Families</div>
            </div>
          </div>
        </div>

        {/* Hero Image */}
        <div className="relative">
          <div className="relative z-10">
            <img 
              src="https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=800&h=600&fit=crop&crop=center"
              alt="Premium Organic Spices"
              className="w-full h-96 lg:h-[600px] object-cover rounded-3xl shadow-2xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-amber-900/30 to-transparent rounded-3xl"></div>
          </div>

          {/* Floating Elements */}
          <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-r from-amber-400 to-orange-400 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg animate-bounce">
            FSSAI
          </div>
          
          <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl p-6 shadow-2xl">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-green-500 rounded-full flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <div>
                <div className="font-bold text-gray-900">100% Organic</div>
                <div className="text-sm text-gray-600">Certified by Government</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}