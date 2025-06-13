import React from "react";
import { motion } from "framer-motion";
import {
  ExternalLink,
  Github,
  Rocket,
  Database,
  Terminal,
  Users,
  Lock,
  BarChart,
} from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "J.A.M.E.S",
      description:
        "Judicial Administrative Management and Execution System, a full-stack case management platform to streamline court operations. Includes role-based portals for public, lawyers, and judges.",
      image: "src/assets/projects/james.png",
      technologies: ["HTML", "CSS", "MySQL", "PHP", "JavaScript", "Bootstrap"],
      github: "https://github.com/ojasvatstyagi/J.A.M.E.S-DBMS-Project",
      demo: "#",
      icon: <Rocket className="w-6 h-6" />,
    },
    {
      title: "AirSavvy: Smart Flight Management System",
      description:
        "A flight booking and reservation application with modules for user registration, admin control, and flight listings. Built using Spring Boot and JSP during my Infosys internship.",
      image: "src/assets/projects/airsavvy.png",
      technologies: [
        "Spring Boot",
        "MySQL",
        "JSP",
        "Spring Security",
        "MongoDB",
        "Bootstrap",
        "Gemini",
      ],
      github: "https://github.com/ojasvatstyagi/Flight-Management-System",
      demo: "#",
      icon: <Database className="w-6 h-6" />,
    },
    {
      title: "WanderWise: Tour Planner Desktop App",
      description:
        "Java Swing-based desktop application for managing travel bookings, user details, and hotel packages. Uses JDBC for database interaction and a simple GUI for usability.",
      image: "src/assets/projects/wanderwise.png",
      technologies: ["Java Swing", "JDBC", "MySQL", "Java"],
      github:
        "https://github.com/ojasvatstyagi/Travel--Management-Application--JavaSwing",
      demo: "#",
      icon: <Terminal className="w-6 h-6" />,
    },
    {
      title: "Peerospace",
      description:
        "A collaborative platform where users can find teammates for projects, form teams, assign tasks, and give peer feedback. Built with modern full-stack tools and Firebase OAuth.",
      image: "src/assets/projects/peerospace.png",
      technologies: [
        "React",
        "Spring Boot",
        "MongoDB",
        "Firebase Auth",
        "Rest API",
      ],
      github: "https://github.com/mohitRauniyar/peerospace",
      demo: "#",
      icon: <Users className="w-6 h-6" />,
    },
    {
      title: "Fitlytics: Workout Progression Dashboard",
      description:
        "A React + Chart.js based fitness tracking dashboard with interactive charts, AI-generated fitness tips, and a sleek UI for tracking gym progress and visualizing goals.",
      image:
        "https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: [
        "React",
        "Chart.js",
        "JavaScript",
        "OpenAI API",
        "AWS",
        "AWS Amplify",
      ],
      github: "https://github.com/ojasvatstyagi/Fitlytics",
      demo: "#",
      icon: <BarChart className="w-6 h-6" />,
    },
    {
      title: "EzCheck: Modern Visitor Management Solution",
      description:
        "A role-based web app for managing company visitor entries with QR codes, blacklist verification, visit approvals, and dashboards for Admin, Host, Visitor, and Guard roles.",
      image: "src/assets/projects/EzCheck.png",
      technologies: ["HTML", "CSS", "JavaScript", "Bootstrap"],
      github: "https://github.com/ojasvatstyagi/EzCheck",
      demo: "#",
      icon: <Lock className="w-6 h-6" />,
    },
  ];

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

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-dark-800">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-inter font-bold text-slate-200 mb-4">
              Featured Projects
            </h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              A showcase of my recent work and technical projects that
              demonstrate my skills and passion for development
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {projects.map((project, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group bg-dark-900/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-purple-400/10 hover:border-purple-400/20 transition-all duration-500"
              >
                {/* Project Image */}
                <div className="relative overflow-hidden h-48">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-900/80 to-transparent"></div>
                  <div className="absolute top-4 left-4 bg-purple-400/20 backdrop-blur-sm rounded-lg p-2">
                    <div className="text-purple-400">{project.icon}</div>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <h3 className="text-slate-200 font-inter font-bold text-xl mb-3 group-hover:text-purple-400 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-gradient-to-r from-purple-400/10 to-orange-400/10 text-purple-400 rounded-full text-xs font-inter font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Project Links */}
                  <div className="flex space-x-4">
                    <motion.a
                      href={project.github}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center space-x-2 text-slate-400 hover:text-purple-400 transition-colors duration-300"
                    >
                      <Github size={18} />
                      <span className="text-sm font-inter font-medium">
                        Code
                      </span>
                    </motion.a>
                    {/* <motion.a
                      href={project.demo}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center space-x-2 text-slate-400 hover:text-orange-400 transition-colors duration-300"
                    >
                      <ExternalLink size={18} />
                      <span className="text-sm font-inter font-medium">
                        Demo
                      </span>
                    </motion.a> */}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* View More Projects */}
          <motion.div variants={itemVariants} className="text-center mt-12">
            <motion.a
              href="https://github.com/ojasvatstyagi"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 30px rgba(168, 85, 247, 0.3)",
              }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center space-x-2 bg-transparent border-2 border-purple-400 text-purple-400 px-8 py-4 rounded-lg font-inter font-medium transition-all duration-300 hover:bg-purple-400/10"
            >
              <Github size={20} />
              <span>View More on GitHub</span>
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
