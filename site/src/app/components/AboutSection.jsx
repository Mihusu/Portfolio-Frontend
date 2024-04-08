import React from 'react'
import Image from 'next/image';

const AboutSection = () => {
  return (
    <section className='text-white'>
      <div className='md:grid md:grid-cols-2 gap-8 items-center px-4 py-8 xl:gap-16 sm:py-16 xl:px-16'>
          <Image src="/images/project-work.jpg" width={300} height={300}/>
          <div>
            <h2 className='text-4xl font-bold text-white mb-4'>About me</h2>
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
              <span>Skills</span>
              <span>Education</span>
              <span>Experience</span>
            </div>
          </div>
      </div>
    </section>
  )
}

export default AboutSection