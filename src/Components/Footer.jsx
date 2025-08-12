import React, { useEffect } from "react";
import { Github, Linkedin, Terminal, Twitter } from "lucide-react";
import "aos/dist/aos.css";
import Aos from "aos";

const Footer = () => {
  useEffect(() => {
    // Initialize AOS (Animate On Scroll)
    const script = document.createElement("script");
    script.src = "https://cdnjs.cloudflare.com/ajax/libs/aos/2.3.4/aos.js";
    script.onload = () => {
      if (Aos) {
        Aos.init({
          duration: 800,
          easing: "ease-in-out",
          once: false,
          mirror: true,
        });
      }
    };
    document.head.appendChild(script);

    // Load AOS CSS
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "https://cdnjs.cloudflare.com/ajax/libs/aos/2.3.4/aos.css";
    document.head.appendChild(link);

    return () => {
      document.head.removeChild(script);
      document.head.removeChild(link);
    };
  }, []);

  const socialLinks = [
    {
      name: "GitHub",
      icon: Github,
      url: "https://github.com/Rahmot15",
      color: "hover:text-gray-300",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: "https://www.linkedin.com/in/mdrahmatullah-dev",
      color: "hover:text-blue-400",
    },
    {
      name: "Twitter",
      icon: Twitter,
      url: "https://x.com/MdRahmatul59907",
      color: "hover:text-sky-400",
    },
  ];

  return (
    <footer className="py-12 mt-20">
      <div className="container mx-auto px-4">
        {/* Name Section */}
        <div className="flex items-center justify-center text-center mb-8">
          <div
            data-aos="fade-up"
            data-aos-delay="100"
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-2 cursor-pointer font-mono text-white"
          >
            <Terminal className="text-green-400" size={24} />
            <span className="text-xl font-bold">
              <span className="text-green-400">const</span>{" "}
              <span className="text-purple-400">developer</span>{" "}
              <span className="text-pink-400">=</span>
              <span className="text-yellow-400">&quot;rahmot&quot;</span>
            </span>
          </div>
        </div>

        {/* Social Icons */}
        <div
          className="flex justify-center space-x-8 mb-8"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          {socialLinks.map((social, index) => {
            const IconComponent = social.icon;
            return (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`text-gray-400 ${social.color} transform hover:scale-110 transition-all duration-300`}
                data-aos="zoom-in"
                data-aos-delay={300 + index * 100}
                aria-label={social.name}
              >
                <IconComponent size={28} />
              </a>
            );
          })}
        </div>

        {/* Divider Line */}
        <div
          className="border-t border-gray-700 mb-6"
          data-aos="fade-in"
          data-aos-delay="500"
        ></div>

        {/* Copyright */}
        <div className="text-center" data-aos="fade-up" data-aos-delay="600">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Rahmatullah. All rights reserved.
          </p>
          <p className="text-gray-500 text-xs mt-2">Made with ❤️ and React</p>
        </div>

        {/* Decorative Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div
            className="absolute -top-4 -right-4 w-20 h-20 bg-blue-500 rounded-full opacity-10"
            data-aos="fade-in"
            data-aos-delay="700"
          ></div>
          <div
            className="absolute -bottom-4 -left-4 w-16 h-16 bg-purple-500 rounded-full opacity-10"
            data-aos="fade-in"
            data-aos-delay="800"
          ></div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
