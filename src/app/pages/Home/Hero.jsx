import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

import { FaLinkedin, FaGithub, FaEnvelope, FaPhone } from "react-icons/fa";
const Hero = () => {
  return (
    <motion.div className="space-y-18">
      {/* ------------------------------------------------Hero Section with Image ----------------------------------------------------------*/}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        {/* -------------------------------------------------Left: Text Content------------------------------------------------- */}

        <div className="flex-1 text-center md:text-left ">
          <motion.div
            initial={{ width: "0ch" }}
            animate={{ width: "20ch" }}
            transition={{
              duration: 10,
              delay: 2,
              ease: "linear",
              repeat: Infinity,
            }}
            className="overflow-hidden whitespace-nowrap border-r-2 border-white font-mono text-white text-2xl sm:text-4xl animate-blink typewriter"
            style={{
              display: "inline-block",
            }}
          >
            Hi, I'm Subhro Hazra
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.5,
              ease: "easeOut",
            }}
            className="text-lg max-w-md mx-auto md:mx-0 text-gray-600 dark:text-gray-300"
          >
            Front-End Developer passionate about crafting responsive, fast, and
            modern web apps.
          </motion.p>
          {/*----------------------------------------- CTA Buttons ---------------------------------------------------------------------------*/}

          <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-6">
            <Link
              href="/pages/project"
              className="px-6 py-3 bg-violet-600 text-white font-semibold rounded-full shadow hover:bg-indigo-700 transition"
            >
              View My Work
            </Link>

            <a
              href="/asset/Resume_subhrohazra.pdf"
              download="Subhro_Hazra_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-pink-600 text-white font-semibold rounded-full shadow hover:bg-pink-700 transition"
            >
              Download Resume
            </a>
          </div>

          {/* -------------------------------------------Social Media Icons----------------------------------------------------- */}

          <div className="mt-10  ml-10 flex justify-center md:justify-start">
            <div className="flex gap-6 text-2xl max-w-xs w-full justify-center md:justify-start">
              {/**--------------------->Linkdin<----------------------- */}
              <a
                href="https://www.linkedin.com/in/subhro-hazra-19414a1a3/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="text-gray-400  hover:text-blue-600 transition"
              >
                <FaLinkedin />
              </a>

              {/**--------------------->GitHub<----------------------- */}

              <a
                href="https://github.com/subhro7264"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="text-gray-400 hover:text-gray-200 transition"
              >
                <FaGithub />
              </a>

              {/**-------------------------------------------- */}
              <a
                href="mailto:subhrohazra7@gmail.com"
                aria-label="Email"
                className="text-gray-400  hover:text-red-500 transition"
              >
                <FaEnvelope />
              </a>
              <a
                href="tel:+916296540634"
                aria-label="Phone"
                className="text-gray-400  hover:text-green-500 transition"
              >
                <FaPhone />
              </a>
            </div>
          </div>
        </div>
      </motion.section>
    </motion.div>
  );
};

export default Hero;
