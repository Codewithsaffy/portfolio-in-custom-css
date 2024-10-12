"use client";
import Image from "next/image";
import React, { useState } from "react";
import Button from "../ui/Button";
import { BackgroundGradientAnimation } from "../ui/background-gradient-animation";
import { FaCopy, FaCheck } from "react-icons/fa6";
import "@/styles/About.css"; 

const About = () => {
  const [isCopied, setIsCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText("codewithsaffy@gmail.com");
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 2000);
  };

  return (
    <section id="about" className="about-section z-10">
      <div className="about-grid">
        <div className="about-item about-large">
          <h2 className="about-heading">
            About <span className="about-us-highlight">Us</span>
          </h2>
          <p className="about-text about-text-lg">
            I am Muhammad Yousuf, a passionate and motivated Next.js developer with a growing
            expertise in building dynamic and responsive web applications. As a beginner, I bring
            fresh ideas and a strong foundation in Next.js, React, and Tailwind CSS, with a keen
            focus on delivering user-friendly, performance-optimized solutions. I am constantly
            improving my skills, staying up-to-date with the latest web technologies, and eager to
            collaborate on exciting projects. If you’re looking for a developer who is driven, quick
            to learn, and committed to creating impactful digital experiences, I’d love to work with
            you!
          </p>
        </div>

        <div className="about-small flex flex-col gap-8 z-10">
          <div className="about-card z-10">
            <h2 className="about-card-heading z-10">I am very flexible with time zone communications</h2>
            <Image
              className="about-image z-10"
              alt="world"
              src={"/about-effects/world.png"}
              width={400}
              height={150}
            />
          </div>

          <div className="about-card z-10 flex flex-col md:flex-row">
            <div className="w-full text-center">
              <p className="about-card-text">Always aiming to improve</p>
              <h2 className="about-card-heading">My Tech Stack</h2>
            </div>
            <div className="about-buttons-container flex gap-2 flex-col md:flex-row">
              <div className="flex flex-row sm:flex-col gap-4">
                <Button text="Next.js" />
                <Button text="React.js" />
                <Button text="TypeScript" />
              </div>
              <div className="flex flex-row sm:flex-col gap-4">
                <Button text="Tailwind CSS" />
                <Button text="MongoDB" />
                <Button text="Shadcn UI" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="about-grid z-10">
        <div className="about-small-card flex flex-col gap-8 z-10">
          <div className="about-card">
            <h2 className="about-card-heading">
              Driven Next.js Developer crafting impactful web solutions
            </h2>
            <Image
              className="about-image"
              alt="developer"
              src={"/about-effects/aboutsec.png"}
              width={200}
              height={150}
            />
          </div>

          <div>
            <BackgroundGradientAnimation className="flex flex-col items-center justify-center h-48 p-8 rounded-2xl shadow-lg transition-all duration-500 hover:scale-105">
              <h2 className="about-heading-large">
                Want to start a project together?
              </h2>
              <div className="about-email-container" onClick={copyEmail}>
                <p className="about-us-highlight">Copy my email address</p>
                {isCopied ? <FaCheck className="text-green-500" /> : <FaCopy />}
              </div>
            </BackgroundGradientAnimation>
          </div>
        </div>

        <div className="about-large-card flex flex-col justify-center overflow-hidden rounded-2xl bg-gradient-to-r from-[#0C0E23] to-[#1A1C31] shadow-lg relative transition-all duration-500 hover:scale-105 hover:bg-gradient-to-r hover:from-[#1A1C31] hover:to-[#0C0E23]">
          <div className="flex flex-col gap-1 p-8 w-full lg:w-1/2">
            <p className="about-us-highlight">The Inside Scoop</p>
            <h2 className="about-heading">Currently Learning Generative AI</h2>
          </div>
          <Image
            className="absolute top-0 right-0 bottom-0 opacity-30 sm:opacity-70"
            alt="code"
            src={"/about-effects/code.png"}
            width={500}
            height={400}
          />
        </div>
      </div>
    </section>
  );
};

export default About;
