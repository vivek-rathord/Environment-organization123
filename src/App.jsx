import { Routes, Route } from "react-router-dom"; 
import Navbar from "./Component/Navbar"; 
import Footer from "./Component/Footer"; 
import Home from "./Pages/Home"; 
import About from "./Pages/About"; 
import Whatwedo from "./Pages/Whatwedo"; 
import Projects from "./Pages/Projects"; 
import Blog from "./Pages/Blog"; 
import Contact from "./Pages/Contact"; 
 
function App() { 
  return ( 
    <div className="app"> 
      <Navbar /> 
      <main className="main-content"> 
        <Routes> 
          <Route path="/" element={<Home />} /> 
          <Route path="/about" element={<About />} /> 
          <Route path="/whatwedo" element={<Whatwedo />} /> 
          <Route path="/projects" element={<Projects />} /> 
          {/* <Route path="/blog" element={<Blog />} />  */}
          <Route path="/Contact" element={<Contact />} /> 
        </Routes> 
      </main> 
      <Footer /> 
    </div> 
  ); 
} 
 
export default App;