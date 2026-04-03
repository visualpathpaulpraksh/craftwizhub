"use client";

import {
  Bot,
  Cloud,
  FolderCode,
  Globe,
  Instagram,
  LayoutPanelLeft,
  Search,
  ShoppingCart,
  Sparkles,
  Workflow,
} from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { ServiceCard } from "../Cards/cards";

export default function ServiceCardGrid() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Wait until client-side hydration is complete
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null; // avoid SSR mismatch

  const spotlightBgColor = resolvedTheme === "dark" ? "#262626" : "#262626";
  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      
      <ServiceCard
        title="Full-Stack Web Development"
        features={[
          "Custom web applications with Next.js, React & Node.js",
          "Responsive, mobile-first design with modern UI/UX",
          "Secure authentication, API integration & cloud deployment",
        ]}
        desc="Build scalable, high-performance web applications tailored to your business needs."
        icon={<FolderCode />}
        color={spotlightBgColor}
      />
      <ServiceCard
        title="SEO & Search Engine Optimization"
        features={[
          "On-page & technical SEO optimization",
          "Keyword research, content strategy & link building",
          "Google Analytics setup & performance tracking",
        ]}
        desc="Boost your search rankings and drive organic traffic to your website."
        icon={<Search />}
        color={spotlightBgColor}
      />
      <ServiceCard
        title="Social Media Management"
        features={[
          "Instagram, Facebook, LinkedIn & Twitter management",
          "Content creation, scheduling & community engagement",
          "Analytics reporting & growth strategy optimization",
        ]}
        desc="Grow your brand presence across all major social media platforms."
        icon={<Instagram />}
        color={spotlightBgColor}
      />
      <ServiceCard
        title="E-Commerce Solutions"
        features={[
          "Complete online store setup with product management",
          "Payment gateway integration (Stripe, PayPal, SSLCommerz)",
          "Inventory tracking, order management & customer dashboards",
        ]}
        desc="Launch and scale your online store with powerful eCommerce solutions."
        icon={<ShoppingCart />}
        color={spotlightBgColor}
      />
      <ServiceCard
        title="AI Solutions & Integration"
        features={[
          "Custom AI chatbots & virtual assistants",
          "AI-powered content generation & automation",
          "Machine learning model integration & optimization",
        ]}
        desc="Leverage artificial intelligence to automate tasks and enhance user experiences."
        icon={<Bot />}
        color={spotlightBgColor}
      />
      <ServiceCard
        title="Workflow Automation"
        features={[
          "Business process automation & workflow optimization",
          "Integration with tools like Zapier, Make & custom APIs",
          "Data synchronization & automated reporting systems",
        ]}
        desc="Streamline operations and save time with intelligent automation solutions."
        icon={<Workflow />}
        color={spotlightBgColor}
      />
      <ServiceCard
        title="Cloud Deployment & DevOps"
        features={[
          "AWS, Azure, Google Cloud & Vercel deployment",
          "CI/CD pipeline setup with GitHub Actions & Jenkins",
          "Docker containerization & Kubernetes orchestration",
        ]}
        desc="Deploy and manage your applications with enterprise-grade cloud infrastructure."
        icon={<Cloud />}
        color={spotlightBgColor}
      />
      <ServiceCard
        title="Landing Page & UI/UX Design"
        features={[
          "High-conversion landing pages for campaigns & products",
          "Modern animations with Framer Motion & GSAP",
          "A/B testing ready & SEO-optimized structure",
        ]}
        desc="Create stunning, conversion-focused landing pages that drive results."
        icon={<Globe />}
        color={spotlightBgColor}
      />
      <ServiceCard
        title="Custom Dashboard Development"
        features={[
          "Admin panels with role-based access control",
          "Real-time data visualization & analytics dashboards",
          "CRM, inventory & project management systems",
        ]}
        desc="Build powerful dashboards to manage and visualize your business data."
        icon={<LayoutPanelLeft />}
        color={spotlightBgColor}
      />
      <ServiceCard
        title="Digital Strategy & Consulting"
        features={[
          "Technology stack selection & architecture planning",
          "Digital transformation roadmap & implementation",
          "Performance audits & optimization recommendations",
        ]}
        desc="Get expert guidance on your digital initiatives and technology decisions."
        icon={<Sparkles />}
        color={spotlightBgColor}
      />
    </div>
  );
}
