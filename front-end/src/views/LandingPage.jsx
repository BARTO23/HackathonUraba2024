import { HeroSection } from "../components/ClientComponents/HeroSection";
import { NavBar } from "../components/ClientComponents/NavBar";
import { Solicitudes } from "../components/ClientComponents/Solicitudes";

export const LandingPage = () => {
  return (
    <div>
      <NavBar />
      <HeroSection />
      <Solicitudes />
    </div>
  );
};
