
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { 
  Leaf, 
  Menu, 
  X, 
  Phone, 
  Mail,
  MapPin,
  Facebook,
  Instagram,
  Globe,
  Heart,
  Award,
  ChefHat,
  BookOpen
} from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Layout({ children, currentPageName }) {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navigationItems = [
    { name: "Home", path: createPageUrl("Home"), icon: Leaf },
    { name: "Spices", path: createPageUrl("Products"), icon: ChefHat },
    { name: "Our Story", path: createPageUrl("About"), icon: Heart },
    { name: "Spice Wisdom", path: createPageUrl("Blog"), icon: BookOpen }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 via-white to-amber-50">
      <style>
        {`
          :root {
            --imperial-gold: #D4AF37;
            --saddle-brown: #8B4513;
            --forest-green: #228B22;
            --crimson-red: #DC143C;
            --dark-brown: #2C1810;
            --warm-taupe: #8B7355;
            --cream: #F5F5DC;
          }
          
          .luxury-gradient {
            background: linear-gradient(135deg, var(--imperial-gold) 0%, #F4D03F  100%);
          }
          
          .spice-texture {
            background-image: 
              radial-gradient(circle at 25% 25%, rgba(212, 175, 55, 0.1) 0%, transparent 50%),
              radial-gradient(circle at 75% 75%, rgba(139, 69, 19, 0.1) 0%, transparent 50%);
          }
        `}
      </style>

      {/* Header */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}>
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-4">
            {/* Logo */}
            <Link to={createPageUrl("Home")} className="flex items-center space-x-3 group">
              <div className="w-12 h-12 luxury-gradient rounded-full flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
                <Leaf className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900 tracking-tight">IHA Organics</h1>
                <p className="text-sm text-amber-600 font-medium">Where Every Spice Tells a Story</p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navigationItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-full transition-all duration-300 ${
                    location.pathname === item.path
                      ? 'bg-amber-100 text-amber-800'
                      : 'text-gray-700 hover:text-amber-600 hover:bg-amber-50'
                  }`}
                >
                  <item.icon className="w-4 h-4" />
                  <span className="font-medium">{item.name}</span>
                </Link>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white border-t shadow-lg">
            <nav className="container mx-auto px-4 py-4 space-y-2">
              {navigationItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className="flex items-center space-x-3 px-4 py-3 rounded-lg text-gray-700 hover:bg-amber-50 hover:text-amber-600 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <item.icon className="w-5 h-5" />
                  <span className="font-medium">{item.name}</span>
                </Link>
              ))}
            </nav>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="pt-20">
        {children}
      </main>

      {/* Footer */}
      <footer className="spice-texture bg-gray-900 text-white mt-20">
        <div className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Brand Section */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 luxury-gradient rounded-full flex items-center justify-center">
                  <Leaf className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-xl font-bold">IHA Organics</h3>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed">
                Embark on a tantalizing odyssey where every spice is a vibrant testament to culinary artistry. 
                From the spice gardens of Sirsi to your kitchen.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-amber-400 transition-colors">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-amber-400 transition-colors">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-amber-400 transition-colors">
                  <Globe className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-amber-400">Quick Links</h4>
              <ul className="space-y-2">
                {navigationItems.map((item) => (
                  <li key={item.name}>
                    <Link 
                      to={item.path}
                      className="text-gray-300 hover:text-amber-400 transition-colors text-sm"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
                 <li>
                    <Link 
                      to={createPageUrl("Contact")}
                      className="text-gray-300 hover:text-amber-400 transition-colors text-sm"
                    >
                      Contact Us
                    </Link>
                  </li>
              </ul>
            </div>

            {/* Spice Categories */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-amber-400">Premium Spices</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>Organic Cardamom</li>
                <li>Golden Turmeric</li>
                <li>Royal Red Chili</li>
                <li>Aromatic Fennel</li>
                <li>Ceylon Cinnamon</li>
                <li>Liquid Jaggery</li>
              </ul>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-amber-400">Get In Touch</h4>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-4 h-4 text-amber-400 mt-1 flex-shrink-0" />
                  <div className="text-sm text-gray-300">
                    <p>HIG-132, PHASE-VI, KPHB COLONY, Kukatpally,</p>
                    <p>Hyderabad, Medchal Malkajgiri, Telangana, 500072</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-4 h-4 text-amber-400" />
                  <span className="text-sm text-gray-300">+91-91670 10755</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-4 h-4 text-amber-400" />
                  <span className="text-sm text-gray-300">info@ihaorganics.shop</span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-gray-800 mt-12 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="flex items-center space-x-6">
                <div className="flex items-center space-x-2">
                  <Award className="w-4 h-4 text-amber-400" />
                  <span className="text-sm text-gray-300">FSSAI Certified</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Leaf className="w-4 h-4 text-green-400" />
                  <span className="text-sm text-gray-300">100% Organic</span>
                </div>
              </div>
              <p className="text-sm text-gray-400">
                © 2024 IHA Organics Pvt Ltd. All rights reserved. Crafted with love from Sirsi.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
