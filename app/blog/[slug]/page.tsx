import Image from "next/image";
import Link from "next/link";
import { Calendar, User, ChevronLeft } from "lucide-react";
import { notFound } from "next/navigation";

const blogData = {
  "maintaining-teeth-whitening-results": {
    title: "5 Tips for Maintaining Your Teeth Whitening Results",
    content: `
      <p>You've just invested in a professional teeth whitening treatment, and your smile is looking more brilliant than ever. But how do you ensure those results last?</p>
      <h2>1. Avoid Dark-Colored Foods and Beverages</h2>
      <p>Coffee, tea, red wine, and dark sodas are notorious for staining teeth. If you do consume them, try using a straw to minimize contact with your teeth.</p>
      <h2>2. Quit Smoking</h2>
      <p>Tobacco use is one of the primary causes of tooth discoloration. Quitting not only benefits your overall health but also keeps your smile bright.</p>
      <h2>3. Brush and Floss Regularly</h2>
      <p>Good oral hygiene prevents the buildup of plaque, which can attract stains. Brush twice a day and floss daily.</p>
      <h2>4. Use a Whitening Toothpaste</h2>
      <p>While not a substitute for professional whitening, a good whitening toothpaste can help remove surface stains and maintain your results.</p>
      <h2>5. Schedule Regular Cleanings</h2>
      <p>Professional cleanings every six months remove plaque and tartar that regular brushing misses, keeping your teeth healthy and white.</p>
    `,
    image: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    date: "May 12, 2024",
    author: "Dr. Sarah Jenkins",
    category: "Cosmetic Dentistry"
  }
};

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = blogData[params.slug as keyof typeof blogData] || blogData["maintaining-teeth-whitening-results"];

  if (!post) {
    notFound();
  }

  return (
    <div className="bg-white min-h-screen pb-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
        <Link href="/blog" className="inline-flex items-center text-blue-600 font-medium hover:text-blue-800 mb-8 transition-colors">
          <ChevronLeft className="w-5 h-5 mr-1" /> Back to Blog
        </Link>
        
        <div className="mb-8">
          <span className="bg-blue-100 text-blue-800 text-sm font-bold uppercase tracking-wider py-1 px-3 rounded-full mb-4 inline-block">
            {post.category}
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 leading-tight">
            {post.title}
          </h1>
          <div className="flex items-center text-slate-500 space-x-6 border-y border-slate-100 py-4">
            <div className="flex items-center">
              <User className="w-5 h-5 mr-2" />
              <span className="font-medium text-slate-700">{post.author}</span>
            </div>
            <div className="flex items-center">
              <Calendar className="w-5 h-5 mr-2" />
              <span>{post.date}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="relative h-[400px] md:h-[500px] w-full rounded-3xl overflow-hidden shadow-lg">
          <Image src={post.image} alt={post.title} fill className="object-cover" />
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          className="prose prose-lg prose-blue max-w-none prose-headings:font-bold prose-headings:text-slate-900 prose-p:text-slate-600 prose-p:leading-relaxed"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </div>
    </div>
  );
}
