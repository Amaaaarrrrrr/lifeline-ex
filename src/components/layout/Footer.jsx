import React from "react";
import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Linkedin, Heart, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-100 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Section */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-10 h-10 bg-black rounded-xl flex items-center justify-center">
                <Heart className="w-6 h-6 text-white fill-white" />
              </div>
              <span className="text-xl font-black tracking-tighter uppercase italic">LifeLine</span>
            </Link>
            <p className="text-gray-500 text-sm leading-relaxed max-w-xs">
              Empowering communities with accessible emergency medical services and health education for a safer, healthier future.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="w-9 h-9 rounded-full bg-gray-50 flex items-center justify-center border border-gray-100 hover:bg-black hover:text-white transition-all">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-gray-50 flex items-center justify-center border border-gray-100 hover:bg-black hover:text-white transition-all">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-gray-50 flex items-center justify-center border border-gray-100 hover:bg-black hover:text-white transition-all">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-gray-50 flex items-center justify-center border border-gray-100 hover:bg-black hover:text-white transition-all">
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-black uppercase tracking-[0.2em] text-[10px] mb-8">Platform</h4>
            <ul className="space-y-4">
              <li><Link to="/" className="text-sm text-gray-500 hover:text-black font-medium transition-colors">Home</Link></li>
              <li><Link to="/education" className="text-sm text-gray-500 hover:text-black font-medium transition-colors">Health Education</Link></li>
              <li><Link to="/login" className="text-sm text-gray-500 hover:text-black font-medium transition-colors">User Portal</Link></li>
              <li><Link to="#" className="text-sm text-gray-500 hover:text-black font-medium transition-colors">Partner Dashboard</Link></li>
              <li><Link to="#" className="text-sm text-gray-500 hover:text-black font-medium transition-colors">Emergency Protocol</Link></li>
            </ul>
          </div>

          {/* Legal / More */}
          <div>
            <h4 className="font-black uppercase tracking-[0.2em] text-[10px] mb-8">Company</h4>
            <ul className="space-y-4">
              <li><Link to="#" className="text-sm text-gray-500 hover:text-black font-medium transition-colors">About Us</Link></li>
              <li><Link to="#" className="text-sm text-gray-500 hover:text-black font-medium transition-colors">Privacy Policy</Link></li>
              <li><Link to="#" className="text-sm text-gray-500 hover:text-black font-medium transition-colors">Terms of Service</Link></li>
              <li><Link to="#" className="text-sm text-gray-500 hover:text-black font-medium transition-colors">Contact Support</Link></li>
              <li><Link to="#" className="text-sm text-gray-500 hover:text-black font-medium transition-colors">Impact Reports</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-black uppercase tracking-[0.2em] text-[10px] mb-8">Get in Touch</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-gray-400 mt-1" />
                <span className="text-sm text-gray-500 leading-tight">123 Health Innovation Way,<br />Lagos, Nigeria</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-gray-400" />
                <span className="text-sm text-gray-500">+234 (0) 800 LIFELINE</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-gray-400" />
                <span className="text-sm text-gray-500">support@lifeline.org</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-gray-50 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-xs text-gray-400 font-medium">
            © 2026 LifeLine Emergency Services. All rights reserved.
          </p>
          <p className="text-xs text-gray-400 font-medium flex items-center gap-1">
            Made with <Heart className="w-3 h-3 text-red-500 fill-red-500" /> for global health.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
