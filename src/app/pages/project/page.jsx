'use client';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Details from '../../../components/Details'; 
import expenseImg from '../../../asset/3.png';
import EcommerceImg from '../../../asset/4.png';
import CalculatorImg from '../../../asset/2.png';
import medShopImg from '../../../asset/1.png';
import tableBooking from '../../../asset/5.png';





const Projects = () => {

  const [modalShow, setModalShow] = useState(false);
  const [projectTitle, setProjectTitle] = useState('');
  const [projectSubtitle, setProjectSubtitle] = useState('');
  const [projectDescription, setProjectDescription] = useState('');
  const [projectSkills, setProjectSkills] = useState('');

  const openModal = (title, subtitle, description, skills) => {
    setModalShow(true);
    setProjectTitle(title);
    setProjectSubtitle(subtitle);
    setProjectDescription(description);
    setProjectSkills(skills);
  };

  const projectData = [
    {
      title: 'Expense Tracker With React.js',
      subtitle: 'Expense Tracker',
      description:
        'This is an Expense Tracker App where you can add your Daily Expenses and download the expense report. In this app, I use Firebase for authentication and real-time database. I use Redux Toolkit for State Management.',
      skills:
        'Redux.js, Redux Toolkit, Firebase, REST APIs, Bootstrap, Responsive Web Design, React.js, CSS, JavaScript',
      img: expenseImg,
      link: 'https://expense-tracker-new-7d274.web.app/',
    },
    {
      title: 'E-commerce with React.Js',
      subtitle: 'E-commerce App',
      description:
        'In this app, I use Firebase for authentication and real-time database',
      skills:
        'Context API, Firebase, REST APIs, Bootstrap, Responsive Web Design, React.js, CSS, JavaScript',
      img: EcommerceImg,
      link: 'https://react-1ee49.web.app/',
    },
    {
      title: 'Simple Table Booking With ReactJs',
      subtitle: 'Table Booking App',
      description: 'Here user can order dishes and choose table number',
      skills: 'Bootstrap, Responsive Web Design, React.js, CSS, JavaScript',
      img: tableBooking, // Use a proper image
      link: 'https://ordertable-3d543.web.app/',
    },
    {
      title: 'Simple Calculator App With ReactJs',
      subtitle: 'Calculator App',
      description: 'This is a Simple Calculator App with basic functions',
      skills: 'Bootstrap, Responsive Web Design, React.js, CSS, JavaScript',
      img: CalculatorImg,
      link: 'https://hosting-react--projets.web.app/',
    },
    {
      title: 'Medicine Shop With React.JS',
      subtitle: 'Medicine Shop',
      description:
        'This is a little medicine shop where you can add your medicines to your Cart and check the total bill',
      skills:
        'Context API, Firebase, REST APIs, Bootstrap, Responsive Web Design, React.js, CSS, JavaScript',
      img: medShopImg,
      link: 'https://medicine-dashbord.web.app/',
    },
  ];



  return (
   <section className="w-full min-h-screen py-16 px-6 mt-10 text-white rounded-2xl shadow-lg backdrop-blur-lg bg-violet/10 dark:bg-violet/10 border border-violet/20 dark:border-white/20">
    <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">My Projects</h2>

    <div className="grid gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
     {projectData.map((project, index) => (
       <div
        key={index}
        className="bg-white dark:bg-gray-800 text-black dark:text-white rounded-2xl shadow-xl overflow-hidden transition-transform duration-300 hover:scale-[1.02]"
       >
        <Link href={project.link} target="_blank" rel="noopener noreferrer">
          <Image
            src={project.img}
            alt={project.title}
            className="w-full h-48 object-cover"
          />
        </Link>

        <div className="p-5 flex flex-col justify-between h-[calc(100%-192px)]">
          <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
          <p className="text-sm text-gray-700 dark:text-gray-300 line-clamp-3">{project.description}</p>

          <button
            onClick={() =>
              openModal(project.title, project.subtitle, project.description, project.skills)
            }
            className="mt-6 w-full bg-violet-600 hover:bg-violet-700 text-white font-semibold py-2 rounded"
          >
            More
          </button>
        </div>
      </div>
    ))}
  </div>
      <Details
        show={modalShow}
        onHide={() => setModalShow(false)}
        projectTitle={projectTitle}
        projectSubtitle={projectSubtitle}
        projectDescription={projectDescription}
        projectSkills={projectSkills}
      />
    </section>
  );
};

export default Projects;
