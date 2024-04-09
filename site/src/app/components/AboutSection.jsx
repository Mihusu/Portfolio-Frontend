'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import TabButton from './TabButton';

const TAB_DATA = [
  {
    title: "Education",
    id: "education", // lowercase
    content: (
      <ul className='list-disc pl-2 ml-2'>
        <li className='font-bold'>2023-2026 
          <span className='ml-4'>Aalborg University - Master</span>
        </li>
        <li className='font-bold'>2020-2024
          <span className='ml-4'>Aalborg University - Bachelor</span>
        </li>
        <li className='font-bold'>2017-2020
          <span className='ml-4'> H.C Ørsted Gymnasium</span>
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
        <li>None, but I'm currently taking courses as we speak ;)</li>
      </ul>
    ),
  }
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useState("skills");
  
  const handeTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className='text-white'>
      <div className='md:grid md:grid-cols-2 gap-8 items-center px-4 py-8 xl:gap-16 sm:py-16 xl:px-16'>
        <Image src="/images/project-work.jpg" width={450} height={450}/>
        <div className='mt-4 md:mt-0 text-left flex flex-col h-full'>
          <h2 className='text-4xl font-bold text-white mb-4 mt-8'>About me</h2>
          <p className='text-base md:text-lg'>
            I'm a chinese person where I have lived my whole life in Denmark and currently residing in the capital region of Denmark. 
            My passion is anything from software engineering, testing and security related topics: Visualizing and securing data, making regression test cases and making web and mobile apps. 
            I'm currently doing a MSc in Software engineering. I'm always happy and quick to learn new technologies and
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