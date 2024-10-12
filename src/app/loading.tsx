"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const LoadingPage = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  // Simulate loading state
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 3000); // Loading time of 3 seconds
    return () => clearTimeout(timer);
  }, []);

  if (isLoaded) return null; // Return null once loading is complete

  return (
    <section
      id="loading"
      className="h-[100vh] w-full flex justify-center items-center bg-[#0a192f]"
    >
      <motion.div
        className="w-16 h-16 rounded-full border-t-4 border-r-4 border-b-transparent border-l-transparent border-[#CBACF9] animate-spin"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      />
    </section>
  );
};

export default LoadingPage;
