import React from "react";
import { FloatingDock } from "@/components/ui/floating-dock";
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandInstagram,
  IconPhone,
} from "@tabler/icons-react";
import { FaAngleDoubleUp } from "react-icons/fa";

export function SocialIcons() {
  const links = [
    {
      title: "Home",
      icon: (
        <FaAngleDoubleUp className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#home",
    },

    {
      title: "LinkdIn",
      icon: (
        <IconBrandLinkedin className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://www.linkedin.com/in/yousuf-khan-4077192ba/",
    },
    {
      title: "GitHub",
      icon: (
        <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://github.com/Codewithsaffy",
    },
    {
      title: "Instagram",
      icon: (
        <IconBrandInstagram className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://www.instagram.com/codewithsaffy/",
    },
    {
      title: "Phone",
      icon: (
        <IconPhone className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://wa.me/+923152799576",
    },
  ];
  return <FloatingDock items={links} />;
}
