import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CheckCircle2, ChevronRight, Calendar } from "lucide-react";
import { notFound } from "next/navigation";

// In a real application, this might come from Prisma database
const servicesData = {
  "teeth-whitening": {
    title: "Professional Teeth Whitening",
    overview: "Get a noticeably brighter smile in just one visit. Our professional whitening treatments are safe, effective, and tailored to minimize sensitivity.",
    benefits: ["Instant results in one hour", "Safe for enamel", "Minimal to no sensitivity", "Customizable shade selection"],
    procedure: "We apply a protective gel to your gums, then paint the bleaching agent onto your teeth. A special light is used to activate the gel. This is repeated 3-4 times in 15-minute intervals.",
    faq: [
      { q: "How long does it last?", a: "Results typically last 1-3 years depending on dietary habits and oral hygiene." },
      { q: "Does it hurt?", a: "Most patients experience no pain, though some may have temporary sensitivity." }
    ],
    pricing: "Starting at $299",
    image: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
  },
  "root-canal": {
    title: "Root Canal Therapy",
    overview: "Save your natural tooth and eliminate pain. We use advanced rotary endodontics and 3D imaging to ensure a completely painless and precise procedure.",
    benefits: ["Saves your natural tooth", "Eliminates infection and pain", "Prevents jawbone loss", "Virtually painless procedure"],
    procedure: "After profound numbing, we access the infected pulp, clean and shape the root canals, fill them with a biocompatible material, and seal the tooth.",
    faq: [
      { q: "Are root canals painful?", a: "With modern anesthesia, a root canal is no more uncomfortable than a standard filling." },
      { q: "Do I need a crown after?", a: "Usually yes. A crown protects the treated tooth and restores its full strength." }
    ],
    pricing: "Starting at $800",
    image: "https://images.unsplash.com/photo-1598256989800-fea5c5ce870b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
  },
  "dental-implants": {
    title: "Dental Implants",
    overview: "Restore your smile's function and aesthetics permanently. Dental implants look, feel, and function exactly like your natural teeth.",
    benefits: ["Permanent solution", "Looks and feels natural", "Preserves jawbone density", "No dietary restrictions"],
    procedure: "A titanium post is surgically placed in the jawbone. After a healing period where the bone fuses to the implant (osseointegration), a custom crown is attached.",
    faq: [
      { q: "Am I a candidate?", a: "Most adults with adequate jawbone density and good oral health are candidates." },
      { q: "How long is the process?", a: "The entire process typically takes 3-6 months from placement to final crown." }
    ],
    pricing: "Starting at $3,500 per tooth",
    image: "https://images.unsplash.com/photo-1600170311833-c2cf5280ce49?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
  },
  "braces": {
    title: "Orthodontic Braces",
    overview: "Achieve a perfectly straight, functional smile. We offer traditional metal and clear ceramic braces for patients of all ages.",
    benefits: ["Corrects severe bite issues", "Improves overall oral health", "Highly effective and predictable", "Durable materials"],
    procedure: "Brackets are bonded to the teeth and connected by a wire. Periodic adjustments apply gentle pressure to gradually move teeth into their ideal positions.",
    faq: [
      { q: "How long will I wear them?", a: "Average treatment time is 18-24 months, but varies by individual." },
      { q: "Are clear braces available?", a: "Yes, we offer ceramic brackets that blend in with your natural tooth color." }
    ],
    pricing: "Starting at $4,000",
    image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
  },
  "invisalign": {
    title: "Invisalign Clear Aligners",
    overview: "Straighten your teeth invisibly. Invisalign uses a series of clear, custom-molded aligners to gradually shift your teeth without wires or brackets.",
    benefits: ["Virtually invisible", "Removable for eating and brushing", "No food restrictions", "Comfortable smooth plastic"],
    procedure: "We take a 3D digital scan of your teeth and map out your treatment plan. You wear each set of custom aligners for 1-2 weeks before moving to the next.",
    faq: [
      { q: "How many hours a day should I wear them?", a: "For optimal results, aligners should be worn 20-22 hours per day." },
      { q: "Is it faster than braces?", a: "In many cases, yes. Treatment can take anywhere from 6 to 18 months." }
    ],
    pricing: "Starting at $4,500",
    image: "https://images.unsplash.com/photo-1528151527339-a1b72a0c4f87?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
  },
  "smile-makeover": {
    title: "Complete Smile Makeover",
    overview: "A customized treatment plan to completely transform your smile, combining multiple cosmetic and restorative procedures.",
    benefits: ["Dramatic transformation", "Customized to your facial aesthetics", "Corrects multiple issues at once", "Huge confidence boost"],
    procedure: "We evaluate your facial symmetry, tooth color, shape, and alignment. The plan may include veneers, whitening, implants, and gum contouring.",
    faq: [
      { q: "What does it include?", a: "It's highly customized. We discuss your goals and recommend a combination of treatments." },
      { q: "Can I preview the results?", a: "Yes! We use digital smile design to show you exactly what your new smile will look like." }
    ],
    pricing: "Custom Pricing based on treatment plan",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
  },
  "pediatric-dentistry": {
    title: "Pediatric Dentistry",
    overview: "Specialized care for infants, children, and teenagers. We focus on preventive care and creating positive, fear-free dental experiences.",
    benefits: ["Child-friendly environment", "Early detection of issues", "Fluoride treatments and sealants", "Education on proper brushing"],
    procedure: "Visits include a gentle exam, cleaning, and sometimes x-rays. We take extra time to explain everything to your child in a fun, non-threatening way.",
    faq: [
      { q: "When should my child's first visit be?", a: "The AAPD recommends the first visit by age 1 or when the first tooth appears." },
      { q: "Can parents stay in the room?", a: "Absolutely. We welcome parents to stay with their children during appointments." }
    ],
    pricing: "Starting at $150 for exam & cleaning",
    image: "https://images.unsplash.com/photo-1518152006812-edab29b069ac?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
  },
  "teeth-cleaning": {
    title: "Professional Teeth Cleaning",
    overview: "Maintain a healthy smile with our thorough preventive cleanings. Essential for preventing cavities, gingivitis, and periodontal disease.",
    benefits: ["Removes plaque and tartar", "Freshens breath", "Prevents gum disease", "Screens for oral cancer"],
    procedure: "Our hygienists use specialized tools to remove calculus buildup, followed by polishing to remove surface stains and a professional flossing.",
    faq: [
      { q: "How often should I get a cleaning?", a: "We recommend professional cleanings every 6 months for most patients." },
      { q: "Does it hurt?", a: "Routine cleanings are generally painless. If you have sensitive teeth, let us know so we can accommodate you." }
    ],
    pricing: "Starting at $120",
    image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
  }
};

export default function ServiceDetailPage({ params }: { params: { slug: string } }) {
  const service = servicesData[params.slug as keyof typeof servicesData];

  if (!service) {
    notFound();
  }

  return (
    <div className="bg-white pb-20">
      {/* Hero */}
      <div className="relative h-[400px] w-full">
        <Image src={service.image} alt={service.title} fill className="object-cover" />
        <div className="absolute inset-0 bg-slate-900/60 mix-blend-multiply"></div>
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-white">
            <div className="flex items-center text-sm font-medium mb-4 text-blue-200">
              <Link href="/services" className="hover:text-white transition-colors">Services</Link>
              <ChevronRight className="w-4 h-4 mx-2" />
              <span>{service.title}</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">{service.title}</h1>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 flex flex-col lg:flex-row gap-16">
        {/* Main Content */}
        <div className="lg:w-2/3 space-y-12">
          <section>
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Overview</h2>
            <p className="text-lg text-slate-600 leading-relaxed">{service.overview}</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Key Benefits</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {service.benefits.map((benefit, i) => (
                <div key={i} className="flex items-start bg-slate-50 p-4 rounded-xl border border-slate-100">
                  <CheckCircle2 className="w-6 h-6 text-blue-500 mr-3 flex-shrink-0" />
                  <span className="text-slate-700 font-medium">{benefit}</span>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">The Procedure</h2>
            <p className="text-slate-600 leading-relaxed bg-white border-l-4 border-blue-500 pl-6 py-2">
              {service.procedure}
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Frequently Asked Questions</h2>
            <div className="space-y-6">
              {service.faq.map((item, i) => (
                <div key={i} className="bg-slate-50 rounded-xl p-6 border border-slate-100">
                  <h4 className="text-lg font-bold text-slate-900 mb-2">{item.q}</h4>
                  <p className="text-slate-600">{item.a}</p>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Sidebar */}
        <div className="lg:w-1/3">
          <div className="bg-white rounded-3xl p-8 shadow-xl border border-slate-100 sticky top-28">
            <h3 className="text-xl font-bold text-slate-900 mb-2">Ready to proceed?</h3>
            <p className="text-slate-500 mb-6">Schedule a consultation to discuss your specific needs.</p>
            
            <div className="bg-slate-50 rounded-xl p-4 mb-6 text-center border border-slate-100">
              <span className="block text-sm text-slate-500 font-medium uppercase tracking-wider mb-1">Pricing</span>
              <span className="text-2xl font-bold text-blue-600">{service.pricing}</span>
            </div>
            
            <Button asChild className="w-full rounded-full h-14 text-lg shadow-md hover:shadow-xl transition-all">
              <Link href="/appointment">
                <Calendar className="w-5 h-5 mr-2" /> Book Appointment
              </Link>
            </Button>
            <div className="mt-4 text-center">
              <span className="text-sm text-slate-500">Or call us: </span>
              <a href="tel:+917977433521" className="text-sm font-bold text-slate-900 hover:text-blue-600 transition-colors">+91 79774 33521</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
