"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  Star,
  Phone,
  MessageCircle,
  Calendar,
  Activity,
  Smile,
  Shield,
  Clock,
  Heart,
  ChevronDown,
  Quote,
  X,
  ZoomIn
} from "lucide-react";
import { useState } from "react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

export default function Home() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [lightboxImg, setLightboxImg] = useState<string | null>(null);

  const galleryImages = [
    "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1629909613654-28e377c37b09?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1598256989800-fea5ce5146f2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
  ];

  const faqs = [
    { q: "Is treatment painless?", a: "Yes, we use advanced digital dentistry and state-of-the-art anesthesia to ensure your procedure is as comfortable and pain-free as possible." },
    { q: "Do you offer same-day treatment?", a: "Absolutely. With our in-house modern equipment, many procedures including crowns and emergency care can be completed in a single visit." },
    { q: "Are aligners available?", a: "Yes, we provide premium clear aligners that are virtually invisible, comfortable, and custom-made for your perfect smile." },
    { q: "Do you take emergency appointments?", a: "We prioritize dental emergencies. Please call us immediately or contact us via WhatsApp for prompt assistance." },
    { q: "What are the payment options?", a: "We offer transparent pricing with multiple payment options including credit cards, EMI plans, and insurance assistance." }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-slate-50 font-sans selection:bg-blue-200 selection:text-blue-900">
      {/* Floating Action Buttons */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="fixed bottom-6 right-6 z-50 flex flex-col gap-4"
      >
        <a href="https://wa.link/7oj64s" target="_blank" rel="noopener noreferrer" className="group bg-white/80 backdrop-blur-lg border border-white/50 text-green-600 p-4 rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:bg-green-500 hover:text-white transition-all duration-300 flex items-center justify-center">
          <MessageCircle className="w-6 h-6" />
        </a>
        <a href="tel:9970418588" className="group bg-blue-600 text-white p-4 rounded-full shadow-[0_8px_30px_rgb(37,99,235,0.3)] hover:bg-blue-700 hover:scale-110 transition-all duration-300 flex items-center justify-center">
          <Phone className="w-6 h-6" />
        </a>
      </motion.div>

      {/* Hero Section */}
      <section className="relative min-h-[100vh] flex items-center pt-20 overflow-hidden bg-white">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?ixlib=rb-4.0.3&auto=format&fit=crop&w=2500&q=80"
            alt="Modern Dental Clinic"
            fill
            className="object-cover object-center scale-105"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/95 to-white/20"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white/90"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full mt-12 md:mt-0">
          <div className="max-w-3xl">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
            >
              <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-blue-50/80 backdrop-blur-sm border border-blue-100/50 text-blue-700 font-semibold text-sm mb-8 shadow-sm">
                <Star className="w-4 h-4 fill-blue-500 text-blue-500" />
                Premium Dental Clinic in Thane
              </motion.div>
              
              <motion.h1 variants={fadeUp} className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-slate-900 tracking-tighter leading-[1.1] mb-8">
                Advanced Care For <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400 relative inline-block">
                  Confident Smiles
                  <svg className="absolute w-full h-4 -bottom-2 left-0 text-blue-200/50 -z-10" viewBox="0 0 100 10" preserveAspectRatio="none">
                    <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" strokeLinecap="round" />
                  </svg>
                </span>
              </motion.h1>
              
              <motion.p variants={fadeUp} className="text-lg md:text-2xl text-slate-600 mb-10 leading-relaxed max-w-2xl font-light">
                Experience modern dentistry with personalized care, painless treatments, and cutting-edge technology.
              </motion.p>
              
              <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-5 mb-16">
                <Button asChild size="lg" className="rounded-full h-16 px-10 text-lg shadow-[0_8px_30px_rgb(37,99,235,0.25)] hover:shadow-[0_8px_30px_rgb(37,99,235,0.4)] hover:-translate-y-1 transition-all duration-300 bg-blue-600 hover:bg-blue-700 font-semibold group">
                  <Link href="#contact">
                    <Calendar className="w-5 h-5 mr-3 group-hover:rotate-12 transition-transform" /> Book Appointment
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="rounded-full h-16 px-10 text-lg border-2 border-slate-200 bg-white/50 backdrop-blur-sm hover:bg-white hover:border-slate-300 transition-all shadow-sm font-semibold group">
                  <a href="https://wa.link/7oj64s" target="_blank" rel="noopener noreferrer" className="text-slate-800">
                    <MessageCircle className="w-5 h-5 mr-3 text-green-500 group-hover:scale-110 transition-transform" /> WhatsApp Now
                  </a>
                </Button>
              </motion.div>

              <motion.div variants={fadeUp} className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-10 border-t border-slate-200/60">
                {[
                  { icon: Activity, text: "Advanced Technology" },
                  { icon: Clock, text: "Same Day Treatments" },
                  { icon: Heart, text: "Personalized Care" },
                  { icon: Shield, text: "Trusted Clinic" }
                ].map((item, i) => (
                  <div key={i} className="flex flex-col items-start group">
                    <div className="bg-blue-50 p-3 rounded-2xl mb-4 group-hover:bg-blue-600 group-hover:-translate-y-1 transition-all duration-300 shadow-sm">
                      <item.icon className="w-6 h-6 text-blue-600 group-hover:text-white transition-colors" />
                    </div>
                    <span className="text-sm font-bold text-slate-800">{item.text}</span>
                  </div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section with Glassmorphism */}
      <section className="relative -mt-20 z-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="bg-white/80 backdrop-blur-xl rounded-3xl p-8 md:p-12 shadow-[0_20px_50px_rgb(0,0,0,0.06)] border border-white"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 divide-y md:divide-y-0 md:divide-x divide-slate-100">
            {[
              { num: "10+", label: "Years Experience" },
              { num: "5000+", label: "Smiles Transformed" },
              { num: "4.9", label: "Google Rating", star: true },
              { num: "100%", label: "Patient Satisfaction" },
            ].map((stat, i) => (
              <div key={i} className="text-center pt-6 md:pt-0 px-4 group">
                <div className="flex items-center justify-center mb-2">
                  <div className="text-4xl md:text-5xl font-extrabold text-slate-900 group-hover:text-blue-600 transition-colors tracking-tight">{stat.num}</div>
                  {stat.star && <Star className="w-6 h-6 ml-2 fill-yellow-400 text-yellow-400 mb-2" />}
                </div>
                <div className="text-slate-500 font-semibold tracking-wide uppercase text-xs">{stat.label}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 bg-slate-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-20">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="w-full lg:w-1/2 relative"
            >
              <div className="relative h-[650px] rounded-[2rem] overflow-hidden shadow-[0_30px_60px_rgb(0,0,0,0.12)]">
                <Image 
                  src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
                  alt="Dentazone Clinic" 
                  fill 
                  className="object-cover hover:scale-105 transition-transform duration-700" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent"></div>
              </div>
              
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="absolute -bottom-10 -right-10 bg-white/90 backdrop-blur-xl p-8 rounded-3xl shadow-[0_20px_40px_rgb(0,0,0,0.08)] border border-white hidden md:block max-w-xs"
              >
                <div className="flex items-start gap-5">
                  <div className="bg-blue-600 p-4 rounded-2xl shadow-lg shadow-blue-600/30">
                    <Shield className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <div className="font-extrabold text-3xl text-slate-900 mb-1">100%</div>
                    <div className="text-slate-600 font-semibold leading-tight">Safe & Sterilized Environment</div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
            
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="w-full lg:w-1/2"
            >
              <motion.div variants={fadeUp} className="inline-block px-4 py-1.5 rounded-full bg-blue-100 text-blue-700 font-bold text-xs tracking-widest uppercase mb-6">
                Why Choose Us
              </motion.div>
              <motion.h3 variants={fadeUp} className="text-4xl lg:text-5xl xl:text-6xl font-extrabold text-slate-900 mb-8 leading-[1.1] tracking-tighter">
                World-Class Dentistry in a <span className="text-blue-600">Relaxing Environment</span>
              </motion.h3>
              <motion.p variants={fadeUp} className="text-xl text-slate-600 mb-12 leading-relaxed font-light">
                Dentazone combines advanced technology, expert dental care, and a patient-first approach to create healthy, confident smiles in a comfortable and modern setting.
              </motion.p>
              
              <motion.div variants={fadeUp} className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-8 mb-12">
                {[
                  "Painless procedures",
                  "Advanced digital dentistry",
                  "Expert dental care",
                  "Transparent pricing",
                  "Personalized care",
                  "Modern technology",
                  "Emergency support",
                  "Comfortable experience"
                ].map((item, i) => (
                  <div key={i} className="flex items-center group">
                    <div className="bg-blue-100 p-1.5 rounded-full mr-4 group-hover:bg-blue-600 transition-colors">
                      <CheckCircle2 className="w-5 h-5 text-blue-600 group-hover:text-white transition-colors" />
                    </div>
                    <span className="text-slate-800 font-semibold">{item}</span>
                  </div>
                ))}
              </motion.div>
              
              <motion.div variants={fadeUp}>
                <Button asChild size="lg" className="rounded-full h-16 px-10 text-lg shadow-[0_8px_30px_rgb(0,0,0,0.15)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.25)] hover:-translate-y-1 transition-all duration-300 bg-slate-900 hover:bg-slate-800 group">
                  <Link href="#contact">
                    Get in Touch <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-2 transition-transform" />
                  </Link>
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-32 bg-white relative">
        <div className="absolute top-0 left-0 w-full h-1/2 bg-slate-50/50"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-block px-4 py-1.5 rounded-full bg-blue-100 text-blue-700 font-bold text-xs tracking-widest uppercase mb-6"
            >
              Our Expertise
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 mb-6 tracking-tighter leading-tight"
            >
              Premium Dental Services
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-xl text-slate-600 font-light"
            >
              Comprehensive care using the latest technology and techniques to ensure your smile is healthy and beautiful.
            </motion.p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Dental Implants", desc: "Permanent, natural-looking tooth replacements that restore function and aesthetics flawlessly.", icon: Activity },
              { title: "Root Canal Treatment", desc: "Painless endodontic therapy to save infected teeth and relieve severe toothache immediately.", icon: Shield },
              { title: "Teeth Whitening", desc: "Professional bleaching for an instantly brighter, radiant, and incredibly confident smile.", icon: Smile },
              { title: "Smile Makeover", desc: "Customized cosmetic treatments to completely transform and perfect your smile's appearance.", icon: Star },
              { title: "Clear Aligners", desc: "Invisible, comfortable braces to straighten teeth without traditional and bulky metal wires.", icon: Heart },
              { title: "Kids Dentistry", desc: "Gentle, friendly, and specialized dental care designed specifically for children and young teens.", icon: Smile },
            ].map((service, i) => (
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                key={i} 
                className="group relative bg-white p-10 rounded-[2rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 hover:shadow-[0_20px_50px_rgb(37,99,235,0.08)] hover:-translate-y-2 transition-all duration-500 overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-bl-full opacity-50 group-hover:scale-150 transition-transform duration-700 ease-out -z-10"></div>
                <div className="w-16 h-16 bg-blue-50/80 backdrop-blur-sm border border-blue-100 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-blue-600 group-hover:shadow-lg group-hover:shadow-blue-600/30 transition-all duration-500">
                  <service.icon className="w-8 h-8 text-blue-600 group-hover:text-white transition-colors duration-500" />
                </div>
                <h4 className="text-2xl font-bold text-slate-900 mb-4 tracking-tight group-hover:text-blue-600 transition-colors">{service.title}</h4>
                <p className="text-slate-600 mb-8 leading-relaxed font-light">{service.desc}</p>
                <Link href="#contact" className="inline-flex items-center font-bold text-slate-900 group-hover:text-blue-600 transition-colors uppercase tracking-wider text-sm">
                  Learn More <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform duration-300" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-32 bg-slate-900 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-900/20 blur-3xl rounded-full translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-1/2 h-full bg-blue-600/10 blur-3xl rounded-full -translate-x-1/2"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-blue-300 font-bold text-xs tracking-widest uppercase mb-6 backdrop-blur-sm"
            >
              Testimonials
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 tracking-tighter"
            >
              Stories of <span className="text-blue-400">Transformed Smiles</span>
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "Rahul S.", review: "The absolute best dental experience I've ever had. The clinic feels like a luxury lounge, and the treatment was completely painless.", stars: 5 },
              { name: "Priya M.", review: "Got my smile makeover done here. The attention to detail and personalized care by the doctors is unmatched in Thane.", stars: 5 },
              { name: "Amit K.", review: "Extremely professional staff and highly advanced equipment. They made my root canal procedure a breeze. Highly recommended!", stars: 5 }
            ].map((test, i) => (
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2, duration: 0.6 }}
                key={i} 
                className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-[2rem] hover:bg-white/10 transition-colors duration-300"
              >
                <div className="flex gap-1 mb-6">
                  {[...Array(test.stars)].map((_, idx) => (
                    <Star key={idx} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <Quote className="w-10 h-10 text-blue-400/30 mb-4" />
                <p className="text-slate-300 text-lg font-light leading-relaxed mb-8">"{test.review}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center text-blue-300 font-bold text-lg border border-blue-400/30">
                    {test.name[0]}
                  </div>
                  <div className="text-white font-semibold">{test.name}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-32 bg-slate-50 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-block px-4 py-1.5 rounded-full bg-blue-100 text-blue-700 font-bold text-xs tracking-widest uppercase mb-6"
            >
              Our Clinic
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tighter"
            >
              State-of-the-Art <span className="text-blue-600">Facilities</span>
            </motion.h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((src, i) => (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                key={i} 
                className={`group relative rounded-3xl overflow-hidden shadow-sm hover:shadow-[0_20px_50px_rgb(0,0,0,0.15)] cursor-pointer ${i === 0 || i === 3 ? "lg:col-span-2 aspect-video" : "aspect-square"}`}
                onClick={() => setLightboxImg(src)}
              >
                <Image src={src} alt="Gallery image" fill className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out" />
                <div className="absolute inset-0 bg-blue-900/0 group-hover:bg-blue-900/30 transition-colors duration-500 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 scale-50 group-hover:scale-100 transition-all duration-500">
                    <ZoomIn className="w-8 h-8 text-white" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-32 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tighter">Frequently Asked Questions</h2>
            <p className="text-xl text-slate-600 font-light">Everything you need to know about our services and clinic.</p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                key={i} 
                className="border border-slate-200 rounded-2xl overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow"
              >
                <button
                  onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                  className="w-full px-6 py-5 flex justify-between items-center text-left focus:outline-none"
                >
                  <span className="text-lg font-bold text-slate-900 pr-8">{faq.q}</span>
                  <ChevronDown className={`w-6 h-6 text-blue-600 transition-transform duration-300 flex-shrink-0 ${activeFaq === i ? 'rotate-180' : ''}`} />
                </button>
                <AnimatePresence>
                  {activeFaq === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="px-6 pb-6"
                    >
                      <p className="text-slate-600 font-light leading-relaxed pt-2 border-t border-slate-100">{faq.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Appointment Form Section with Glassmorphism overlay */}
      <section id="contact" className="py-32 bg-slate-50 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-[60%] bg-blue-600"></div>
        <div className="absolute top-0 right-0 w-1/2 h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-overlay pointer-events-none"></div>
        
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white/90 backdrop-blur-2xl rounded-[2.5rem] shadow-[0_20px_60px_rgb(0,0,0,0.15)] border border-white overflow-hidden flex flex-col lg:flex-row"
          >
            <div className="w-full lg:w-5/12 bg-slate-900 p-12 text-white flex flex-col justify-between relative overflow-hidden">
              <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500 rounded-full blur-[100px] opacity-30 -mr-20 -mt-20"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500 rounded-full blur-[80px] opacity-20 -ml-20 -mb-20"></div>
              
              <div className="relative z-10">
                <div className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-blue-300 font-bold text-xs tracking-widest uppercase mb-6 backdrop-blur-md">
                  Book Online
                </div>
                <h3 className="text-4xl font-extrabold mb-4 tracking-tight">Reserve Your Visit</h3>
                <p className="text-slate-300 mb-12 text-lg font-light leading-relaxed">Schedule an appointment with our expert dentists today and take the first step towards a confident smile.</p>
                
                <div className="space-y-8">
                  <div className="flex items-center group">
                    <div className="w-14 h-14 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center mr-6 group-hover:bg-blue-600 transition-colors duration-300">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="text-sm text-slate-400 font-medium tracking-wide uppercase mb-1">Call Us Now</div>
                      <a href="tel:9970418588" className="text-2xl font-semibold hover:text-blue-400 transition-colors">9970418588</a>
                    </div>
                  </div>
                  <div className="flex items-center group">
                    <div className="w-14 h-14 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center mr-6 group-hover:bg-green-500 transition-colors duration-300">
                      <MessageCircle className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="text-sm text-slate-400 font-medium tracking-wide uppercase mb-1">WhatsApp</div>
                      <a href="https://wa.link/7oj64s" target="_blank" rel="noopener noreferrer" className="text-2xl font-semibold hover:text-green-400 transition-colors">9970418588</a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <div className="w-full lg:w-7/12 p-10 md:p-14 bg-white">
              <form action="https://formsubmit.co/vith84852@gmail.com" method="POST" className="space-y-6">
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_next" value="https://wa.link/7oj64s" />
                <input type="text" name="_honey" style={{ display: "none" }} />
                
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 tracking-wide">FULL NAME</label>
                  <input type="text" name="name" required className="w-full px-5 py-4 rounded-2xl border-2 border-slate-100 focus:outline-none focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all bg-slate-50 focus:bg-white text-lg" placeholder="John Doe" />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 tracking-wide">PHONE NUMBER</label>
                    <input type="tel" name="phone" required className="w-full px-5 py-4 rounded-2xl border-2 border-slate-100 focus:outline-none focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all bg-slate-50 focus:bg-white text-lg" placeholder="+91 9970418588" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 tracking-wide">EMAIL ADDRESS</label>
                    <input type="email" name="email" required className="w-full px-5 py-4 rounded-2xl border-2 border-slate-100 focus:outline-none focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all bg-slate-50 focus:bg-white text-lg" placeholder="john@example.com" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 tracking-wide">TREATMENT TYPE</label>
                  <select name="treatment" required className="w-full px-5 py-4 rounded-2xl border-2 border-slate-100 focus:outline-none focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all bg-slate-50 focus:bg-white text-lg appearance-none cursor-pointer">
                    <option value="">Select a treatment</option>
                    <option value="General Checkup">General Checkup</option>
                    <option value="Implants">Dental Implants</option>
                    <option value="Root Canal">Root Canal</option>
                    <option value="Whitening">Teeth Whitening</option>
                    <option value="Braces/Aligners">Braces / Aligners</option>
                    <option value="Emergency">Emergency</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 tracking-wide">MESSAGE (OPTIONAL)</label>
                  <textarea name="message" rows={4} className="w-full px-5 py-4 rounded-2xl border-2 border-slate-100 focus:outline-none focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all bg-slate-50 focus:bg-white resize-none text-lg" placeholder="How can we help you?"></textarea>
                </div>
                
                <Button type="submit" className="w-full h-16 rounded-2xl text-lg font-bold bg-blue-600 hover:bg-blue-700 shadow-[0_8px_30px_rgb(37,99,235,0.25)] hover:shadow-[0_8px_30px_rgb(37,99,235,0.4)] hover:-translate-y-1 transition-all mt-4">
                  Confirm Appointment <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </form>
            </div>
          </motion.div>
        </div>
      </section>
      {/* Lightbox */}
      <AnimatePresence>
        {lightboxImg && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-900/90 backdrop-blur-md p-4"
            onClick={() => setLightboxImg(null)}
          >
            <button className="absolute top-6 right-6 text-white hover:text-blue-400 transition-colors p-2 bg-white/10 rounded-full backdrop-blur-md">
              <X className="w-8 h-8" />
            </button>
            <motion.div 
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-full max-w-6xl aspect-video rounded-2xl overflow-hidden shadow-[0_30px_60px_rgb(0,0,0,0.5)]"
              onClick={(e) => e.stopPropagation()}
            >
              <Image src={lightboxImg} alt="Enlarged gallery view" fill className="object-contain" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
