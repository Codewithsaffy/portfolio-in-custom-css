"use client";
import React from "react";
import { Spotlight } from "../ui/Spotlight";
import { TextGenerateEffect } from "../ui/text-generate-effect";
import { Button } from "../ui/moving-border";
import { FaArrowRight } from "react-icons/fa6";
import Link from "next/link";
import { motion } from "framer-motion";
import "@/styles/Hero.css";  // Import custom CSS

const Hero = () => {
  return (
    <section id="home" className="hero-section">
      <Spotlight fill="#CBACF9" className="spotlight-one" />
      <Spotlight fill="blue" className="spotlight-two" />
      <Spotlight fill="blue" className="spotlight-three" />
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeInOut" }}
      ></motion.div>

      <motion.div
        className="hero-content"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.h1
          className="hero-subtitle"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
        >
          DYNAME WEB MAGIC WITH NEXT.JS
        </motion.h1>

        <TextGenerateEffect
          className="hero-title"
          words="Transforming Ideas into Exceptional, Seamless User Experiences"
        />

        <motion.p
          className="hero-description"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.8, duration: 0.7, ease: "easeOut" }}
        >
          Hi! I’m Yousuf, a Next.js Developer based in Pakistan.
        </motion.p>
      </motion.div>

      <Link href={"#projects"}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8, ease: "easeOut" }}
        >
          <Button>
            See my work
            <span>
              <FaArrowRight className="arrow-icon" />
            </span>
          </Button>
        </motion.div>
      </Link>
    </section>
  );
};

export default Hero;
