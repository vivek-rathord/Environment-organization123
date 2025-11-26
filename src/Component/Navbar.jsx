import { Link } from "react-router-dom"; 
 import Logo from './images/logo.png.webp';
function Navbar() { 
  return ( 
    <nav className="navbar"> 
      <div className="logo">
        <img src={Logo} alt="logo" />
      
        </div> 
      <ul className="nav-links"> 
        <li><Link to="/">Home</Link></li> 
        <li><Link to="/about">About</Link></li> 
        <li><Link to="/whatwedo">What we do</Link></li> 
        <li><Link to="/projects">Projects</Link></li> 
        {/* <li><Link to="/blog">Blog</Link></li>  */}
        <li><Link to="/contact">Contact</Link></li> 


      </ul> 
      <div className="Nav-btns">
<Link to="/Contact">  <button className="header-btn">Make a donation</button> </Link>
      </div>
    </nav> 
  ); 
} 
 
export default Navbar; 