// import Animationcontrol from '@/components/Animationcontrol'
// import BasicsOfMotion from '@/components/BasicsOfMotion'
// import Gestures from '@/components/Gestures'
// import View from '@/components/View'
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import { signal } from "@preact/signals-react";
import Technolgies from "@/components/Technolgies";
export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Technolgies />
    </>
  );
}
