import React, { useEffect } from "react";

import {
  Code2,
  Zap,
  Heart,
  BookOpen,
  Coffee,
  Gamepad2,
  Target,
  Lightbulb,
} from "lucide-react";
import "aos/dist/aos.css";
import Aos from "aos";

const AboutMe = () => {
  useEffect(() => {
    Aos.init({
      duration: 800,
      once: true,
      offset: 100,
    });
  }, []);

  return (
    <section>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            About{" "}
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Me
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto rounded-full" />
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-16 items-start mb-20">
          {/* Left Side - About Me Content */}
          <div data-aos="fade-right" className="space-y-8">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-white flex items-center gap-3">
                <Code2 className="w-6 h-6 text-blue-400" />
                My Programming Journey
              </h3>
              <div className="text-gray-300 leading-relaxed space-y-4">
                <p>
                  My journey into programming began 2 years ago when I first
                  discovered the magic of turning ideas into reality through
                  code. What started as curiosity about "how websites work"
                  quickly evolved into a passionate pursuit of mastering web
                  development.
                </p>
                <p>
                  I started with the basics - HTML, CSS, and JavaScript -
                  spending countless nights debugging code and celebrating small
                  victories. The moment I built my first interactive web page, I
                  knew I had found my calling.
                </p>
                <p>
                  Today, I specialize in the MERN stack, creating scalable web
                  applications that solve real-world problems. Each project
                  teaches me something new about clean code, user experience,
                  and innovative solutions.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-white flex items-center gap-3">
                <Heart className="w-6 h-6 text-purple-400" />
                What I Love Doing
              </h3>
              <div className="text-gray-300 leading-relaxed space-y-4">
                <p>
                  I'm passionate about solving complex problems with elegant,
                  simple solutions. There's something incredibly satisfying
                  about breaking down challenging features and watching them
                  come together beautifully.
                </p>
                <p>
                  I particularly enjoy frontend development - creating
                  intuitive, responsive interfaces that users love. But I'm
                  equally excited about backend architecture, designing APIs
                  that are both powerful and maintainable.
                </p>
              </div>
            </div>
          </div>

          {/* Right Side - Cards */}
          <div data-aos="fade-left" className="space-y-6">
            {/* Personality Card */}
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 hover:border-blue-500/30 transition-all duration-300">
              <div className="flex items-center space-x-3 mb-4">
                <div className="p-2 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg">
                  <Lightbulb className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white">
                  My Personality
                </h3>
              </div>
              <p className="text-gray-300 leading-relaxed">
                I'm a detail-oriented problem solver who believes in continuous
                learning. I love collaborating with teams, sharing knowledge,
                and turning complex ideas into user-friendly solutions.
              </p>
            </div>

            {/* Hobbies Card */}
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 hover:border-purple-500/30 transition-all duration-300">
              <div className="flex items-center space-x-3 mb-4">
                <div className="p-2 bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg">
                  <Target className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white">
                  Beyond Coding
                </h3>
              </div>

              <div className="space-y-3">
                {[
                  { icon: Gamepad2, text: "Gaming & Interactive Media" },
                  { icon: Coffee, text: "Coffee & Late Night Coding" },
                  { icon: BookOpen, text: "Reading Tech Articles" },
                ].map((hobby, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-3 group cursor-pointer"
                  >
                    <div className="p-2 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg group-hover:scale-110 transition-transform duration-300">
                      <hobby.icon className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-gray-300 group-hover:text-white transition-colors duration-300">
                      {hobby.text}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Quote Card */}
            <div className="bg-gradient-to-br from-indigo-900/30 to-purple-900/30 backdrop-blur-sm border border-indigo-500/30 rounded-2xl p-6">
              <div className="text-center space-y-3">
                <div className="text-3xl text-indigo-400">"</div>
                <p className="text-indigo-200 italic leading-relaxed">
                  Code is like humor. When you have to explain it, it's bad.
                </p>
                <div className="text-sm text-indigo-300">- Cory House</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
