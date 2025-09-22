
import React, { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { Product } from "@/api/entities";
import { 
  Search,
  Star,
  Leaf,
  Grid3X3,
  List
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function ProductsPage() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [sortBy, setSortBy] = useState("name");
  const [viewMode, setViewMode] = useState("grid");

  // Default products if none exist in database
  const defaultProducts = [
    {
      id: "1",
      name: "Premium Cardamom",
      slug: "premium-cardamom",
      category: "whole_spices",
      spice_type: "cardamom",
      description: "The queen of spices with extraordinary aroma and flavor that complements both sweet and savory dishes.",
      price: 450,
      pack_sizes: ["100g"],
      image_url: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=400&h=400&fit=crop&crop=center",
      is_featured: true,
      benefits: ["Digestive aid", "Aromatic enhancement", "Natural breath freshener"],
      flavor_profile: "Sweet, aromatic, with subtle eucalyptus notes"
    },
    {
      id: "2",
      name: "Golden Turmeric Powder",
      slug: "golden-turmeric-powder", 
      category: "ground_spices",
      spice_type: "turmeric",
      description: "Higher curcumin content turmeric powder from organically cultivated roots, perfect for health and culinary use.",
      price: 180,
      pack_sizes: ["125g"],
      image_url: "https://images.unsplash.com/photo-1615485500704-8e990f9900f7?w=400&h=400&fit=crop&crop=center",
      is_featured: true,
      benefits: ["Anti-inflammatory", "Antioxidant rich", "Natural healing"],
      flavor_profile: "Earthy, bitter, with warm undertones"
    },
    {
      id: "3",
      name: "Liquid Jaggery",
      slug: "liquid-jaggery",
      category: "liquid_jaggery", 
      spice_type: "liquid_jaggery",
      description: "Nature's golden nectar in liquid form - a sublime elixir crafted from nature's most exquisite harvests.",
      price: 320,
      pack_sizes: ["500ml"],
      image_url: "https://images.unsplash.com/photo-1606853246845-a43c749366a3?w=400&h=400&fit=crop&crop=center",
      is_featured: true,
      benefits: ["Rich in minerals", "Natural sweetener", "Iron and calcium source"],
      flavor_profile: "Deep molasses sweetness with caramel notes"
    },
    {
      id: "4", 
      name: "Royal Red Chili Powder",
      slug: "royal-red-chili-powder",
      category: "ground_spices",
      spice_type: "chili",
      description: "Fierce allure with customizable heat levels, made from sun-dried organic red chilies.",
      price: 200,
      pack_sizes: ["125g"],
      image_url: "https://images.unsplash.com/photo-1599528173459-717079d1b64e?w=400&h=400&fit=crop&crop=center",
      benefits: ["Boosts metabolism", "Rich in Vitamin C", "Natural preservative"],
      flavor_profile: "Fiery heat with smoky undertones"
    },
    {
      id: "5",
      name: "Aromatic Fennel Seeds", 
      slug: "aromatic-fennel-seeds",
      category: "whole_spices",
      spice_type: "fennel",
      description: "Sweet and refreshing fennel seeds perfect for cooling the body and aiding digestion.",
      price: 220,
      pack_sizes: ["125g"],
      image_url: "https://images.unsplash.com/photo-1556795504-5696143924e3?w=400&h=400&fit=crop&crop=center",
      benefits: ["Digestive aid", "Natural coolant", "Breath freshener"],
      flavor_profile: "Sweet anise-like flavor with refreshing notes"
    },
    {
      id: "6",
      name: "Ceylon Cinnamon",
      slug: "ceylon-cinnamon",
      category: "ground_spices",
      spice_type: "cinnamon", 
      description: "Sweet symphony that warms both body and soul, perfect for both sweet and savory applications.",
      price: 280,
      pack_sizes: ["125g"],
      image_url: "https://images.unsplash.com/photo-1559857774-c3c1393a5b28?w=400&h=400&fit=crop&crop=center",
      benefits: ["Blood sugar regulation", "Anti-inflammatory", "Antimicrobial"],
      flavor_profile: "Sweet, warm, with delicate woody notes"
    }
  ];

  const loadProducts = useCallback(async () => {
    try {
      const fetchedProducts = await Product.list('-created_date');
      const productsWithFixedImages = fetchedProducts.map(p => {
        if (p.slug === 'royal-red-chili-powder') p.image_url = 'https://images.unsplash.com/photo-1599528173459-717079d1b64e?w=400&h=400&fit=crop&crop=center';
        if (p.slug === 'liquid-jaggery') p.image_url = 'https://images.unsplash.com/photo-1606853246845-a43c749366a3?w=400&h=400&fit=crop&crop=center';
        if (p.slug === 'aromatic-fennel-seeds') p.image_url = 'https://images.unsplash.com/photo-1556795504-5696143924e3?w=400&h=400&fit=crop&crop=center';
        if (p.slug === 'ceylon-cinnamon-powder') p.image_url = 'https://images.unsplash.com/photo-1559857774-c3c1393a5b28?w=400&h=400&fit=crop&crop=center';
        return p;
      });

      if (productsWithFixedImages.length > 0) {
        setProducts(productsWithFixedImages);
      } else {
        setProducts(defaultProducts);
      }
    } catch (error) {
      console.error('Error loading products:', error);
      setProducts(defaultProducts);
    } finally {
      setIsLoading(false);
    }
  }, [defaultProducts]);

  const filterAndSortProducts = useCallback(() => {
    let filtered = [...products];

    // Search filter
    if (searchQuery) {
      filtered = filtered.filter(product =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Category filter
    if (categoryFilter !== "all") {
      filtered = filtered.filter(product => product.category === categoryFilter);
    }

    // Sort
    filtered.sort((a, b) => {
      switch (sortBy) {
        case "price_low":
          return a.price - b.price;
        case "price_high":
          return b.price - a.price;
        case "name":
          return a.name.localeCompare(b.name);
        default:
          return 0;
      }
    });

    setFilteredProducts(filtered);
  }, [products, searchQuery, categoryFilter, sortBy]);

  useEffect(() => {
    loadProducts();
  }, [loadProducts]);

  useEffect(() => {
    filterAndSortProducts();
  }, [filterAndSortProducts]);

  const getSpiceColor = (spiceType) => {
    const colors = {
      cardamom: "bg-green-100 text-green-800",
      turmeric: "bg-yellow-100 text-yellow-800",
      chili: "bg-red-100 text-red-800", 
      fennel: "bg-blue-100 text-blue-800",
      cinnamon: "bg-orange-100 text-orange-800",
      liquid_jaggery: "bg-amber-100 text-amber-800",
      default: "bg-gray-100 text-gray-800"
    };
    return colors[spiceType] || colors.default;
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
      {/* Header */}
      <section className="py-20 bg-gradient-to-r from-amber-600 to-orange-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">Premium Spice Collection</h1>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Discover our curated selection of organic spices, each telling a unique story 
            of authenticity, purity, and culinary excellence from the spice gardens of Sirsi.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        {/* Filters & Search */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-center">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input
                placeholder="Search spices..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>

            {/* Category Filter */}
            <Select value={categoryFilter} onValueChange={setCategoryFilter}>
              <SelectTrigger>
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                <SelectItem value="whole_spices">Whole Spices</SelectItem>
                <SelectItem value="ground_spices">Ground Spices</SelectItem>
                <SelectItem value="liquid_jaggery">Liquid Jaggery</SelectItem>
                <SelectItem value="spice_blends">Spice Blends</SelectItem>
              </SelectContent>
            </Select>

            {/* Sort */}
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger>
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="name">Name A-Z</SelectItem>
                <SelectItem value="price_low">Price: Low to High</SelectItem>
                <SelectItem value="price_high">Price: High to Low</SelectItem>
              </SelectContent>
            </Select>

            {/* View Mode */}
            <div className="flex items-center space-x-2">
              <Button
                variant={viewMode === "grid" ? "default" : "outline"}
                size="icon"
                onClick={() => setViewMode("grid")}
              >
                <Grid3X3 className="w-4 h-4" />
              </Button>
              <Button
                variant={viewMode === "list" ? "default" : "outline"}
                size="icon"
                onClick={() => setViewMode("list")}
              >
                <List className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Results Count */}
        <div className="flex items-center justify-between mb-8">
          <p className="text-gray-600">
            {isLoading ? (
              <Skeleton className="h-4 w-32" />
            ) : (
              `Showing ${filteredProducts.length} ${filteredProducts.length === 1 ? 'spice' : 'spices'}`
            )}
          </p>
        </div>

        {/* Products Grid */}
        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <Card key={i} className="overflow-hidden">
                <Skeleton className="h-64 w-full" />
                <CardContent className="p-6">
                  <Skeleton className="h-6 w-3/4 mb-4" />
                  <Skeleton className="h-4 w-full mb-2" />
                  <Skeleton className="h-4 w-2/3 mb-4" />
                </CardContent>
              </Card>
            ))}
          </div>
        ) : filteredProducts.length === 0 ? (
          <div className="text-center py-16">
            <div className="w-32 h-32 mx-auto mb-6 bg-gray-100 rounded-full flex items-center justify-center">
              <Search className="w-16 h-16 text-gray-400" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">No spices found</h3>
            <p className="text-gray-600 mb-6">Try adjusting your search or filters</p>
            <Button onClick={() => {
              setSearchQuery("");
              setCategoryFilter("all");
            }}>
              Clear Filters
            </Button>
          </div>
        ) : (
          <div className={viewMode === "grid" 
            ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            : "space-y-6"
          }>
            {filteredProducts.map((product) => (
              <Card key={product.id} className="group overflow-hidden border-none shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                {viewMode === "grid" ? (
                  <>
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
                      
                      <div className="flex items-center justify-between">
                        <div className="space-y-1">
                          <div className="text-2xl font-bold text-amber-600">₹{product.price}</div>
                          <div className="text-sm text-gray-500">
                            {product.pack_sizes && product.pack_sizes[0]}
                          </div>
                        </div>
                        <div className="flex items-center space-x-1 text-amber-400">
                          <Star className="w-4 h-4 fill-current" />
                          <span className="text-gray-600 text-sm">4.8</span>
                        </div>
                      </div>
                    </CardContent>
                  </>
                ) : (
                  <CardContent className="p-6 bg-white">
                    <div className="flex items-center space-x-6">
                      <img 
                        src={product.image_url}
                        alt={product.name}
                        className="w-24 h-24 object-cover rounded-lg"
                      />
                      <div className="flex-1">
                        <div className="flex items-start justify-between mb-2">
                          <h3 className="text-xl font-bold text-gray-900">{product.name}</h3>
                          <div className="text-2xl font-bold text-amber-600">₹{product.price}</div>
                        </div>
                        <p className="text-gray-600 text-sm mb-3">{product.description}</p>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-2">
                            <Badge className={getSpiceColor(product.spice_type)}>
                              <Leaf className="w-3 h-3 mr-1" />
                              Organic
                            </Badge>
                            <span className="text-sm text-gray-500">
                              {product.pack_sizes && product.pack_sizes[0]}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                )}
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
