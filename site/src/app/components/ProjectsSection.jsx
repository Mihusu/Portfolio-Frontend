"use client";
import React, { useState, useRef, useEffect } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Toerst App",
    description: "To easy locate a drinking fountain near you",
    image: "./images/projects/P7_V2.jpg",
    tag: ["All", "Mobile"],
    gitUrl: "/",
    previewUrl: "/"
  },
  {
    id: 2,
    title: "Bachelor thesis: MinCykel",
    description: " A secure way to transfer ownership of bikes",
    image: "./images/projects/P6_V2.jpg",
    tag: ["All", "Mobile"],
    gitUrl: "/",
    previewUrl: "/"
  },
  {
    id: 3,
    title: "Educado",
    description: "An educational learning platform for waste pickers in Brazil",
    image: "./images/projects/P5.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Educado-App",
    previewUrl: "/"
  },
  {
    id: 4,
    title: "Board game language",
    description: "Learning project to create compilers",
    image: "./images/projects/P4_V2.jpg",
    tag: ["All", "Terminal"],
    gitUrl: "/",
    previewUrl: "/"
  },
  {
    id: 5,
    title: "Priotool",
    description: "An inventory & repair management system for GreenMind (former Blue City)",
    image: "./images/projects/P3.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/"
  },
  {
    id: 6,
    title: "Sustainify",
    description: "Lowering household CO2 emissions from energy consumption through an advice driven through a web application",
    image: "./images/projects/P2.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/"
  },
  {
    id: 7,
    title: "CV-filter",
    description: "Selecting particular words to be filtered out from a CV",
    image: "./images/projects/P1.png",
    tag: ["All", "Terminal"],
    gitUrl: "/",
    previewUrl: "/"
  },
]

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const [isMobile, setIsMobile] = useState(
    typeof window !== "undefined" ? window.innerWidth <= 550 : false
  );
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 550);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-4">
        My Projects
      </h2>
      <div className={`text-white flex flex-row justify-center items-center gap-2 py-6 ${isMobile ? 'flex-wrap' : ''}`}>
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Terminal"
          isSelected={tag === "Terminal"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
}

export default ProjectsSection