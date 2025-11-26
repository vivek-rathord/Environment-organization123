import React from 'react';
import { Link } from 'react-router-dom';

import memberone from "../Component/images/member-1.jpg";
import membertwo from "../Component/images/member-2.jpg";
import memberthree from "../Component/images/member-3.jpg";




function About() {
  return (
    <div className='about-wrapper'>

      {/* hero section */}
      <div className="about-hero">
        <div className="hero-intro">
          <h1>About us</h1>
          <div className="hero-links">
            <Link to="/" className="h-links">Home</Link>
            <Link to="/About" className="h-links">About</Link>
          </div>
        </div>
      </div>

      {/* ----------------------our journerty------------------- */}
      <div className="journey-section">
        <div className="journey-header">
          <h2>|our <span>Journey </span>
          </h2>
          <p className="intro">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. In, odit.
          </p>
          <p className="description">
            NEHA's journey unfolds against the backdrop of Himachal's pristine
            beauty, where the need for sustainable development and holistic
            well-being is paramount. This organization has seamlessly aligned
            itself with multiple government projects, catalyzing transformation
            and elevating the lives of countless individuals in the process.
          </p>
          <div className="underline"></div>
        </div>

        <div className="journey-content">
          <div className="journey-column">
            <h3>OUR PRINCIPLES</h3>
            <ul>
              <li>Active Participation of women at all stages in all development interventions.</li>
              <li>Empowerment of community members by building strong people’s institutions.</li>
              <li>Complete accountability to the community members.</li>
            </ul>
          </div>

          <div className="journey-column">
            <h3>TARGET GROUPS</h3>
            <ul>
              <li>Women, Craftspersons especially from Scheduled Castes, Scheduled Tribes, Below Poverty Line.</li>
              <li>Village-based economic groups like SHGs, Cooperatives, Small industries.</li>
              <li>Civil Society especially the Women Groups, Panchayat Raj Institutions, Development Organizations.</li>
            </ul>
          </div>

          <div className="journey-column">
            <h3>OUR ACTIVITIES</h3>
            <ul>
              <li>Capacity Building – skills, knowledge, and attitude.</li>
              <li>Information Dissemination.</li>
              <li>Research and Studies undertaking.</li>
              <li>Networking and Mobilization.</li>
            </ul>
          </div>

          <div className="journey-column">
            <h3>OUR STRATEGIES</h3>
            <ul>
              <li>Empowering target groups economically for sustainable mountain livelihood.</li>
              <li>Strengthening their leadership and participation in economic policies.</li>
              <li>Developing models for replication across various mountain regions.</li>
            </ul>
          </div>
        </div>
      </div>

      {/* ----------------------------our voulntree------------------- */}
      <div className="volunteers-section">
        <div className="heading">
          <h2>|our <span>Volunteers</span> </h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, enim?</p>
        </div>

{/* voluntree card */}
<div className="voluntree-container">
<div className="voluntre-card">
  <div className="image-box">
  <img src={memberone} alt="memberone" />
  </div>
  <h5>Man Singh Kapoor</h5>
  <p>Founder / Director</p>
  <p><small>Lorem, ipsum dolor.</small></p>
</div>

{/* 2 */}
<div className="voluntre-card">
  <div className="image-box">
  <img src={membertwo} alt="memberone" />
  </div>
  <h5>Ashwani</h5>
  <p>President</p>
  <p><small>Lorem, ipsum dolor.</small></p>
</div>

{/* 3 */}
<div className="voluntre-card">
  <div className="image-box">
  <img src={memberthree} alt="memberone" />
  </div>
  <h5>Nitin Kapoor</h5>
  <p>Vice President</p>
  <p><small>Lorem, ipsum dolor.</small></p>
</div>

{/* 4 */}
<div className="voluntre-card">
  <div className="image-box">
  <img src={memberone} alt="memberone" />
  </div>
  <h5>Raj Kumar</h5>
  <p>Social Activist</p>
  <p><small>Lorem, ipsum dolor.</small></p>
</div>

{/* {/*5 */}
<div className="voluntre-card">
  <div className="image-box">
  <img src={memberone} alt="memberone" />
  </div>
  <h5>Name</h5>
  <p>Designation</p>
  <p><small>Lorem, ipsum dolor.</small></p>
</div>

{/* 6 */}
<div className="voluntre-card">
  <div className="image-box">
  <img src={membertwo} alt="memberone" />
  </div>
  <h5>Name</h5>
  <p>Designation</p>
  <p><small>Lorem, ipsum dolor.</small></p>
</div>

{/* 7 */}
<div className="voluntre-card">
  <div className="image-box">
  <img src={memberthree} alt="memberone" />
  </div>
  <h5>Name</h5>
  <p>Designation</p>
  <p><small>Lorem, ipsum dolor.</small></p>
</div>

{/* 8 */}
<div className="voluntre-card">
  <div className="image-box">
  <img src={memberone} alt="memberone" />
  </div>
  <h5>Name</h5>
  <p>Designation</p>
  <p><small>Lorem, ipsum dolor.</small></p>
</div>


</div>
      </div>
    </div>
  )
}

export default About