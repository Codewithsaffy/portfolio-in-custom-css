import Projects from "@/components/sections/Projects";
import About from "../components/sections/About";
import Hero from "../components/sections/Hero";
import Testinominal from "@/components/sections/Testinominal";
import Services from "@/components/sections/Services";
import ContactUs from "@/components/sections/ContactUs";

export default function Home() {
  return (
    <main className="dark:bg-dark-Background w-full overflow-hidden  dark:text-dark-Text text-light-Text   bg-white  dark:bg-grid-white/[0.08] bg-grid-dark-Background/[0.2] relative">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-dark-Background bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_-100%,black)]"></div>
    <Hero/>
    <About/>
    <Projects/>
    <Testinominal/>
    <Services/>
    <ContactUs/>
    </main>
  );
}
