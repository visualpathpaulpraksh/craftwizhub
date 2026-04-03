import { Github, Facebook, Instagram, Linkedin } from "lucide-react";
import Link from "next/link";
import ContactForm from "../ContactForm";
import GlareHover from "../ui/glare-hover";

export default function Footer() {
  return (
    <>
      <div className="flex flex-col-reverse lg:flex-row gap-10 lg:gap-20 px-4 md:px-10 lg:px-16 py-10 lg:py-20 bg-[#050505]">
        <div className="lg:w-[50%] flex flex-col gap-10 lg:items-stretch lg:justify-between">
          <div className="flex flex-col gap-2">
            <div className="w-20 aspect-square relative flex items-center justify-center rounded-full bg-gradient-to-tr from-violet-600 to-sky-500">
              <span className="text-2xl font-bold text-white">CW</span>
              <div className="absolute -right-0.5 top-2.5 w-[16px] h-[16px] z-[5] rounded-full bg-lime-500 border border-neutral-50"></div>
            </div>
            <h4 className="text-lg md:text-xl lg:text-2xl font-bold  text-white leading-tight mt-2">
              CraftWizHub
            </h4>
            <p>
              Whether you need a website, SEO optimization, social media management, AI solutions, or automation — we&apos;re here to help your business grow.
            </p>
            <div className="mt-2 flex flex-col gap-2">
              <div className="w-full flex flex-row gap-1">
                <div className="w-[20%]">Address:</div>
                <div className="w-[80%]">
                  Knowledge City, Madhapur,
                  Hyderabad – 500081, Telangana, India
                </div>
              </div>
              <div className="w-full flex flex-row gap-1">
                <div className="w-[20%]">Email:</div>
                <div className="w-[80%]">craftwizhub@gmail.com</div>
              </div>
              <div className="w-full flex flex-row gap-1">
                <div className="w-[20%]">Phone:</div>
                <div className="w-[80%]">+91 7671850059</div>
              </div>
            </div>

            <div className="flex flex-wrap gap-3 mt-2">
              <Link
                href="https://www.facebook.com/craftwizhub"
                className=" inline-block border  border-neutral-600 rounded-full overflow-hidden"
              >
                <GlareHover className="p-2">
                  <Facebook />
                </GlareHover>
              </Link>
              <Link
                href="https://www.instagram.com/craftwizhub"
                className="inline-block overflow-hidden border  border-neutral-600 rounded-full"
              >
                <GlareHover className="p-2">
                  <Instagram />
                </GlareHover>
              </Link>
              <Link
                href="https://www.linkedin.com/company/craftwizhub"
                className="inline-block overflow-hidden border  border-neutral-600 rounded-full"
              >
                <GlareHover className="p-2">
                  <Linkedin />
                </GlareHover>
              </Link>
              <Link
                href="https://github.com/craftwizhub"
                className="inline-block overflow-hidden border  border-neutral-600 rounded-full"
              >
                <GlareHover className="p-2">
                  <Github />
                </GlareHover>
              </Link>
            </div>
          </div>
          <div className="w-full flex flex-row gap-6">
            <div className="w-[30%] font-bold  text-neutral-100">
              Quick Links:
            </div>
            <div className="w-[70%] flex flex-wrap gap-3">
              <Link
                href="/"
                className="hover:text-violet-600 transition-colors duration-300 relative overflow-hidden group"
              >
                Home
                <div className="absolute w-full h-[1px] bottom-0 bg-violet-600 -translate-x-[105%] group-hover:translate-x-0 transition-all duration-300"></div>
              </Link>
              <Link
                href="/about"
                className="hover:text-violet-600 transition-colors duration-300 relative overflow-hidden group"
              >
                About
                <div className="absolute w-full h-[1px] bottom-0 bg-violet-600 -translate-x-[105%] group-hover:translate-x-0 transition-all duration-300"></div>
              </Link>
              <Link
                href="/services"
                className="hover:text-violet-600 transition-colors duration-300 relative overflow-hidden group"
              >
                Services
                <div className="absolute w-full h-[1px] bottom-0 bg-violet-600 -translate-x-[105%] group-hover:translate-x-0 transition-all duration-300"></div>
              </Link>
              <Link
                href="/#projects"
                className="hover:text-violet-600 transition-colors duration-300 relative overflow-hidden group"
              >
                Projects
                <div className="absolute w-full h-[1px] bottom-0 bg-violet-600 -translate-x-[105%] group-hover:translate-x-0 transition-all duration-300"></div>
              </Link>
              <Link
                href="/blog"
                className="hover:text-violet-600 transition-colors duration-300 relative overflow-hidden group"
              >
                Blog
                <div className="absolute w-full h-[1px] bottom-0 bg-violet-600 -translate-x-[105%] group-hover:translate-x-0 transition-all duration-300"></div>
              </Link>
              <Link
                href="/contact"
                className="hover:text-violet-600 transition-colors duration-300 relative overflow-hidden group"
              >
                Contact
                <div className="absolute w-full h-[1px] bottom-0 bg-violet-600 -translate-x-[105%] group-hover:translate-x-0 transition-all duration-300"></div>
              </Link>
            </div>
          </div>
        </div>
        <div className="lg:w-[50%]">
          <ContactForm />
        </div>
      </div>
      <div className="py-5 w-full flex flex-col lg:flex-row gap-2 justify-center items-center  bg-black">
        <div className="inline-block leading-none">
          &copy; 2026 CraftWizHub.
        </div>
        <div className="inline-block leading-none">All rights reserved.</div>
      </div>
    </>
  );
}
