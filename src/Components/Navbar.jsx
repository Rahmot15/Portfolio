import React, { useState } from "react";
import {
  Home,
  User,
  Code,
  GraduationCap,
  FolderOpen,
  Mail,
  FileText,
  Menu,
  X,
  Terminal,
} from "lucide-react";
import { motion } from "framer-motion";

const Navbar = () => {
  const [activeRoute, setActiveRoute] = useState("Home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", icon: Home, path: "/" },
    { name: "About", icon: User, path: "/about" },
    { name: "Skills", icon: Code, path: "/skills" },
    { name: "Education", icon: GraduationCap, path: "/education" },
    { name: "Projects", icon: FolderOpen, path: "/projects" },
    { name: "Contact", icon: Mail, path: "/contact" },
  ];

  const handleNavClick = (itemName) => {
    setActiveRoute(itemName);
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* Desktop Navbar */}
      <nav className="w-10/12 mx-auto rounded-2xl mt-4 fixed top-0 left-0 right-0 z-50 bg-white/5  backdrop-blur-md">
        <div className=" px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex items-center space-x-2 cursor-pointer font-mono text-white"
              >
                <Terminal className="text-green-400" size={24} />
                <span className="text-xl font-bold">
                  <span className="text-green-400">const</span>{" "}
                  <span className="text-purple-400">developer</span>{" "}
                  <span className="text-pink-400">=</span>
                  <span className="text-yellow-400">
                    &quot;Rahmatullah&quot;
                  </span>
                </span>
              </motion.div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1">
              {navItems.map((item) => {
                const IconComponent = item.icon;
                const isActive = activeRoute === item.name;

                return (
                  <button
                    key={item.name}
                    onClick={() => handleNavClick(item.name)}
                    className={`group relative flex items-center px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                      isActive
                        ? "text-white"
                        : "text-gray-300 hover:text-white"
                    }`}
                  >
                    <div
                      className={`transition-all duration-300 ${
                        isActive ? "scale-100" : "group-hover:scale-110"
                      }`}
                    >
                      <IconComponent size={18} />
                    </div>

                    <span
                      className={`ml-2 transition-all duration-300 ease-in-out overflow-hidden whitespace-nowrap ${
                        isActive
                          ? "max-w-24 opacity-100"
                          : "max-w-0 opacity-0 group-hover:max-w-24 group-hover:opacity-100"
                      }`}
                    >
                      {item.name}
                    </span>

                    {/* Underline indicator */}
                    <div
                      className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 h-0.5 bg-white transition-all duration-300 ${
                        isActive ? "w-6" : "w-0 group-hover:w-6"
                      }`}
                    />
                  </button>
                );
              })}
            </div>

            {/* Resume Button */}
            {/* <div className="hidden md:flex items-center">
              <button className="flex items-center px-4 py-2 bg-green-500 hover:bg-green-600 text-white text-sm font-medium rounded-lg transition-colors duration-200">
                <FileText size={16} className="mr-2" />
                Resume
              </button>
            </div> */}

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-lg text-gray-300 hover:text-white hover:bg-white/10 transition-all duration-200"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 transition-opacity duration-300 md:hidden ${
          isMobileMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black/40 backdrop-blur-sm"
          onClick={() => setIsMobileMenuOpen(false)}
        />

        {/* Menu Panel */}
        <div
          className={`absolute top-0 right-0 h-full w-80 max-w-sm bg-gray-900 shadow-xl transform transition-transform duration-300 ${
            isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="p-6 pt-20">
            <div className="space-y-2 mb-8">
              {navItems.map((item) => {
                const IconComponent = item.icon;
                const isActive = activeRoute === item.name;

                return (
                  <button
                    key={item.name}
                    onClick={() => handleNavClick(item.name)}
                    className={`w-full flex items-center px-4 py-3 rounded-lg text-left transition-all duration-200 ${
                      isActive
                        ? "text-white bg-white/10"
                        : "text-gray-300 hover:text-white hover:bg-white/5"
                    }`}
                  >
                    <IconComponent size={20} />
                    <span className="ml-3 font-medium">{item.name}</span>
                    {isActive && (
                      <div className="ml-auto w-2 h-2 bg-green-400 rounded-full" />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Mobile Resume Button */}
            <button className="w-full flex items-center justify-center px-4 py-3 bg-green-500 hover:bg-green-600 text-white font-medium rounded-lg transition-colors duration-200">
              <FileText size={18} className="mr-2" />
              Resume
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
