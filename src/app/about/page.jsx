import { Award, Target, Users, Zap } from "lucide-react";
import MagicRings from "@/components/ui/MagicRings";

export const metadata = {
  title: "About Us | CraftWizHub",
  description:
    "Learn about CraftWizHub - your trusted partner for digital transformation, web development, SEO, social media management, and automation solutions.",
};

export default function AboutPage() {
  const values = [
    {
      icon: <Target className="w-8 h-8" />,
      title: "Mission-Driven",
      description:
        "We're committed to helping businesses succeed through innovative digital solutions.",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Client-Focused",
      description:
        "Your success is our success. We build lasting partnerships with every client.",
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Innovation First",
      description:
        "We stay ahead of trends, leveraging cutting-edge technology for optimal results.",
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Quality Assured",
      description:
        "Every project meets the highest standards of excellence and performance.",
    },
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
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              CraftWizHub
            </h1>
            <p className="text-lg md:text-xl text-neutral-300 max-w-3xl mx-auto">
              Your Complete Digital Transformation Partner
            </p>
          </div>

          <div className="relative w-full aspect-video rounded-lg overflow-hidden mb-16 bg-neutral-900 border border-neutral-800 flex items-center justify-center">
            <div className="text-center">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-tr from-violet-600 to-sky-500 flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-3xl">CW</span>
              </div>
              <p className="text-neutral-400 text-sm tracking-widest uppercase">Knowledge City, Hyderabad</p>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 px-4 lg:px-20 bg-neutral-900/50">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Our Story
              </h2>
              <div className="space-y-4">
                <p>
                  CraftWizHub was founded with a simple yet powerful vision: to
                  make enterprise-level digital solutions accessible to
                  businesses of all sizes. We believe that every company
                  deserves the tools and expertise to thrive in the digital age.
                </p>
                <p>
                  What started as a passion for building exceptional web
                  applications has evolved into a comprehensive digital solutions
                  company. Today, we offer everything from web development and
                  SEO to AI integration and workflow automation.
                </p>
                <p>
                  Our team combines technical expertise with creative thinking to
                  deliver solutions that don't just meet expectations—they exceed
                  them. We're not just service providers; we're your partners in
                  digital growth.
                </p>
              </div>
            </div>
            <div className="space-y-6">
              <div className="bg-neutral-800/50 p-6 rounded-lg border border-neutral-700">
                <h3 className="text-2xl font-bold text-white mb-2">50+</h3>
                <p className="text-neutral-300">Projects Completed</p>
              </div>
              <div className="bg-neutral-800/50 p-6 rounded-lg border border-neutral-700">
                <h3 className="text-2xl font-bold text-white mb-2">30+</h3>
                <p className="text-neutral-300">Happy Clients</p>
              </div>
              <div className="bg-neutral-800/50 p-6 rounded-lg border border-neutral-700">
                <h3 className="text-2xl font-bold text-white mb-2">5+</h3>
                <p className="text-neutral-300">Years Experience</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-4 lg:px-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Core Values
            </h2>
            <p className="text-lg text-neutral-300 max-w-2xl mx-auto">
              These principles guide everything we do at CraftWizHub
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-neutral-900/50 p-6 rounded-lg border border-neutral-800 hover:border-violet-600 transition-colors"
              >
                <div className="text-violet-600 mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold text-white mb-2">
                  {value.title}
                </h3>
                <p className="text-neutral-400">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="py-20 px-4 lg:px-20 bg-neutral-900/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              What We Do
            </h2>
            <p className="text-lg text-neutral-300 max-w-2xl mx-auto">
              Comprehensive digital solutions tailored to your business needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-white">
                Technical Solutions
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-violet-600 mt-1">✓</span>
                  <span>Full-Stack Web Development with modern frameworks</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-violet-600 mt-1">✓</span>
                  <span>Cloud Deployment & DevOps automation</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-violet-600 mt-1">✓</span>
                  <span>AI Solutions & Machine Learning integration</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-violet-600 mt-1">✓</span>
                  <span>Custom Dashboard & Admin Panel development</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-violet-600 mt-1">✓</span>
                  <span>E-Commerce platforms with payment integration</span>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-white">
                Marketing & Growth
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-violet-600 mt-1">✓</span>
                  <span>SEO optimization & search engine marketing</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-violet-600 mt-1">✓</span>
                  <span>Social Media Management across all platforms</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-violet-600 mt-1">✓</span>
                  <span>Content creation & digital marketing strategy</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-violet-600 mt-1">✓</span>
                  <span>Workflow automation & business optimization</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-violet-600 mt-1">✓</span>
                  <span>Digital strategy consulting & implementation</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 lg:px-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-lg text-neutral-300 mb-8">
            Let's discuss how CraftWizHub can help you achieve your digital goals
          </p>
          <a
            href="/contact"
            className="inline-block bg-gradient-to-r from-violet-600 to-sky-600 text-white px-8 py-4 rounded-lg font-semibold hover:opacity-90 transition-opacity"
          >
            Get Started Today
          </a>
        </div>
      </section>
    </main>
  );
}
