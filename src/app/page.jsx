"use client";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import Stats from "@/components/Stats";
import About from "@/components/About";
import Studyprogram from "@/components/Studyprogram";
import Testimony from "@/components/Testimony";
import Activity from "@/components/Activity";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Navigation />
      <Hero />
      <Stats />
      <About />
      <Studyprogram />
      <Activity />
      <Testimony />
      <Footer />
    </main>
  );
}
