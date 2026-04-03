import { Calendar, Clock, ArrowLeft } from "lucide-react";
import Link from "next/link";

const blogPosts = [
  {
    id: 1,
    title: "10 Essential SEO Strategies for 2025",
    excerpt: "Discover the latest SEO techniques that will help your website rank higher in search engines and drive more organic traffic.",
    content: `Search engine optimization continues to evolve rapidly. In 2025, the most effective SEO strategies combine technical excellence with high-quality content and user experience.

**1. Core Web Vitals Optimization**
Google's ranking algorithm heavily weighs page experience signals. Ensure your Largest Contentful Paint (LCP) is under 2.5 seconds, First Input Delay (FID) under 100ms, and Cumulative Layout Shift (CLS) under 0.1.

**2. AI-Powered Content Strategy**
Use AI tools to identify content gaps, optimize for semantic search, and create comprehensive topic clusters that establish topical authority.

**3. E-E-A-T Signals**
Experience, Expertise, Authoritativeness, and Trustworthiness are critical. Build author profiles, earn quality backlinks, and demonstrate real-world expertise.

**4. Voice Search Optimization**
Optimize for conversational queries and featured snippets as voice search continues to grow.

**5. Local SEO Dominance**
Optimize your Google Business Profile, build local citations, and create location-specific content.

**6. Video SEO**
YouTube is the second largest search engine. Create video content and optimize titles, descriptions, and transcripts.

**7. Mobile-First Indexing**
Ensure your site delivers a flawless mobile experience — Google indexes the mobile version first.

**8. Structured Data Markup**
Implement schema markup to help search engines understand your content and earn rich snippets.

**9. Link Building Quality Over Quantity**
Focus on earning links from authoritative, relevant sources rather than mass link building.

**10. Search Intent Alignment**
Match your content format and depth to the searcher's intent — informational, navigational, or transactional.`,
    author: "CraftWizHub Team",
    date: "March 15, 2025",
    readTime: "5 min read",
    category: "SEO",
    slug: "seo-strategies-2025",
  },
  {
    id: 2,
    title: "How AI is Transforming Business Automation",
    excerpt: "Learn how artificial intelligence and automation can streamline your business processes and boost productivity.",
    content: `Artificial intelligence is no longer a futuristic concept — it's a practical tool that businesses of all sizes are using today to automate repetitive tasks, make smarter decisions, and deliver better customer experiences.

**Workflow Automation**
AI-powered tools can handle repetitive tasks like data entry, invoice processing, and email routing — freeing your team to focus on high-value work.

**Customer Service**
AI chatbots and virtual assistants handle thousands of customer queries simultaneously, providing instant responses 24/7.

**Predictive Analytics**
Machine learning models analyze historical data to forecast sales, identify churn risks, and optimize inventory.

**Marketing Automation**
AI personalizes email campaigns, ad targeting, and content recommendations at scale.

**Getting Started**
Start small — identify one repetitive process in your business and explore AI tools that can automate it. The ROI is often immediate.`,
    author: "CraftWizHub Team",
    date: "March 12, 2025",
    readTime: "7 min read",
    category: "AI & Automation",
    slug: "ai-business-automation",
  },
  {
    id: 3,
    title: "Social Media Marketing Best Practices",
    excerpt: "Master the art of social media marketing with proven strategies for Instagram, Facebook, LinkedIn, and Twitter.",
    content: `Social media marketing has become one of the most powerful channels for brand building and customer acquisition. Here are the best practices that drive real results.

**Consistency is King**
Post consistently on a schedule your audience can rely on. Use a content calendar to plan ahead.

**Platform-Specific Content**
What works on Instagram doesn't work on LinkedIn. Tailor your content format, tone, and length to each platform.

**Engage, Don't Just Broadcast**
Respond to comments, ask questions, and participate in conversations. Social media is a two-way channel.

**Video Content Dominates**
Short-form video (Reels, TikTok, Shorts) consistently outperforms static content in reach and engagement.

**Data-Driven Decisions**
Review your analytics weekly. Double down on what works and cut what doesn't.`,
    author: "CraftWizHub Team",
    date: "March 10, 2025",
    readTime: "6 min read",
    category: "Social Media",
    slug: "social-media-best-practices",
  },
  {
    id: 4,
    title: "Next.js 15: What's New and Why It Matters",
    excerpt: "Explore the latest features in Next.js 15 and how they can improve your web application's performance and developer experience.",
    content: `Next.js 15 brings significant improvements to performance, developer experience, and the App Router. Here's what you need to know.

**Turbopack Stable**
The Rust-based bundler is now stable, delivering up to 96% faster local server startup and 45% faster code updates.

**React 19 Support**
Full support for React 19 features including the new compiler, improved hydration, and enhanced server components.

**Improved Caching**
More predictable and controllable caching behavior with better defaults and explicit cache controls.

**Partial Prerendering**
Combine static and dynamic content in a single route for optimal performance.

**Enhanced Image Component**
Better performance, improved lazy loading, and new format support.

Next.js 15 is a significant step forward — upgrading is highly recommended for any production application.`,
    author: "CraftWizHub Team",
    date: "March 8, 2025",
    readTime: "8 min read",
    category: "Web Development",
    slug: "nextjs-15-features",
  },
  {
    id: 5,
    title: "Building Scalable E-Commerce Platforms",
    excerpt: "A comprehensive guide to creating robust e-commerce solutions that can handle growth and provide excellent user experiences.",
    content: `Building an e-commerce platform that scales requires careful planning from day one. Here's how to do it right.

**Choose the Right Architecture**
For most businesses, a headless commerce approach — separating the frontend from the backend — provides the flexibility to scale independently.

**Performance is Revenue**
A 1-second delay in page load time can reduce conversions by 7%. Optimize images, use CDNs, and implement proper caching.

**Payment Integration**
Use established payment processors like Stripe or Razorpay. Never handle raw card data yourself.

**Inventory Management**
Real-time inventory tracking prevents overselling and improves customer trust.

**Mobile-First Design**
Over 60% of e-commerce traffic comes from mobile devices. Design for mobile first, then enhance for desktop.

**Security**
SSL certificates, PCI compliance, and regular security audits are non-negotiable.`,
    author: "CraftWizHub Team",
    date: "March 5, 2025",
    readTime: "10 min read",
    category: "E-Commerce",
    slug: "scalable-ecommerce-platforms",
  },
  {
    id: 6,
    title: "Cloud Deployment: AWS vs Azure vs Google Cloud",
    excerpt: "Compare the top cloud platforms and learn which one is best suited for your business needs and technical requirements.",
    content: `Choosing the right cloud provider is one of the most important infrastructure decisions you'll make. Here's an honest comparison.

**AWS (Amazon Web Services)**
The market leader with the broadest service catalog. Best for teams that need maximum flexibility and the widest ecosystem. Steeper learning curve but unmatched capabilities.

**Microsoft Azure**
The best choice for enterprises already using Microsoft products (Office 365, Active Directory). Strong hybrid cloud capabilities and excellent enterprise support.

**Google Cloud Platform**
Superior for data analytics, machine learning, and Kubernetes workloads. Competitive pricing and excellent networking infrastructure.

**How to Choose**
- Startup or small team → AWS or GCP for cost efficiency
- Enterprise with Microsoft stack → Azure
- Data/ML heavy workloads → GCP
- Multi-cloud strategy → All three

All three providers offer free tiers — experiment before committing.`,
    author: "CraftWizHub Team",
    date: "March 1, 2025",
    readTime: "9 min read",
    category: "Cloud & DevOps",
    slug: "cloud-platforms-comparison",
  },
];

const categoryColors = {
  "SEO": "from-green-900/40 to-emerald-900/40",
  "AI & Automation": "from-violet-900/40 to-purple-900/40",
  "Social Media": "from-pink-900/40 to-rose-900/40",
  "Web Development": "from-sky-900/40 to-blue-900/40",
  "E-Commerce": "from-orange-900/40 to-amber-900/40",
  "Cloud & DevOps": "from-cyan-900/40 to-teal-900/40",
};

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export function generateMetadata({ params }) {
  const post = blogPosts.find((p) => p.slug === params.slug);
  if (!post) return { title: "Post Not Found | CraftWizHub" };
  return {
    title: `${post.title} | CraftWizHub Blog`,
    description: post.excerpt,
  };
}

export default function BlogPostPage({ params }) {
  const post = blogPosts.find((p) => p.slug === params.slug);

  if (!post) {
    return (
      <main className="min-h-screen bg-neutral-950 text-neutral-400 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Post Not Found</h1>
          <Link href="/blog" className="text-violet-400 hover:text-violet-300 flex items-center gap-2 justify-center">
            <ArrowLeft className="w-4 h-4" /> Back to Blog
          </Link>
        </div>
      </main>
    );
  }

  const gradient = categoryColors[post.category] || "from-violet-900/40 to-sky-900/40";
  const related = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-400">
      {/* Hero Banner */}
      <div className={`w-full bg-gradient-to-br ${gradient} pt-32 pb-16 px-4 lg:px-20 border-b border-neutral-800`}>
        <div className="max-w-4xl mx-auto">
          <Link href="/blog" className="inline-flex items-center gap-2 text-sm text-neutral-400 hover:text-white mb-8 transition-colors">
            <ArrowLeft className="w-4 h-4" /> Back to Blog
          </Link>
          <div className="inline-block px-3 py-1 bg-violet-600 text-white text-xs rounded-full mb-4 uppercase tracking-wider">
            {post.category}
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
            {post.title}
          </h1>
          <div className="flex flex-wrap items-center gap-5 text-sm text-neutral-400">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>{post.date}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>{post.readTime}</span>
            </div>
            <span>By {post.author}</span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 lg:px-0 py-16">
        <p className="text-lg text-neutral-300 mb-10 leading-relaxed border-l-2 border-violet-600 pl-5">
          {post.excerpt}
        </p>
        <div className="prose prose-invert prose-neutral max-w-none space-y-5">
          {post.content.split("\n\n").map((block, i) => {
            if (block.startsWith("**") && block.endsWith("**")) {
              return <h3 key={i} className="text-xl font-bold text-white mt-8">{block.replace(/\*\*/g, "")}</h3>;
            }
            if (block.includes("**")) {
              const parts = block.split(/\*\*(.*?)\*\*/g);
              return (
                <p key={i} className="leading-relaxed">
                  {parts.map((part, j) =>
                    j % 2 === 1 ? <strong key={j} className="text-white font-semibold">{part}</strong> : part
                  )}
                </p>
              );
            }
            return <p key={i} className="leading-relaxed">{block}</p>;
          })}
        </div>
      </div>

      {/* Related Posts */}
      <div className="border-t border-neutral-800 px-4 lg:px-20 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-white mb-8">More Articles</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {related.map((p) => (
              <Link key={p.id} href={`/blog/${p.slug}`}
                className="bg-neutral-900/50 rounded-lg border border-neutral-800 p-5 hover:border-violet-600 transition-colors group"
              >
                <div className="text-xs text-violet-500 mb-2 uppercase tracking-wider">{p.category}</div>
                <h3 className="text-white font-semibold text-sm leading-snug group-hover:text-violet-400 transition-colors mb-2">{p.title}</h3>
                <div className="flex items-center gap-3 text-xs text-neutral-500">
                  <span>{p.date}</span>
                  <span>·</span>
                  <span>{p.readTime}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="px-4 lg:px-20 pb-20">
        <div className="max-w-4xl mx-auto bg-gradient-to-r from-violet-600 to-sky-600 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-3">Ready to grow your business?</h2>
          <p className="text-white/80 mb-6">Let CraftWizHub handle your digital transformation.</p>
          <Link href="/contact"
            className="inline-block bg-white text-neutral-900 px-6 py-3 rounded-lg font-semibold hover:bg-neutral-100 transition-colors"
          >
            Get In Touch
          </Link>
        </div>
      </div>
    </main>
  );
}
