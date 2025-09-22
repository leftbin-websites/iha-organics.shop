import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { Product } from "@/api/entities";
import { 
  ArrowRight, 
  Leaf, 
  Award, 
  Heart, 
  Truck,
  ShieldCheck,
  ChefHat,
  Sparkles
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import HeroSection from "../components/home/HeroSection";
import FeaturedProducts from "../components/home/FeaturedProducts";
import BrandStory from "../components/home/BrandStory";
import TestimonialsSection from "../components/home/TestimonialsSection";
import SustainabilitySection from "../components/home/SustainabilitySection";

export default function HomePage() {
  const [featuredProducts, setFeaturedProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    loadFeaturedProducts();
  }, []);

  const loadFeaturedProducts = async () => {
    try {
      const products = await Product.filter({ is_featured: true }, '-created_date', 6);
      setFeaturedProducts(products);
    } catch (error) {
      console.error('Error loading featured products:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const features = [
    {
      icon: <ShieldCheck className="w-6 h-6" />,
      title: "100% Organic Certified",
      description: "FSSAI certified organic spices from the pristine hills of Sirsi, Karnataka"
    },
    {
      icon: <Truck className="w-6 h-6" />,
      title: "Premium Delivery",
      description: "Available on Flipkart, Amazon, Swiggy Instamart, BigBasket, Zepto & Blinkit"
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Empowering Communities",
      description: "Supporting tribal farming families and enabling women's financial independence"
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Heritage Quality",
      description: "Traditional wisdom meets modern processing for uncompromising purity"
    }
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <HeroSection />

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Choose IHA Organics?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Every spice tells a story of authenticity, purity, and the passionate commitment 
              to preserving traditional spice heritage while inspiring culinary innovation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-r from-amber-400 to-amber-600 rounded-full flex items-center justify-center text-white">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <FeaturedProducts products={featuredProducts} isLoading={isLoading} />

      {/* Brand Story Preview */}
      <BrandStory />

      {/* Liquid Jaggery Spotlight */}
      <section className="py-20 bg-gradient-to-r from-amber-50 to-orange-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <div className="flex items-center mb-6">
                  <Sparkles className="w-6 h-6 text-amber-500 mr-2" />
                  <Badge variant="secondary" className="bg-amber-100 text-amber-800">
                    Signature Product
                  </Badge>
                </div>
                <h2 className="text-4xl font-bold text-gray-900 mb-6">
                  Liquid Jaggery
                  <span className="block text-2xl text-amber-600 font-normal mt-2">
                    Nature's Golden Nectar
                  </span>
                </h2>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  Delve into the epitome of indulgence with our Liquid Jaggery – a sublime elixir 
                  meticulously crafted from nature's most exquisite harvests. This liquid gold 
                  transcends the commonplace, embodying sophistication forged without compromise.
                </p>
                <div className="space-y-4 mb-8">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                    <span className="text-gray-700">Perfect for desserts, marinades & beverages</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                    <span className="text-gray-700">Rich in iron, calcium & essential micronutrients</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                    <span className="text-gray-700">Traditional wisdom meets modern convenience</span>
                  </div>
                </div>
                <Link to={createPageUrl("Products")}>
                  <Button size="lg" className="bg-gradient-to-r from-amber-500 to-amber-600 text-white hover:from-amber-600 hover:to-amber-700 transition-all duration-300">
                    Explore Our Products
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
              </div>
              
              <div className="order-1 lg:order-2">
                <div className="relative">
                  <img 
                    src="https://images.unsplash.com/photo-1606853246845-a43c749366a3?w=600&h=600&fit=crop&crop=center"
                    alt="Golden Liquid Jaggery"
                    className="w-full h-96 object-cover rounded-2xl shadow-2xl"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-amber-900/20 to-transparent rounded-2xl"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <TestimonialsSection />

      {/* Sustainability Impact */}
      <SustainabilitySection />

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-amber-600 to-orange-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Begin Your Culinary Journey Today
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Join thousands of culinary enthusiasts and professional chefs who trust 
            IHA Organics for their premium spice needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to={createPageUrl("Products")}>
              <Button size="lg" className="bg-white text-amber-600 hover:bg-gray-100 transition-colors">
                <ChefHat className="w-5 h-5 mr-2" />
                Explore Our Spices
              </Button>
            </Link>
            <Link to={createPageUrl("Contact")}>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-amber-600">
                Get Expert Consultation
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}