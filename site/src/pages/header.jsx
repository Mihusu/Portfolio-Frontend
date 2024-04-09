import React from 'react'

const Header = () => {
    
  return (
		<header className="text-white bg-bluecity_dark body-font shadow-md" >
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-bluecity_dark	flex flex-wrap items-center text-base justify-center">
        <a href="#experience"><span>02. </span>Experience</a>
          <a href="#education"><span>03. </span>Education   </a>
          <a href="#publications"><span>04. </span>Publications  </a>
            <a href="#projects"><span>05. </span>Projects </a>
            <a href="#certifications"><span>06. </span>Certificates </a>
          <a href="#contact"><span>07. </span>Contact </a> 
           <a href="Ming-cv.pdf" style={{ border: "0.1em solid", gap: "3em", color: "var(--highlightText  )", paddingLeft: "0.5em", paddingRight: "0.5em", borderRadius: "0.5em" }} download="Ming Hui Sun Resume"> Resume↓ </a>
        </nav>
      </div>
		</header>
	)	
}

export default Header;
