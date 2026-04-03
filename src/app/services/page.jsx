import ServiceCardGrid from "@/components/Sections/ServiceCardGrid";
import { ConciergeBell } from "lucide-react";
import MagicRings from "@/components/ui/MagicRings";

export const metadata = {
  title: "Our Services | CraftWizHub",
  description:
    "Explore CraftWizHub's comprehensive digital services including web development, SEO, social media management, AI solutions, automation, and more.",
};

export default function ServicesPage() {
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
          <div className="inline-flex items-center gap-3 border border-neutral-500 px-4 py-2 rounded-lg mb-6">
            <span className="p-2 rounded-lg bg-gradient-to-tr from-violet-600 to-sky-600 text-white">
              <ConciergeBell width={18} height={18} />
            </span>
            <span className="text-sm uppercase tracking-wider">
              Our Services
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Complete Digital Solutions
          </h1>
          <p className="text-xl md:text-2xl text-neutral-300 max-w-3xl mx-auto">
            From web development to AI automation, we provide everything your
            business needs to succeed online
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-10 px-4 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <ServiceCardGrid />
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 px-4 lg:px-20 bg-neutral-900/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose CraftWizHub?
            </h2>
            <p className="text-lg text-neutral-300 max-w-2xl mx-auto">
              We deliver results that matter to your business
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-violet-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🚀</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">
                Fast Delivery
              </h3>
              <p>
                We understand deadlines matter. Our agile approach ensures quick
                turnaround without compromising quality.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-violet-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">💎</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">
                Premium Quality
              </h3>
              <p>
                Every project is built with attention to detail, following
                industry best practices and modern standards.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-violet-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🤝</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">
                Ongoing Support
              </h3>
              <p>
                We don't disappear after launch. Enjoy continuous support,
                maintenance, and updates for your peace of mind.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-4 lg:px-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Process
            </h2>
            <p className="text-lg text-neutral-300 max-w-2xl mx-auto">
              A proven methodology that delivers exceptional results
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            <div className="relative">
              <div className="bg-neutral-900/50 p-6 rounded-lg border border-neutral-800">
                <div className="w-12 h-12 bg-violet-600 rounded-full flex items-center justify-center text-white font-bold text-xl mb-4">
                  1
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Discovery</h3>
                <p className="text-sm">
                  We learn about your business, goals, and challenges to create
                  the perfect strategy.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="bg-neutral-900/50 p-6 rounded-lg border border-neutral-800">
                <div className="w-12 h-12 bg-violet-600 rounded-full flex items-center justify-center text-white font-bold text-xl mb-4">
                  2
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Planning</h3>
                <p className="text-sm">
                  We design a comprehensive roadmap with clear milestones and
                  deliverables.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="bg-neutral-900/50 p-6 rounded-lg border border-neutral-800">
                <div className="w-12 h-12 bg-violet-600 rounded-full flex items-center justify-center text-white font-bold text-xl mb-4">
                  3
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Execution</h3>
                <p className="text-sm">
                  Our team brings your vision to life with cutting-edge
                  technology and best practices.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="bg-neutral-900/50 p-6 rounded-lg border border-neutral-800">
                <div className="w-12 h-12 bg-violet-600 rounded-full flex items-center justify-center text-white font-bold text-xl mb-4">
                  4
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Launch</h3>
                <p className="text-sm">
                  We deploy your solution and provide ongoing support to ensure
                  continued success.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 lg:px-20 bg-neutral-900/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-lg text-neutral-300 mb-8">
            Let's discuss your project and create a custom solution for your
            business
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="inline-block bg-gradient-to-r from-violet-600 to-sky-600 text-white px-8 py-4 rounded-lg font-semibold hover:opacity-90 transition-opacity"
            >
              Contact Us
            </a>
            <a
              href="/#projects"
              className="inline-block border border-neutral-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-neutral-800 transition-colors"
            >
              View Our Work
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
