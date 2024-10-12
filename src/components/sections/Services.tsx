import React from "react";
import ServiceCard from "../smallComp/ServiceCard";
import services from "@/data/services";
import "@/styles/ServiceSection.css"

const Services = () => {
  return (
    <section id="services" className="services-section">
      <h2 className="services-heading">
        My <span className="highlight-text">Services</span>
      </h2>
      <div className="services-grid">
        {services.map((ser, idx) => {
          return <ServiceCard key={idx} service={ser} />;
        })}
      </div>
    </section>
  );
};

export default Services;
