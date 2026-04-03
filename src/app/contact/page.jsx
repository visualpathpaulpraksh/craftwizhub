import ContactForm from "@/components/ContactForm";
import { Mail, MapPin, Phone } from "lucide-react";

export const metadata = {
  title: "Contact Us | CraftWizHub",
  description:
    "Get in touch with CraftWizHub for your digital transformation needs. We're here to help with web development, SEO, social media, and more.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-400">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 lg:px-20">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Let's Work Together
          </h1>
          <p className="text-xl md:text-2xl text-neutral-300 max-w-3xl mx-auto">
            Have a project in mind? We'd love to hear from you. Send us a
            message and we'll respond as soon as possible.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-10 px-4 lg:px-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-white mb-6">
                  Get In Touch
                </h2>
                <p className="text-lg mb-8">
                  Whether you need a website, want to improve your SEO, manage
                  your social media, or implement AI solutions - we're here to
                  help your business grow.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-violet-600/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-violet-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">
                      Email
                    </h3>
                    <a
                      href="mailto:contact@craftwizhub.com"
                      className="text-neutral-300 hover:text-violet-600 transition-colors"
                    >
                      contact@craftwizhub.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-violet-600/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-violet-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">
                      Phone
                    </h3>
                    <a
                      href="tel:+15551234567"
                      className="text-neutral-300 hover:text-violet-600 transition-colors"
                    >
                      +1 (555) 123-4567
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-violet-600/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-violet-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">
                      Address
                    </h3>
                    <p className="text-neutral-300">
                      8 Tootpara Central Rd
                      <br />
                      Khulna-9100, Bangladesh
                    </p>
                  </div>
                </div>
              </div>

              {/* Business Hours */}
              <div className="bg-neutral-900/50 p-6 rounded-lg border border-neutral-800">
                <h3 className="text-xl font-bold text-white mb-4">
                  Business Hours
                </h3>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span className="text-white">9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span className="text-white">10:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span className="text-white">Closed</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-neutral-900/50 p-8 rounded-lg border border-neutral-800">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 lg:px-20 bg-neutral-900/50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-neutral-300">
              Quick answers to common questions
            </p>
          </div>

          <div className="space-y-6">
            <div className="bg-neutral-900 p-6 rounded-lg border border-neutral-800">
              <h3 className="text-xl font-bold text-white mb-2">
                How long does a typical project take?
              </h3>
              <p>
                Project timelines vary based on scope and complexity. A simple
                website might take 2-4 weeks, while complex applications can
                take 2-3 months. We'll provide a detailed timeline during our
                initial consultation.
              </p>
            </div>

            <div className="bg-neutral-900 p-6 rounded-lg border border-neutral-800">
              <h3 className="text-xl font-bold text-white mb-2">
                What are your pricing models?
              </h3>
              <p>
                We offer flexible pricing including fixed-price projects,
                hourly rates, and monthly retainers. Each project is unique, so
                we'll create a custom quote based on your specific needs and
                budget.
              </p>
            </div>

            <div className="bg-neutral-900 p-6 rounded-lg border border-neutral-800">
              <h3 className="text-xl font-bold text-white mb-2">
                Do you provide ongoing support?
              </h3>
              <p>
                Yes! We offer maintenance packages and ongoing support for all
                our services. Whether it's website updates, SEO monitoring, or
                social media management, we're here for the long term.
              </p>
            </div>

            <div className="bg-neutral-900 p-6 rounded-lg border border-neutral-800">
              <h3 className="text-xl font-bold text-white mb-2">
                Can you work with existing systems?
              </h3>
              <p>
                Absolutely! We can integrate with your existing tools,
                platforms, and workflows. Whether it's connecting to your CRM,
                payment gateway, or third-party APIs, we've got you covered.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 lg:px-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Not Sure Where to Start?
          </h2>
          <p className="text-lg text-neutral-300 mb-8">
            Schedule a free consultation and we'll help you find the perfect
            solution for your business
          </p>
          <a
            href="mailto:contact@craftwizhub.com"
            className="inline-block bg-gradient-to-r from-violet-600 to-sky-600 text-white px-8 py-4 rounded-lg font-semibold hover:opacity-90 transition-opacity"
          >
            Schedule Free Consultation
          </a>
        </div>
      </section>
    </main>
  );
}
