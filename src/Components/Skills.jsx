import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { CheckCircle, Code, Database, Settings, Sparkles } from "lucide-react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import {
  SiReact,
  SiJavascript,
  SiTailwindcss,
  SiHtml5,
  SiCss3,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiFirebase,
  SiJsonwebtokens,
  SiGit,
  SiFigma,
  SiPostman,
  SiNotion,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";

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
        {
          name: "React",
          level: 95,
          Icon: SiReact,
          iconColor: "#61DAFB",
          color: "bg-sky-400",
        },
        {
          name: "JavaScript",
          level: 85,
          Icon: SiJavascript,
          iconColor: "#F7DF1E",
          color: "bg-yellow-400",
        },
        {
          name: "Tailwind CSS",
          level: 95,
          Icon: SiTailwindcss,
          iconColor: "#06B6D4",
          color: "bg-cyan-400",
        },
        {
          name: "HTML5",
          level: 98,
          Icon: SiHtml5,
          iconColor: "#E34F26",
          color: "bg-orange-500",
        },
        {
          name: "CSS3",
          level: 90,
          Icon: SiCss3,
          iconColor: "#1572B6",
          color: "bg-blue-500",
        },
      ],
    },
    backend: {
      title: "Backend",
      icon: Database,
      color: "from-green-500 to-emerald-500",
      skills: [
        {
          name: "Node.js",
          level: 85,
          Icon: SiNodedotjs,
          iconColor: "#339933",
          color: "bg-green-500",
        },
        {
          name: "Express.js",
          level: 80,
          Icon: SiExpress,
          iconColor: "#000000",
          color: "bg-gray-700",
        },
        {
          name: "MongoDB",
          level: 85,
          Icon: SiMongodb,
          iconColor: "#47A248",
          color: "bg-green-600",
        },
        {
          name: "Firebase",
          level: 75,
          Icon: SiFirebase,
          iconColor: "#FFCA28",
          color: "bg-yellow-300",
        },
        {
          name: "JWT Auth",
          level: 80,
          Icon: SiJsonwebtokens,
          iconColor: "#F59E0B",
          color: "bg-amber-500",
        },
      ],
    },
    tools: {
      title: "Tools",
      icon: Settings,
      color: "from-purple-500 to-pink-500",
      skills: [
        {
          name: "VS Code",
          level: 95,
          Icon: VscVscode,
          iconColor: "#007ACC",
          color: "bg-blue-600",
        },
        {
          name: "Git",
          level: 80,
          Icon: SiGit,
          iconColor: "#F05032",
          color: "bg-red-500",
        },
        {
          name: "Figma",
          level: 75,
          Icon: SiFigma,
          iconColor: "#F24E1E",
          color: "bg-pink-500",
        },
        {
          name: "Postman",
          level: 80,
          Icon: SiPostman,
          iconColor: "#FF6C37",
          color: "bg-orange-400",
        },
        {
          name: "Notion",
          level: 90,
          Icon: SiNotion,
          iconColor: "#6B7280",
          color: "bg-gray-500",
        },
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
      className="relative min-h-screen  pt-24 pb-20 overflow-hidden"
    >
      {/* Floating Background Elements */}
      <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-cyan-500/5 to-green-500/5 rounded-full blur-3xl animate-pulse" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl inter-fonts md:text-5xl font-bold text-white mb-4">
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
                  <h3 className="text-2xl font-mono font-semibold text-white">
                    {category.title}
                  </h3>
                </div>

                {/* Skills List */}
                <div className="space-y-6" ref={ref}>
                  {category.skills.map((skill, skillIndex) => {
                    const SkillIcon = skill.Icon;
                    return (
                      <div key={skill.name} className="group/skill">
                        {/* Skill Name & Icon */}
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center space-x-2">
                            <div className="relative p-2 bg-gray-800/50 rounded-xl group-hover/skill:bg-gray-700/50 transition-colors duration-300">
                              <SkillIcon
                                className="w-5 h-5 group-hover/skill:scale-110 transition-transform duration-300"
                                style={{ color: skill.iconColor }}
                              />
                            </div>
                            <span className="text-gray-300 font-medium group-hover/skill:text-white transition-colors duration-300">
                              {skill.name}
                            </span>
                          </div>

                          {/* CountUp number */}
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
                    );
                  })}
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
