import React from "react";
import { Mail, Linkedin, Phone } from "lucide-react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-800 via-gray-900 to-black text-white p-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none" />

      <div className="max-w-4xl w-full text-center space-y-10 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
        >
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6">
            <span className="text-white">I'm </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-500">
              Abhishek S.
            </span>
          </h1>

          <h2 className="text-xl md:text-2xl font-light text-gray-300 mb-8 tracking-wide">
            Performance Marketer & Media Buyer
          </h2>

          <div className="max-w-3xl mx-auto space-y-5">
            <p className="text-base md:text-lg text-gray-400 leading-relaxed font-light">
              Results-driven Performance Marketer with 3+ years of experience
              scaling paid campaigns across Meta (Facebook & Instagram), Google
              Ads, and TikTok Ads — specializing in eCommerce growth and lead
              generation funnels.
            </p>

            <p className="text-base md:text-lg text-gray-400 leading-relaxed font-light">
              I’ve worked with multiple eCommerce brands in fashion, sarees, and
              jewellery, handling everything from launch to scale. I also manage
              US-based lead generation projects for industries like dental,
              roofing, and local services — delivering high-quality leads,
              scalable growth, and strong ROAS through data-driven strategy.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="flex flex-wrap justify-center gap-6 mt-12"
        >
          <a
            href="mailto:abhisharma5167@gmail.com"
            className="flex items-center gap-2 px-8 py-4 bg-emerald-500 hover:bg-emerald-600 text-black font-bold rounded-full transition-all duration-300 shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/40 hover:scale-105 group"
          >
            <Mail className="w-5 h-5 group-hover:scale-110 transition-transform" />
            <span>Connect with Me</span>
          </a>

          <a
            href="https://www.linkedin.com/in/abhishek-sharma-8304ba211"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 px-8 py-4 bg-white/5 hover:bg-white/10 backdrop-blur-sm rounded-full transition-all duration-300 border border-white/10 hover:border-white/20 hover:scale-105 group"
          >
            <Linkedin className="w-5 h-5 group-hover:scale-110 transition-transform" />
            <span>LinkedIn</span>
          </a>

          <a
            href="tel:+919041001438"
            className="flex items-center gap-2 px-8 py-4 bg-white/5 hover:bg-white/10 backdrop-blur-sm rounded-full transition-all duration-300 border border-white/10 hover:border-white/20 hover:scale-105 group"
          >
            <Phone className="w-5 h-5 group-hover:scale-110 transition-transform" />
            <span>Call Me</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
