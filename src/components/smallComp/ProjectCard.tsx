"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaCode } from "react-icons/fa6";
import { IoIosArrowRoundForward } from "react-icons/io";
import { ProjectType } from "../../../types";
import "@/styles/Project.css"

const ProjectCard = ({
  data,
  className,
}: {
  data: ProjectType;
  className?: string;
}) => {
  return (
    <div className={`project-card ${className}`}>
      <div className="project-image-container">
        <Image
          className="project-image"
          src={data.image}
          alt={data.name}
          width={250}
          height={180}
        />
      </div>

      <div className="project-details">
        <h2 className="project-title">{data.name}</h2>
        <p className="project-description">{data.description}</p>

        <div className="project-footer">
          <div className="project-icons">
            {data.icons.map((icon, i) => (
              <div key={i} className="project-icon">
                <Image src={icon} alt="icon" width={18} height={18} />
              </div>
            ))}
          </div>

          <div className="project-links">
            <div className="project-link project-github">
              <Link href={data.gitHub} className="hover:cursor-pointer">
                <FaCode className="project-github-icon" />
              </Link>
            </div>

            <div className="project-link">
              <Link
                href={data.link}
                className="hover:cursor-pointer project-view"
              >
                <p>view</p>
                <IoIosArrowRoundForward className="project-arrow" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
