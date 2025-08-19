import React from "react";
import {
  Github,
  Linkedin,
  FileText,
  ArrowRight,
  Code,
  Database,
  Globe,
  Sparkles,
} from "lucide-react";
import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";

const HeroSection = () => {
  const floatingVariants = {
    float: {
      y: [0, -20, 0],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
    float2: {
      y: [0, -30, 0],
      transition: {
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
    float3: {
      y: [0, 15, 0],
      transition: {
        duration: 7,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const photoVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1,
        ease: "easeOut",
      },
    },
  };

  const TEXTS = [
    "MERN Stack Developer",
    "Frontend Developer",
    "React Developer",
    "Full stack Developer",
  ];

  return (
    <section className="mt-30 lg:mb-0 mb-20 min-h-screen relative">
      {/* Floating Elements */}
      <motion.div
        variants={floatingVariants.float}
        animate="float"
        className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"
      />
      <motion.div
        variants={floatingVariants.float2}
        animate="float2"
        className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
      />
      <motion.div
        variants={floatingVariants.float3}
        animate="float3"
        className="absolute top-1/2 right-1/3 w-48 h-48 bg-cyan-500/10 rounded-full blur-3xl"
      />

      {/* Main Content */}
      <div className="relative z-10  max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-[80vh]"
        >
          {/* Left Side - Text Content */}
          <div className="space-y-8">
            <motion.div variants={itemVariants} className="space-y-4">
              <div className="flex items-center space-x-2">
                <Sparkles className="w-5 h-5 text-blue-400" />
                <span className="text-blue-400 font-medium tracking-wide">
                  Hello, I'm
                </span>
              </div>

              <motion.h1 className="text-4xl md:text-5xl xl:text-6xl font-bold text-white leading-tight">
                <span className="block adlam-display-regular">
                  MD. Rahmatullah
                </span>
                <div className="flex items-center mt-2">
                  <div className="w-12 h-0.5 bg-gradient-to-r from-blue-400 to-purple-500 mr-4" />
                  <span className="bg-gradient-to-r from-blue-400 font-mono to-purple-500 bg-clip-text text-transparent text-xl md:text-3xl font-semibold">
                    <Typewriter
                      words={TEXTS}
                      loop={0}
                      typeSpeed={50}
                      deleteSpeed={50}
                      delaySpeed={1000}
                      cursor
                      cursorStyle="|"
                    />
                  </span>
                </div>
              </motion.h1>
            </motion.div>

            <motion.p
              variants={itemVariants}
              className="text-gray-300 font-mono text-lg md:text-xl leading-relaxed max-w-2xl"
            >
              I’m a passionate MERN Stack Developer with hands-on experience in
              building responsive, optimized, and scalable web applications
              using React, Node.js, Express, and MongoDB.
            </motion.p>

            {/* Social Links */}
            <div className="flex items-center space-x-3">
              <a
                href="https://github.com/Rahmot15"
                target="_blank"
                className="group relative p-3 bg-gray-800/50 hover:bg-gray-700/50 border border-gray-700/50 hover:border-gray-600 rounded-xl transition-all duration-300"
              >
                <Github className="w-5 h-5 text-gray-300 group-hover:text-white transition-colors" />
                <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                  GitHub
                </div>
              </a>

              <a
                href="https://www.linkedin.com/in/mdrahmatullah-dev"
                target="_blank"
                className="group relative p-3 bg-gray-800/50 hover:bg-blue-600/20 border border-gray-700/50 hover:border-blue-500/50 rounded-xl transition-all duration-300"
              >
                <Linkedin className="w-5 h-5 text-gray-300 group-hover:text-blue-400 transition-colors" />
                <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                  LinkedIn
                </div>
              </a>
            </div>

            {/* Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap items-center gap-4"
            >
              {/* Resume Button */}
              <a
                href="/Purple and White Clean and Professional Resume.pdf"
                download="Purple and White Clean and Professional Resume.pdf"
                className="group flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-blue-500/25"
              >
                <FileText className="w-5 h-5 mr-2" />
                Download Resume
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>
          </div>

          {/* Right Side - Photo with Animations */}
          <motion.div
            variants={photoVariants}
            className="relative flex justify-center items-center"
          >
            {/* Animated Border Elements */}
            <div className="relative">
              {/* Rotating Border Ring */}
              <div className="absolute inset-0 -m-4">
                <div
                  className="w-full h-full border-2 border-dashed border-blue-400/30 rounded-full animate-spin"
                  style={{ animationDuration: "20s" }}
                />
              </div>

              {/* Pulsing Glow Ring */}
              <div className="absolute inset-0 -m-8">
                <div className="w-full h-full bg-gradient-to-r from-blue-400/10 to-purple-500/10 rounded-full animate-pulse" />
              </div>

              {/* Corner Decorations */}
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-gradient-to-br from-blue-400 to-purple-500 rounded-lg transform rotate-45" />
              <div className="absolute -top-4 -right-4 w-6 h-6 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full" />
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full" />
              <div className="absolute -bottom-4 -right-4 w-8 h-8 bg-gradient-to-br from-green-400 to-blue-500 rounded-lg transform rotate-12" />

              {/* Floating Icons */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -top-8 left-1/2 transform -translate-x-1/2 p-2 bg-gray-800/80 backdrop-blur-sm border border-gray-700/50 rounded-lg"
              >
                <Code className="w-5 h-5 text-green-400" />
              </motion.div>

              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity }}
                className="absolute top-1/2 -right-12 transform -translate-y-1/2 p-2 bg-gray-800/80 backdrop-blur-sm border border-gray-700/50 rounded-lg"
              >
                <Database className="w-5 h-5 text-blue-400" />
              </motion.div>

              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 6, repeat: Infinity }}
                className="absolute top-1/2 -left-12 transform -translate-y-1/2 p-2 bg-gray-800/80 backdrop-blur-sm border border-gray-700/50 rounded-lg"
              >
                <Globe className="w-5 h-5 text-purple-400" />
              </motion.div>

              {/* Main Photo Container */}
              <div className="relative w-80 h-80 md:w-96 md:h-96">
                <div className="w-full h-full bg-gradient-to-br from-gray-800 to-gray-900 rounded-full border border-gray-700/50 overflow-hidden shadow-2xl">
                  {/* Photo Placeholder */}
                  <div className="w-full h-full bg-gradient-to-br from-gray-700 to-gray-800 flex items-center justify-center">
                    <div className="text-center">
                      <div className="bg-gradient-to-br from-blue-400 to-purple-500 rounded-full mx-auto flex items-center justify-center">
                        <img src="./me3.png" alt="" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Inner Glow */}
                <div className="absolute inset-0 bg-gradient-to-t from-blue-500/10 to-transparent rounded-2xl" />
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-40 left-1/2 transform -translate-x-1/2 text-gray-400"
      >
        <div className="flex flex-col items-center space-y-2">
          <span className="text-xs tracking-wide">Scroll Down</span>
          <div className="w-px h-8 bg-gradient-to-b from-gray-400 to-transparent" />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
