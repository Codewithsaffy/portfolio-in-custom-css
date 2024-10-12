"use client";
import React from "react";
import { ServicType } from "../../../types";
import Image from "next/image";
import "@/styles/ServiceCard.css"

const ServiceCard = ({ service }: { service: ServicType }) => {
  return (
    <div className="service-card group">
      <div className="service-card-image-wrapper">
        <Image
          src={service.icon}
          alt={service.heading}
          width={100}
          height={100}
        />
      </div>

      <div className="service-card-content">
        <h3 className="service-card-heading">
          {service.heading}
        </h3>
        <p className="service-card-description">
          {service.description}
        </p>
      </div>
    </div>
  );
};

export default ServiceCard;
