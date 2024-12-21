"use client"
import Link from "next/link";
import { MdHome, MdMiscellaneousServices, MdOutlineContactPhone } from "react-icons/md";
import { AiFillProfile } from "react-icons/ai";
import { usePathname } from "next/navigation";
import ActionBarImage from "./ActionbarImage";
import FadeMenu from '../utils/PopUpMenu'

const Navbar = () => {
  const currentPath = usePathname();
  return (
    <>
      <div className="w-full h-20  sticky top-0" style={{backgroundColor:'white'}} >
        <div className="px-4 h-full w-full" >
          <nav className="flex justify-between items-center h-full w-full">
            <ul className="hidden md:flex gap-x-6 text-black w-full"  style={{marginLeft:0, marginRight:0, alignContent:'left'}} >
              <li style={{width:60}} >
                <Link href="/">
                <MdHome color={currentPath== "/" ? "#e91e63":"black"} size={24} style={{marginLeft:5}} />
                  <p style={{color:currentPath == "/" ? "#e91e63":"black"}} >Home</p>
                </Link>
              </li>
              <li style={{width:80}} >
                <Link href="#">
                <MdMiscellaneousServices  color={currentPath.includes("/services") ? "#e91e63":"black"} size={24} style={{marginLeft:11}} />
                  <FadeMenu>
                  <p style={{color:currentPath.includes("/services") ? "#e91e63":"black"}} >Services</p>
                  </FadeMenu>
                </Link>
              </li>
              <li style={{width:80}} >
                <Link href="/about">
                <AiFillProfile color={currentPath == "/about" ? "#e91e63":"black"} size={24} style={{marginLeft:10}} />
                  <p style={{color:currentPath == "/about" ? "#e91e63":"black"}}>About Us</p>
                </Link>
              </li>
              <li style={{width:100}} >
                <Link href="/contact" >
                <MdOutlineContactPhone color={currentPath == "/contact" ? "#e91e63":"black"} size={24} style={{marginLeft:25}} />
                  <p style={{color:currentPath == "/contact" ? "#e91e63":"black"}} >Contacts Us</p>
                </Link>
              </li>
            </ul>
            <ActionBarImage/>
          </nav>
      
        </div>
      </div>
    </>
  );
};

export default Navbar;