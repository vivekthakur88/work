import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import Image from "next/image";
import { HeroLottie } from "@/components/HeroLottie";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <HeroLottie />

      {/* Services Overview */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Comprehensive Services</h2>
            <p className="text-slate-600">From routine cleanings to advanced cosmetic procedures, we offer everything you need for a healthy, beautiful smile.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Teeth Whitening", desc: "Professional whitening for a brighter smile in just one hour.", icon: "✨" },
              { title: "Dental Implants", desc: "Permanent, natural-looking replacements for missing teeth.", icon: "🦷" },
              { title: "Invisalign", desc: "Clear aligners to straighten your teeth discreetly.", icon: "😁" },
              { title: "General Dentistry", desc: "Routine checkups, cleanings, and preventive care.", icon: "🩺" }
            ].map((service, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <div className="text-4xl mb-6 bg-blue-50 w-16 h-16 rounded-2xl flex items-center justify-center">{service.icon}</div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3">{service.title}</h3>
                <p className="text-slate-600 text-sm mb-6 leading-relaxed">{service.desc}</p>
                <Link href="/services" className="text-blue-600 font-medium inline-flex items-center hover:text-blue-700">
                  Learn more <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-16">
          <div className="w-full lg:w-1/2 relative h-[500px] rounded-3xl overflow-hidden shadow-2xl">
            <Image 
              src="https://images.unsplash.com/photo-1600170311833-c2cf5280ce49?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
              alt="Dentkraft Clinic" 
              fill 
              className="object-cover" 
            />
            <div className="absolute inset-0 bg-blue-900/10"></div>
          </div>
          <div className="w-full lg:w-1/2">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">Why Patients Choose Dentkraft</h2>
            <p className="text-lg text-slate-600 mb-8">
              We believe that visiting the dentist shouldn't be stressful. Our clinic is designed to provide a relaxing, spa-like experience while delivering top-tier clinical results.
            </p>
            <ul className="space-y-5">
              {[
                "Advanced 3D Imaging Technology",
                "Painless Treatment Protocols",
                "Flexible Payment Plans & Insurance",
                "Experienced & Compassionate Team"
              ].map((item, i) => (
                <li key={i} className="flex items-center text-slate-700 font-medium text-lg">
                  <CheckCircle2 className="w-6 h-6 text-blue-500 mr-4 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <Button asChild size="lg" className="mt-10 rounded-full h-12 px-8">
              <Link href="/about">Meet Our Team</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 bg-blue-600 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">Ready to Transform Your Smile?</h2>
          <p className="text-blue-100 text-lg lg:text-xl mb-10 max-w-2xl mx-auto">
            Book your consultation today and take the first step towards the healthy, confident smile you've always wanted.
          </p>
          <Button asChild size="lg" variant="secondary" className="rounded-full h-14 px-10 text-lg text-blue-600 shadow-xl hover:shadow-2xl">
            <Link href="/appointment">Schedule Your Visit</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
