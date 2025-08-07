"use client";

import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Preturi from "./Components/Preturi";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Preturi />
    </div>
  );
}
