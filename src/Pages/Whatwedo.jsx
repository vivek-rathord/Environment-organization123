import React from 'react'
import { Link } from 'react-router-dom';
import Clenwater from "../Component/images/cleanwater.webp";
import Renewable from "../Component/images/renewable-energy.webp";
import Protectedanimals from "../Component/images/services3.png.webp";

function Whatwedo() {
  return (
<div className="mainwrapper">
    {/* hero section */}
        <div className="about-hero">
          <div className="hero-intro">
          <h1>What we do</h1>
          <div className="hero-links">
            <Link to="/" className="h-links">Home</Link>
            <Link to="/whatwedo" className="h-links">What we do</Link>
          </div>
        </div>
        </div>

         {/* -----------service area---------------- */}
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

  )
}

export default Whatwedo