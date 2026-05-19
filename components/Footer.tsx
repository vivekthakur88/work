import Link from "next/link";
import { MapPin, Phone, Mail } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          
          <div className="space-y-4">
            <Link href="/" className="text-2xl font-bold text-white tracking-tight">
              Dentkraft<span className="text-blue-500">.</span>
            </Link>
            <p className="text-sm leading-relaxed text-slate-400">
              Premium dental care tailored for your perfect smile. We combine advanced technology with a luxurious patient experience.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="#" className="text-sm font-medium text-slate-400 hover:text-white transition-colors">Facebook</a>
              <a href="#" className="text-sm font-medium text-slate-400 hover:text-white transition-colors">Twitter</a>
              <a href="#" className="text-sm font-medium text-slate-400 hover:text-white transition-colors">Instagram</a>
              <a href="#" className="text-sm font-medium text-slate-400 hover:text-white transition-colors">LinkedIn</a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Services</h3>
            <ul className="space-y-3">
              <li><Link href="/services/teeth-whitening" className="text-sm hover:text-blue-400 transition-colors">Teeth Whitening</Link></li>
              <li><Link href="/services/dental-implants" className="text-sm hover:text-blue-400 transition-colors">Dental Implants</Link></li>
              <li><Link href="/services/invisalign" className="text-sm hover:text-blue-400 transition-colors">Invisalign</Link></li>
              <li><Link href="/services/root-canal" className="text-sm hover:text-blue-400 transition-colors">Root Canal</Link></li>
              <li><Link href="/services" className="text-sm text-blue-400 hover:text-blue-300 transition-colors">View All Services &rarr;</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link href="/about" className="text-sm hover:text-blue-400 transition-colors">About Us</Link></li>
              <li><Link href="/appointment" className="text-sm hover:text-blue-400 transition-colors">Book Appointment</Link></li>
              <li><Link href="/blog" className="text-sm hover:text-blue-400 transition-colors">Our Blog</Link></li>
              <li><Link href="/testimonials" className="text-sm hover:text-blue-400 transition-colors">Testimonials</Link></li>
              <li><Link href="/contact" className="text-sm hover:text-blue-400 transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 text-blue-500 mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-sm">123 Luxury Dental Ave, Suite 100<br/>New York, NY 10001</span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 text-blue-500 mr-3 flex-shrink-0" />
                <span className="text-sm">+91 79774 33521</span>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 text-blue-500 mr-3 flex-shrink-0" />
                <span className="text-sm">hello@dentkraft.com</span>
              </li>
            </ul>
          </div>

        </div>
        <div className="border-t border-slate-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-slate-500">
          <p>&copy; {new Date().getFullYear()} Dentkraft Dental Clinics. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
