import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github, ArrowRight } from "lucide-react";
import AOS from "aos";
import { Link } from "react-router";
const projects = [
  {
    id: 1,
    name: "BazarIo",
    image: "/image1.png",
    mainTechnologyStack: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Stripe API",
      "JWT Authentication",
      "Tailwind CSS",
    ],
    briefDescription:
      "This is a comprehensive e-commerce platform designed to showcase a modern online shopping system, from Browse products to secure payments and order management I developed this application using the MERN stack (MongoDB, Express.js, React.js, Node.js) and integrated several modern technologies to create a robust and user-friendly experience.",
    liveProjectLink: "https://bazario-auth-23e7d.web.app",
    githubRepositoryLinkClientSide:
      "https://github.com/Rahmot15/E-Commers-BazarIo-Project-client-side.git",
    githubRepositoryLinkServerSide:
      "https://github.com/Rahmot15/E-Commers-BazarIo-Project-server-side.git",
    challengesFaced: [
      "Implementing secure payment processing with Stripe API",
      "Managing complex state for shopping cart across multiple components",
      "Optimizing database queries for better performance",
      "Handling real-time inventory updates",
      "Implementing responsive design for all device sizes",
    ],
    potentialImprovements: [
      "Add real-time chat support for customer service",
      "Implement advanced product filtering and search",
      "Add wishlist and comparison features",
      "Integrate with multiple payment gateways",
      "Implement AI-powered product recommendations",
      "Add progressive web app (PWA) capabilities",
    ],
    futurePlans: [
      "Mobile app development using React Native",
      "Implementation of machine learning for personalized recommendations",
      "Multi-vendor marketplace functionality",
      "Advanced analytics dashboard for sellers",
    ],
  },
  {
    id: 2,
    name: "BookStacker",
    image: "/image2.png",
    mainTechnologyStack: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT Authentication",
      "Tailwind CSS",
      "React Router",
    ],
    briefDescription:
      "A virtual bookshelf web app that lets users browse, add, edit, delete books, and write reviews with star ratings. Features user authentication and a responsive design.",
    liveProjectLink: "https://bookstacker.example.com",
    githubRepositoryLinkClientSide:
      "https://github.com/Rahmot15/Bookshelf-Project-client-side.git",
    githubRepositoryLinkServerSide:
      "https://github.com/Rahmot15/Bookshelf-Project-server-side.git",
    challengesFaced: [
      "Implementing secure user authentication with JWT",
      "Creating a seamless book CRUD interface",
      "Building a star rating and review system",
      "Managing MongoDB data structure and relationships",
      "Ensuring responsive design across devices",
    ],
    potentialImprovements: [
      "Add user profiles with customization",
      "Include book recommendation engine",
      "Implement social sharing of book reviews",
      "Add pagination and sorting for books and reviews",
      "Enable real-time updates using WebSockets",
    ],
    futurePlans: [
      "Mobile app version using React Native",
      "Integration with external book APIs (Google Books, Open Library)",
      "Advanced search and filter options",
      "Community features like forums and book clubs",
    ],
  },
  {
    id: 3,
    name: "Plants",
    image: "/image3.png",
    mainTechnologyStack: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT Authentication",
      "Tailwind CSS",
      "React Router",
    ],
    briefDescription:
      "A full-stack Plants web app for managing plant information, user authentication, and CRUD operations with role-based access control and responsive UI.",
    liveProjectLink: "https://plants-auth-client.web.app",
    githubRepositoryLinkClientSide:
      "https://github.com/Rahmot15/Plant-Care-Tracker-client-side.git",
    githubRepositoryLinkServerSide:
      "https://github.com/Rahmot15/Plant-Care-Tracker-server-side.git",
    challengesFaced: [
      "Implementing role-based user authentication and authorization",
      "Designing responsive and user-friendly plant listing and detail pages",
      "Handling CRUD operations with proper validation",
      "Managing image uploads and storage",
      "Ensuring secure API endpoints with JWT",
    ],
    potentialImprovements: [
      "Add advanced search and filtering for plants",
      "Implement user profiles with plant favorites and watchlists",
      "Add comment and review system for plants",
      "Integrate social media sharing for plant details",
      "Optimize performance and SEO",
    ],
    futurePlans: [
      "Mobile app version with push notifications",
      "Integration with IoT devices for plant monitoring",
      "AI-based plant disease detection and care suggestions",
      "Multi-language support",
      "Offline mode and PWA support",
    ],
  },
];

const ProjectCard = () => {
  useEffect(() => {
    // Initialize AOS only once
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
      <div className="relative z-10 container mx-auto px-4 py-20">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Featured{" "}
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto rounded-full" />
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.slice(0, 3).map((project, index) => (
            <motion.div
              key={project.id}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              data-aos-duration="800"
              className="group relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl rounded-2xl overflow-hidden border border-gray-700/50 hover:border-gray-600/50 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/10"
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
            >
              {/* Project Image Container */}
              <div className="relative h-64 overflow-hidden">
                <motion.img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                  whileHover={{ scale: 1.05 }}
                />

                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Floating action buttons */}
                <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
                  <motion.a
                    href={project.githubRepositoryLinkClientSide}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-gray-800/80 backdrop-blur-sm rounded-full hover:bg-gray-700/80 transition-colors duration-300"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Github className="w-4 h-4 text-white" />
                  </motion.a>
                  <motion.a
                    href={project.liveProjectLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-blue-600/80 backdrop-blur-sm rounded-full hover:bg-blue-500/80 transition-colors duration-300"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <ExternalLink className="w-4 h-4 text-white" />
                  </motion.a>
                </div>

                {/* Technology badges */}
                <div className="absolute bottom-4 left-4 flex flex-wrap gap-1 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                  {project.mainTechnologyStack.slice(0, 3).map((tech, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 text-xs bg-gray-800/80 backdrop-blur-sm text-gray-200 rounded-full border border-gray-600/50"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.mainTechnologyStack.length > 3 && (
                    <span className="px-2 py-1 text-xs bg-gray-800/80 backdrop-blur-sm text-gray-200 rounded-full border border-gray-600/50">
                      +{project.mainTechnologyStack.length - 3}
                    </span>
                  )}
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <motion.h3
                  className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors duration-300"
                  layoutId={`title-${project.id}`}
                >
                  {project.name}
                </motion.h3>

                <p className="text-gray-300 text-sm leading-relaxed mb-4 line-clamp-3">
                  {project.briefDescription}
                </p>

                {/* View Details Button */}
                <motion.button
                  className="group/btn relative w-full py-3 px-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white rounded-xl font-medium transition-all duration-300 overflow-hidden"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => {
                    // Navigate to project details page
                    // Example: navigate(`/project/${project.id}`)
                    console.log(`Navigate to project details: ${project.id}`);
                  }}
                >
                  <Link
                    to={`/projectDetails/${project.id}`}
                    state={{ project }}
                    className="relative z-10 flex items-center justify-center gap-2"
                  >
                    View More / Details
                    <motion.div
                      animate={{ x: [0, 5, 0] }}
                      transition={{
                        duration: 2,
                        repeat: Number.POSITIVE_INFINITY,
                      }}
                    >
                      <ArrowRight className="w-4 h-4" />
                    </motion.div>
                  </Link>
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300" />
                </motion.button>
              </div>

              {/* Animated border gradient */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-cyan-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-xl" />
            </motion.div>
          ))}
        </div>

        {/* Show More Button */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          {/* <motion.button
            className="group relative inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-gray-800 to-gray-900 hover:from-gray-700 hover:to-gray-800 text-white rounded-2xl font-semibold border border-gray-600/50 hover:border-gray-500/50 transition-all duration-300 overflow-hidden"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10">View All Projects</span>
            <motion.div
              animate={{ x: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
              className="relative z-10"
            >
              <ArrowRight className="w-5 h-5" />
            </motion.div>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </motion.button> */}
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectCard;
