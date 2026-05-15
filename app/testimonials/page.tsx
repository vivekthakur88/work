import Image from "next/image";
import { Star } from "lucide-react";

export default function TestimonialsPage() {
  const reviews = [
    {
      name: "Michael Chen",
      rating: 5,
      text: "I've always had severe dental anxiety, but the team at Dentkraft completely changed my perspective. Dr. Jenkins was incredibly patient, explaining every step of my root canal. It was virtually painless!",
      service: "Root Canal",
      date: "October 2023",
      image: "https://i.pravatar.cc/150?img=11"
    },
    {
      name: "Sarah Peterson",
      rating: 5,
      text: "My Invisalign journey with Dentkraft has been amazing. The clinic is beautiful, the staff is always welcoming, and my teeth look perfect. Highly recommend!",
      service: "Invisalign",
      date: "August 2023",
      image: "https://i.pravatar.cc/150?img=5"
    },
    {
      name: "David Rodriguez",
      rating: 5,
      text: "I needed two dental implants and was very nervous about the procedure. The advanced 3D imaging and Dr. Jenkins' expertise made it a breeze. They look and feel exactly like my real teeth.",
      service: "Dental Implants",
      date: "November 2023",
      image: "https://i.pravatar.cc/150?img=12"
    },
    {
      name: "Emily Thompson",
      rating: 5,
      text: "Got my teeth whitened here before my wedding. The results were spectacular! The process was quick and I experienced zero sensitivity. Thank you Dentkraft for making my smile perfect for my big day.",
      service: "Teeth Whitening",
      date: "December 2023",
      image: "https://i.pravatar.cc/150?img=20"
    },
    {
      name: "James Wilson",
      rating: 5,
      text: "Best dental clinic I have ever visited. It feels more like a luxury spa than a medical facility. The comprehensive checkup was thorough and professional.",
      service: "General Dentistry",
      date: "January 2024",
      image: "https://i.pravatar.cc/150?img=15"
    },
    {
      name: "Olivia Martinez",
      rating: 5,
      text: "We take both our kids here. The pediatric dentist is a magician! My kids actually look forward to going to the dentist now. They get to watch Netflix while their teeth are cleaned.",
      service: "Pediatric Dentistry",
      date: "February 2024",
      image: "https://i.pravatar.cc/150?img=22"
    }
  ];

  return (
    <div className="bg-slate-50 min-h-screen pb-24">
      {/* Header */}
      <section className="bg-white py-20 border-b border-slate-100 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6">Patient Stories</h1>
          <p className="text-xl text-slate-600 mb-8">
            Don't just take our word for it. Read what our patients have to say about their experience at Dentkraft.
          </p>
          <div className="flex items-center justify-center space-x-2 text-2xl font-bold text-slate-900">
            <span className="text-yellow-400 flex">
              {[1, 2, 3, 4, 5].map((s) => <Star key={s} className="w-8 h-8" fill="currentColor" />)}
            </span>
            <span className="ml-2">4.9/5</span>
          </div>
          <p className="text-slate-500 mt-2 font-medium">Based on 500+ Google Reviews</p>
        </div>
      </section>

      {/* Reviews Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div key={index} className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 flex flex-col hover:shadow-xl transition-shadow">
              <div className="flex text-yellow-400 mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5" fill="currentColor" />
                ))}
              </div>
              <p className="text-slate-700 leading-relaxed italic flex-grow mb-8">"{review.text}"</p>
              
              <div className="flex items-center mt-auto border-t border-slate-100 pt-6">
                <Image 
                  src={review.image} 
                  alt={review.name} 
                  width={50} 
                  height={50} 
                  className="rounded-full mr-4 border border-slate-200" 
                />
                <div>
                  <h4 className="font-bold text-slate-900">{review.name}</h4>
                  <p className="text-sm text-slate-500">{review.service} • {review.date}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
