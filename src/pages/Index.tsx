
import { useState } from "react";
import { motion } from "framer-motion";
import {
  Github,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  ExternalLink,
  Code,
  Briefcase,
  User,
  GraduationCap,
} from "lucide-react";

const Index = () => {
  const projects = [
    {
      title: "MangoVison",
      description:
        "AI-driven solution for automating garment classification. 2nd Place Datathon FME 2024.",
      link: "https://www.linkedin.com/feed/update/urn:li:activity:7267879367807021057/",
      tech: ["AI", "CLIP", "Streamlit"],
    },
    {
      title: "Formula 1 Race Prediction",
      description:
        "ML model to predict F1 race outcomes using XGBoost and Random Forest.",
      link: "https://github.com/joelcalm/Formula1Prediction",
      tech: ["Python", "ML", "Data Analysis"],
    },
    {
      title: "Zara ... Kind of",
      description:
        "Fashion product recommendation system using ResNet CNN model.",
      link: "https://devpost.com/software/zara-kind-of",
      tech: ["React", "FastAPI", "TensorFlow"],
    },
  ];

  const skills = [
    "Machine Learning",
    "Deep Learning",
    "Python",
    "Data Analysis",
    "React",
    "FastAPI",
    "SQL",
    "TensorFlow",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-purple-900 to-black">
      {/* Hero Section */}
      <section className="section-padding min-h-screen flex items-center justify-center relative">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="mx-auto w-32 h-32 rounded-full overflow-hidden border-4 border-purple-400/30 mb-6">
              <img
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white">
              Joel Calm
            </h1>
            <p className="text-xl md:text-2xl text-purple-200 max-w-2xl mx-auto">
              Computational Mathematics & Data Analytics Student
            </p>
            <div className="flex justify-center space-x-6 pt-6">
              <a
                href="https://github.com/joelcalm"
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-200 hover:text-white transition-colors"
              >
                <Github size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/joel-calm/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-200 hover:text-white transition-colors"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="mailto:joelcalm44@gmail.com"
                className="text-purple-200 hover:text-white transition-colors"
              >
                <Mail size={24} />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section className="section-padding bg-black/30">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="flex items-center space-x-2 mb-8">
            <User className="text-purple-200" size={24} />
            <h2 className="text-3xl font-bold text-white">About Me</h2>
          </div>
          <p className="text-purple-100 text-lg leading-relaxed">
            Driven by a relentless pursuit of learning and self-improvement, I am a
            Computational Mathematics and Data Analytics student with a strong focus
            on Machine Learning, Artificial Intelligence, and Data Science. I
            specialize in predictive modeling, deep learning, and data
            preprocessing to solve real-world challenges.
          </p>
        </motion.div>
      </section>

      {/* Projects Section - Moved above Experience */}
      <section className="section-padding">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="flex items-center space-x-2 mb-8">
            <Code className="text-purple-200" size={24} />
            <h2 className="text-3xl font-bold text-white">Projects</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="glass rounded-lg p-6 hover:transform hover:scale-105 transition-all bg-purple-900/30"
              >
                <h3 className="text-xl font-semibold text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-purple-200 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-purple-800/50 text-purple-100 px-2 py-1 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-purple-200 hover:text-white transition-colors"
                >
                  View Project <ExternalLink size={16} className="ml-1" />
                </a>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Experience Section */}
      <section className="section-padding bg-black/30">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="flex items-center space-x-2 mb-8">
            <Briefcase className="text-purple-200" size={24} />
            <h2 className="text-3xl font-bold text-white">Experience</h2>
          </div>
          <div className="space-y-8">
            <div className="glass rounded-lg p-6 bg-purple-900/30">
              <h3 className="text-xl font-semibold text-white">
                Audio AI/ML Engineer Intern
              </h3>
              <p className="text-purple-200">AudioStack • Dec 2024 – Current</p>
              <ul className="mt-4 text-purple-200 list-disc list-inside">
                <li>Developed AI-driven audio processing software</li>
                <li>Implemented testing frameworks</li>
              </ul>
            </div>
            <div className="glass rounded-lg p-6 bg-purple-900/30">
              <h3 className="text-xl font-semibold text-white">
                Data Scientist
              </h3>
              <p className="text-purple-200">Tavil • Aug 2023 – Aug 2024</p>
              <ul className="mt-4 text-purple-200 list-disc list-inside">
                <li>Validated CNN models for image classification</li>
                <li>Optimized model performance</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Skills Section */}
      <section className="section-padding">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="flex items-center space-x-2 mb-8">
            <GraduationCap className="text-purple-200" size={24} />
            <h2 className="text-3xl font-bold text-white">Skills</h2>
          </div>
          <div className="flex flex-wrap gap-4">
            {skills.map((skill, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="glass px-4 py-2 rounded-full text-purple-100 bg-purple-900/30"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Contact Section */}
      <section className="section-padding bg-black/30">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-3xl font-bold text-white mb-8">
            Get in Touch
          </h2>
          <div className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-12">
            <a
              href="mailto:joelcalm44@gmail.com"
              className="flex items-center space-x-2 text-purple-200 hover:text-white transition-colors"
            >
              <Mail size={20} />
              <span>joelcalm44@gmail.com</span>
            </a>
            <a
              href="tel:+34684290506"
              className="flex items-center space-x-2 text-purple-200 hover:text-white transition-colors"
            >
              <Phone size={20} />
              <span>(+34) 684290506</span>
            </a>
            <div className="flex items-center space-x-2 text-purple-200">
              <MapPin size={20} />
              <span>Olot, Spain</span>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Index;
