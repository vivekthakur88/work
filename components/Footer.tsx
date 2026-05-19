import Link from "next/link";
import { Phone, Mail, MapPin, Instagram, Clock, ArrowRight } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-200 border-t border-slate-800 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <Link href="/" className="inline-block text-3xl font-extrabold tracking-tighter text-white">
              Denta<span className="text-blue-500">zone</span>
            </Link>
            <p className="text-slate-400 leading-relaxed">
              Experience modern dentistry with personalized care, painless treatments, and cutting-edge technology for a healthy, confident smile.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.instagram.com/dentazone_advanceddentalcare/" target="_blank" rel="noopener noreferrer" className="bg-slate-800 p-3 rounded-full hover:bg-blue-600 hover:text-white transition-all text-slate-400">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">Quick Links</h3>
            <ul className="space-y-4">
              {['Home', 'About Us', 'Services', 'Testimonials', 'Gallery', 'Contact'].map((item) => (
                <li key={item}>
                  <Link href={item === 'Home' ? '/' : `#${item.toLowerCase().replace(' ', '-')}`} className="text-slate-400 hover:text-blue-400 transition-colors flex items-center">
                    <ArrowRight className="w-4 h-4 mr-2" />
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 text-blue-500 mr-3 mt-1 flex-shrink-0" />
                <span className="text-slate-400">Shop No. 6, Advanced Multispeciality Dental Care, Wadhwa Elite, 19, Kolshet Rd, Sandoz Baug, Thane West, Thane, Maharashtra 400607</span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 text-blue-500 mr-3 flex-shrink-0" />
                <a href="tel:9970418588" className="text-slate-400 hover:text-blue-400 transition-colors">9970418588</a>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 text-blue-500 mr-3 flex-shrink-0" />
                <a href="mailto:vith84852@gmail.com" className="text-slate-400 hover:text-blue-400 transition-colors">vith84852@gmail.com</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">Working Hours</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Clock className="w-5 h-5 text-blue-500 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-slate-300 font-medium">Monday to Saturday</p>
                  <p className="text-slate-400 text-sm mt-1">10:00 AM – 2:30 PM</p>
                  <p className="text-slate-400 text-sm">5:30 PM – 9:30 PM</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="w-5 h-5 mr-3 flex-shrink-0"></div>
                <div>
                  <p className="text-slate-300 font-medium">Sunday</p>
                  <p className="text-red-400 text-sm mt-1">Closed</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-slate-500">
          <p>&copy; {new Date().getFullYear()} Dentazone Advanced Dental Care. All rights reserved.</p>
          <div className="mt-4 md:mt-0 space-x-6">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
