import Link from "next/link";
import Image from "next/image";
import { Calendar, User } from "lucide-react";

export default function BlogPage() {
  const posts = [
    {
      title: "5 Tips for Maintaining Your Teeth Whitening Results",
      slug: "maintaining-teeth-whitening-results",
      excerpt: "You've just invested in a professional teeth whitening treatment and your smile looks brilliant. Here are our top tips to keep it that way for years to come.",
      image: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      date: "May 12, 2024",
      author: "Dr. Sarah Jenkins",
      category: "Cosmetic Dentistry"
    },
    {
      title: "Invisalign vs. Traditional Braces: Which is Right for You?",
      slug: "invisalign-vs-braces",
      excerpt: "Both Invisalign and traditional braces are effective at straightening teeth, but they have distinct advantages and drawbacks. Find out which option fits your lifestyle.",
      image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      date: "April 28, 2024",
      author: "Dr. Michael Chen",
      category: "Orthodontics"
    },
    {
      title: "The Importance of Early Dental Care for Children",
      slug: "early-dental-care-children",
      excerpt: "When should your child first visit the dentist? Early dental care sets the foundation for a lifetime of healthy smiles. Learn why preventive pediatric dentistry is crucial.",
      image: "https://images.unsplash.com/photo-1518152006812-edab29b069ac?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      date: "April 15, 2024",
      author: "Dr. Emily Davis",
      category: "Pediatric"
    },
    {
      title: "What to Expect During a Root Canal Procedure",
      slug: "what-to-expect-root-canal",
      excerpt: "Root canals have a bad reputation, but modern techniques make them virtually painless. Demystify the procedure and learn exactly what happens during treatment.",
      image: "https://images.unsplash.com/photo-1598256989800-fea5c5ce870b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      date: "March 30, 2024",
      author: "Dr. Sarah Jenkins",
      category: "Endodontics"
    },
    {
      title: "Dental Implants: A Permanent Solution for Missing Teeth",
      slug: "dental-implants-permanent-solution",
      excerpt: "Missing teeth can affect your confidence and oral health. Discover why dental implants are considered the gold standard for tooth replacement.",
      image: "https://images.unsplash.com/photo-1600170311833-c2cf5280ce49?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      date: "March 10, 2024",
      author: "Dr. James Wilson",
      category: "Restorative"
    },
    {
      title: "How Diet Affects Your Oral Health",
      slug: "diet-and-oral-health",
      excerpt: "What you eat has a profound impact on your teeth and gums. Learn which foods promote oral health and which ones you should consume in moderation.",
      image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      date: "February 22, 2024",
      author: "Dr. Emily Davis",
      category: "General Health"
    }
  ];

  return (
    <div className="bg-slate-50 min-h-screen pb-24">
      <section className="bg-white py-20 border-b border-slate-100 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6">Dental Insights & News</h1>
          <p className="text-xl text-slate-600">
            Educational articles, clinic updates, and tips for maintaining a healthy smile.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {posts.map((post, index) => (
            <Link href={`/blog/${post.slug}`} key={index} className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col">
              <div className="relative h-56 overflow-hidden">
                <Image 
                  src={post.image} 
                  alt={post.title} 
                  fill 
                  className="object-cover group-hover:scale-105 transition-transform duration-500" 
                />
                <div className="absolute top-4 left-4 bg-blue-600 text-white text-xs font-bold uppercase tracking-wider py-1 px-3 rounded-full">
                  {post.category}
                </div>
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <div className="flex items-center text-sm text-slate-500 mb-4 space-x-4">
                  <span className="flex items-center"><Calendar className="w-4 h-4 mr-2" /> {post.date}</span>
                  <span className="flex items-center"><User className="w-4 h-4 mr-2" /> {post.author}</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {post.title}
                </h3>
                <p className="text-slate-600 line-clamp-3 mb-6 flex-grow">
                  {post.excerpt}
                </p>
                <span className="text-blue-600 font-medium inline-flex items-center mt-auto">
                  Read Article &rarr;
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
