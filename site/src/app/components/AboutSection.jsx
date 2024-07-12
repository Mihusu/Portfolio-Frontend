'use client'
import { useState } from 'react';
import Image from 'next/image';
import TabButton from './TabButton';
import Link from 'next/link'

const TAB_DATA = [
  {
    title: "Education",
    id: "education", // lowercase
    content: (
      <ul className='list-disc pl-2 ml-2'>
        <li className='font-bold mb-4'>2024 - 2026:
          <Link href={'https://www.dtu.dk/english/education/graduate/msc-programmes/computer-science-and-engineering'} className='ml-5 text-blue-500'> Technical University of Denmark</Link>
          <p className='ml-32'>Master of Science (MSc) in Computer Science and Engineering</p>
        </li>
        <li className='font-bold'>2023 - 2024:
          <Link href={'https://www.aau.dk/uddannelser/kandidat/software-kobenhavn'} className='ml-5 text-blue-500'> Aalborg University</Link>
          <p className='ml-32'>MSc. Software Engineering</p>
        </li>
        <li className='font-bold mt-4'>2020 - 2024:
          <Link href={'https://www.aau.dk/uddannelser/bachelor/software-koebenhavn'} className='ml-5 text-blue-500'> Aalborg University</Link>
          <p className='ml-32'>BSc. Software Engineering</p>
        </li>
        <li className='font-bold mt-4'>2017 - 2020:
          <Link href={'https://www.tec.dk/h-c-oersted-gymnasiet/'} className='ml-6 text-blue-500'> H.C Ørsted Gymnasium</Link>
          <p className='ml-32'>Study line: Mathmatics A and Programmning B</p>
        </li>
      </ul>
    ),
  },
  {
    title: "Skills",
    id: "skills", // lowercase
    content: (
      <ul className='list-disc pl-2 ml-2'>
        <li>Agile development</li>
        <li>PostgreSQL</li>
        <li>JavaScript</li>
        <li>Node.js</li>
        <li>Python</li>
        <li>Java</li>
        <li>React</li>
        <li>C</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications", // lowercase
    content: (
      <ul>
        <li>None, but I&apos;m currently taking courses as we speak ;)</li>
      </ul>
    ),
  }
];

const AboutSection = () => {
  const [tab, setTab] = useState("education");
  const [/*isPending*/, startTransition] = useState("education");
  
  const handeTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className='text-white'>
      <div className='md:grid md:grid-cols-2 gap-8 items-center px-4 mb-8 xl:gap-16 sm:py-16 xl:px-16'>
        <Image src="/images/project-work.jpg" className='rounded-xl' width={450} height={450} alt="ming image" />
        <div className='mt-4 md:mt-0 text-left flex flex-col h-full'>
          <h2 className='text-4xl font-bold text-white mb-4 mt-8'>About me</h2>
          <p className='text-base md:text-lg'>
            I&apos;m a chinese person where I have lived my whole life in Denmark and currently residing in the capital region of Denmark. 
            My passion is anything from software engineering, testing and security related topics: Visualizing and securing data, making regression test cases and making web and mobile apps. 
            I&apos;m currently doing a MSc in Software engineering. I&apos;m always happy and quick to learn new technologies and
            to expand my knowlegde and skill set.
            My primary technological competencies lie in the following areas:
            Software architecture, cyber security, software development using principles of OOP (Java, Javascript, and Python), 
            full stack development (MERN Stack, SQL), digital electronics (C) and
            general data science including natural language processing. 
            All of which I have applied either through work or in large solo- or group projects consisting of 6-7 people.
          </p>
          <div className='flex flex-row mt-8'>
            <TabButton 
              selectTab={() => handeTabChange("education")} 
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton 
              selectTab={() => handeTabChange("skills")} 
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton 
              selectTab={() => handeTabChange("certifications")} 
              active={tab === "certifications"}
            >
              {" "}
              Certifications{" "}
            </TabButton>
          </div>
          <div className='mt-6'>
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection