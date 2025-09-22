import React from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { ArrowRight, Star, Leaf } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";

export default function FeaturedProducts({ products, isLoading }) {
  const defaultProducts = [
    {
      id: "1",
      name: "Premium Cardamom",
      spice_type: "cardamom",
      description: "The queen of spices with extraordinary aroma",
      price: 450,
      image_url: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=300&h=300&fit=crop&crop=center",
      pack_sizes: ["100g"]
    },
    {
      id: "2", 
      name: "Golden Turmeric Powder",
      spice_type: "turmeric",
      description: "Higher curcumin content for health benefits",
      price: 180,
      image_url: "https://images.unsplash.com/photo-1615485500704-8e990f9900f7?w=300&h=300&fit=crop&crop=center",
      pack_sizes: ["125g"]
    },
    {
      id: "3",
      name: "Liquid Jaggery", 
      spice_type: "liquid_jaggery",
      description: "Nature's golden nectar in liquid form",
      price: 320,
      image_url: "https://images.unsplash.com/photo-1606853246845-a43c749366a3?w=300&h=300&fit=crop&crop=center",
      pack_sizes: ["500ml"]
    }
  ];

  const displayProducts = products.length > 0 ? products : defaultProducts;

  const getSpiceColor = (spiceType) => {
    const colors = {
      cardamom: "bg-green-100 text-green-800",
      turmeric: "bg-yellow-100 text-yellow-800", 
      chili: "bg-red-100 text-red-800",
      liquid_jaggery: "bg-amber-100 text-amber-800",
      default: "bg-gray-100 text-gray-800"
    };
    return colors[spiceType] || colors.default;
  };

  if (isLoading) {
    return (
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Skeleton className="h-12 w-96 mx-auto mb-4" />
            <Skeleton className="h-6 w-2/3 mx-auto" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <Card key={i} className="overflow-hidden">
                <Skeleton className="h-64 w-full" />
                <CardContent className="p-6">
                  <Skeleton className="h-6 w-3/4 mb-4" />
                  <Skeleton className="h-4 w-full mb-2" />
                  <Skeleton className="h-4 w-2/3 mb-4" />
                  <Skeleton className="h-6 w-24" />
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our Signature Spice Collection
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From the fierce allure of our Chilli Powder to the aromatic elegance of Cardamom 
            and the golden radiance of Turmeric - discover spices that transform every meal.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {displayProducts.slice(0, 6).map((product) => (
            <Card key={product.id} className="group overflow-hidden border-none shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
              <div className="relative overflow-hidden">
                <img 
                  src={product.image_url}
                  alt={product.name}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-4 left-4">
                  <Badge className={getSpiceColor(product.spice_type)}>
                    <Leaf className="w-3 h-3 mr-1" />
                    Organic
                  </Badge>
                </div>
                <div className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-lg">
                  <Star className="w-4 h-4 text-amber-400 fill-current" />
                </div>
              </div>
              
              <CardContent className="p-6 bg-white">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{product.name}</h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">{product.description}</p>
                
                <div className="flex items-center justify-between mb-4">
                  <div className="space-y-1">
                    <div className="text-2xl font-bold text-amber-600">₹{product.price}</div>
                    <div className="text-sm text-gray-500">
                      {product.pack_sizes && product.pack_sizes[0]}
                    </div>
                  </div>
                  <div className="flex items-center space-x-1 text-amber-400">
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                    <span className="text-gray-600 text-sm ml-1">(48)</span>
                  </div>
                </div>

                <Link to={createPageUrl(`Products`)} className="w-full">
                  <Button variant="outline" className="w-full border-amber-500 text-amber-600 hover:bg-amber-50">
                    View Details
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Link to={createPageUrl("Products")}>
            <Button size="lg" variant="outline" className="border-amber-500 text-amber-600 hover:bg-amber-50">
              View All Spices
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}