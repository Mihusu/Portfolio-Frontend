import "../App.css";

const About = () => {
  return (
    <div>
      <title>Who am I?</title>
      <h1 style={{ marginBottom: "0%" }}>
        <a href="#about"><span>01.</span></a> About me
      </h1>

      <div className="row">
        <div className="column" style={{paddingRight: "1%"}}>
          <h3>
            Danish person currently residing in the
            capital region of Denmark. My passion is anything data related:
            Visualizing, extrapolating, and securing data. 
            I’m currently doing a BSc in Software engineering. My
            primary technological competencies lie in the following areas: Software architecture, cyber security, software development using principles of OOP
            (Java, C#, and Python), full stack development (MERN stack, SQL),
            digital electronics (C), quantum computing (Qiskit) and general data science including but not limited to deep learning, computer vision and natural language processing. All of which I
            have applied either through work or in large solo- or group projects consisting of 6-7
            people.
          </h3>
        </div>
        <div className="column">
          <div className="image-holder">
            <br style={{ clear: "left" }} />
            <img
              src="/images/me.jpg"
              alt=""
              style={{ width: "100%", borderRadius: "0%" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
  
export default About;