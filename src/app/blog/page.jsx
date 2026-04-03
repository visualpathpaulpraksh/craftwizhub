import { Calendar, Clock } from "lucide-react";
import Link from "next/link";
import MagicRings from "@/components/ui/MagicRings";

export const metadata = {
  title: "Blog | CraftWizHub",
  description:
    "Read the latest insights on web development, SEO, social media marketing, AI solutions, and digital transformation from CraftWizHub experts.",
};

export default function BlogPage() {
  // Sample blog posts - in production, this would come from a CMS or database
  const blogPosts = [
    {
      id: 1,
      title: "10 Essential SEO Strategies for 2025",
      excerpt:
        "Discover the latest SEO techniques that will help your website rank higher in search engines and drive more organic traffic.",
      author: "CraftWizHub Team",
      date: "March 15, 2025",
      readTime: "5 min read",
      category: "SEO",
      image: "/images/demo/demo-1.jpg",
      slug: "seo-strategies-2025",
    },
    {
      id: 2,
      title: "How AI is Transforming Business Automation",
      excerpt:
        "Learn how artificial intelligence and automation can streamline your business processes and boost productivity.",
      author: "CraftWizHub Team",
      date: "March 12, 2025",
      readTime: "7 min read",
      category: "AI & Automation",
      image: "/images/demo/demo-2.jpg",
      slug: "ai-business-automation",
    },
    {
      id: 3,
      title: "Social Media Marketing Best Practices",
      excerpt:
        "Master the art of social media marketing with proven strategies for Instagram, Facebook, LinkedIn, and Twitter.",
      author: "CraftWizHub Team",
      date: "March 10, 2025",
      readTime: "6 min read",
      category: "Social Media",
      image: "/images/demo/demo-3.jpg",
      slug: "social-media-best-practices",
    },
    {
      id: 4,
      title: "Next.js 15: What's New and Why It Matters",
      excerpt:
        "Explore the latest features in Next.js 15 and how they can improve your web application's performance and developer experience.",
      author: "CraftWizHub Team",
      date: "March 8, 2025",
      readTime: "8 min read",
      category: "Web Development",
      image: "/images/demo/demo-4.jpg",
      slug: "nextjs-15-features",
    },
    {
      id: 5,
      title: "Building Scalable E-Commerce Platforms",
      excerpt:
        "A comprehensive guide to creating robust e-commerce solutions that can handle growth and provide excellent user experiences.",
      author: "CraftWizHub Team",
      date: "March 5, 2025",
      readTime: "10 min read",
      category: "E-Commerce",
      image: "/images/demo/demo-5.jpg",
      slug: "scalable-ecommerce-platforms",
    },
    {
      id: 6,
      title: "Cloud Deployment: AWS vs Azure vs Google Cloud",
      excerpt:
        "Compare the top cloud platforms and learn which one is best suited for your business needs and technical requirements.",
      author: "CraftWizHub Team",
      date: "March 1, 2025",
      readTime: "9 min read",
      category: "Cloud & DevOps",
      image: "/images/demo/demo-6.jpg",
      slug: "cloud-platforms-comparison",
    },
  ];

  const categories = [
    "All",
    "Web Development",
    "SEO",
    "Social Media",
    "AI & Automation",
    "E-Commerce",
    "Cloud & DevOps",
  ];

  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-400 relative overflow-hidden">
      <MagicRings
        color="#8b5cf6"
        colorTwo="#0ea5e9"
        ringCount={5}
        speed={0.5}
        attenuation={8}
        lineThickness={1.5}
        baseRadius={0.4}
        radiusStep={0.12}
        scaleRate={0.08}
        opacity={0.3}
        blur={0}
        noiseAmount={0.05}
        rotation={0}
        ringGap={1.6}
        fadeIn={0.8}
        fadeOut={0.6}
        followMouse={true}
        mouseInfluence={0.15}
        hoverScale={1.1}
        parallax={0.03}
        clickBurst={true}
      />
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 lg:px-20">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            CraftWizHub Blog
          </h1>
          <p className="text-xl md:text-2xl text-neutral-300 max-w-3xl mx-auto">
            Insights, tutorials, and best practices for digital transformation
          </p>
        </div>
      </section>

      {/* Categories */}
      <section className="px-4 lg:px-20 pb-10">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`px-4 py-2 rounded-lg border transition-colors ${
                  index === 0
                    ? "bg-violet-600 border-violet-600 text-white"
                    : "border-neutral-700 hover:border-violet-600 hover:text-white"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="px-4 lg:px-20 pb-20">
        <div className="max-w-6xl mx-auto">
          <div className="bg-neutral-900/50 rounded-lg border border-neutral-800 overflow-hidden">
            <div className="grid lg:grid-cols-2 gap-0">
              <div className="relative aspect-video lg:aspect-auto min-h-[200px] bg-gradient-to-br from-violet-900/40 to-sky-900/40 border-r border-neutral-800 flex items-center justify-center">
                <span className="text-5xl font-bold text-white/10 uppercase tracking-widest">{blogPosts[0].category}</span>
              </div>
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <div className="inline-block px-3 py-1 bg-violet-600 text-white text-sm rounded-full mb-4 w-fit">
                  Featured
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  {blogPosts[0].title}
                </h2>
                <p className="text-lg mb-6">{blogPosts[0].excerpt}</p>
                <div className="flex items-center gap-4 text-sm mb-6">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>{blogPosts[0].date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    <span>{blogPosts[0].readTime}</span>
                  </div>
                </div>
                <Link
                  href={`/blog/${blogPosts[0].slug}`}
                  className="inline-block bg-gradient-to-r from-violet-600 to-sky-600 text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity w-fit"
                >
                  Read Article
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="px-4 lg:px-20 pb-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-8">Latest Articles</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.slice(1).map((post) => (
              <article
                key={post.id}
                className="bg-neutral-900/50 rounded-lg border border-neutral-800 overflow-hidden hover:border-violet-600 transition-colors group"
              >
                <div className="relative aspect-video bg-gradient-to-br from-violet-900/30 to-sky-900/30 flex items-center justify-center">
                  <span className="text-2xl font-bold text-white/10 uppercase tracking-widest">{post.category}</span>
                </div>
                <div className="p-6">
                  <div className="text-sm text-violet-600 mb-2">
                    {post.category}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-violet-600 transition-colors">
                    <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                  </h3>
                  <p className="text-sm mb-4 line-clamp-2">{post.excerpt}</p>
                  <div className="flex items-center gap-4 text-xs">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="px-4 lg:px-20 pb-20">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-violet-600 to-sky-600 rounded-lg p-8 lg:p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Subscribe to Our Newsletter
            </h2>
            <p className="text-white/90 text-lg mb-6">
              Get the latest articles, tutorials, and insights delivered to your
              inbox
            </p>
            <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg bg-white text-neutral-900 placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-neutral-900 text-white rounded-lg font-semibold hover:bg-neutral-800 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 lg:px-20 bg-neutral-900/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Need Help With Your Project?
          </h2>
          <p className="text-lg text-neutral-300 mb-8">
            Our team of experts is ready to help you succeed
          </p>
          <a
            href="/contact"
            className="inline-block bg-gradient-to-r from-violet-600 to-sky-600 text-white px-8 py-4 rounded-lg font-semibold hover:opacity-90 transition-opacity"
          >
            Get In Touch
          </a>
        </div>
      </section>
    </main>
  );
}
