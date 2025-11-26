import React, { useRef } from "react";
import { Link } from "react-router-dom";
import "./Styles/style.css";
import Childhealth from "../Component/images/child-health.jpg";
import Naturalwater from '../Component/images/Natural-Water-Resourses.jpg';
import sanitation from '../Component/images/total-sanitation.jpg';
import pottery from '../Component/images/Pottery.jpg';
import project5 from '../Component/images/SGH2.jpg';
import project6 from '../Component/images/watershed.jpg';
import project7 from '../Component/images/Animal2.jpg';
import project8 from '../Component/images/water-monitoring.jpg';
import project9 from '../Component/images/jal.jpeg';
function Projects() {
  return (
    <div className="contact-wrapper">
      {/* Hero Section  */}
      <div className="about-hero">
        <div className="hero-intro">
          <h1>Projects</h1>
          <div className="hero-links">
            <Link to="/" className="h-links">
              Home
            </Link>
            <Link to="/About" className="h-links">
              About
            </Link>
          </div>
        </div>
      </div>


      {/* -----------projects gallery---------------- */}
<div className="container">
  <div className="project-section">
    {/* Left Side (Text) */}
    <div className="text-content">
      <div className="heading-overlay">
        <h1 className="number">01</h1>
        <h1 className="title">Reproductive and Child Health Campaign</h1>
      </div>

      <p>
        The "Reproductive and Child Health Campaign" is a caring project by NEHA to keep moms and kids healthy. 
        Our goal is to help families do well by giving them the support and tools they need. 
        For pregnant moms, we're here to help with doctor visits, advice, and a community that understands 
        the journey of pregnancy. And for the little ones, we want to make sure they have a great start in life.
      </p>

      <h5>Project Goals</h5>
      <ul>
        <li>Reduce maternal and child mortality rates through targeted interventions.</li>
        <li>Raise awareness about reproductive health, family planning, and child care.</li>
        <li>Establish a supportive community network for expecting mothers.</li>
        <li>Build a strong foundation for children by promoting vaccinations.</li>
      </ul>
    </div>

    {/* Right Side (Image) */}
    <div className="image">
      <img src={Childhealth} alt="Childhealth" />
    </div>
  </div>
</div>

{/* ------------project 2----------------- */}
<div className="container row-reverse ">



  <div className="project-section">
    {/* right Side (Text) */}
    <div className="text-content">
      <div className="heading-overlay">
        <h1 className="number">02</h1>
        <h1 className="title">Empowering Communities and Preserving Natural Resources</h1>
      </div>

      <p>
        NEHA (Natural Environmental & Health Association) has been at the forefront of transformative initiatives, and one of its most notable involvements is its partnership with the Indian government and the Himachal Pradesh IPH (Irrigation and Public Health) Department as an Implementing Support Agency (ISA) in the Jal Jeevan Mission. This mission's primary focus is to raise awareness about responsible water use, water conservation, and the preservation of natural water resources in the Chamba and Kangra districts of Himachal Pradesh, with the ultimate goal of ensuring access to tap water in every household.
      </p>

      <h5>Project Goals</h5>
      <ul>
        <li>Empowering Communities with Knowledge</li>
        <li>Building a Connection with Natural Resources</li>
        <li>Diverse Engagement Activities</li>
        <li>Collaborative Efforts</li>
        <li>Monitoring and Evaluation</li>
        <li>Safeguarding Himachal's Natural Wealth</li>
        <li>A Vision for a Sustainable Futures</li>
      </ul>
    </div>

      {/* left Side (Image) */}
    <div className="image">
      <img src={Naturalwater} alt="Naturalwater" />
    </div>
  </div>
</div>

{/* ------------project 3----------------- */}
<div className="container">
  <div className="project-section">
    {/* Left Side (Text) */}
    <div className="text-content">
      <div className="heading-overlay">
        <h1 className="number">03</h1>
        <h1 className="title">Total Sanitation Campaign</h1>
      </div>

      <p>In the vicious cycle of poverty as well as underdevelopment, lack of proper sanitation facilities is an important factor. The lack of sanitation facilities leads to diseases, incapacity, lesser productivity, higher spending on medicines and treatment and then lesser incomes, no or less saving, unwanted debts, and adversely affects overall human development. Eighty percent of diseases affecting mankind are waterborne. Yet the majority of people in rural areas continue the age-old practice of indiscriminate open defecation, which possess a serious threat to the sources of drinking water in the community.</p>

      <h5>Project Goals</h5>
      <ul>
        <li>To generate collective action at the community level with regard to water and sanitation.</li>
        <li>To promote low-cost, location-specific appropriate technologies of household toilets.</li>
        <li>To bring behavioral change amongst the community on various aspects of water and sanitation.</li>
       </ul>
    </div>

    {/* Right Side (Image) */}
    <div className="image">
      <img src={sanitation} alt="sanitation" />
    </div>
  </div>
</div>

{/* ------------project 4----------------- */}
<div className="container row-reverse">

   

  <div className="project-section">
    {/* right Side (Text) */}
    <div className="text-content">
      <div className="heading-overlay">
        <h1 className="number">04</h1>
        <h1 className="title">Pottery Training Centre</h1>
      </div>

      <p>
       NEHA's Pottery Training Program is designed to revive traditional pottery craftsmanship, offering skill development and economic empowerment opportunities. We are successfully provided training to the traditional potters and youth in making Red Clay Glazed Terracotta Pottery. Established two units- one in Andretta and second in Bilaspur under the active support of CAPART, Ministry of Rural Development.
    </p>

      <h5>Project Goals</h5>
      <ul>
       <li>Enhance the pottery skills of traditional and youth potters, with the knowledge to create various pottery items independently</li>
       <li>Preserve and promote traditional pottery practices as part of the local cultural heritage</li>
       <li>Promote sustainable practices within pottery training, including the use of eco-friendly materials</li>
      </ul>
    </div>
{/* left Side (Image) */}
    <div className="image">
      <img src={pottery} alt="Naturalwater" />
    </div>
   
  </div>
</div>

{/* ------------project 5----------------- */}
<div className="container">
  <div className="project-section">
    {/* Left Side (Text) */}
    <div className="text-content">
      <div className="heading-overlay">
        <h1 className="number">05</h1>
        <h1 className="title">Livelihood Programme</h1>
      </div>

      <p>
       Over the past years, NEHA has benefitted more than 120 women directly through their Eco-Income Generation Programme in District Kangra & Chamba. The women made pickles, chutneys, candies, squashes and sold under the brand name NEHA.
      </p>

      <h5>Project Goals</h5>
      <ul>
      <li>Increase the number of women beneficiaries by expanding the Eco-Income Generation Programme to additional districts.</li>
      <li>Expand the range of products made by women participants to include new and innovative items.</li>
      <li>Strengthen the market presence of NEHA-branded products by implementing effective marketing strategies and improving brand recognition both locally and regionally.</li>
      <li>Focus on the economic empowerment of women by increasing their income through the Eco-Income Generation Programme.</li>
      </ul>
    </div>

    {/* Right Side (Image) */}
    <div className="image">
      <img src={project5} alt="project5" />
    </div>
  </div>
</div>

{/* ------------project 6----------------- */}
<div className="container row-reverse">

   

  <div className="project-section">
    {/* right Side (Text) */}
    <div className="text-content">
      <div className="heading-overlay">
        <h1 className="number">06</h1>
        <h1 className="title">Integrated Watershed Management Programme</h1>
      </div>

      <p>
      The "Integrated Watershed Management Programme" championed by NEHA is a comprehensive initiative dedicated to the sustainable development of water resources in the targeted regions such as Pangi and Una regions. With a focus on achieving holistic and integrated water management, the project aims to address key challenges related to water scarcity, soil erosion, and ecosystem degradation.
    </p>

      <h5>Project Goals</h5>
      <ul>
       <li>Increase the availability of water resources in the targeted regions through effective water management practices</li>
       <li>Implement practices to enhance the resilience of local watersheds.</li>
       <li>Increase community engagement in sustainable environmental practices.</li>
      </ul>
    </div>
{/* left Side (Image) */}
    <div className="image">
      <img src={project6} alt="Naturalwater" />
    </div>
   
  </div>
</div>

{/* ------------project 7----------------- */}
<div className="container">
  <div className="project-section">
    {/* Left Side (Text) */}
    <div className="text-content">
      <div className="heading-overlay">
        <h1 className="number">07</h1>
        <h1 className="title">Animal Welfare Program</h1>
      </div>

      <p> NEHA's Animal Welfare Program, in collaboration with ERA Society and Brook India, is focused on preventing cruelty to animals and promoting responsible care within communities.Our collaborative efforts extend beyond prevention, actively engaging communities in the ethical treatment of animals. NEHA, ERA Society, and Brook India work hand in hand to create a culture where animals are respected, protected, and loved.</p>

      <h5>Project Goals</h5>
      <ul>
        <li>Implement measures to prevent cruelty to animals</li>
        <li>Raise awareness about ethical treatment and responsible care for animals.</li>
      </ul>
    </div>

    {/* Right Side (Image) */}
    <div className="image">
      <img src={project7} alt="project-7" />
    </div>
  </div>
</div>

{/* ------------project 8----------------- */}
<div className="container row-reverse">

   

  <div className="project-section">
    {/* right Side (Text) */}
    <div className="text-content">
      <div className="heading-overlay">
        <h1 className="number">08</h1>
        <h1 className="title">Monitoring and Elevating NRDWDP</h1>
      </div>

      <p> NEHA's involvement in monitoring and elevating the National Rural Drinking Water Scheme in collaboration with WAPCOS is geared towards ensuring quality and accessibility of drinking water.Our project aims to meticulously monitor the implementation of NRDWDP , tracking progress, identifying challenges, and ensuring that water accessibility and quality meet the highest standards.</p>

      <h5>Project Goals</h5>
      <ul>
        <li>Monitor and ensure the quality of drinking water provided through the scheme.</li>
        <li>Increase accessibility to safe and clean drinking water for communities.</li>
        <li>Provide strategic recommendations for interventions that elevate the impact of NRDWDP, including technological advancements</li>
      </ul>
    </div>
{/* left Side (Image) */}
    <div className="image">
      <img src={project8} alt="Naturalwater" />
    </div>
   
  </div>
</div>

{/* ------------project 9----------------- */}
<div className="container">
  <div className="project-section">
    {/* Left Side (Text) */}
    <div className="text-content">
      <div className="heading-overlay">
        <h1 className="number">09</h1>
        <h1 className="title">JAL JEEVAN MISSION</h1>
      </div>

<p>The JAL JEEVAN MISSION is an impactful project initiated by NEHA with the vision of addressing critical water-related challenges and promoting sustainable access to clean and safe water. This mission underscores the NEHA'S commitment to ensuring the availability of potable water for rural communities, aligning with broader national objectives.

</p>
      <h5>Project Goals</h5>
      <ul>
        <li>To provide FHTC to every rural household</li>
        <li>To prioritize the provision of FHTCs in quality affected areas, villages in drought -prone areas.</li>
        <li>To provide functional tap connection to Schools, Anganwadi centres, GP buildings etc.</li>
        <li>To assist in ensuring the sustainability of water supply system, i.e. water source, water supply infrastructure, and funds for regular</li>
        <li>O&M/ NGOs/ VOs etc.</li>
      </ul>
    </div>

    {/* Right Side (Image) */}
    <div className="image">
      <img src={project9} alt="Childhealth" />
    </div>
  </div>
</div>

      {/* ----------event-donation-banner---------- */}
      <div className="event-donation">
        <div>
          <h2>Your <span>presence</span> and <span>donation</span> can change lives.</h2>
          <p> Join our event and help spread compassion far and wide.</p>
        </div>
        <div className="event-btn">
          <Link to="/Contact">
            <button>Donate Fund</button>
          </Link>
        </div>
      </div>


    </div>
  );
}

export default Projects;
