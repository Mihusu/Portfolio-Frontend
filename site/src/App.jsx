import './App.css';
import React from 'react';

// import About from './pages/about';
// import Certifications from './pages/certifications';
// import Contact from './pages/contact';
// import Educations from './pages/educations';
// import Experiences from './pages/experiences';
import Footer from './pages/Footer';
import Greeting from './pages/greeting';
import Header from './pages/header';
// import Projects from './pages/projects';

import { Animator, ScrollContainer, ScrollPage, batch, Fade, FadeIn, FadeOut, Move, MoveIn, MoveOut, Sticky, StickyIn, StickyOut, Zoom, ZoomIn, ZoomOut } from "react-scroll-motion";

function App() {
  
  return (
    <div style={{paddingBottom: "0px", marginBottom: "0px"}}>
      <div className="container" style={styling}>
        <Header />
        <div style={{ marginBottom: "10rem" }}><Greeting /></div>

        {/* <ScrollContainer>
          <ScrollPage>
            <div id="about" ><About /></div>
          </ScrollPage>
        </ScrollContainer>

        <ScrollContainer animateIn="fadeBlockIn" style={margin} duration="2" animateOnce="true" offset="300">
          <div id="experiences"><Experiences /></div>
        </ScrollContainer>

        <ScrollContainer animateIn="fadeBlockIn" style={margin} duration="2" animateOnce="true" offset="300">
          <div id="educations"><Educations /></div>
        </ScrollContainer>

        <ScrollContainer animateIn="fadeBlockIn" style={margin} duration="2" animateOnce="true" offset="300">
          <div id="projects"><Projects /></div>
        </ScrollContainer>

        <ScrollContainer animateIn="fadeBlockIn" style={margin} duration="2" animateOnce="true" offset="300">
          <div id="certifications"><Certifications /></div>
        </ScrollContainer>

        <ScrollContainer animateIn="fadeBlockIn" style={margin} duration="2" animateOnce="true" offset="300">
          <div id="contact"><Contact /></div>
        </ScrollContainer> */}

        <Footer />
      </div>
    </div>
  );
}

const styling = {
  position: 'relative',
  maxWidth: '53rem',
  paddingLeft: "1.5%",
  paddingRight: "1.5%"

}

const margin = {
  marginBottom: '10rem',
}

export default App
