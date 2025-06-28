// import React from 'react'

// const About = () => {
//   return (
//     <div>
//         <div>Hello, I'm Subhro Hazra, a Front-End Developer with a background in Physical Education from Visva-Bharati University.
//              I began my tech journey at SharpenerTech,
//              where I trained intensively in modern web development and built hands-on projects using the latest technologies.
//              </div>

//              <div> Tech Stack / Skills
// Frontend: HTML5, CSS3, Bootstrap, Tailwind CSS, JavaScript, React.js, Redux
// Backend & Tools: Node.js, Express.js, MongoDB, Mongoose, Firebase, GitHub
// Frameworks: Next.js
// </div>

//     </div>
//   )
// }

// export default About
'use client';

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import profilePic from "../../../../public/asset/subhro1.jpg";



const About = () => {



  return (
    <section className="w-full  mt-20 px-4 sm:px-6 lg:px-8 py-16 text-white rounded-2xl shadow-lg backdrop-blur-lg bg-violet/10 dark:bg-violet/10
             border border-violet/20 dark:border-white/20 rounded-2xl shadow-lg backdrop-blur-lg bg-violet/10 dark:bg-violet/10
             border border-violet/20 dark:border-white/20">
      
      {/* Title */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl sm:text-4xl font-extrabold text-center text-indigo-600 dark:text-indigo-400 mb-12 "
      >
        About Me
      </motion.h1>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
        
        {/* Profile Image */}
      <motion.div
  initial={{ opacity: 0, x: -40 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: true }}
  className="w-full flex justify-center"
>
  <Image
    src={profilePic}
    alt="Subhro Hazra"
    width={200}
    height={200}
    priority
    className="rounded-2xl shadow-xl object-cover max-w-[280px] sm:max-w-[300px] md:max-w-[320px] lg:max-w-[350px]"
  />
</motion.div>

        {/* Bio */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-6 text-center md:text-left px-2 md:px-0"
        >
          <p className="text-base sm:text-lg leading-relaxed">
            Hello, I'm <strong className="text-blue-600 dark:text-blue-400">Subhro Hazra</strong>, a passionate Front-End Developer
            with a strong foundation in design and development. I hold a degree in B.A/B.Sc Physical Education and Sport Science from
            <strong className="text-rose-500 dark:text-rose-400"> Visva-Bharati University</strong> but found my calling in tech.
          </p>
          <p className="text-base sm:text-lg leading-relaxed">
            My journey began at <strong className="text-rose-500 dark:text-rose-400">SharpenerTech</strong>, where I gained hands-on experience building real-world
            applications using modern web technologies. I thrive on creating beautiful, responsive UIs and solving
            challenging frontend problems with efficiency and creativity.
          </p>
        </motion.div>
      </div>

      {/* --------------------------------------------------------------Skills Section ----------------------------------------------*/}
      {/* <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="mt-20"
      >
        <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-900 dark:text-white mb-8">
          My Tech Stack
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-6 max-w-5xl mx-auto px-2">
          {[
            "HTML5", "CSS3", "Bootstrap", "JavaScript",
            "React.js", "Redux.js", "Node.js", "Express.js",
            "MongoDB", "Mongoose", "Firebase", "Tailwind CSS",
            "Next.js", "GitHub"
          ].map((skill, index) => (
            <div
              key={index}
              className="bg-gradient-to-tr from-gray-100 to-red-200 dark:from-gray-800 dark:to-gray-900
                         border border-rose-200 dark:border-rose-500 p-3 rounded-xl shadow hover:shadow-xl
                         hover:scale-105 transform transition duration-300 ease-in-out text-center text-sm sm:text-base font-semibold
                         text-gray-800 dark:text-gray-200"
            >
              {skill}
            </div>
          ))}
        </div>
      </motion.div> */}



    </section>
  );
};

export default About;
