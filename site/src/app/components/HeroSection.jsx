"use client"
import Image from 'next/image';
import Link from 'next/link'
import { motion } from "framer-motion";

import { TypeAnimation } from 'react-type-animation';

const HeroSection = () => {
  return (
    <section>
      <div className='grid grid-cols-1 sm:grid-cols-12'>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-7 place-self-center text-center sm:text-left sm:pl-4 xl:pl-16"
        >
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600'>
              Hello, I&apos;m {" "}
            </span>
            <br />
            <TypeAnimation
              sequence={[
                'Ming',
                1000,
                'A Web Developer',
                1000,
                'A Software Engineer',
                1000,
                'A security oriented person',
                1000,
                'loving all kinds of data processing',
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className='flex text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl'>
            I&apos;m a security-oriented person, testing expert and database handling guru. I&apos;m currently looking for a software related job that can help me gain industry leading knowledge.          
          </p>
          <div>
            <Link
              href="/#contact"
              className="px-6 inline-block py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-200 text-white"
            >
              Hire Me
            </Link>
            <a
              href="/CV-ENG.pdf"
              download="Ming Hui Sun CV"
              className="px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br  from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-800 border-white mt-3"
            >
              <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                Download CV
              </span>
            </a>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-5 place-self-center mt-12 lg:mt-0"
        >
          <div className='rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative'>
            <Image
              src="/images/ming-picture.JPG"
              alt="ming image"
              className='rounded-full absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2'
              width={300}
              height={300}
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default HeroSection;