
import { useState, useEffect } from "react";
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
  Award,
} from "lucide-react";

const Index = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

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
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100">
      <div
        className="cursor-effect animate-cursor"
        style={{
          transform: `translate(${mousePosition.x - 10}px, ${
            mousePosition.y - 10
          }px)`,
        }}
      />

      {/* Hero Section */}
      <section className="section-padding min-h-screen flex items-center justify-center relative">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-slate-800">
              Joel Calm
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 max-w-2xl mx-auto">
              Computational Mathematics & Data Analytics Student
            </p>
            <div className="flex justify-center space-x-6 pt-6">
              <a
                href="https://github.com/joelcalm"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-600 hover:text-slate-900 transition-colors"
              >
                <Github size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/joel-calm/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-600 hover:text-slate-900 transition-colors"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="mailto:joelcalm44@gmail.com"
                className="text-slate-600 hover:text-slate-900 transition-colors"
              >
                <Mail size={24} />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section className="section-padding bg-white/50">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="flex items-center space-x-2 mb-8">
            <User className="text-slate-600" size={24} />
            <h2 className="text-3xl font-bold text-slate-800">About Me</h2>
          </div>
          <p className="text-slate-600 text-lg leading-relaxed">
            Driven by a relentless pursuit of learning and self-improvement, I am a
            Computational Mathematics and Data Analytics student with a strong focus
            on Machine Learning, Artificial Intelligence, and Data Science. I
            specialize in predictive modeling, deep learning, and data
            preprocessing to solve real-world challenges.
          </p>
        </motion.div>
      </section>

      {/* Experience Section */}
      <section className="section-padding">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="flex items-center space-x-2 mb-8">
            <Briefcase className="text-slate-600" size={24} />
            <h2 className="text-3xl font-bold text-slate-800">Experience</h2>
          </div>
          <div className="space-y-8">
            <div className="glass rounded-lg p-6">
              <h3 className="text-xl font-semibold text-slate-800">
                Audio AI/ML Engineer Intern
              </h3>
              <p className="text-slate-600">AudioStack • Dec 2024 – Current</p>
              <ul className="mt-4 text-slate-600 list-disc list-inside">
                <li>Developed AI-driven audio processing software</li>
                <li>Implemented testing frameworks</li>
              </ul>
            </div>
            <div className="glass rounded-lg p-6">
              <h3 className="text-xl font-semibold text-slate-800">
                Data Scientist
              </h3>
              <p className="text-slate-600">Tavil • Aug 2023 – Aug 2024</p>
              <ul className="mt-4 text-slate-600 list-disc list-inside">
                <li>Validated CNN models for image classification</li>
                <li>Optimized model performance</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Projects Section */}
      <section className="section-padding bg-white/50">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="flex items-center space-x-2 mb-8">
            <Code className="text-slate-600" size={24} />
            <h2 className="text-3xl font-bold text-slate-800">Projects</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="glass rounded-lg p-6 hover:transform hover:scale-105 transition-all"
              >
                <h3 className="text-xl font-semibold text-slate-800 mb-2">
                  {project.title}
                </h3>
                <p className="text-slate-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-slate-200 text-slate-700 px-2 py-1 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-slate-600 hover:text-slate-900 transition-colors"
                >
                  View Project <ExternalLink size={16} className="ml-1" />
                </a>
              </motion.div>
            ))}
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
            <GraduationCap className="text-slate-600" size={24} />
            <h2 className="text-3xl font-bold text-slate-800">Skills</h2>
          </div>
          <div className="flex flex-wrap gap-4">
            {skills.map((skill, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="glass px-4 py-2 rounded-full text-slate-700"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Contact Section */}
      <section className="section-padding bg-white/50">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-3xl font-bold text-slate-800 mb-8">
            Get in Touch
          </h2>
          <div className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-12">
            <a
              href="mailto:joelcalm44@gmail.com"
              className="flex items-center space-x-2 text-slate-600 hover:text-slate-900 transition-colors"
            >
              <Mail size={20} />
              <span>joelcalm44@gmail.com</span>
            </a>
            <a
              href="tel:+34684290506"
              className="flex items-center space-x-2 text-slate-600 hover:text-slate-900 transition-colors"
            >
              <Phone size={20} />
              <span>(+34) 684290506</span>
            </a>
            <div className="flex items-center space-x-2 text-slate-600">
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
