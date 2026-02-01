import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Recognition from "@/components/Recognition";
import About from "@/components/About";
import Problem from "@/components/Problem";
import Mission from "@/components/Mission";
import Services from "@/components/Services";
import Map from "@/components/Map";
import CurrentWork from "@/components/CurrentWork";
import Team from "@/components/Team";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <Recognition />
      <About />
      <Problem />
      <Mission />
      <Services />
      <Map />
      <CurrentWork />
      <Team />
      <Newsletter />
      <Footer />
    </main>
  );
}
