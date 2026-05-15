"use client";

import { motion } from "framer-motion";
import { DotLottiePlayer } from "@dotlottie/react-player";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, Star } from "lucide-react";
import Link from "next/link";
import "@dotlottie/react-player/dist/index.css";

export function HeroLottie() {
  return (
    <section className="relative w-full min-h-[90vh] flex items-center justify-center overflow-hidden bg-white">
      {/* Background Gradients & Glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-100/40 rounded-full blur-[100px] mix-blend-multiply opacity-70 animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-sky-100/40 rounded-full blur-[120px] mix-blend-multiply opacity-50" />
      </div>

      <div className="container px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Side: Text Content */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-8"
          >
            <div className="inline-flex items-center rounded-full border border-blue-200 bg-blue-50/50 px-3 py-1 text-sm text-blue-700 backdrop-blur-sm shadow-sm">
              <span className="flex h-2 w-2 rounded-full bg-blue-600 mr-2 animate-pulse"></span>
              Accepting New Patients
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-slate-900 leading-[1.1]">
              Premium Dental Care <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-sky-400">
                You Can Trust
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-slate-600 max-w-[600px] leading-relaxed">
              Experience world-class dentistry in a luxurious, relaxing environment. 
              We combine advanced technology with a gentle touch to give you the perfect smile.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <Link href="/appointment">
                <Button size="lg" className="h-14 px-8 rounded-full text-base font-semibold shadow-xl shadow-blue-500/20 hover:shadow-blue-500/30 hover:-translate-y-1 transition-all duration-300 w-full sm:w-auto">
                  Book Appointment <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link href="/services">
                <Button size="lg" variant="outline" className="h-14 px-8 rounded-full text-base font-semibold border-slate-200 hover:bg-slate-50 w-full sm:w-auto">
                  Our Services
                </Button>
              </Link>
            </div>

            {/* Trust Badges */}
            <div className="pt-8 grid grid-cols-2 sm:grid-cols-3 gap-6 w-full max-w-[500px]">
              <div className="flex flex-col items-center lg:items-start gap-1">
                <div className="flex text-amber-400">
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                </div>
                <p className="text-sm font-medium text-slate-900">5.0 Rating</p>
                <p className="text-xs text-slate-500">Over 2k+ reviews</p>
              </div>
              <div className="flex flex-col items-center lg:items-start gap-1">
                <CheckCircle2 className="w-6 h-6 text-blue-600" />
                <p className="text-sm font-medium text-slate-900">Top Rated</p>
                <p className="text-xs text-slate-500">Local Specialists</p>
              </div>
              <div className="flex flex-col items-center lg:items-start gap-1 hidden sm:flex">
                <div className="flex -space-x-2">
                  <div className="w-8 h-8 rounded-full bg-slate-200 border-2 border-white overflow-hidden"><img src="https://i.pravatar.cc/100?img=1" alt="Patient" /></div>
                  <div className="w-8 h-8 rounded-full bg-slate-200 border-2 border-white overflow-hidden"><img src="https://i.pravatar.cc/100?img=5" alt="Patient" /></div>
                  <div className="w-8 h-8 rounded-full bg-slate-200 border-2 border-white overflow-hidden flex items-center justify-center text-[10px] font-bold text-slate-600">9k+</div>
                </div>
                <p className="text-sm font-medium text-slate-900">Happy Smiles</p>
              </div>
            </div>
          </motion.div>

          {/* Right Side: Lottie Animation with Premium Glow */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            className="relative lg:h-[600px] flex items-center justify-center w-full"
          >
            {/* Animated background glow behind Lottie */}
            <motion.div 
              animate={{ 
                scale: [1, 1.05, 1],
                opacity: [0.5, 0.6, 0.5]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute w-3/4 h-3/4 bg-blue-300/30 rounded-full blur-[80px]"
            />
            
            {/* Lottie Container with Float animation */}
            <motion.div 
              animate={{ y: [-15, 15, -15] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="relative w-full max-w-[500px] aspect-square drop-shadow-2xl z-10"
            >
              <DotLottiePlayer
                src="/Tooth.lottie"
                autoplay
                loop
                style={{ width: '100%', height: '100%' }}
              />
            </motion.div>

            {/* Decorative Floating Elements */}
            <motion.div 
              animate={{ y: [0, -20, 0], opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute top-10 right-10 w-16 h-16 bg-white/80 backdrop-blur-md rounded-2xl shadow-xl flex items-center justify-center border border-white/50"
            >
              <span className="text-2xl">✨</span>
            </motion.div>
            
            <motion.div 
              animate={{ y: [0, 20, 0], opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="absolute bottom-20 left-10 w-14 h-14 bg-white/80 backdrop-blur-md rounded-full shadow-xl flex items-center justify-center border border-white/50"
            >
              <span className="text-blue-500 font-bold">+</span>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
