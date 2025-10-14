import Link from 'next/link';
import { Plane, Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-royal-blue-950 text-white">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <div className="flex items-center justify-center w-10 h-10 bg-air-france-red-600 rounded-lg">
                <Plane className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-display font-bold">
                Airport Luxuria
              </span>
            </Link>
            <p className="text-gray-300 mb-6 max-w-md">
              Experience premium airport hospitality worldwide. Our exclusive Meet & Greet services 
              ensure your journey begins and ends with French elegance and personalized attention.
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-air-france-red-500" />
                <span>24/7 Customer Support</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-air-france-red-500" />
                <span>contact@airportluxuria.com</span>
              </div>
            </div>
          </div>

          {/* Services - Structure corrigée */}
          <div>
            <h3 className="text-lg font-display font-semibold mb-4">Our Services</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/services" className="text-gray-300 hover:text-white transition-colors font-medium">
                  Meet & Greet Premium
                </Link>
                <ul className="ml-4 mt-1 space-y-1 text-sm">
                  <li className="text-gray-400">• Fast Track Security</li>
                  <li className="text-gray-400">• VIP Lounge Access</li>
                  <li className="text-gray-400">• Luggage Assistance</li>
                </ul>
              </li>
              <li>
                <Link href="/services" className="text-gray-300 hover:text-white transition-colors">
                  Private Chauffeur
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-display font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/destinations" className="text-gray-300 hover:text-white transition-colors">Destinations</Link></li>
              <li><Link href="/about" className="text-gray-300 hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/contact" className="text-gray-300 hover:text-white transition-colors">Contact</Link></li>
              <li><Link href="/booking" className="text-gray-300 hover:text-white transition-colors">Book Now</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-royal-blue-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; 2025 Airport Luxuria. All rights reserved. | Premium Airport Services Worldwide</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;