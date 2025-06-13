import React from "react";
import { motion } from "framer-motion";
import { Award, ExternalLink, CheckCircle, Linkedin } from "lucide-react";

const Certificates = () => {
  const certificates = [
    {
      title: "Java Full Stack Developer",
      issuer: "Coursera",
      date: "2024",
      description:
        "Comprehensive training in frontend (HTML, CSS, JavaScript) and backend (Spring Boot, REST APIs), along with database and deployment fundamentals.",
      image: "src/assets/certificates/coursera.png",
      skills: ["Java", "Spring Boot", "HTML", "CSS", "REST APIs"],
      credentialId: "K8MMQL5A22M4",
      url: "https://www.coursera.org/account/accomplishments/specialization/K8MMQL5A22M4",
      verified: true,
    },
    {
      title: "AWS Cloud Foundation",
      issuer: "Amazon Web Services Training and Certification",
      date: "2025",
      description:
        "Introduced to core AWS services like EC2, S3, IAM, Lambda, and deployment practices. Focused on scalability, security, and cloud-native architecture.",
      image: "src/assets/certificates/aws.png",
      skills: ["AWS", "Cloud Computing", "AWS Amplify", "S3", "EC2", "Lambda"],
      credentialId: "Tj5V7eef",
      url: "https://www.credly.com/go/Tj5V7eef",
      verified: true,
    },
    {
      title: "Version Control with Git & GitHub",
      issuer: "GitHub + Geekster",
      date: "2024",
      description:
        "Hands-on training in Git CLI, advanced GitHub collaboration, branching strategies, and pull requests in real-world projects.",
      image: "src/assets/certificates/git.png",
      skills: ["Git", "GitHub", "Version Control", "Team Workflow"],
      credentialId: "8c_GCswj3Ie168mRyiC92",
      url: "https://certifications.geekster.in/8c_GCswj3Ie168mRyiC92-geekster.pdf",
      verified: true,
    },
    {
      title: "Responsive Web Design",
      issuer: "freeCodeCamp",
      date: "2024",
      description:
        "Built multiple responsive projects using HTML5 and CSS3, focusing on grid, flexbox, accessibility, and mobile-first principles.",
      image: "src/assets/certificates/freecodecamp.png",
      skills: ["HTML", "CSS", "Flexbox", "Responsive UI"],
      credentialId: "OjasVats",
      url: "https://www.freecodecamp.org/certification/OjasVats/responsive-web-design",
      verified: true,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section
      id="certificates"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-dark-800"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-inter font-bold text-slate-200 mb-4">
              Certificates & Achievements
            </h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              Professional certifications and achievements that validate my
              technical expertise and commitment to continuous learning
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {certificates.map((cert, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -5, scale: 1.02 }}
                className="group bg-dark-900/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-purple-400/10 hover:border-purple-400/20 transition-all duration-500"
              >
                {/* Certificate Image */}
                <div className="relative overflow-hidden h-48">
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-900/90 to-transparent"></div>
                  <div className="absolute top-4 left-4 bg-purple-400/20 backdrop-blur-sm rounded-lg p-2">
                    <Award className="w-6 h-6 text-purple-400" />
                  </div>
                  {cert.verified && (
                    <div className="absolute top-4 right-4 bg-green-400/20 backdrop-blur-sm rounded-lg p-2">
                      <CheckCircle className="w-5 h-5 text-green-400" />
                    </div>
                  )}
                </div>

                {/* Certificate Content */}
                <div className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-slate-200 font-inter font-bold text-xl group-hover:text-purple-400 transition-colors duration-300">
                      {cert.title}
                    </h3>
                    <span className="text-orange-400 text-sm font-inter font-medium bg-orange-400/10 px-2 py-1 rounded">
                      {cert.date}
                    </span>
                  </div>

                  <p className="text-slate-300 font-inter font-medium text-sm mb-2">
                    {cert.issuer}
                  </p>

                  <p className="text-slate-400 text-sm leading-relaxed mb-4">
                    {cert.description}
                  </p>

                  {/* Skills */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {cert.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-2 py-1 bg-purple-400/10 text-purple-400 rounded text-xs font-inter font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  {/* Credential Info */}
                  <div className="flex justify-between items-center pt-4 border-t border-slate-700/50">
                    <div className="text-xs text-slate-400">
                      <span className="font-medium">Credential ID:</span>
                      <br />
                      <span className="font-mono">{cert.credentialId}</span>
                    </div>
                    <motion.a
                      href={cert.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center space-x-1 text-orange-400 hover:text-orange-300 transition-colors duration-300"
                    >
                      <ExternalLink size={16} />
                      <span className="text-sm font-inter font-medium">
                        View
                      </span>
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* View More Certificates */}
          <motion.div variants={itemVariants} className="text-center mt-12">
            <motion.a
              href="https://www.linkedin.com/in/ojas-tyagi"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 30px rgba(168, 85, 247, 0.3)",
              }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center space-x-2 bg-transparent border-2 border-purple-400 text-purple-400 px-8 py-4 rounded-lg font-inter font-medium transition-all duration-300 hover:bg-purple-400/10"
            >
              <Linkedin size={20} />
              <span>View More on Linked In</span>
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Certificates;
