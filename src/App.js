import Features from "./components/features/Features";
import Banner from "./components/banner/Banner";
import Navbar from "./components/navbar/Navbar";
/* import Projects from "./components/projects/Projects"; */
import Resume from "./components/resume/Resume";
import Testimonial from "./components/testimonial/Testimonial";
import Contact from "./components/contact/Contact";
/* import Footer from "./components/footer/Footer"; */
import FooterBottom from "./components/footer/FooterBottom";
import { useState, useEffect } from "react";
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";

const override = {
  display: "flex",
  margin: "0 auto",
  borderColor: "#212428",
  width:"100%",
  height:"100vh"

};

export default function App() {

  const [loading, setLoading] = useState(false)
  useEffect(()=>{
    setLoading(true)
    setTimeout(()=>{
      setLoading(false)
    },6000)
  },[])

  return (
    
    <div className="w-full h-auto bg-bodyColor text-lightText">
      
      
          {
            

            loading ? 
            <ClimbingBoxLoader
            color={'#ff014f'}
            loading={loading}
            size={30}
            cssOverride={override}
           
          />
        :
        
        <>
        <Navbar />
        <div className="max-w-screen-xl mx-auto px-5 overflow-x-hidden">
          <Banner />
          <Features />
          {/* <Projects /> */}
          <Resume />
          <Testimonial />
          <Contact />
          {/* <Footer /> */}
          <FooterBottom />
          
        </div>
        </>
        
          }
    
        
     
    </div>
    
  );
}
