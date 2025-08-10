"use client";

import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Preturi from "./Components/Preturi";
import Info from "./Components/Info";
import Galerie from "./Components/Galerie";
import Footer from "./Components/Footer";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Preturi />
      <Info />
      <Galerie />
      <Footer />
    </div>
  );
}
