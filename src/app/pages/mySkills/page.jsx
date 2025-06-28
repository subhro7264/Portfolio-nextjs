
'use client'

import React from 'react';
import { motion } from "framer-motion";
import { FaHtml5, FaCss3Alt, FaBootstrap, FaJs, FaReact, FaNodeJs, FaGithub } from "react-icons/fa";
import { SiRedux, SiExpress, SiMongodb, SiMongoose, SiFirebase, SiTailwindcss, SiNextdotjs } from "react-icons/si";



const MySkills = () => {



    const skills = [
    { name: "HTML5", icon: <FaHtml5 className="text-orange-600" /> },
    { name: "CSS3", icon: <FaCss3Alt className="text-blue-600" /> },
    { name: "Bootstrap", icon: <FaBootstrap className="text-purple-600" /> },
    { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
    { name: "React.js", icon: <FaReact className="text-cyan-400" /> },
    { name: "Redux.js", icon: <SiRedux className="text-purple-500" /> },
    { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
    { name: "Express.js", icon: <SiExpress className="text-gray-500" /> },
    { name: "MongoDB", icon: <SiMongodb className="text-green-700" /> },
    { name: "Mongoose", icon: <SiMongoose className="text-red-600" /> },
    { name: "Firebase", icon: <SiFirebase className="text-yellow-500" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-teal-400" /> },
    { name: "Next.js", icon: <SiNextdotjs className="text-black dark:text-white" /> },
    { name: "GitHub", icon: <FaGithub className="text-gray-800 dark:text-white" /> },
  ];
  
  return (

<>
    
<motion.div
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.7 }}
  viewport={{ once: true }}
  className="mt-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto"
>
  {/* Section Heading */}
  <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-900 dark:text-indigo-400 mb-10">
    My Tech Skills
  </h2>

  {/* Skills Grid */}
  <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-6">
    {skills.map((skill, index) => (
      <div
        key={index}
        className="flex flex-col items-center justify-center
                   bg-white/10 dark:bg-white/10 backdrop-blur-md
                   border border-white/20 dark:border-white/20
                   p-4 rounded-xl shadow-md hover:shadow-xl hover:scale-105
                   transition duration-300 ease-in-out text-gray-800 dark:text-gray-200"
      >
        <div className="text-4xl mb-2">{skill.icon}</div>
        <span className="text-sm font-medium text-center">{skill.name}</span>
      </div>
    ))}
  </div>
</motion.div>

    
    </>
  )
}

export default MySkills