import React from "react";
import ReactDOM from "react-dom/client";
import Nav from "@/components/site/Nav";
import Hero from "@/components/site/Hero";
import About from "@/components/site/About";
import Doctor from "@/components/site/Doctor";
import RoboticSpinal from "@/components/site/RoboticSpinal";
import Services from "@/components/site/Services";
import Team from "@/components/site/Team";
import Appointment from "@/components/site/Appointment";
import Footer from "@/components/site/Footer";
import { Toaster } from "@/components/ui/sonner";
import "./styles.css";

function App() {
  return (
    <main className="relative">
      <Nav />
      <Hero />
      <About />
      <Doctor />
      <RoboticSpinal />
      <Services />
      <Team />
      <Appointment />
      <Footer />
      <Toaster theme="dark" position="top-center" />
    </main>
  );
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
