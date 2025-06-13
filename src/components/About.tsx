import React from "react";
import { motion } from "framer-motion";
import { Code, Cloud, Database, Brain } from "lucide-react";

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  const highlights = [
    {
      icon: <Code className="w-6 h-6" />,
      title: "Backend Development",
      description: "Passionate about creating robust server-side applications",
    },
    {
      icon: <Cloud className="w-6 h-6" />,
      title: "Cloud Technologies",
      description: "Exploring modern cloud platforms and deployment strategies",
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: "Database Design",
      description: "Experience with both SQL and NoSQL database systems",
    },
    {
      icon: <Brain className="w-6 h-6" />,
      title: "Problem Solving",
      description:
        "Analytical approach to tackling complex technical challenges",
    },
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-dark-800">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
          className="grid lg:grid-cols-2 gap-12 items-center"
        >
          {/* Left Column - Image */}
          <motion.div variants={itemVariants} className="relative">
            <div className="relative z-10">
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="relative overflow-hidden rounded-full bg-gradient-to-br from-purple-400/20 to-orange-400/20 p-1"
              >
                <div className="bg-dark-900 rounded-full p-8 h-96 w-96 flex items-center justify-center">
                  <img
                    src="src/assets/profile-pic.png"
                    alt="Profile"
                    className="w-full h-full object-cover rounded-full"
                    loading="lazy"
                  />
                </div>
              </motion.div>
            </div>
            <div className="absolute -top-4 -left-4 w-full h-full bg-purple-400/5 rounded-full -z-10"></div>
          </motion.div>

          {/* Right Column - Content */}
          <motion.div variants={itemVariants} className="space-y-6">
            <div>
              <motion.h2
                variants={itemVariants}
                className="text-3xl md:text-4xl font-inter font-bold text-slate-200 mb-6"
              >
                About Me
              </motion.h2>
              <motion.p
                variants={itemVariants}
                className="text-slate-400 text-lg leading-relaxed mb-6"
              >
                I'm a passionate Computer Science & Engineering student at
                Amrita University, Bangalore, with a deep interest in backend
                development and cloud technologies. My journey in programming
                began with curiosity and has evolved into a dedication to
                creating robust, scalable solutions.
              </motion.p>
              <motion.p
                variants={itemVariants}
                className="text-slate-400 text-lg leading-relaxed"
              >
                I believe in the power of clean code, efficient algorithms, and
                continuous learning. My approach to problem-solving combines
                analytical thinking with creative solutions, always striving to
                build software that makes a meaningful impact.
              </motion.p>
            </div>

            {/* Highlights Grid */}
            <motion.div
              variants={containerVariants}
              className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8"
            >
              {highlights.map((highlight, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ scale: 1.03 }}
                  className="bg-dark-900/50 backdrop-blur-sm rounded-lg p-4 border border-purple-400/10 hover:border-purple-400/20 transition-all duration-300"
                >
                  <div className="text-purple-400 mb-2">{highlight.icon}</div>
                  <h3 className="text-slate-200 font-inter font-semibold mb-1">
                    {highlight.title}
                  </h3>
                  <p className="text-slate-400 text-sm">
                    {highlight.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
