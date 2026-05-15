import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function ServicesPage() {
  const services = [
    {
      title: "Teeth Whitening",
      slug: "teeth-whitening",
      description: "Professional whitening treatments that safely and effectively remove years of stains, giving you a dazzling, bright smile in just one visit.",
      image: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Root Canal",
      slug: "root-canal",
      description: "Painless endodontic therapy to save your natural tooth. We use advanced rotary instrumentation for quick and comfortable treatment.",
      image: "https://images.unsplash.com/photo-1598256989800-fea5c5ce870b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Dental Implants",
      slug: "dental-implants",
      description: "The gold standard for tooth replacement. Our state-of-the-art implants look, feel, and function exactly like your natural teeth.",
      image: "https://images.unsplash.com/photo-1600170311833-c2cf5280ce49?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Braces",
      slug: "braces",
      description: "Traditional and ceramic orthodontic solutions tailored to perfectly align your teeth and correct bite issues.",
      image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Invisalign",
      slug: "invisalign",
      description: "Clear, removable aligners that straighten your teeth discreetly. The modern alternative to traditional braces.",
      image: "https://images.unsplash.com/photo-1528151527339-a1b72a0c4f87?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Smile Makeover",
      slug: "smile-makeover",
      description: "A comprehensive cosmetic transformation combining veneers, whitening, and contouring for the perfect Hollywood smile.",
      image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Pediatric Dentistry",
      slug: "pediatric-dentistry",
      description: "Gentle, fun, and preventive dental care designed specifically for children to build healthy habits from a young age.",
      image: "https://images.unsplash.com/photo-1518152006812-edab29b069ac?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Teeth Cleaning",
      slug: "teeth-cleaning",
      description: "Thorough prophylactic cleanings to remove plaque and tartar, preventing gum disease and maintaining optimal oral health.",
      image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    }
  ];

  return (
    <div className="bg-slate-50 min-h-screen pb-24">
      {/* Header */}
      <div className="bg-blue-900 text-white py-20 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h1>
        <p className="text-blue-200 max-w-2xl mx-auto text-lg">
          Comprehensive, state-of-the-art dental treatments tailored to your unique needs.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col group">
              <div className="relative h-64 overflow-hidden">
                <Image 
                  src={service.image} 
                  alt={service.title} 
                  fill 
                  className="object-cover group-hover:scale-105 transition-transform duration-500" 
                />
              </div>
              <div className="p-8 flex-grow flex flex-col">
                <h3 className="text-2xl font-bold text-slate-900 mb-3">{service.title}</h3>
                <p className="text-slate-600 mb-6 flex-grow">{service.description}</p>
                <Link 
                  href={`/services/${service.slug}`} 
                  className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-800 transition-colors"
                >
                  Learn More <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
