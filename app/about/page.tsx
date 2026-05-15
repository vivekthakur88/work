import Image from "next/image";
import { CheckCircle } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-slate-50 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-extrabold text-slate-900 mb-6">About Dentkraft</h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Redefining the dental experience with world-class expertise, advanced technology, and a commitment to your comfort.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative h-[600px] rounded-3xl overflow-hidden shadow-2xl">
              <Image 
                src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                alt="Our Clinic" 
                fill 
                className="object-cover" 
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Our Mission & Vision</h2>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                Founded in 2010, Dentkraft was built on a simple premise: going to the dentist shouldn't be an anxiety-inducing experience. We set out to create a sanctuary where state-of-the-art clinical excellence meets the soothing atmosphere of a luxury spa.
              </p>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                Our vision is to be the premier destination for comprehensive dental care, where every patient feels heard, valued, and leaves with a smile that exceeds their expectations.
              </p>
              
              <div className="space-y-4">
                {[
                  "Over 10,000 satisfied patients",
                  "Award-winning clinical team",
                  "Pioneers in pain-free dentistry",
                  "Committed to continuous education"
                ].map((item, i) => (
                  <div key={i} className="flex items-center">
                    <CheckCircle className="w-6 h-6 text-blue-500 mr-4" />
                    <span className="text-slate-800 font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Meet the Doctor */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900">Meet Our Lead Specialist</h2>
            <p className="text-slate-600 mt-4 text-lg">Expertise you can trust, compassion you deserve.</p>
          </div>
          
          <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-sm border border-slate-100 max-w-5xl mx-auto flex flex-col md:flex-row gap-12 items-center">
            <div className="w-full md:w-1/3 relative h-80 md:h-96 rounded-2xl overflow-hidden shadow-lg flex-shrink-0">
              <Image 
                src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Dr. Sarah Jenkins" 
                fill 
                className="object-cover" 
              />
            </div>
            <div className="w-full md:w-2/3">
              <h3 className="text-2xl font-bold text-slate-900 mb-2">Dr. Sarah Jenkins, DDS, MS</h3>
              <p className="text-blue-600 font-medium mb-6">Prosthodontist & Cosmetic Specialist</p>
              
              <div className="space-y-4 text-slate-600 leading-relaxed mb-8">
                <p>
                  Dr. Jenkins is a board-certified prosthodontist with over 15 years of experience in complex restorative and cosmetic dentistry. She received her Doctor of Dental Surgery degree from the prestigious University of Pennsylvania.
                </p>
                <p>
                  Recognized as one of the top cosmetic dentists in the country, her approach combines meticulous attention to detail with an artistic eye, ensuring results that are both functionally flawless and visually stunning.
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-slate-50 p-4 rounded-xl">
                  <h4 className="font-bold text-slate-900">Education</h4>
                  <p className="text-sm text-slate-600 mt-1">DDS, University of Pennsylvania</p>
                </div>
                <div className="bg-slate-50 p-4 rounded-xl">
                  <h4 className="font-bold text-slate-900">Experience</h4>
                  <p className="text-sm text-slate-600 mt-1">15+ Years Clinical Practice</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
