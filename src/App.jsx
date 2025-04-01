import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Moon, Sun } from 'lucide-react';
import rylanIndia from './assets/rylan-india.jpg';
import rylanCanada from './assets/rylan-canada.jpg';

export default function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode);
  }, [darkMode]);

  return (
    <div className="bg-white text-gray-900 dark:bg-gray-900 dark:text-white transition-all duration-300">
      <nav className="flex justify-between items-center p-6 shadow sticky top-0 bg-white dark:bg-gray-800 z-50">
        <h1 className="text-lg sm:text-xl font-bold">Rylan Allen Godinho</h1>
        <div className="flex items-center gap-4 text-sm font-medium">
          <a href="#about" className="hover:text-blue-500">About</a>
          <a href="#projects" className="hover:text-blue-500">Projects</a>
          <a href="#skills" className="hover:text-blue-500">Skills</a>
          <a href="#contact" className="hover:text-blue-500">Contact</a>
          <button onClick={() => setDarkMode(!darkMode)} className="ml-2 p-1">
            {darkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </div>
      </nav>

      <header className="text-center py-10 px-6 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold">Hi, I'm Rylan</h2>
          <p className="text-md sm:text-lg mt-1">Cloud & Business Analyst | DevOps Enthusiast</p>
        </motion.div>
        <div className="mt-6 flex flex-col sm:flex-row justify-center items-center gap-4">
          <img src={rylanIndia} alt="Rylan India" className="w-28 h-28 object-cover rounded-2xl border-4 border-white shadow" />
          <img src={rylanCanada} alt="Rylan Canada" className="w-28 h-28 object-cover rounded-full border-4 border-white shadow" />
        </div>
        <div className="mt-6">
          <a href="https://drive.google.com/file/d/1ASmz-q7ZSpYQHREjhXFNkMrsjf23_956/view?usp=share_link" target="_blank" rel="noopener noreferrer"
            className="bg-white text-indigo-600 font-semibold px-5 py-2 rounded-full shadow hover:bg-indigo-100 transition">
            Download Resume
          </a>
        </div>
      </header>

      <section id="about" className="max-w-3xl mx-auto py-16 px-6">
        <motion.h3 className="text-2xl font-bold mb-4" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>About Me</motion.h3>
        <p>
          I'm currently pursuing an Ontario Graduate Certificate in Information Systems Business Analysis at George Brown College. 
          With hands-on experience in cloud computing, DevOps, and automation tools, I'm passionate about building efficient solutions 
          that drive business success.
        </p>
      </section>

      <section id="projects" className="max-w-3xl mx-auto py-16 px-6 bg-white dark:bg-gray-800 shadow rounded-xl">
        <motion.h3 className="text-2xl font-bold mb-6 text-center" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>Projects</motion.h3>
        <ul className="list-disc list-inside space-y-4 text-sm sm:text-base">
          <li>
            <strong>Private VPN Mesh for Indian Streaming</strong><br />
            Used Tailscale Meshnet to route Indian traffic from a Canada-based MacBook to an iMac in India, enabling smooth streaming of JioCinema, Disney+ Hotstar, and SonyLIV in HD.
          </li>
          <li>
            <strong>Blockchain Dev for Oracle Lens</strong><br />
            Transitioned from PoS to PoI with Cosmos SDK, improving transaction validation speed by 30%.
          </li>
          <li>
            <strong>Optical Image Recognition Android App</strong><br />
            Created an Android OCR app that scans any text or paper document into a digital format and reads it aloud, designed to assist visually impaired users.
          </li>
          <li>
            <strong>Cloud-Based Project Management Tool</strong><br />
            Built using AWS, GCP, and Microsoft Azure in a Cloud Computing course at Humber College. Improved team collaboration using cloud-native services and project tracking tools.
          </li>
        </ul>
      </section>

      <section id="skills" className="max-w-3xl mx-auto py-16 px-6">
        <motion.h3 className="text-2xl font-bold mb-4" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>Skills</motion.h3>
        <div className="flex flex-wrap gap-2">
          {[
            'AWS', 'GCP', 'Azure', 'Kubernetes', 'Docker', 'Python', 'Java',
            'Terraform', 'UiPath', 'Tableau', 'SQL', 'CI/CD',
            'Serverless', 'BPMN', 'UML'
          ].map(skill => (
            <span key={skill} className="bg-indigo-100 text-indigo-700 dark:bg-indigo-700 dark:text-white px-3 py-1 rounded-full text-sm font-medium shadow-sm">
              {skill}
            </span>
          ))}
        </div>
        <p className="mt-4 text-sm text-gray-700 dark:text-gray-300">
          Experienced in deploying virtual machines using Terraform on Microsoft Azure with in-depth configuration of networking, IP allocation, memory, and storage.
        </p>
      </section>

      

      

      

<section id="documents" className="bg-gray-100 dark:bg-gray-800 py-16 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <motion.h3 className="text-2xl font-bold mb-6" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>Documents</motion.h3>
          <div className="flex flex-col items-center space-y-4">
            <a href="https://drive.google.com/file/d/1ASmz-q7ZSpYQHREjhXFNkMrsjf23_956/view?usp=share_link" target="_blank" className="text-blue-600 hover:underline">📄 Resume (PDF)</a>
            <a href="https://drive.google.com/file/d/1Qm-THHzzITxK9oTAeadKqPf1q8iLkKcf/view?usp=share_link" target="_blank" className="text-blue-600 hover:underline">📄 Humber College Transcript – Cloud Computing</a>
            <a href="https://drive.google.com/file/d/124nuBeds_KEkUyKZISKXlhyIzlt9f_AL/view?usp=share_link" target="_blank" className="text-blue-600 hover:underline">📄 George Brown Transcript – Business Analysis</a>
            <a href="https://drive.google.com/file/d/17WZwLdtGGqyPl7UPHhlKHKfpbOwd4nzg/view?usp=share_link" target="_blank" className="text-blue-600 hover:underline">📄 WES Credential Evaluation – BSc IT</a>
          </div>
        </div>
      </section>
<section id="education" className="max-w-3xl mx-auto py-16 px-6">
        <motion.h3 className="text-2xl font-bold mb-4" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>Education</motion.h3>
        <ul className="space-y-4 text-sm sm:text-base">
          <li>
            <strong>Ontario Graduate Certificate – Cloud Computing for Big Data</strong><br />
            Humber College, Canada (2023–2024)
          </li>
          <li>
            <strong>Ontario Graduate Certificate – Information Systems Business Analysis</strong><br />
            George Brown College, Canada (2024–2025)
          </li>
          <li>
            <strong>Bachelor of Science in Information Technology</strong><br />
            Mumbai University, India (2020–2023)
          </li>
        </ul>
      </section>
<section id="contact" className="bg-gray-100 dark:bg-gray-800 py-16 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <motion.h3 className="text-2xl font-bold mb-6" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>Contact</motion.h3>
          <div className="flex justify-center gap-8 text-blue-600 text-lg mb-2">
            <a href="mailto:rylanallen.godinho@georgebrown.ca" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition">
              <Mail size={28} />
            </a>
            <a href="https://linkedin.com/in/rylan-godinho-a056ab215" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition">
              <Linkedin size={28} />
            </a>
          </div>
          <p className="text-sm">rylanallen.godinho@georgebrown.ca</p>
          <p className="text-sm">437-869-2641</p>
        </div>
      </section>    </div>
  );
}
