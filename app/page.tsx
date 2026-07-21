import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Speakers from "@/components/speakers";
import WhyAttend from "@/components/WhyAttend";
import Register from "@/components/Register";
import Legacy from "@/components/Legacy";

import AboutJanani from "@/components/AboutJanani";
import ChairmanMessage from "@/components/ChairmanMessage";
import FoundationMessage from "@/components/FoundationMessage";
import TeamIntro from "@/components/TeamIntro";
import FlipbookWrapper from "@/components/FlipbookWrapper";

export default function Home() {
  return (
    <main>
      <header>
        <Navbar />
      </header>
      <Hero />
      <ChairmanMessage />
      <AboutJanani />
      <FlipbookWrapper file="/images/E-brouchure.pdf"/> 
      <FoundationMessage />
      <Legacy/>
      <Speakers/>
      <WhyAttend/>
      <TeamIntro/>
      <Register/>
        
    
    </main>

  );
}