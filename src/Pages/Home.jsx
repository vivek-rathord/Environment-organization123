import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Styles/Style.css";
import slide1 from "../Component/images/panda1.jpg";
import slide2 from "../Component/images/panda2.jpg";
import slide3 from "../Component/images/panda3.jpg";
import project from "../Component/images/project-img1.jpg";
import Clenwater from "../Component/images/cleanwater.webp";
import Renewable from "../Component/images/renewable-energy.webp";
import Protectedanimals from "../Component/images/services3.png.webp";
import whytojoin from "../Component/images/safe_in.png.webp";
import change from "../Component/images/Change2.jpg";


function Home() {
  const slides = [slide3, slide2, slide1];
  const [index, setIndex] = useState(0);


  return (
    <div className="main">
      <div className="hero" style={{ backgroundImage: `url(${slides[index]})` }}>
        <div className="content">
          <h1>Environment</h1>
          <p>Provide us a green and healthy life we need to protect</p>
          <Link to="/contact" className="join-btn">Join us now</Link>
        </div>

        {/* slides controler */}
        <div className="dots">
          {slides.map((_, i) => (
            <span
              key={i}
              className={`dot ${i === index ? "active" : ""}`}
              onClick={() => setIndex(i)}
            ></span>
          ))}
        </div>


      </div>

      {/*our main goals  */}
      <div className="main-goals">
        <div className="target-img">
          <img src={project} alt="animals" />
        </div>
        <div className="target-intro">
          <h3><span>|About</span> NEHA</h3>
          <p>In the year 2000, an extraordinary vision was born, and it took root in the enchanting landscapes of Himachal Pradesh. Founded by the visionary <strong>Man Singh Kapoor</strong>, the Natural Environmental & Health Association, affectionately known as <strong>NEHA</strong>, has evolved into a beacon of hope and positive change. NEHA, headquartered in Himachal Pradesh, has demonstrated unwavering commitment and steadfast dedication to fostering the well-being of local communities, the environment they inhabit, and the livelihoods that sustain them.</p>
          <Link to="/" className="read-more">Read More...</Link>

        </div>
      </div>

      {/* ---joun our event---- */}
      <div className="event-container">
        <h2>JOIN <span>OUR EVENT </span>& HELPING US BY DONATION</h2>
        <p>Together, we can create positive change and leave a lasting legacy of compassion and support.</p>
        <Link to="/contact" className="join-btn">Donate Fund</Link>
      </div>


      {/* our exoertise */}

      {/* ---------SUPPORT AREA----------- */}
      <div className="Support-wrapper">

        <div className="support-intro">
          <h3><span>|OUR </span>EXPERTISE</h3>
          <p><strong>Neha specializes in sustainable development like</strong></p>
          <h2>Environmental Conservation and Management</h2>
          <p>Neha actively promotes sustainable practices for preserving natural resources, including watershed management, afforestation, and pollution reduction efforts.</p>

          <h2>Community Empowerment</h2>
          <p>Neha empowers marginalized communities, particularly rural women, through capacity building, vocational training, and resource access, enabling them to contribute to community development.</p>

          <h2>Livelihood Enhancement</h2>
          <p>Neha creates livelihood opportunities for vulnerable groups through skill development, entrepreneurship support, and promotion of sustainable practices like eco-tourism and organic farming.</p>

          <h2>Animal Welfare</h2>
          <p>Neha is dedicated to the protection and welfare of equine in the Himalayan habitat, improving their living conditions and advocating for responsible ownership practices.</p>

          <h2>Disaster Management</h2>
          <p>
            Neha conducts risk assessments, training, and coordination for disaster preparedness and response, minimizing the impact of natural disasters.</p>
          <Link to="/Contact" className="join-btn">Join us now</Link>

        </div>
        <div className="support-img">
          <img src={whytojoin} alt="animals" />
        </div>
      </div>

      {/* power to change */}
      <div className="main-goals">
        <div className="target-img">
          <img src={change} alt="animals" />
        </div>
        <div className="target-intro">
          <h3><span>| We Have Power Today</span> <br />To Change Tomorrow! </h3>
          <p>As we delve deeper into the invaluable work of NEHA, it becomes evident that their journey is one of profound impact and transformation, touching lives and sustaining livelihoods. NEHA has proven that even in the most challenging and remote corners of our world, dedicated individuals can catalyze change and breathe life into the ideals of sustainability, health, empowerment, and livelihood security.</p>
            <p>Join us on this extraordinary journey through the Himalayan region, as we explore the remarkable contributions of NEHA to the well-being and future of these communities and beyond. Their tireless commitment to a better, more sustainable world, where livelihoods flourish, continues to inspire us all.</p>
        

        </div>
      </div>
      {/*service area  */}
      <div className="service-area">
        <div className="container">
          {/* Box 1 */}
          <div className="service-1 white-bg">
            <div className="img-box">
              <img src={Clenwater} alt="clean-water" />
              <h5>Clean Water</h5>
            </div>
          </div>

          {/* Box 2 */}
          <div className="service-1  green-bg">
            <div className="img-box">
              <img src={Renewable} alt="renewable-energy" />
              <h5>Renewable Energy</h5>
            </div>
          </div>

          {/* Box 3 */}
          <div className="service-1 white-bg">
            <div className="img-box">
              <img src={Protectedanimals} alt="protect-animals" />
              <h5>Protected Animals</h5>
            </div>
          </div>
        </div>
      </div>








    </div>

  );
}

export default Home;
