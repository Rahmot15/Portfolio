import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { CheckCircle, Code, Database, Settings, Sparkles } from "lucide-react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const Skills = () => {
  useEffect(() => {
    Aos.init({
      duration: 800,
      once: true,
      offset: 100,
    });
  }, []);

  const skillsData = {
    frontend: {
      title: "Frontend",
      icon: Code,
      color: "from-blue-500 to-cyan-500",
      skills: [
        { name: "React", level: 90, color: "bg-blue-500" },
        { name: "JavaScript", level: 85, color: "bg-yellow-500" },
        { name: "Tailwind CSS", level: 95, color: "bg-cyan-500" },
        { name: "HTML", level: 98, color: "bg-orange-500" },
        { name: "CSS", level: 90, color: "bg-blue-400" },
      ],
    },
    backend: {
      title: "Backend",
      icon: Database,
      color: "from-green-500 to-emerald-500",
      skills: [
        { name: "Node.js", level: 85, color: "bg-green-500" },
        { name: "Express.js", level: 80, color: "bg-gray-600" },
        { name: "MongoDB", level: 85, color: "bg-green-600" },
        { name: "Firebase", level: 75, color: "bg-yellow-600" },
        { name: "JWT Auth", level: 80, color: "bg-purple-500" },
      ],
    },
    tools: {
      title: "Tools",
      icon: Settings,
      color: "from-purple-500 to-pink-500",
      skills: [
        { name: "VS Code", level: 95, color: "bg-blue-600" },
        { name: "Git", level: 85, color: "bg-red-500" },
        { name: "Figma", level: 80, color: "bg-purple-600" },
        { name: "Postman", level: 85, color: "bg-orange-600" },
        { name: "Notion", level: 90, color: "bg-gray-700" },
      ],
    },
  };

  const stats = [
    {
      number: 15,
      suffix: "+",
      label: "Technologies",
      color: "from-blue-500 to-cyan-500",
    },
    {
      number: 2,
      suffix: "+",
      label: "Years Experience",
      color: "from-green-500 to-emerald-500",
    },
    {
      number: 20,
      suffix: "+",
      label: "Projects Built",
      color: "from-purple-500 to-pink-500",
    },
    {
      number: 90,
      suffix: "%",
      label: "Success Rate",
      color: "from-orange-500 to-red-500",
    },
  ];

  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.3,
  });

  return (
    <section
      id="skills"
      className="relative min-h-screen  py-20 overflow-hidden"
    >
      {/* Floating Background Elements */}
      <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-cyan-500/5 to-green-500/5 rounded-full blur-3xl animate-pulse" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl adlam-display-regular md:text-5xl font-bold text-white mb-4">
            My{" "}
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Skills
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto rounded-full" />
        </div>

        {/* Skills Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16 ">
          {Object.entries(skillsData).map(([key, category], categoryIndex) => {
            const IconComponent = category.icon;

            return (
              <div
                key={key}
                data-aos="fade-up"
                data-aos-delay={categoryIndex * 200}
                className="group bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 hover:border-gray-600/50 transition-all duration-500 hover:shadow-xl hover:shadow-blue-500/10 "
              >
                {/* Category Header */}
                <div className="flex items-center space-x-3 mb-8">
                  <div
                    className={`p-3 bg-gradient-to-br ${category.color} rounded-xl group-hover:scale-110 transition-transform duration-300`}
                  >
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl jetbrains-mono font-semibold text-white">
                    {category.title}
                  </h3>
                </div>

                {/* Skills List */}
                <div className="space-y-6" ref={ref}>
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skill.name} className="group/skill">
                      {/* Skill Name & Verified Icon */}
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center space-x-2">
                          <span className="text-gray-300 font-medium group-hover/skill:text-white transition-colors duration-300">
                            {skill.name}
                          </span>
                          <CheckCircle className="w-4 h-4 text-green-400" />
                        </div>

                        {/* CountUp number animates only when inView */}
                        <span className="text-gray-400 text-sm font-medium">
                          {inView ? (
                            <CountUp
                              start={0}
                              end={skill.level}
                              duration={1.5}
                              suffix="%"
                              delay={categoryIndex * 0.2 + skillIndex * 0.1}
                            />
                          ) : (
                            `0%`
                          )}
                        </span>
                      </div>

                      {/* Progress Bar */}
                      <div className="w-full bg-gray-700/50 rounded-full h-2 overflow-hidden">
                        <div
                          className={`h-full ${skill.color} rounded-full transition-all duration-1500 ease-out transform origin-left hover:scale-x-105`}
                          style={{
                            width: inView ? `${skill.level}%` : "0%",
                            transitionDelay: `${
                              categoryIndex * 200 + skillIndex * 100
                            }ms`,
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>

                {/* Category Footer */}
                <div className="mt-8 pt-6 border-t border-gray-700/30">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400 text-sm">
                      {category.skills.length} Technologies
                    </span>
                    <div className="flex items-center space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <div
                          key={i}
                          className={`w-2 h-2 rounded-full ${
                            i < 4 ? "bg-green-400" : "bg-gray-600"
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Overall Stats */}
        <div
          data-aos="fade-up"
          data-aos-delay="600"
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center p-6 bg-gray-800/30 backdrop-blur-sm border border-gray-700/30 rounded-xl hover:border-gray-600/50 transition-all duration-300 hover:scale-105 group"
            >
              <div
                className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${stat.color} rounded-xl mb-4 group-hover:scale-110 transition-transform duration-300`}
              >
                <span className="text-white font-bold text-lg">
                  <CountUp
                    start={0}
                    end={stat.number}
                    duration={30}
                    suffix={stat.suffix}
                    enableScrollSpy={true}
                    scrollSpyOnce={true}
                  />
                </span>
              </div>
              <div className="text-gray-400 text-sm font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
