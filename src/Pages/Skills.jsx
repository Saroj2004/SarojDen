import React from 'react';
import '../Pages/Skills.css';
import Navbar from '../Components/Navbar.jsx';
import Footer from '../Components/Footer.jsx';
import { Globe, Server, Layout, Database, Wrench } from 'lucide-react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';


const Skills = () => {
  useEffect(()=>{
    Aos.init({
      duration:2000,
      once:true,
    })

  },[])
  return (
    <div className="skills-page">
      <Navbar />

      {/* Header Section */}
      <div className="Skillbody">
        <h1  data-aos="fade-down" >Skills & Technologies</h1>
        <p  data-aos="fade-down" >
          A comprehensive overview of the technologies, languages, and tools I work
          <br />
          with to build amazing software experiences.
        </p>
      </div>

      {/* Skills Cards Section */}
      <div   className="skillcardssec">

        {/* Frontend Development */}
        <div data-aos="fade-up" className="skillcard">
          <div className="card-header">
            <Globe className="card-icon" />
            <h2>Frontend Development</h2>
          </div>
          <div className="tags">
            <span>React</span>
            <span>JavaScript</span>
            <span>HTML5</span>
            <span>CSS3</span>
            <span>Bootstrap</span>
            <span>Material UI</span>
          </div>
        </div>

        {/* Backend Development */}
        <div data-aos="fade-up" className="skillcard">
          <div className="card-header">
            <Server className="card-icon" />
            <h2>Backend Development</h2>
          </div>
          <div className="tags">
            <span>Node.js</span>
            <span>Java</span>
            <span>Express.js</span>
            <span>Spring Boot</span>
            <span>REST APIs</span>
          </div>
        </div>

        {/* Tools & Platforms */}
        <div data-aos="fade-up" className="skillcard">
          <div className="card-header">
            <Wrench className="card-icon" size={40} />
            <h2>Tools & Platforms</h2>
          </div>
          <div className="tags">
            <span>VS Code</span>
            <span>GitHub</span>
            <span>Vercel</span>
            <span>Render</span>
            <span>Postman</span>
          </div>
        </div>

        {/* UI/UX Development */}
        <div data-aos="fade-right" className="skillcard">
          <div className="card-header">
            <Layout className="card-icon" />
            <h2>UI/UX Development</h2>
          </div>
          <div className="tags">
            <span>Prototyping</span>
            <span>Figma</span>
          </div>
        </div>

        {/* Databases */}
        <div data-aos="fade-left" className="skillcard">
          <div className="card-header">
            <Database className="card-icon" />
            <h2>Databases</h2>
          </div>
          <div className="tags">
            <span>SQL</span>
            <span>MongoDB</span>
          </div>
        </div>

        {/* Learning Card */}
        <div className="learningsec">
            <div data-aos="fade" className="learningcard">
          <h3>Always Learning</h3>
          <p>
            Technology evolves rapidly, and I'm committed to continuous learning. I regularly
            <br />
            explore new frameworks, tools, and best practices to stay current with industry trends
            <br />
            and deliver cutting-edge solutions.
          </p>
         
        </div>

        </div>
      


      </div>

      {/* Footer */}
    <Footer/>
    </div>
  );
};

export default Skills;
