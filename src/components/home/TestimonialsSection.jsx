import React from "react";
import { Star, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "Priya Sharma",
      role: "Home Chef, Mumbai",
      content: "The cardamom from IHA Organics has transformed my desserts completely. The aroma is so pure and authentic - exactly what I was looking for.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1599425883785-8b394991f868?w=100&h=100&fit=crop&crop=face"
    },
    {
      name: "Chef Rajesh Kumar", 
      role: "Executive Chef, Bangalore",
      content: "As a professional chef, I can immediately tell the difference. These spices have elevated every dish in our restaurant. The consistency is remarkable.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face"
    },
    {
      name: "Meera Patel",
      role: "Food Blogger, Delhi",
      content: "The liquid jaggery is a game-changer! It's so convenient to use and adds such a beautiful depth of flavor to both sweet and savory dishes.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-amber-50 to-orange-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Loved by Culinary Enthusiasts
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Join thousands of home cooks and professional chefs who trust IHA Organics 
            for their premium spice needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <CardContent className="p-8 relative">
                <Quote className="absolute top-4 right-4 w-8 h-8 text-amber-200" />
                
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-amber-400 fill-current" />
                  ))}
                </div>

                <p className="text-gray-700 mb-6 leading-relaxed italic">
                  "{testimonial.content}"
                </p>

                <div className="flex items-center">
                  <img 
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4 object-cover"
                  />
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">{testimonial.role}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}