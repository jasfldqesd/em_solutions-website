import React from "react";
import heroBackground from "../assets/images/background-hero.jpg";



const Hero = () => {
  return (
    <div
      className="relative h-[80vh] bg-cover bg-center bg-no-repeat flex items-center justify-center text-white"
      style={{
        backgroundImage: `url(${heroBackground})`,
      }}
    >
      {/* rest of your section */}
    </div>
  );
};

export default Hero;
