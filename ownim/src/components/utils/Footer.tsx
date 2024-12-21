"use client"
import React from "react";
import "../../styles/Footer.css"; // Add a CSS file for styles
import { FooterContent } from "./ScreensContent"; // Your content file
import { FaRegEnvelope } from "react-icons/fa6";
import { IoCallOutline } from "react-icons/io5";
import { PiBuildingOfficeThin } from "react-icons/pi";
import { AiOutlineFacebook } from "react-icons/ai";
import { FaInstagram } from "react-icons/fa";
import { FaSquareTwitter } from "react-icons/fa6";
import { CiLinkedin } from "react-icons/ci";
import useWindowSize from '../utils/WindowSize'
import Image from "next/image";
import footerImage from '../../../public/footer.png'
import Link from "next/link";
import { useRouter } from "next/navigation";


export default function Footer() {
    const ColSize = (useWindowSize().width/5)-130;
    const router = useRouter();

    return (
        <div className="footer">
                
            <div className="img"  style={{justifySelf:'center', alignSelf:'center', marginTop:0}}>
                <Image src={footerImage} alt="Footer Logo" style={{height:50,width:100}} />
            </div>
             
            <div  className="footerBody" >

            <div className="services" >
                <div  className="heading">{FooterContent.servicesTxt}</div>
                <p className="detailed-text" > <Link href={"/services/gravure"}>{FooterContent.gravureLink}</Link></p>
                <p className="detailed-text" > <Link href={"/services/flexo"}>{FooterContent.flexoLink}</Link> </p>
                <p className="detailed-text"><Link href={"/services/offset"}>{FooterContent.offsetLink}</Link> </p>
                <p className="detailed-text" ><Link href={"/services/logistics"}>{FooterContent.logisticsLink}</Link></p>
                <p className="detailed-text" ><Link href={"/services/software"}>{FooterContent.sofwareLink}</Link></p>
            </div>

            <div className="services"  style={{marginLeft:ColSize}} >
                <div  className="heading">{FooterContent.productText}</div>
                <p className="detailed-text"><Link href={"/services/leather"}>{FooterContent.leatherLink}</Link></p>
                <p className="detailed-text" ><Link href={"/services/stainless"}>{FooterContent.stainlessteelLink}</Link></p>
                <p className="detailed-text" ><Link href={"/services/jenitorials"}>{FooterContent.janitorialsLink}</Link></p>
            </div> 
            <div className="services" style={{marginLeft:ColSize}}>
                <div className="heading">{FooterContent.quickLinksTxt}</div>
                <p className="detailed-text"><Link href={"/"}>{FooterContent.homeLink}</Link></p>
                <p className="detailed-text" ><Link href={"/about"}>{FooterContent.aboutLink}</Link></p>
                <p className="detailed-text" ><Link href={"/contact"}>{FooterContent.contactLink}</Link></p>
            </div>

            <div className="services" style={{marginLeft:ColSize,marginRight:5}}>
                <div className="heading">Contact Us</div>
                <div className="contact-info">
                    <FaRegEnvelope  size={18} color="white"  className="icon" />
                    <p className="text">{FooterContent.email}</p>
                </div>
    
                <div className="contact-info">
                    <IoCallOutline size={18} color="white" className="icon" />
                    <p className="text">{FooterContent.number}</p>
                </div>
                <div className="contact-info">
                    <PiBuildingOfficeThin size={18} color="white"  className="icon" />
                    <p className="text">{FooterContent.site}</p>
                </div>
                </div>

            </div>

            <div  style={{display:'flex', flexDirection:'row', justifyContent:'center'}}>
                <div className="heading">{FooterContent.followUsTxt}</div>
                <div className="follow-us">
                    <AiOutlineFacebook size={18} color="white" onClick={()=>router.push(`https://www.facebook.com/profile.php?id=100066951983156`)} />
                    <FaInstagram size={18} color="white"  />
                    <FaSquareTwitter size={18} color="white" />
                    <CiLinkedin size={18} color="white" onClick={()=>router.push("http://www.linkedin.com/in/ownim-corporation-612b4631a")}  /> 
                </div>
            </div>
        </div>
    );
}
