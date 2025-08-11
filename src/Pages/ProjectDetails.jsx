import React, { useEffect } from "react";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ExternalLink,
  Code,
  Target,
  Lightbulb,
  Rocket,
  CheckCircle,
  Server,
  Monitor,
} from "lucide-react";
import AOS from "aos";
import { useLocation } from "react-router";

const ProjectDetails = () => {
  const location = useLocation();
  const projectData = location.state?.project;
  console.log(projectData);

  useEffect(() => {
    // Initialize AOS
    if (typeof window !== "undefined") {
      import("aos/dist/aos.css");
      AOS.init({
        duration: 800,
        easing: "ease-out-cubic",
        once: true,
        offset: 50,
      });
    }
  }, []);

  return (
    <section>
      <div className="relative z-10 container mx-auto px-4 py-36">
        {/* Project Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent adlam-display-regular">
              {projectData.name}
            </span>
          </h1>

          {/* Action Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <motion.a
              href={projectData.liveProjectLink}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white rounded-xl font-semibold transition-all duration-300"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <ExternalLink className="w-5 h-5" />
              Live Preview
            </motion.a>

            <motion.a
              href={projectData.githubRepositoryLinkClientSide}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-500 hover:to-purple-600 text-white rounded-xl font-semibold transition-all duration-300"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <Monitor className="w-5 h-5" />
              Client Code
            </motion.a>

            <motion.a
              href={projectData.githubRepositoryLinkServerSide}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-gray-700 to-gray-800 hover:from-gray-600 hover:to-gray-700 text-white rounded-xl font-semibold transition-all duration-300"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <Server className="w-5 h-5" />
              Server Code
            </motion.a>
          </div>
        </motion.div>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto space-y-12">
          {/* Project Image & Overview */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Project Image */}
            <motion.div
              data-aos="fade-right"
              data-aos-duration="1000"
              className="order-2 lg:order-1"
            >
              <motion.div
                className="relative group bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl rounded-2xl overflow-hidden border border-gray-700/50"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src={projectData.image}
                  alt={projectData.name}
                  className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </motion.div>
            </motion.div>

            {/* Project Overview */}
            <motion.div
              data-aos="fade-left"
              data-aos-duration="1000"
              className="order-1 lg:order-2 bg-gradient-to-br from-gray-800/30 to-gray-900/30 backdrop-blur-xl rounded-2xl p-8 border border-gray-700/50 h-fit"
            >
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <div className="p-2 bg-blue-600/20 rounded-lg">
                  <Target className="w-6 h-6 text-blue-400" />
                </div>
                Project Overview
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed">
                {projectData.briefDescription}
              </p>
            </motion.div>
          </div>

          {/* Technology Stack & Challenges */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Technology Stack */}
            <motion.div
              data-aos="fade-right"
              data-aos-duration="1000"
              className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 backdrop-blur-xl rounded-2xl p-8 border border-gray-700/50"
            >
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <div className="p-2 bg-purple-600/20 rounded-lg">
                  <Code className="w-6 h-6 text-purple-400" />
                </div>
                Technology Stack
              </h2>
              <div className="grid grid-cols-2 gap-3">
                {projectData.mainTechnologyStack.map((tech, index) => (
                  <motion.div
                    key={index}
                    className="group p-3 bg-gray-800/50 rounded-xl border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300 text-center"
                    whileHover={{ scale: 1.05, y: -3 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <span className="text-white font-medium group-hover:text-purple-400 transition-colors duration-300 text-sm">
                      {tech}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Challenges Faced */}
            <motion.div
              data-aos="fade-left"
              data-aos-duration="1000"
              className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 backdrop-blur-xl rounded-2xl p-8 border border-gray-700/50"
            >
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <div className="p-2 bg-red-600/20 rounded-lg">
                  <Target className="w-6 h-6 text-red-400" />
                </div>
                Challenges Faced
              </h2>
              <div className="space-y-3">
                {projectData.challengesFaced.map((challenge, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start gap-3 p-3 bg-gray-800/30 rounded-xl border border-gray-700/30 hover:border-red-500/30 transition-all duration-300"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ x: 5 }}
                  >
                    <div className="p-1 bg-red-600/20 rounded-full flex-shrink-0 mt-1">
                      <CheckCircle className="w-3 h-3 text-red-400" />
                    </div>
                    <span className="text-gray-300 leading-relaxed text-sm">
                      {challenge}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Improvements & Future Plans */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Potential Improvements */}
            <motion.div
              data-aos="fade-right"
              data-aos-duration="1000"
              className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 backdrop-blur-xl rounded-2xl p-8 border border-gray-700/50"
            >
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <div className="p-2 bg-yellow-600/20 rounded-lg">
                  <Lightbulb className="w-6 h-6 text-yellow-400" />
                </div>
                Potential Improvements
              </h2>
              <div className="space-y-3">
                {projectData.potentialImprovements.map((improvement, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start gap-3 p-3 bg-gray-800/30 rounded-xl border border-gray-700/30 hover:border-yellow-500/30 transition-all duration-300"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="p-1 bg-yellow-600/20 rounded-full flex-shrink-0 mt-1">
                      <Lightbulb className="w-3 h-3 text-yellow-400" />
                    </div>
                    <span className="text-gray-300 leading-relaxed text-sm">
                      {improvement}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Future Plans */}
            <motion.div
              data-aos="fade-left"
              data-aos-duration="1000"
              className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 backdrop-blur-xl rounded-2xl p-8 border border-gray-700/50"
            >
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <div className="p-2 bg-green-600/20 rounded-lg">
                  <Rocket className="w-6 h-6 text-green-400" />
                </div>
                Future Plans
              </h2>
              <div className="space-y-3">
                {projectData.futurePlans.map((plan, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start gap-3 p-3 bg-gray-800/30 rounded-xl border border-gray-700/30 hover:border-green-500/30 transition-all duration-300"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ x: -3 }}
                  >
                    <div className="p-1 bg-green-600/20 rounded-full flex-shrink-0 mt-1">
                      <Rocket className="w-3 h-3 text-green-400" />
                    </div>
                    <span className="text-gray-300 leading-relaxed text-sm">
                      {plan}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Action Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-gray-800/50 to-gray-900/50 backdrop-blur-xl rounded-2xl p-8 border border-gray-700/50 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Interested in this project?
            </h3>
            <p className="text-gray-300 mb-6">
              Feel free to explore the live demo or check out the source code
              repositories.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <motion.a
                href={projectData.liveProjectLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white rounded-xl font-semibold transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <ExternalLink className="w-5 h-5" />
                Visit Live Site
              </motion.a>
              <motion.a
                href={projectData.githubRepositoryLinkClientSide}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-purple-600 hover:bg-purple-500 text-white rounded-xl font-semibold transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Monitor className="w-5 h-5" />
                Client Repo
              </motion.a>
              <motion.a
                href={projectData.githubRepositoryLinkServerSide}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-gray-700 hover:bg-gray-600 text-white rounded-xl font-semibold transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Server className="w-5 h-5" />
                Server Repo
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectDetails;
