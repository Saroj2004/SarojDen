import React from 'react'
import Navbar from '../Components/Navbar.jsx'
import design from '../assets/design1.png'
// import creating from '../assets/creating.png'
import deploy from '../assets/deploy.png'
import contnious from '../assets/continuous.png'
// import next1 from '../assets/next1.png'
import prfl from '../assets/prfl2.jpg'
import LinkD from '../assets/linkedin1.png'
import git from '../assets/git.png'
import mail from '../assets/email.png'
import Footer from '../Components/Footer.jsx'
import { Link } from 'react-router-dom'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { useNavigate } from 'react-router-dom'


const Home = () => {

  const navigate = useNavigate();
   const handleExplore = () => {

    navigate("/Work");
  }
  
  // const onconnect=()=>{
  //   navigate('/Contact')
  // }

  useEffect(()=>{
    AOS.init({
      duration:2400,
      once:true
    })

  },[])
  return (
    <div>
     <Navbar/>
     <div  className="landingscreen">
      <div  data-aos="fade-down" className="namesec">
        <h1>Saroj Medipakala</h1>
        <h2>Full Stack Developer @MERN| JAVA | DESGINER</h2>
      </div>
     <div data-aos="fade-down" className="intro-cards">
  <div className="card">
    <img src= {design} alt="Developing" />
    <h4>Developing</h4>
  </div>
  <div className="card">
    <img  className="rotate-img" src={contnious}  alt="Creating Icon"  />
    <h4>Creating</h4>
  </div>
  <div className="card">
    <img src={deploy} alt="Deploying Icon" />
    <h4>Deploying</h4>
  </div>
</div>
<div data-aos="fade" className="explore-btn">
    {/* <button>Explore My Work</button> */}
    <button  onClick={handleExplore} className='Btn-explore'>Explore My Work  →</button>
</div>

  </div>


  <div data-aos="fade" className="summary-section">
  <div className="headr-container">
    <h1>Hey there! 👋</h1>
    <p>
      I am a passionate software engineer with experience building products that reach and
      impact millions of users. I specialize in developing scalable and efficient solutions,
      and I enjoy working on projects that solve real-world problems.
      <br /><br />
      I love sharing stories, building communities, and helping others navigate their own
      0–1 moments. Whether through code, conversations, or content, I am always looking
      for ways to make an impact. I am actively seeking opportunities to contribute my
      skills, collaborate on meaningful projects, and grow as part of a dynamic team.
    </p>
    <br/>
   
   <Link to='/Contact'>
    <button className="head-container-btn"> Let's Connect →</button>
    </Link>
  
   
  
   
   
  </div>

  <div className="profile-card">
    <h2>Saroj Medipakala</h2>
    <p>Full Stack Developer</p>
    <img src={prfl} alt="profile" />
  </div>
</div>

<Footer/>
    
    </div>
  )
}

export default Home
