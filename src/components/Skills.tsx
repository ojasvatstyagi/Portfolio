import React from 'react';
import { motion } from 'framer-motion';
import { FaJava, FaAws } from 'react-icons/fa';
import {
  Monitor,
  Server,
  Database,
  Cloud,
  Code,
} from 'lucide-react';

import {
  SiReact, SiTailwindcss, SiJavascript, SiHtml5, SiCss3,
  SiSpringboot, SiNodedotjs, SiMongodb, SiMysql, SiPostgresql, SiRedis,
  SiDocker, SiGit, SiLinux,
} from 'react-icons/si';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      icon: <Monitor className="w-6 h-6" />,
      skills: [
        { name: "React", logo: <SiReact className="w-7 h-7 text-cyan-400" /> },
        { name: "Tailwind CSS", logo: <SiTailwindcss className="w-7 h-7 text-teal-400" /> },
        { name: "JavaScript", logo: <SiJavascript className="w-7 h-7 text-yellow-400" /> },
        {
          name: "HTML/CSS",
          logo: (
            <span className="flex space-x-1">
              <SiHtml5 className="w-7 h-7 text-orange-500" />
              <SiCss3 className="w-7 h-7 text-blue-400" />
            </span>
          ),
        },
      ],
    },
    {
      title: "Backend",
      icon: <Server className="w-6 h-6" />,
      skills: [
        { name: "Java", logo: <FaJava className="w-7 h-7 text-red-600" /> },
        { name: "Spring Boot", logo: <SiSpringboot className="w-7 h-7 text-green-600" /> },
        { name: "Node.js", logo: <SiNodedotjs className="w-7 h-7 text-green-400" /> },
        { name: "REST APIs", logo: <Code className="w-7 h-7 text-indigo-400" /> },
      ],
    },
    {
      title: "Database",
      icon: <Database className="w-6 h-6" />,
      skills: [
        { name: "MongoDB", logo: <SiMongodb className="w-7 h-7 text-green-500" /> },
        { name: "MySQL", logo: <SiMysql className="w-7 h-7 text-blue-500" /> },
        { name: "PostgreSQL", logo: <SiPostgresql className="w-7 h-7 text-blue-400" /> },
        { name: "Redis", logo: <SiRedis className="w-7 h-7 text-red-500" /> },
      ],
    },
    {
      title: "DevOps & Tools",
      icon: <Cloud className="w-6 h-6" />,
      skills: [
        { name: "AWS", logo: <FaAws className="w-7 h-7 text-orange-500" /> },
        { name: "Docker", logo: <SiDocker className="w-7 h-7 text-blue-400" /> },
        { name: "Git", logo: <SiGit className="w-7 h-7 text-orange-400" /> },
        { name: "Linux", logo: <SiLinux className="w-7 h-7 text-yellow-400" /> },
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-dark-800">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-inter font-bold text-slate-200 mb-4">
              Skills & Technologies
            </h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              A comprehensive overview of my technical expertise and proficiency levels
            </p>
          </motion.div>

          <motion.div 
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={categoryIndex}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="bg-dark-900/50 backdrop-blur-sm rounded-2xl p-6 border border-purple-400/10 hover:border-purple-400/20 transition-all duration-300"
              >
                <div className="flex items-center space-x-3 mb-6">
                  <div className="text-purple-400">
                    {category.icon}
                  </div>
                  <h3 className="text-slate-200 font-inter font-semibold text-lg">
                    {category.title}
                  </h3>
                </div>

                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="flex items-center space-x-3 mb-2">
                      <span>{skill.logo}</span>
                      <span className="text-slate-300 font-inter font-medium text-sm">
                        {skill.name}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Additional Skills Tags */}
          <motion.div 
            variants={itemVariants}
            className="mt-16 text-center"
          >
            <h3 className="text-slate-300 font-inter font-semibold text-lg mb-6">
              Other Technologies & Tools
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                'Express.js', 'JWT', 'Swagger', 'Eclipse',
                'Postman', 'VS Code', 'IntelliJ IDEA', 'Figma', 'Jira'
              ].map((tech, index) => (
                <motion.span
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="px-4 py-2 bg-dark-800/50 text-slate-300 rounded-full text-sm font-inter font-medium border border-purple-400/20 hover:border-orange-400/40 transition-all duration-300"
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;