import React from "react";
import { BackgroundGradientAnimation } from "./BackgroundAnimation";

export function BackgroundGradientAnimationDemo() {
  return (
    <BackgroundGradientAnimation>
      <div >
      <div className="absolute z-50 inset-0 flex  justify-center text-white font-bold px-4 pointer-events-none text-3xl text-center md:text-4xl lg:text-7xl" style={{paddingTop:340}} >
        <p className="bg-clip-text text-transparent drop-shadow-2xl bg-gradient-to-b from-white/80 to-white/20">
          WE OWN YOUR TRUST!
        </p>
        
      </div>
      <p style={{color:'black',fontSize:25, justifySelf:'center', width:'70%', paddingTop:460, fontWeight:'bold'}} >
            At Ownim Corporation, confidentiality is paramount. We protect the integrity of all
            information entrusted to us, spanning softwar technology, janitorial supplies, and
            luxurious leather goods.We pledge transparency, accountability, and
            swift action in the face of any breach. Trust Ownim for unwavering confidentiality in
            every transaction.
      </p>
      </div>
    </BackgroundGradientAnimation>
  );
}
