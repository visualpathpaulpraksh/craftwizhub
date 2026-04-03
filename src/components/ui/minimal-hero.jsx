"use client";

import { MoveRight, Sparkles } from "lucide-react";
import { useEffect, useRef } from "react";
import { PrimaryButton, SecondaryButton } from "../Buttons/buttons";
import ThemedGridBackground from "./background-grid";
import { Spotlight } from "./spotlight-new";
import { TextLoop } from "./text-loop";
import { TextShimmer } from "./text-shimmer";

export default function MinimalHero() {
  const gradientRef = useRef(null);

  useEffect(() => {
    const gradient = gradientRef.current;
    function onMouseMove(e) {
      if (gradient) {
        gradient.style.left = e.clientX - 192 + "px";
        gradient.style.top = e.clientY - 192 + "px";
        gradient.style.opacity = "1";
      }
    }
    function onMouseLeave() {
      if (gradient) gradient.style.opacity = "0";
    }
    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseleave", onMouseLeave);
    return () => {
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseleave", onMouseLeave);
    };
  }, []);

  return (
    <div className="bg-neutral-950 text-neutral-200 overflow-hidden relative w-full px-4 pt-24 pb-10 md:px-10 lg:px-20 md:pt-32 lg:pt-40">
      <ThemedGridBackground />
      <Spotlight />

      <div className="w-full flex justify-center">
        <div className="max-w-4xl relative z-10 flex flex-col md:items-center gap-6 lg:gap-8">

          {/* Badge */}
          <div className="flex">
            <span className="inline-flex items-center gap-2 border border-neutral-700 bg-neutral-900/60 backdrop-blur-sm px-4 py-2 rounded-full text-xs tracking-widest uppercase text-neutral-400">
              <Sparkles width={13} height={13} className="text-violet-400" />
              Digital Transformation Partner
            </span>
          </div>

          {/* Headline */}
          <div className="md:text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-white">
              <TextShimmer
                className="text-4xl md:text-5xl lg:text-6xl font-bold [--base-color:var(--color-sky-500)] [--base-gradient-color:var(--color-violet-200)]"
                delay={0.5}
              >
                CraftWizHub
              </TextShimmer>
            </h1>
            <div className="mt-4 text-xl md:text-2xl lg:text-3xl flex md:justify-center items-center gap-3">
              <span className="text-neutral-500 font-light">Your partner for</span>
              <TextLoop className="text-white font-semibold" data-delay="2500">
                <span>Web Development</span>
                <span>SEO &amp; Marketing</span>
                <span>AI Solutions</span>
                <span>Social Media</span>
                <span>Automation</span>
              </TextLoop>
            </div>
          </div>

          {/* Subtext */}
          <p className="text-base lg:text-lg text-neutral-400 md:text-center max-w-2xl leading-relaxed">
            End-to-end digital services — from custom web apps and SEO to AI integration and workflow automation — built to scale your business.
          </p>

          {/* Stats row */}
          <div className="flex flex-wrap gap-6 md:justify-center text-sm">
            <div className="flex flex-col items-center gap-0.5">
              <span className="text-2xl font-bold text-white">50+</span>
              <span className="text-neutral-500 text-xs uppercase tracking-wider">Projects</span>
            </div>
            <div className="w-px bg-neutral-800 hidden md:block" />
            <div className="flex flex-col items-center gap-0.5">
              <span className="text-2xl font-bold text-white">30+</span>
              <span className="text-neutral-500 text-xs uppercase tracking-wider">Clients</span>
            </div>
            <div className="w-px bg-neutral-800 hidden md:block" />
            <div className="flex flex-col items-center gap-0.5">
              <span className="text-2xl font-bold text-white">5+</span>
              <span className="text-neutral-500 text-xs uppercase tracking-wider">Years</span>
            </div>
            <div className="w-px bg-neutral-800 hidden md:block" />
            <div className="flex flex-col items-center gap-0.5">
              <span className="text-2xl font-bold text-white">12+</span>
              <span className="text-neutral-500 text-xs uppercase tracking-wider">Partners</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-row gap-4">
            <PrimaryButton
              text="Get Started"
              url="/#contact"
              icon={<MoveRight width={18} height={18} />}
            />
            <SecondaryButton
              text="Our Services"
              url="/#services"
              icon={<MoveRight width={18} height={18} />}
            />
          </div>
        </div>
      </div>

      {/* Mouse gradient */}
      <div
        ref={gradientRef}
        className="fixed pointer-events-none w-96 h-96 rounded-full blur-3xl transition-all duration-500 ease-out opacity-0"
        style={{ background: "radial-gradient(circle, rgba(139,92,246,0.08) 0%, transparent 70%)" }}
      />

      {/* Bottom fade */}
      <div className="w-full h-full absolute inset-0 z-[1] flex items-end pointer-events-none">
        <div className="w-full h-48 bg-gradient-to-t from-neutral-950 to-transparent" />
      </div>
    </div>
  );
}
