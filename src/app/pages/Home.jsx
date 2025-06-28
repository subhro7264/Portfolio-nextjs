'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import subhroImage from '../../../public/asset/subhro07.png'; 

import { FaLinkedin, FaGithub, FaEnvelope, FaPhone } from 'react-icons/fa';



export default function Home() {

return (

<div className="space-y-18 ">

      {/* ------------------------------------------------Hero Section with Image ----------------------------------------------------------*/}
  <motion.section
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.7 }}
  className="flex flex-col  md:flex-row items-center mt-20 gap-10 md:gap-16 px-6 pt-16 pb-24
             rounded-2xl shadow-lg backdrop-blur-lg bg-violet/10 dark:bg-violet/10
             border border-violet/20 dark:border-white/20">


{/* -------------------------------------------------Left: Text Content------------------------------------------------- */}

 <div className="flex-1 text-center md:text-left ">
    <h1 className=" cursor typewriter-animation   ">
    Hi, I'm Subhro Hazra
    </h1>
  <p className="text-lg max-w-md mx-auto md:mx-0 text-gray-600 dark:text-gray-300">
    Front-End Developer passionate about crafting responsive, fast, and modern web apps.
  </p>


 {/*----------------------------------------- CTA Buttons ---------------------------------------------------------------------------*/}

  <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-6">

    <Link
      href="/pages/project"
      className="px-6 py-3 bg-violet-600 text-white font-semibold rounded-full shadow hover:bg-indigo-700 transition">
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





        {/* Right: Image */}
        <div className="flex-.6">
          <Image
            src={subhroImage}
            alt="Subhro Hazra coding"
            className="rounded-xl shadow-xl "
            width={200}
            height={150}
            priority
          />
        </div>
      </motion.section>

   

    </div>
  );
}
