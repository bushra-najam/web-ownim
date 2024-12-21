import React from 'react'
import '../../styles/AboutScreen.css'; // Add a CSS file for styling
import Footer from '../../components/utils/Footer'
import { AboutUs } from '../../components/utils/ScreensContent';
import Image from 'next/image';
import aboutus from '../../../public/aboutus.png'



export default function about() {
  
    return (
        <>
      <div className="container"  >
          <div className="header">
              <h1 className="header-text1">INITIAL BRIEF</h1>
              <h2 className="header-text2">ABOUT OUR COMPANY</h2>
          </div>
          <hr className="line" />
          
          <section>
              <h3 className="about-heading">{AboutUs.aboutUsHeading}</h3>
              <p className="about-text">{AboutUs.aboutUsText}</p>
          </section>
          
          <section>
              <h3 className="heading">{AboutUs.ourVissionHeading}</h3>
              <p className="text">{AboutUs.ourVissionText}</p>
          </section>
          
          <section>
              <h3 className="heading">{AboutUs.ourMissionHeading}</h3>
              <p className="text">{AboutUs.ourMissionText}</p>
          </section>
          
          <Image
              src={aboutus} 
              alt="About Us"
              className="img"
              width={200}
              height={200}
          />
          
      </div>
      <Footer />
      </>
  )
}


